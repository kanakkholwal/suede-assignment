import { randomUUID } from 'node:crypto';
import type Database from 'better-sqlite3';

import { DEFAULT_ROOM_PRESET, isRoomPresetId, type RoomPresetId, roomPreset } from '@/data/room-presets';
import { getCatalogProductsByIds } from '@/lib/db/catalog-repository';
import { ensureWorkspace } from '@/lib/db/library-repository';
import { RepositoryError } from '@/lib/db/repository-error';
import { placeholders } from '@/lib/db/sql';
import { getDimensionRecords } from '@/lib/db/dimension-repository';
import { type DimensionRecord, type DimensionSource, DIMENSION_SOURCE_RANK, footprintConfidence, hasFootprint, resolveDimensions } from '@/lib/dimensions';
import { shortName } from '@/lib/plan-model';
import type {
  MeasurementStatus,
  Room,
  RoomFeature,
  RoomFeaturePatch,
  RoomItem,
  RoomMutation,
  RoomSnapshot,
  RoomSummary,
  NewRoom,
  SameFrameSize,
  Rotation,
  Wall,
} from '@/lib/room-state';

export type RoomRepositoryErrorCode =
  | 'PRODUCT_NOT_FOUND'
  | 'VARIANT_NOT_FOUND'
  | 'ITEM_NOT_FOUND'
  | 'FEATURE_NOT_FOUND'
  | 'ROOM_NOT_FOUND';

export class RoomRepositoryError extends RepositoryError<RoomRepositoryErrorCode> {
  readonly name = 'RoomRepositoryError';
}

interface RoomRow {
  id: string;
  preset: RoomPresetId | 'custom';
  name: string;
  length_in: number;
  width_in: number;
  ceiling_in: number | null;
  dimensions_status: MeasurementStatus;
  client_message: string;
  note: string;
}

interface FeatureRow {
  id: string;
  kind: RoomFeature['kind'];
  wall: Wall;
  offset_in: number;
  width_in: number;
  depth_in: number | null;
  height_in: number | null;
  sill_in: number | null;
  hinge: RoomFeature['hinge'];
  swing: RoomFeature['swing'];
  status: MeasurementStatus;
  client_said: string;
  assumption: string;
}

interface ItemRow {
  id: string;
  product_id: string;
  variant_id: string | null;
  x_in: number | null;
  y_in: number | null;
  rotation_deg: Rotation;
}

const FEATURE_COLUMNS: Record<keyof RoomFeaturePatch, string> = {
  wall: 'wall',
  offsetIn: 'offset_in',
  widthIn: 'width_in',
  depthIn: 'depth_in',
  heightIn: 'height_in',
  sillIn: 'sill_in',
  hinge: 'hinge',
  swing: 'swing',
};

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function createRoomFromPreset(db: Database.Database, workspaceId: string, preset: RoomPresetId): string {
  const roomId = randomUUID();
  const { features, ...room } = roomPreset(preset).template;
  db.prepare(`
    INSERT INTO rooms (id, workspace_id, preset, name, length_in, width_in, ceiling_in, dimensions_status, client_message, note)
    VALUES (@id, @workspaceId, @preset, @name, @lengthIn, @widthIn, @ceilingIn, @dimensionsStatus, @clientMessage, @note)
  `).run({ id: roomId, workspaceId, preset, ...room });

  features.forEach((feature, position) => insertFeature(db, roomId, position, feature));
  return roomId;
}

function featureFromRow(row: FeatureRow): RoomFeature {
  return {
    id: row.id,
    kind: row.kind,
    wall: row.wall,
    offsetIn: row.offset_in,
    widthIn: row.width_in,
    depthIn: row.depth_in,
    heightIn: row.height_in,
    sillIn: row.sill_in,
    hinge: row.hinge,
    swing: row.swing,
    status: row.status,
    clientSaid: row.client_said,
    assumption: row.assumption,
  };
}

function insertFeature(db: Database.Database, roomId: string, position: number, feature: Omit<RoomFeature, 'id'>): void {
  db.prepare(`
    INSERT INTO room_features (
      id, room_id, kind, wall, offset_in, width_in, depth_in, height_in, sill_in, hinge, swing,
      status, client_said, assumption, position
    ) VALUES (
      @id, @roomId, @kind, @wall, @offsetIn, @widthIn, @depthIn, @heightIn, @sillIn, @hinge, @swing,
      @status, @clientSaid, @assumption, @position
    )
  `).run({ id: randomUUID(), roomId, position, ...feature });
}

/** One room per workspace and preset, created from the preset's template on first visit. */
function ensureRoom(db: Database.Database, workspaceId: string, preset: RoomPresetId): string {
  ensureWorkspace(db, workspaceId);
  const existing = db.prepare('SELECT id FROM rooms WHERE workspace_id = ? AND preset = ?').get(workspaceId, preset) as
    | { id: string }
    | undefined;
  return existing?.id ?? createRoomFromPreset(db, workspaceId, preset);
}

/** The best-sourced size of the same frame from the same brand in another finish, for a piece with none. */
function sameFrameSize(db: Database.Database, workspaceId: string, product: { id: string; name: string; brand: string }): SameFrameSize | null {
  const frame = shortName(product);
  const siblings = (db.prepare('SELECT id, name FROM products WHERE brand = ? AND id != ?').all(product.brand, product.id) as Array<{ id: string; name: string }>)
    .filter((sibling) => shortName(sibling) === frame);
  if (!siblings.length) return null;
  const records = getDimensionRecords(db, siblings.map((sibling) => sibling.id), workspaceId);
  const sized = siblings
    .map((sibling) => ({ sibling, dimensions: resolveDimensions(records.filter((record) => record.productId === sibling.id), null) }))
    .filter(({ dimensions }) => hasFootprint(dimensions) && footprintConfidence(dimensions) !== 'synthetic')
    .sort((left, right) => DIMENSION_SOURCE_RANK[footprintConfidence(right.dimensions) as DimensionSource] - DIMENSION_SOURCE_RANK[footprintConfidence(left.dimensions) as DimensionSource]);
  const best = sized[0];
  if (!best) return null;
  const { width, depth, height } = best.dimensions;
  return {
    productId: best.sibling.id,
    name: best.sibling.name,
    values: { width: width.value, depth: depth.value, height: height.value },
    source: footprintConfidence(best.dimensions) as DimensionSource,
  };
}

function readRoomSnapshot(db: Database.Database, workspaceId: string, roomId: string): RoomSnapshot {
  const roomRow = db.prepare('SELECT * FROM rooms WHERE id = ?').get(roomId) as RoomRow;
  const featureRows = db
    .prepare('SELECT * FROM room_features WHERE room_id = ? ORDER BY position')
    .all(roomId) as FeatureRow[];
  const itemRows = db
    .prepare('SELECT * FROM room_items WHERE room_id = ? ORDER BY position')
    .all(roomId) as ItemRow[];

  const productIds = [...new Set(itemRows.map((row) => row.product_id))];
  const recordsByProduct = new Map<string, DimensionRecord[]>();
  for (const record of getDimensionRecords(db, productIds, workspaceId)) {
    recordsByProduct.set(record.productId, [...(recordsByProduct.get(record.productId) ?? []), record]);
  }

  const room: Room = {
    id: roomRow.id,
    preset: roomRow.preset,
    name: roomRow.name,
    lengthIn: roomRow.length_in,
    widthIn: roomRow.width_in,
    ceilingIn: roomRow.ceiling_in,
    dimensionsStatus: roomRow.dimensions_status,
    clientMessage: roomRow.client_message,
    note: roomRow.note,
  };
  const features = featureRows.map(featureFromRow);
  const products = getCatalogProductsByIds(db, productIds);
  const byId = new Map(products.map((product) => [product.id, product]));
  const items: RoomItem[] = itemRows.map((row) => {
    const dimensions = resolveDimensions(recordsByProduct.get(row.product_id) ?? [], row.variant_id);
    const product = byId.get(row.product_id);
    return {
      id: row.id,
      productId: row.product_id,
      variantId: row.variant_id,
      xIn: row.x_in,
      yIn: row.y_in,
      rotationDeg: row.rotation_deg,
      dimensions,
      sameFrame: !hasFootprint(dimensions) && product ? sameFrameSize(db, workspaceId, product) : null,
    };
  });

  return { room, features, items, products };
}

function assertProductAndVariant(db: Database.Database, productId: string, variantId: string | null): void {
  if (!db.prepare('SELECT 1 FROM products WHERE id = ?').get(productId)) {
    throw new RoomRepositoryError(`Product "${productId}" was not found.`, 404, 'PRODUCT_NOT_FOUND');
  }
  if (variantId !== null && !db.prepare('SELECT 1 FROM variants WHERE id = ? AND product_id = ?').get(variantId, productId)) {
    throw new RoomRepositoryError(
      `Variant "${variantId}" does not belong to product "${productId}".`,
      404,
      'VARIANT_NOT_FOUND',
    );
  }
}

function ownedItem(db: Database.Database, roomId: string, itemId: string): ItemRow {
  const item = db.prepare('SELECT * FROM room_items WHERE id = ? AND room_id = ?').get(itemId, roomId) as
    | ItemRow
    | undefined;
  if (!item) throw new RoomRepositoryError(`Room item "${itemId}" was not found.`, 404, 'ITEM_NOT_FOUND');
  return item;
}

function assertOwnedFeature(db: Database.Database, roomId: string, featureId: string): void {
  if (!db.prepare('SELECT 1 FROM room_features WHERE id = ? AND room_id = ?').get(featureId, roomId)) {
    throw new RoomRepositoryError(`Room feature "${featureId}" was not found.`, 404, 'FEATURE_NOT_FOUND');
  }
}

function applyMutation(db: Database.Database, workspaceId: string, roomId: string, mutation: RoomMutation): void {
  switch (mutation.operation) {
    case 'addItem': {
      assertProductAndVariant(db, mutation.productId, mutation.variantId);
      const { next } = db
        .prepare('SELECT coalesce(max(position) + 1, 0) AS next FROM room_items WHERE room_id = ?')
        .get(roomId) as { next: number };
      db.prepare(
        'INSERT INTO room_items (id, room_id, product_id, variant_id, position) VALUES (?, ?, ?, ?, ?)',
      ).run(randomUUID(), roomId, mutation.productId, mutation.variantId, next);
      return;
    }
    case 'removeItem':
      ownedItem(db, roomId, mutation.itemId);
      db.prepare('DELETE FROM room_items WHERE id = ?').run(mutation.itemId);
      return;
    case 'selectVariant': {
      const item = ownedItem(db, roomId, mutation.itemId);
      assertProductAndVariant(db, item.product_id, mutation.variantId);
      db.prepare('UPDATE room_items SET variant_id = ? WHERE id = ?').run(mutation.variantId, mutation.itemId);
      return;
    }
    case 'placeItem':
      ownedItem(db, roomId, mutation.itemId);
      db.prepare('UPDATE room_items SET x_in = ?, y_in = ?, rotation_deg = ? WHERE id = ?').run(
        mutation.xIn,
        mutation.yIn,
        mutation.rotationDeg,
        mutation.itemId,
      );
      return;
    case 'unplaceItem':
      ownedItem(db, roomId, mutation.itemId);
      db.prepare('UPDATE room_items SET x_in = NULL, y_in = NULL WHERE id = ?').run(mutation.itemId);
      return;
    case 'setDimensions':
      assertProductAndVariant(db, mutation.productId, mutation.variantId);
      clearDesignerDimensions(db, workspaceId, mutation.productId, mutation.variantId);
      db.prepare(`
        INSERT INTO product_dimensions (
          product_id, variant_id, workspace_id, width_in, depth_in, height_in, source, note, captured_at
        ) VALUES (?, ?, ?, ?, ?, ?, 'designer', ?, ?)
      `).run(
        mutation.productId,
        mutation.variantId,
        workspaceId,
        mutation.values.width,
        mutation.values.depth,
        mutation.values.height,
        mutation.note.trim(),
        today(),
      );
      return;
    case 'clearDimensions':
      assertProductAndVariant(db, mutation.productId, mutation.variantId);
      clearDesignerDimensions(db, workspaceId, mutation.productId, mutation.variantId);
      return;
    case 'updateRoom':
      db.prepare(
        'UPDATE rooms SET length_in = ?, width_in = ?, ceiling_in = ?, dimensions_status = ? WHERE id = ?',
      ).run(mutation.lengthIn, mutation.widthIn, mutation.ceilingIn, mutation.status, roomId);
      return;
    case 'updateFeature': {
      assertOwnedFeature(db, roomId, mutation.featureId);
      const entries = Object.entries(mutation.patch) as Array<[keyof RoomFeaturePatch, unknown]>;
      const assignments = [...entries.map(([key]) => `${FEATURE_COLUMNS[key]} = ?`), 'status = ?'];
      db.prepare(`UPDATE room_features SET ${assignments.join(', ')} WHERE id = ?`).run(
        ...entries.map(([, value]) => value),
        mutation.status,
        mutation.featureId,
      );
      return;
    }
    case 'addFeature': {
      const { position } = db.prepare('SELECT COALESCE(MAX(position), -1) + 1 AS position FROM room_features WHERE room_id = ?').get(roomId) as { position: number };
      insertFeature(db, roomId, position, { kind: mutation.kind, ...mutation.patch, status: mutation.status, clientSaid: '', assumption: '' });
      return;
    }
    case 'removeFeature':
      assertOwnedFeature(db, roomId, mutation.featureId);
      db.prepare('DELETE FROM room_features WHERE id = ?').run(mutation.featureId);
      return;
  }
}

function clearDesignerDimensions(
  db: Database.Database,
  workspaceId: string,
  productId: string,
  variantId: string | null,
): void {
  db.prepare(`
    DELETE FROM product_dimensions
    WHERE source = 'designer' AND workspace_id = ? AND product_id = ? AND variant_id IS ?
  `).run(workspaceId, productId, variantId);
}

/** A preset id finds or makes that preset's room; any other key must be a room this workspace created. */
function resolveRoom(db: Database.Database, workspaceId: string, key: string): string {
  if (isRoomPresetId(key)) return ensureRoom(db, workspaceId, key);
  const owned = db.prepare("SELECT id FROM rooms WHERE id = ? AND workspace_id = ? AND preset = 'custom'").get(key, workspaceId) as { id: string } | undefined;
  if (!owned) throw new RoomRepositoryError('That room was not found.', 404, 'ROOM_NOT_FOUND');
  return owned.id;
}

/** `key` is a preset id or the id of a room the user created. */
export function getRoomSnapshot(db: Database.Database, workspaceId: string, key: string = DEFAULT_ROOM_PRESET): RoomSnapshot {
  return db.transaction(() => readRoomSnapshot(db, workspaceId, resolveRoom(db, workspaceId, key)))();
}

/** A blank room from the user's own numbers: no doors or windows until they add them. */
export function createRoom(db: Database.Database, workspaceId: string, room: NewRoom): RoomSnapshot {
  return db.transaction(() => {
    ensureWorkspace(db, workspaceId);
    const id = randomUUID();
    db.prepare(`
      INSERT INTO rooms (id, workspace_id, preset, name, length_in, width_in, ceiling_in, dimensions_status, client_message, note)
      VALUES (?, ?, 'custom', ?, ?, ?, ?, ?, '', '')
    `).run(id, workspaceId, room.name, room.lengthIn, room.widthIn, room.ceilingIn, room.status);
    return readRoomSnapshot(db, workspaceId, id);
  })();
}

/** Rooms this workspace created, oldest first, with features for their thumbnails. */
export function listRooms(db: Database.Database, workspaceId: string): RoomSummary[] {
  const rows = db.prepare("SELECT * FROM rooms WHERE workspace_id = ? AND preset = 'custom' ORDER BY rowid").all(workspaceId) as RoomRow[];
  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    lengthIn: row.length_in,
    widthIn: row.width_in,
    features: (db.prepare('SELECT * FROM room_features WHERE room_id = ? ORDER BY position').all(row.id) as FeatureRow[]).map(featureFromRow),
  }));
}

export function applyRoomMutation(
  db: Database.Database,
  workspaceId: string,
  mutation: RoomMutation,
  key: string = DEFAULT_ROOM_PRESET,
): RoomSnapshot {
  return db.transaction(() => {
    const roomId = resolveRoom(db, workspaceId, key);
    applyMutation(db, workspaceId, roomId, mutation);
    return readRoomSnapshot(db, workspaceId, roomId);
  })();
}

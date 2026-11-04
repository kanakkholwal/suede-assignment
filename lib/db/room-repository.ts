import { randomUUID } from 'node:crypto';
import type Database from 'better-sqlite3';

import { CLIENT_ROOM_TEMPLATE } from '@/data/client-room';
import { getCatalogProductsByIds } from '@/lib/db/catalog-repository';
import { ensureWorkspace } from '@/lib/db/library-repository';
import { RepositoryError } from '@/lib/db/repository-error';
import { type DimensionRecord, type DimensionSource, resolveDimensions } from '@/lib/dimensions';
import type {
  MeasurementStatus,
  Room,
  RoomFeature,
  RoomFeaturePatch,
  RoomItem,
  RoomMutation,
  RoomSnapshot,
  Rotation,
  Wall,
} from '@/lib/room-state';

export type RoomRepositoryErrorCode =
  | 'PRODUCT_NOT_FOUND'
  | 'VARIANT_NOT_FOUND'
  | 'ITEM_NOT_FOUND'
  | 'FEATURE_NOT_FOUND';

export class RoomRepositoryError extends RepositoryError<RoomRepositoryErrorCode> {
  readonly name = 'RoomRepositoryError';
}

interface RoomRow {
  id: string;
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

interface DimensionRow {
  product_id: string;
  variant_id: string | null;
  width_in: number | null;
  depth_in: number | null;
  height_in: number | null;
  source: DimensionSource;
  source_url: string | null;
  note: string;
  captured_at: string;
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

function placeholders(count: number): string {
  return Array.from({ length: count }, () => '?').join(', ');
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Every sourced claim for these products: shared catalog claims plus this workspace's entries. */
export function getDimensionRecords(
  db: Database.Database,
  productIds: readonly string[],
  workspaceId: string | null,
): DimensionRecord[] {
  if (productIds.length === 0) return [];
  const rows = db
    .prepare(`
      SELECT product_id, variant_id, width_in, depth_in, height_in, source, source_url, note, captured_at
      FROM product_dimensions
      WHERE product_id IN (${placeholders(productIds.length)})
        AND (workspace_id IS NULL OR workspace_id = ?)
      ORDER BY id
    `)
    .all(...productIds, workspaceId) as DimensionRow[];

  return rows.map((row) => ({
    productId: row.product_id,
    variantId: row.variant_id,
    width: row.width_in,
    depth: row.depth_in,
    height: row.height_in,
    source: row.source,
    sourceUrl: row.source_url,
    note: row.note,
    capturedAt: row.captured_at,
  }));
}

function createRoomFromTemplate(db: Database.Database, workspaceId: string): string {
  const roomId = randomUUID();
  const { features, ...room } = CLIENT_ROOM_TEMPLATE;
  db.prepare(`
    INSERT INTO rooms (id, workspace_id, name, length_in, width_in, ceiling_in, dimensions_status, client_message, note)
    VALUES (@id, @workspaceId, @name, @lengthIn, @widthIn, @ceilingIn, @dimensionsStatus, @clientMessage, @note)
  `).run({ id: roomId, workspaceId, ...room });

  const insertFeature = db.prepare(`
    INSERT INTO room_features (
      id, room_id, kind, wall, offset_in, width_in, depth_in, height_in, sill_in, hinge, swing,
      status, client_said, assumption, position
    ) VALUES (
      @id, @roomId, @kind, @wall, @offsetIn, @widthIn, @depthIn, @heightIn, @sillIn, @hinge, @swing,
      @status, @clientSaid, @assumption, @position
    )
  `);
  features.forEach((feature, position) => insertFeature.run({ id: randomUUID(), roomId, position, ...feature }));
  return roomId;
}

/** One room per workspace for now, created from the client's message on first visit. */
function ensureRoom(db: Database.Database, workspaceId: string): string {
  ensureWorkspace(db, workspaceId);
  const existing = db.prepare('SELECT id FROM rooms WHERE workspace_id = ?').get(workspaceId) as
    | { id: string }
    | undefined;
  return existing?.id ?? createRoomFromTemplate(db, workspaceId);
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
    name: roomRow.name,
    lengthIn: roomRow.length_in,
    widthIn: roomRow.width_in,
    ceilingIn: roomRow.ceiling_in,
    dimensionsStatus: roomRow.dimensions_status,
    clientMessage: roomRow.client_message,
    note: roomRow.note,
  };
  const features: RoomFeature[] = featureRows.map((row) => ({
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
  }));
  const items: RoomItem[] = itemRows.map((row) => ({
    id: row.id,
    productId: row.product_id,
    variantId: row.variant_id,
    xIn: row.x_in,
    yIn: row.y_in,
    rotationDeg: row.rotation_deg,
    dimensions: resolveDimensions(recordsByProduct.get(row.product_id) ?? [], row.variant_id),
  }));

  return { room, features, items, products: getCatalogProductsByIds(db, productIds) };
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

export function getRoomSnapshot(db: Database.Database, workspaceId: string): RoomSnapshot {
  return db.transaction(() => readRoomSnapshot(db, workspaceId, ensureRoom(db, workspaceId)))();
}

export function applyRoomMutation(
  db: Database.Database,
  workspaceId: string,
  mutation: RoomMutation,
): RoomSnapshot {
  return db.transaction(() => {
    const roomId = ensureRoom(db, workspaceId);
    applyMutation(db, workspaceId, roomId, mutation);
    return readRoomSnapshot(db, workspaceId, roomId);
  })();
}

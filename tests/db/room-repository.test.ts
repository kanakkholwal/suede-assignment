// @vitest-environment node
import type Database from 'better-sqlite3';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { CLIENT_ROOM_MESSAGE } from '@/data/client-room';
import { applyRoomMutation, getRoomSnapshot, RoomRepositoryError } from '@/lib/db/room-repository';
import { createSeededDatabase, PRODUCTS, type SeededDatabase, UNKNOWN_ID, VARIANTS } from '@/tests/seeded-database';

let seeded: SeededDatabase;
let db: Database.Database;

beforeEach(() => {
  seeded = createSeededDatabase('room-repository');
  db = seeded.db;
});

afterEach(() => seeded.dispose());

function addItem(workspaceId: string, productId: string, variantId: string | null = null) {
  const snapshot = applyRoomMutation(db, workspaceId, { operation: 'addItem', productId, variantId });
  return snapshot.items.at(-1)!;
}

describe('Room repository', () => {
  it('creates the client room on first read, keeping stated and assumed values apart', () => {
    const { room, features, items } = getRoomSnapshot(db, 'workspace-a');

    expect(room).toMatchObject({ lengthIn: 180, widthIn: 144, ceilingIn: 102, dimensionsStatus: 'stated' });
    expect(room.clientMessage).toBe(CLIENT_ROOM_MESSAGE);
    expect(features.map((feature) => feature.kind)).toEqual(['window', 'window', 'radiator', 'door']);
    expect(features.every((feature) => feature.status === 'assumed' && feature.assumption.length > 0)).toBe(true);
    expect(items).toEqual([]);
    expect(getRoomSnapshot(db, 'workspace-a').room.id).toBe(room.id);
  });

  it('keeps one room per preset, each with its own shortlist', () => {
    addItem('workspace-a', PRODUCTS.elevate86);
    const studio = getRoomSnapshot(db, 'workspace-a', 'open-studio');

    expect(studio.room).toMatchObject({ preset: 'open-studio', name: 'Example: open studio', lengthIn: 192, widthIn: 168 });
    expect(studio.items).toEqual([]);
    expect(studio.room.id).not.toBe(getRoomSnapshot(db, 'workspace-a').room.id);
    expect(getRoomSnapshot(db, 'workspace-a').items).toHaveLength(1);
    expect(getRoomSnapshot(db, 'workspace-a', 'open-studio').room.id).toBe(studio.room.id);
  });

  it('isolates rooms between workspaces', () => {
    addItem('workspace-a', PRODUCTS.elevate86);
    expect(getRoomSnapshot(db, 'workspace-b').items).toEqual([]);
    expect(getRoomSnapshot(db, 'workspace-b').room.id).not.toBe(getRoomSnapshot(db, 'workspace-a').room.id);
  });

  it('shortlists, places, rotates and unplaces an item', () => {
    const item = addItem('workspace-a', PRODUCTS.elevate86);
    expect(item).toMatchObject({ xIn: null, yIn: null, rotationDeg: 0 });

    const placed = applyRoomMutation(db, 'workspace-a', {
      operation: 'placeItem',
      itemId: item.id,
      xIn: 90,
      yIn: 120,
      rotationDeg: 180,
    }).items[0];
    expect(placed).toMatchObject({ xIn: 90, yIn: 120, rotationDeg: 180 });

    const unplaced = applyRoomMutation(db, 'workspace-a', { operation: 'unplaceItem', itemId: item.id }).items[0];
    expect(unplaced).toMatchObject({ xIn: null, yIn: null });
  });

  it('resolves item dimensions with their sources', () => {
    const { dimensions } = addItem('workspace-a', PRODUCTS.elevate86);
    expect(dimensions.width).toMatchObject({ value: 86.5, source: 'verified' });
    expect(dimensions.width.sourceUrl).toContain('sabai.design');

    const mixed = addItem('workspace-a', PRODUCTS.elevate96).dimensions;
    expect(mixed.width).toMatchObject({ value: 96, source: 'listing' });
    expect(mixed.depth).toMatchObject({ value: 38.25, source: 'synthetic' });

    const unknown = addItem('workspace-a', PRODUCTS.essentialSofa).dimensions;
    expect([unknown.width.source, unknown.depth.source, unknown.height.source]).toEqual([
      'unknown',
      'unknown',
      'unknown',
    ]);
  });

  it('re-resolves dimensions when the designer picks a size variant', () => {
    const item = addItem('workspace-a', PRODUCTS.kyotoTable);
    expect(item.dimensions.width.value).toBeNull();

    const long = applyRoomMutation(db, 'workspace-a', {
      operation: 'selectVariant',
      itemId: item.id,
      variantId: VARIANTS.kyotoLong,
    }).items[0];
    expect(long.dimensions.width).toMatchObject({ value: 60, source: 'verified' });
    expect(long.dimensions.depth.value).toBe(27.5);
  });

  it('stores designer dimensions per workspace and can clear them', () => {
    addItem('workspace-a', PRODUCTS.essentialSofa);
    addItem('workspace-b', PRODUCTS.essentialSofa);
    const mutation = {
      operation: 'setDimensions',
      productId: PRODUCTS.essentialSofa,
      variantId: null,
      values: { width: 84, depth: 37, height: null },
      note: 'Measured in showroom',
    } as const;

    applyRoomMutation(db, 'workspace-a', mutation);
    const updated = applyRoomMutation(db, 'workspace-a', { ...mutation, values: { width: 85, depth: 37, height: null } });
    expect(updated.items[0].dimensions.width).toMatchObject({ value: 85, source: 'designer', note: 'Measured in showroom' });
    expect(getRoomSnapshot(db, 'workspace-b').items[0].dimensions.width.source).toBe('unknown');

    const cleared = applyRoomMutation(db, 'workspace-a', {
      operation: 'clearDimensions',
      productId: PRODUCTS.essentialSofa,
      variantId: null,
    });
    expect(cleared.items[0].dimensions.width.source).toBe('unknown');
  });

  it('updates room and feature measurements with an explicit status', () => {
    const { features } = getRoomSnapshot(db, 'workspace-a');
    const door = features.find((feature) => feature.kind === 'door')!;

    const snapshot = applyRoomMutation(db, 'workspace-a', {
      operation: 'updateFeature',
      featureId: door.id,
      patch: { wall: 'east', offsetIn: 4, widthIn: 30, swing: 'out' },
      status: 'confirmed',
    });
    expect(snapshot.features.find((feature) => feature.id === door.id)).toMatchObject({
      wall: 'east',
      offsetIn: 4,
      widthIn: 30,
      swing: 'out',
      hinge: 'end',
      status: 'confirmed',
    });

    const room = applyRoomMutation(db, 'workspace-a', {
      operation: 'updateRoom',
      lengthIn: 181,
      widthIn: 143.5,
      ceilingIn: 102,
      status: 'confirmed',
    }).room;
    expect(room).toMatchObject({ lengthIn: 181, widthIn: 143.5, dimensionsStatus: 'confirmed' });
  });

  it('rejects unknown products, foreign variants and other workspaces’ items', () => {
    expect(() =>
      applyRoomMutation(db, 'workspace-a', { operation: 'addItem', productId: UNKNOWN_ID, variantId: null }),
    ).toThrow(RoomRepositoryError);
    expect(() =>
      applyRoomMutation(db, 'workspace-a', {
        operation: 'addItem',
        productId: PRODUCTS.elevate86,
        variantId: VARIANTS.kyotoLong,
      }),
    ).toThrow(/does not belong/);

    const item = addItem('workspace-a', PRODUCTS.elevate86);
    expect(() => applyRoomMutation(db, 'workspace-b', { operation: 'removeItem', itemId: item.id })).toThrow(
      expect.objectContaining({ status: 404, code: 'ITEM_NOT_FOUND' }),
    );
  });
});

describe('same frame sizes', () => {
  it('offers the verified size of the same frame in another finish when a piece has none', () => {
    const velvet = db.prepare("SELECT id FROM products WHERE name = 'The Bacana Armchair in Recycled Velvet'").get() as { id: string };
    const item = addItem('workspace-a', velvet.id);
    expect(item.dimensions.width.value).toBeNull();
    expect(item.sameFrame).toEqual({
      productId: expect.any(String),
      name: 'The Bacana Armchair in Hemp',
      values: { width: 37, depth: 30.25, height: 30.5 },
      source: 'verified',
    });
  });

  it('offers nothing for a piece that has its own size', () => {
    expect(addItem('workspace-a', PRODUCTS.elevate86).sameFrame).toBeNull();
  });
});

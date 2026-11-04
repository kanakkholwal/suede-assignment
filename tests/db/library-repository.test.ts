// @vitest-environment node
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import Database from 'better-sqlite3';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { getCatalogProduct } from '@/lib/db/catalog-repository';
import {
  applyLibraryMutation,
  getLibrarySnapshot,
  LibraryRepositoryError,
} from '@/lib/db/library-repository';
import { seedInterviewDatabase } from '@/lib/db/seed';
import { emptyLibraryState } from '@/lib/library-state';

const LINEN_BOX_QUILT_ID = '7a7e801d-cb56-42ed-aa20-5b0dfa146d32';
const DOWN_ALTERNATIVE_PILLOW_ID = 'f2173f5b-7cbb-40df-a2a9-dc287bdf2406';
const UNKNOWN_PRODUCT_ID = '00000000-0000-4000-8000-000000000000';

let directory: string;
let db: Database.Database;

beforeEach(() => {
  directory = mkdtempSync(path.join(tmpdir(), 'catalog-lab-interview-library-repository-'));
  const databasePath = path.join(directory, 'catalog.sqlite');
  seedInterviewDatabase({ databasePath });
  db = new Database(databasePath);
  db.pragma('foreign_keys = ON');
});

afterEach(() => {
  db.close();
  rmSync(directory, { recursive: true, force: true });
});

describe('Library repository', () => {
  it('ensures an empty workspace and isolates its saved products from another workspace', () => {
    expect(getLibrarySnapshot(db, 'workspace-a').state).toEqual(emptyLibraryState());

    expect(
      applyLibraryMutation(db, 'workspace-a', {
        operation: 'createCollection',
        name: 'Family room',
        productId: LINEN_BOX_QUILT_ID,
      }).state,
    ).toMatchObject({ savedIds: [LINEN_BOX_QUILT_ID] });

    expect(getLibrarySnapshot(db, 'workspace-b').state.savedIds).toEqual([]);
    expect(db.prepare('select id from workspaces order by id').all()).toEqual([
      { id: 'workspace-a' },
      { id: 'workspace-b' },
    ]);
  });

  it('removes a product from every collection when toggling off its save', () => {
    const created = applyLibraryMutation(db, 'workspace-a', {
      operation: 'createCollection',
      name: 'Family room',
      productId: LINEN_BOX_QUILT_ID,
    });
    applyLibraryMutation(db, 'workspace-a', {
      operation: 'createCollection',
      name: 'Guest room',
      productId: LINEN_BOX_QUILT_ID,
    });

    const result = applyLibraryMutation(db, 'workspace-a', {
      operation: 'toggleSaved',
      productId: LINEN_BOX_QUILT_ID,
    });

    expect(result.state.collections[0]?.productIds).toEqual([]);
    expect(result.state.collections).toHaveLength(2);
    expect(result.state.collections.every((collection) => collection.productIds.length === 0)).toBe(true);
    expect(result.state.savedIds).toEqual([]);
    expect(result.products).toEqual([]);
    expect(created.state.collections[0]?.productIds).toEqual([LINEN_BOX_QUILT_ID]);
  });

  it('keeps one membership when the same product is added twice', () => {
    const collection = applyLibraryMutation(db, 'workspace-a', {
      operation: 'createCollection',
      name: 'Family room',
    }).state.collections[0];

    applyLibraryMutation(db, 'workspace-a', {
      operation: 'addToCollection',
      collectionId: collection.id,
      productId: LINEN_BOX_QUILT_ID,
    });
    const result = applyLibraryMutation(db, 'workspace-a', {
      operation: 'addToCollection',
      collectionId: collection.id,
      productId: LINEN_BOX_QUILT_ID,
    });

    expect(result.state.savedIds).toEqual([LINEN_BOX_QUILT_ID]);
    expect(result.state.collections[0]?.productIds).toEqual([LINEN_BOX_QUILT_ID]);
    expect(
      db.prepare('select count(*) as count from collection_products where collection_id = ?').get(collection.id),
    ).toEqual({ count: 1 });
  });

  it('removes a collection membership without removing the saved product', () => {
    const collection = applyLibraryMutation(db, 'workspace-a', {
      operation: 'createCollection',
      name: 'Family room',
      productId: LINEN_BOX_QUILT_ID,
    }).state.collections[0];

    const result = applyLibraryMutation(db, 'workspace-a', {
      operation: 'removeFromCollection',
      collectionId: collection.id,
      productId: LINEN_BOX_QUILT_ID,
    });

    expect(result.state.savedIds).toEqual([LINEN_BOX_QUILT_ID]);
    expect(result.state.collections[0]?.productIds).toEqual([]);
    expect(result.products.map((product) => product.id)).toEqual([LINEN_BOX_QUILT_ID]);
  });

  it('renames a collection without replacing its memberships', () => {
    const collection = applyLibraryMutation(db, 'workspace-a', {
      operation: 'createCollection',
      name: 'Family room',
      productId: LINEN_BOX_QUILT_ID,
    }).state.collections[0];

    const result = applyLibraryMutation(db, 'workspace-a', {
      operation: 'renameCollection',
      collectionId: collection.id,
      name: '  Living room  ',
    });

    expect(result.state.collections).toEqual([
      { id: collection.id, name: 'Living room', productIds: [LINEN_BOX_QUILT_ID] },
    ]);
  });

  it('deletes only the selected collection and retains its saved products', () => {
    const first = applyLibraryMutation(db, 'workspace-a', {
      operation: 'createCollection',
      name: 'Family room',
      productId: LINEN_BOX_QUILT_ID,
    }).state.collections[0];
    const second = applyLibraryMutation(db, 'workspace-a', {
      operation: 'createCollection',
      name: 'Guest room',
      productId: DOWN_ALTERNATIVE_PILLOW_ID,
    }).state.collections.find((collection) => collection.name === 'Guest room');

    const result = applyLibraryMutation(db, 'workspace-a', {
      operation: 'deleteCollection',
      collectionId: first.id,
    });

    expect(result.state.collections).toEqual([
      {
        id: second?.id,
        name: 'Guest room',
        productIds: [DOWN_ALTERNATIVE_PILLOW_ID],
      },
    ]);
    expect(result.state.savedIds).toEqual([LINEN_BOX_QUILT_ID, DOWN_ALTERNATIVE_PILLOW_ID].sort());
  });

  it('hydrates every saved product from current database facts', () => {
    db.prepare('update products set name = ? where id = ?').run(
      'Database-authored quilt name',
      LINEN_BOX_QUILT_ID,
    );
    const expectedProduct = getCatalogProduct(db, LINEN_BOX_QUILT_ID);

    const result = applyLibraryMutation(db, 'workspace-a', {
      operation: 'toggleSaved',
      productId: LINEN_BOX_QUILT_ID,
    });

    expect(result.products).toEqual([expectedProduct]);
    expect(result.products[0]?.name).toBe('Database-authored quilt name');
  });

  it('rejects duplicate collection names case-insensitively within one workspace', () => {
    applyLibraryMutation(db, 'workspace-a', {
      operation: 'createCollection',
      name: 'Family room',
    });

    expect(() =>
      applyLibraryMutation(db, 'workspace-a', {
        operation: 'createCollection',
        name: 'family ROOM',
      }),
    ).toThrow(/already exists/i);
    expect(() =>
      applyLibraryMutation(db, 'workspace-a', {
        operation: 'createCollection',
        name: 'family ROOM',
      }),
    ).toThrow(LibraryRepositoryError);

    expect(
      applyLibraryMutation(db, 'workspace-b', {
        operation: 'createCollection',
        name: 'family ROOM',
      }).state.collections[0]?.name,
    ).toBe('family ROOM');
  });

  it.each(['   ', 'x'.repeat(61)])('rejects invalid collection name %j as a 400 error', (name) => {
    let error: unknown;
    try {
      applyLibraryMutation(db, 'workspace-a', { operation: 'createCollection', name });
    } catch (caught) {
      error = caught;
    }

    expect(error).toBeInstanceOf(LibraryRepositoryError);
    expect(error).toMatchObject({ name: 'LibraryRepositoryError', status: 400 });
    expect(getLibrarySnapshot(db, 'workspace-a').state.collections).toEqual([]);
  });

  it('rejects unknown products as a 404 without partially creating a collection', () => {
    let error: unknown;
    try {
      applyLibraryMutation(db, 'workspace-a', {
        operation: 'createCollection',
        name: 'Family room',
        productId: UNKNOWN_PRODUCT_ID,
      });
    } catch (caught) {
      error = caught;
    }

    expect(error).toBeInstanceOf(LibraryRepositoryError);
    expect(error).toMatchObject({ name: 'LibraryRepositoryError', status: 404 });
    expect(getLibrarySnapshot(db, 'workspace-a').state).toEqual(emptyLibraryState());
  });

  it('rejects a supplied empty product ID instead of treating it as omitted', () => {
    let error: unknown;
    try {
      applyLibraryMutation(db, 'workspace-a', {
        operation: 'createCollection',
        name: 'Family room',
        productId: '',
      });
    } catch (caught) {
      error = caught;
    }

    expect(error).toBeInstanceOf(LibraryRepositoryError);
    expect(error).toMatchObject({
      name: 'LibraryRepositoryError',
      status: 404,
      code: 'PRODUCT_NOT_FOUND',
    });
    expect(getLibrarySnapshot(db, 'workspace-a').state).toEqual(emptyLibraryState());
  });

  it('rejects a collection owned by another workspace as a 404', () => {
    const privateCollection = applyLibraryMutation(db, 'workspace-a', {
      operation: 'createCollection',
      name: 'Private',
    }).state.collections[0];

    let error: unknown;
    try {
      applyLibraryMutation(db, 'workspace-b', {
        operation: 'addToCollection',
        collectionId: privateCollection.id,
        productId: LINEN_BOX_QUILT_ID,
      });
    } catch (caught) {
      error = caught;
    }

    expect(error).toBeInstanceOf(LibraryRepositoryError);
    expect(error).toMatchObject({ name: 'LibraryRepositoryError', status: 404 });
    expect(getLibrarySnapshot(db, 'workspace-b').state).toEqual(emptyLibraryState());
    expect(getLibrarySnapshot(db, 'workspace-a').state.collections[0]?.productIds).toEqual([]);
  });
});

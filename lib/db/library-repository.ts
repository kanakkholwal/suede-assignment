import { randomUUID } from 'node:crypto';
import type Database from 'better-sqlite3';

import { getCatalogProductsByIds } from '@/lib/db/catalog-repository';
import {
  type LibraryCollection,
  type LibraryMutation,
  type LibrarySnapshot,
} from '@/lib/library-state';

export type LibraryRepositoryErrorCode =
  | 'INVALID_COLLECTION_NAME'
  | 'COLLECTION_NAME_CONFLICT'
  | 'PRODUCT_NOT_FOUND'
  | 'COLLECTION_NOT_FOUND';

export class LibraryRepositoryError extends Error {
  readonly name = 'LibraryRepositoryError';

  constructor(
    message: string,
    readonly status: 400 | 404,
    readonly code: LibraryRepositoryErrorCode,
  ) {
    super(message);
  }
}

interface CollectionProductRow {
  id: string;
  name: string;
  product_id: string | null;
}

function readLibrarySnapshot(db: Database.Database, workspaceId: string): LibrarySnapshot {
  const savedIds = (
    db
      .prepare(`
        SELECT product_id
        FROM saved_products
        WHERE workspace_id = ?
        ORDER BY product_id
      `)
      .all(workspaceId) as Array<{ product_id: string }>
  ).map((row) => row.product_id);
  const collectionRows = db
    .prepare(`
      SELECT c.id, c.name, cp.product_id
      FROM collections c
      LEFT JOIN collection_products cp ON cp.collection_id = c.id
      WHERE c.workspace_id = ?
      ORDER BY c.id, cp.product_id
    `)
    .all(workspaceId) as CollectionProductRow[];
  const collectionsById = new Map<string, LibraryCollection>();

  for (const row of collectionRows) {
    let collection = collectionsById.get(row.id);
    if (!collection) {
      collection = { id: row.id, name: row.name, productIds: [] };
      collectionsById.set(row.id, collection);
    }
    if (row.product_id !== null) collection.productIds.push(row.product_id);
  }

  return {
    state: {
      version: 1,
      savedIds,
      collections: [...collectionsById.values()],
    },
    products: getCatalogProductsByIds(db, savedIds),
  };
}

function collectionName(name: string): string {
  const trimmedName = name.trim();
  if (trimmedName.length === 0 || trimmedName.length > 60) {
    throw new LibraryRepositoryError(
      'Collection name must be between 1 and 60 characters.',
      400,
      'INVALID_COLLECTION_NAME',
    );
  }
  return trimmedName;
}

function assertProductExists(db: Database.Database, productId: string): void {
  const product = db.prepare('SELECT 1 FROM products WHERE id = ?').get(productId);
  if (!product) {
    throw new LibraryRepositoryError(
      `Product "${productId}" was not found.`,
      404,
      'PRODUCT_NOT_FOUND',
    );
  }
}

function assertOwnedCollection(
  db: Database.Database,
  workspaceId: string,
  collectionId: string,
): void {
  const collection = db
    .prepare('SELECT 1 FROM collections WHERE id = ? AND workspace_id = ?')
    .get(collectionId, workspaceId);
  if (!collection) {
    throw new LibraryRepositoryError(
      `Collection "${collectionId}" was not found.`,
      404,
      'COLLECTION_NOT_FOUND',
    );
  }
}

function assertCollectionNameAvailable(
  db: Database.Database,
  workspaceId: string,
  name: string,
  excludedCollectionId?: string,
): void {
  const duplicate = excludedCollectionId
    ? db
        .prepare(
          'SELECT 1 FROM collections WHERE workspace_id = ? AND lower(name) = lower(?) AND id <> ?',
        )
        .get(workspaceId, name, excludedCollectionId)
    : db
        .prepare('SELECT 1 FROM collections WHERE workspace_id = ? AND lower(name) = lower(?)')
        .get(workspaceId, name);

  if (duplicate) {
    throw new LibraryRepositoryError(
      `A collection named "${name}" already exists.`,
      400,
      'COLLECTION_NAME_CONFLICT',
    );
  }
}

function saveProduct(db: Database.Database, workspaceId: string, productId: string): void {
  db.prepare('INSERT OR IGNORE INTO saved_products (workspace_id, product_id) VALUES (?, ?)').run(
    workspaceId,
    productId,
  );
}

export function ensureWorkspace(db: Database.Database, workspaceId: string): void {
  db.prepare('INSERT OR IGNORE INTO workspaces (id) VALUES (?)').run(workspaceId);
}

export function getLibrarySnapshot(db: Database.Database, workspaceId: string): LibrarySnapshot {
  return db.transaction(() => {
    ensureWorkspace(db, workspaceId);
    return readLibrarySnapshot(db, workspaceId);
  })();
}

export function applyLibraryMutation(
  db: Database.Database,
  workspaceId: string,
  mutation: LibraryMutation,
): LibrarySnapshot {
  return db.transaction(() => {
    ensureWorkspace(db, workspaceId);

    switch (mutation.operation) {
      case 'toggleSaved': {
        assertProductExists(db, mutation.productId);
        const saved = db
          .prepare('SELECT 1 FROM saved_products WHERE workspace_id = ? AND product_id = ?')
          .get(workspaceId, mutation.productId);

        if (saved) {
          db.prepare(`
            DELETE FROM collection_products
            WHERE product_id = ?
              AND collection_id IN (SELECT id FROM collections WHERE workspace_id = ?)
          `).run(mutation.productId, workspaceId);
          db.prepare('DELETE FROM saved_products WHERE workspace_id = ? AND product_id = ?').run(
            workspaceId,
            mutation.productId,
          );
        } else {
          saveProduct(db, workspaceId, mutation.productId);
        }
        break;
      }
      case 'createCollection': {
        const name = collectionName(mutation.name);
        assertCollectionNameAvailable(db, workspaceId, name);
        if (mutation.productId !== undefined) assertProductExists(db, mutation.productId);

        const collectionId = randomUUID();
        db.prepare('INSERT INTO collections (id, workspace_id, name) VALUES (?, ?, ?)').run(
          collectionId,
          workspaceId,
          name,
        );
        if (mutation.productId !== undefined) {
          saveProduct(db, workspaceId, mutation.productId);
          db.prepare('INSERT INTO collection_products (collection_id, product_id) VALUES (?, ?)').run(
            collectionId,
            mutation.productId,
          );
        }
        break;
      }
      case 'addToCollection':
        assertOwnedCollection(db, workspaceId, mutation.collectionId);
        assertProductExists(db, mutation.productId);
        saveProduct(db, workspaceId, mutation.productId);
        db.prepare(
          'INSERT OR IGNORE INTO collection_products (collection_id, product_id) VALUES (?, ?)',
        ).run(mutation.collectionId, mutation.productId);
        break;
      case 'removeFromCollection':
        assertOwnedCollection(db, workspaceId, mutation.collectionId);
        assertProductExists(db, mutation.productId);
        db.prepare('DELETE FROM collection_products WHERE collection_id = ? AND product_id = ?').run(
          mutation.collectionId,
          mutation.productId,
        );
        break;
      case 'renameCollection': {
        assertOwnedCollection(db, workspaceId, mutation.collectionId);
        const name = collectionName(mutation.name);
        assertCollectionNameAvailable(db, workspaceId, name, mutation.collectionId);
        db.prepare('UPDATE collections SET name = ? WHERE id = ? AND workspace_id = ?').run(
          name,
          mutation.collectionId,
          workspaceId,
        );
        break;
      }
      case 'deleteCollection':
        assertOwnedCollection(db, workspaceId, mutation.collectionId);
        db.prepare('DELETE FROM collections WHERE id = ? AND workspace_id = ?').run(
          mutation.collectionId,
          workspaceId,
        );
        break;
    }

    return readLibrarySnapshot(db, workspaceId);
  })();
}

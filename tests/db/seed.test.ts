// @vitest-environment node
import { createHash } from 'node:crypto';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import Database from 'better-sqlite3';
import { afterEach, expect, it } from 'vitest';
import { seedInterviewDatabase } from '@/lib/db/seed';

const directories: string[] = [];
afterEach(() =>
  directories
    .splice(0)
    .forEach((directory) => rmSync(directory, { recursive: true, force: true })),
);

it('seeds the complete normalized staging snapshot and FTS index', () => {
  const directory = mkdtempSync(path.join(tmpdir(), 'catalog-lab-interview-db-'));
  directories.push(directory);
  const databasePath = path.join(directory, 'catalog.sqlite');
  const summary = seedInterviewDatabase({ databasePath });
  const db = new Database(databasePath, { readonly: true });

  expect(summary).toMatchObject({
    products: 280,
    variants: 2165,
    categories: 198,
    variantImages: 1862,
  });
  expect(db.prepare('select count(*) as count from tags').get()).toEqual({ count: 6 });
  expect(db.prepare('select count(*) as count from catalog_search').get()).toEqual({ count: 280 });
  expect(
    db.prepare("select count(*) as count from product_images where local_path not glob '/products/*'").get(),
  ).toEqual({ count: 0 });
  expect(db.prepare('pragma foreign_key_check').all()).toEqual([]);
  expect(
    db.prepare("select product_id from catalog_search where catalog_search match 'Linen'").all(),
  ).toContainEqual({ product_id: '7a7e801d-cb56-42ed-aa20-5b0dfa146d32' });
  db.close();
});

it('serializes the same source snapshot to identical SQLite bytes', () => {
  const directory = mkdtempSync(path.join(tmpdir(), 'catalog-lab-interview-deterministic-db-'));
  directories.push(directory);
  const firstDatabasePath = path.join(directory, 'first.sqlite');
  const secondDatabasePath = path.join(directory, 'second.sqlite');

  seedInterviewDatabase({ databasePath: firstDatabasePath });
  seedInterviewDatabase({ databasePath: secondDatabasePath });

  const digest = (databasePath: string) =>
    createHash('sha256').update(readFileSync(databasePath)).digest('hex');

  expect(digest(firstDatabasePath)).toBe(digest(secondDatabasePath));
});

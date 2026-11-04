// @vitest-environment node
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import Database from 'better-sqlite3';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { emptyCatalogFilters } from '@/lib/catalog-contract';
import { getCatalogPage } from '@/lib/db/catalog-repository';
import { seedInterviewDatabase } from '@/lib/db/seed';

let directory: string;
let db: Database.Database;

beforeAll(() => {
  directory = mkdtempSync(path.join(tmpdir(), 'catalog-lab-interview-catalog-taxonomy-'));
  const databasePath = path.join(directory, 'catalog.sqlite');
  seedInterviewDatabase({ databasePath });
  db = new Database(databasePath);
});

afterAll(() => {
  db.close();
  rmSync(directory, { recursive: true, force: true });
});

describe('Catalog SQL facets', () => {
  it('returns all brands in stable case-insensitive order', () => {
    const result = getCatalogPage(db, emptyCatalogFilters);

    expect(result.capturedAt).toBe('2026-09-15');
    expect(result.brands).toEqual([
      'Goodevas',
      'House of Leon',
      'Italic',
      'Parachute Home',
      'Sabai Design',
    ]);
  });

  it('builds a nested tree with descendant-inclusive counts', () => {
    const tree = getCatalogPage(db, emptyCatalogFilters).categoryTree;
    const seating = tree.find((node) => node.id === 1);
    const chair = seating?.children.find((node) => node.id === 11);

    expect(seating?.count).toBe(132);
    expect(chair?.count).toBe(47);
    expect(tree.find((node) => node.id === 'uncategorized')).toEqual({
      id: 'uncategorized',
      name: 'Uncategorized',
      count: 2,
      children: [],
    });
  });
});

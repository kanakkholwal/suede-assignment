// @vitest-environment node
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import Database from 'better-sqlite3';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import {
  CatalogQueryInputError,
  catalogFiltersToSearchParams,
  emptyCatalogFilters,
  parseCatalogFilters,
} from '@/lib/catalog-contract';
import { getCatalogPage } from '@/lib/db/catalog-repository';
import { seedInterviewDatabase } from '@/lib/db/seed';

const LINEN_BOX_QUILT_ID = '945e52df-2f3c-439f-8926-35e5b7411f12';

let directory: string;
let db: Database.Database;

beforeAll(() => {
  directory = mkdtempSync(path.join(tmpdir(), 'catalog-lab-interview-catalog-query-'));
  const databasePath = path.join(directory, 'catalog.sqlite');
  seedInterviewDatabase({ databasePath });
  db = new Database(databasePath);
});

afterAll(() => {
  db.close();
  rmSync(directory, { recursive: true, force: true });
});

describe('Catalog query contract', () => {
  it('serializes only set filters and repeats brand parameters', () => {
    const params = catalogFiltersToSearchParams({
      query: 'linen',
      category: 413,
      brands: ['Parachute Home', 'Italic'],
      minPriceCents: 100,
      maxPriceCents: 500,
      inStockOnly: true,
    });

    expect(params.toString()).toBe(
      'query=linen&category=413&brand=Parachute+Home&brand=Italic&minPriceCents=100&maxPriceCents=500&inStockOnly=true',
    );
    expect(catalogFiltersToSearchParams(emptyCatalogFilters).toString()).toBe('');
  });

  it('parses a valid query string into the shared filter contract', () => {
    const params = new URLSearchParams(
      'query=linen&category=uncategorized&brand=Parachute+Home&brand=Italic&minPriceCents=100&maxPriceCents=500&inStockOnly=true',
    );

    expect(parseCatalogFilters(params)).toEqual({
      query: 'linen',
      category: 'uncategorized',
      brands: ['Parachute Home', 'Italic'],
      minPriceCents: 100,
      maxPriceCents: 500,
      inStockOnly: true,
    });
  });

  it.each([
    ['malformed minimum price', 'minPriceCents=ten'],
    ['fractional maximum price', 'maxPriceCents=12.5'],
    ['negative price', 'minPriceCents=-1'],
    ['invalid category', 'category=chairs'],
    ['minimum above maximum', 'minPriceCents=600&maxPriceCents=100'],
    ['invalid availability flag', 'inStockOnly=yes'],
  ])('rejects %s', (_label, query) => {
    expect(() => parseCatalogFilters(new URLSearchParams(query))).toThrow(CatalogQueryInputError);
  });
});

describe('SQL catalog query matching', () => {
  it('matches product fields and normalized tags case-insensitively', () => {
    expect(
      getCatalogPage(db, { ...emptyCatalogFilters, query: 'linen box quilt' }).products.map(
        (product) => product.id,
      ),
    ).toContain(LINEN_BOX_QUILT_ID);
    expect(
      getCatalogPage(db, { ...emptyCatalogFilters, query: 'parachute home' }).products.map(
        (product) => product.id,
      ),
    ).toContain(LINEN_BOX_QUILT_ID);
    expect(
      getCatalogPage(db, { ...emptyCatalogFilters, query: 'quilts & blankets' }).products.map(
        (product) => product.id,
      ),
    ).toContain(LINEN_BOX_QUILT_ID);
    expect(
      getCatalogPage(db, { ...emptyCatalogFilters, query: 'shopify collective' }).products.map(
        (product) => product.id,
      ),
    ).toContain(LINEN_BOX_QUILT_ID);
  });

  it('escapes LIKE wildcard characters so the query stays literal', () => {
    expect(getCatalogPage(db, { ...emptyCatalogFilters, query: '%' }).products).toEqual([]);
    expect(getCatalogPage(db, { ...emptyCatalogFilters, query: '_' }).products).toEqual([]);
  });

  it('supports the explicit uncategorized filter', () => {
    expect(
      getCatalogPage(db, { ...emptyCatalogFilters, category: 'uncategorized' }).products.map(
        (product) => product.id,
      ),
    ).toEqual([
      '66e01baf-98bf-4cba-957f-74d770d21705',
      'bfc49fab-7502-46d0-87d5-74a9aa5e1b87',
    ]);
  });
});

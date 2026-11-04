// @vitest-environment node
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import Database from 'better-sqlite3';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { emptyCatalogFilters } from '@/lib/catalog-contract';
import { getCatalogPage, getCatalogProduct } from '@/lib/db/catalog-repository';
import { seedInterviewDatabase } from '@/lib/db/seed';

const LINEN_BOX_QUILT_ID = '945e52df-2f3c-439f-8926-35e5b7411f12';
const FULL_QUEEN_BONE_VARIANT_ID = 'ac3e465e-f00a-4be6-a8e7-c802106c61fc';
const ANTWERP_ARMCHAIR_ID = 'fd1c6e37-5484-4c70-9ab7-e5d0a7a458fa';
const I_BEAM_BENCH_ID = '00c1a9b6-7861-4239-8f53-01fb9c5d98f8';
const I_BEAM_BENCH_VARIANT_ID = '69eef87b-2294-4106-92aa-63dfc4148939';

let directory: string;
let db: Database.Database;

beforeEach(() => {
  directory = mkdtempSync(path.join(tmpdir(), 'catalog-lab-interview-catalog-repository-'));
  const databasePath = path.join(directory, 'catalog.sqlite');
  seedInterviewDatabase({ databasePath });
  db = new Database(databasePath);
});

afterEach(() => {
  db.close();
  rmSync(directory, { recursive: true, force: true });
});

describe('Catalog repository', () => {
  it('serializes the full catalog with compact variant references under 2 MB', () => {
    const result = getCatalogPage(db, emptyCatalogFilters);
    const bytes = Buffer.byteLength(JSON.stringify(result));
    // 280 full products (~860 KB) plus 2,165 references (~403 KB), with headroom.
    expect(bytes).toBeLessThan(2_000_000);
    expect(result.variants).toHaveLength(2165);
    expect(result.variants?.[0]).toEqual({
      key: `${I_BEAM_BENCH_ID}:${I_BEAM_BENCH_VARIANT_ID}`,
      productId: I_BEAM_BENCH_ID,
      variantId: I_BEAM_BENCH_VARIANT_ID,
    });
  });

  it('uses literal phrase matching instead of interpreting a sourcing request', () => {
    expect(getCatalogPage(db, { ...emptyCatalogFilters, query: 'living room couch' }).products).toEqual([]);
    expect(
      getCatalogPage(db, { ...emptyCatalogFilters, query: 'Linen Box Quilt' }).products.map(
        (product) => product.id,
      ),
    ).toContain(LINEN_BOX_QUILT_ID);
  });

  it('combines category, brand, and authoritative variant availability filters', () => {
    db.prepare(
      'UPDATE products SET availability_status = ?, in_stock_variant_count = 0 WHERE id = ?',
    ).run('backorder', LINEN_BOX_QUILT_ID);
    const result = getCatalogPage(db, {
      ...emptyCatalogFilters,
      category: 413,
      brands: ['Parachute Home'],
      inStockOnly: true,
    });

    expect(result.products.map((product) => product.id)).toContain(LINEN_BOX_QUILT_ID);
    expect(result.products.find((product) => product.id === LINEN_BOX_QUILT_ID)?.availability).toBe(
      'backorder',
    );
  });

  it('returns only matching variants in the variants view while hydrating every product variant', () => {
    const result = getCatalogPage(db, {
      ...emptyCatalogFilters,
      minPriceCents: 30000,
      maxPriceCents: 32000,
    });
    const quilt = result.products.find((product) => product.id === LINEN_BOX_QUILT_ID);

    expect(result.variants?.map((item) => item.variantId)).toContain(FULL_QUEEN_BONE_VARIANT_ID);
    expect(quilt?.variants.map((variant) => variant.id)).toEqual([
      '2a80c132-0d5f-4fcb-ba14-ceeb2d0544e6',
      FULL_QUEEN_BONE_VARIANT_ID,
      '9035e922-7b29-4c15-90d9-e26b319ef011',
    ]);
  });

  it('applies price and availability to each presented variant without truncating the product', () => {
    const result = getCatalogPage(db, {
      ...emptyCatalogFilters,
      minPriceCents: 30000,
      maxPriceCents: 32000,
      inStockOnly: true,
    });
    const quilt = result.products.find((product) => product.id === LINEN_BOX_QUILT_ID);
    const presentedVariantIds = result.variants
      ?.filter((item) => item.productId === LINEN_BOX_QUILT_ID)
      .map((item) => item.variantId);

    expect(presentedVariantIds).toContain(FULL_QUEEN_BONE_VARIANT_ID);
    expect(presentedVariantIds).not.toContain('2a80c132-0d5f-4fcb-ba14-ceeb2d0544e6');
    expect(presentedVariantIds).not.toContain('9035e922-7b29-4c15-90d9-e26b319ef011');
    expect(quilt?.variants).toHaveLength(3);
  });

  it('includes products assigned to descendants when selecting a parent category', () => {
    expect(
      getCatalogPage(db, { ...emptyCatalogFilters, category: 1 }).products.map(
        (product) => product.id,
      ),
    ).toContain(ANTWERP_ARMCHAIR_ID);
  });

  it('serializes variant images only when a variant image row exists', () => {
    const armchair = getCatalogProduct(db, ANTWERP_ARMCHAIR_ID);
    const bench = getCatalogProduct(db, I_BEAM_BENCH_ID);

    expect(armchair).toMatchObject({
      id: ANTWERP_ARMCHAIR_ID,
      name: 'Antwerp Armchair',
      brand: 'House of Leon',
      productType: 'Arm Chairs, Recliners & Sleeper Chairs',
      category: 'Armchair',
      categoryId: 30,
      roomTypes: [],
      tags: ['House of Leon', 'Shopify Collective'],
      material: null,
      dimensionsIn: { width: null, depth: null, height: null },
      availability: 'in_stock',
      leadTimeWeeks: null,
      margin: null,
    });
    expect(armchair?.variants.find((variant) => variant.label === 'Bone')?.image?.src).toMatch(
      /^\/products\/variants\//,
    );
    expect(bench?.images[0]?.src).toMatch(/^\/products\//);
    expect(bench?.variants.find((variant) => variant.id === I_BEAM_BENCH_VARIANT_ID)).not.toHaveProperty(
      'image',
    );
  });
});

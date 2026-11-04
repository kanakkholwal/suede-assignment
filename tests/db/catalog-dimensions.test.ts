// @vitest-environment node
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { emptyCatalogFilters } from '@/lib/catalog-contract';
import { getCatalogPage } from '@/lib/db/catalog-repository';
import { applyRoomMutation } from '@/lib/db/room-repository';
import { createSeededDatabase, PRODUCTS, type SeededDatabase } from '@/tests/seeded-database';

const SOFA = 10;
const ANTWERP_72 = 'dd083dbd-b950-4c5d-8b95-15d546771481';
let seeded: SeededDatabase;

beforeAll(() => {
  seeded = createSeededDatabase('catalog-dimensions');
});

afterAll(() => seeded.dispose());

describe('Catalog width filter and dimension summaries', () => {
  it('drops known-too-wide pieces but keeps unknown widths for checking', () => {
    const page = getCatalogPage(seeded.db, { ...emptyCatalogFilters, category: SOFA, maxWidthIn: 90 });
    const ids = page.products.map((product) => product.id);

    expect(ids).toContain(PRODUCTS.elevate86);
    expect(ids).toContain(PRODUCTS.essentialSofa);
    expect(ids).not.toContain(PRODUCTS.elevate96);
    expect(ids).toContain(PRODUCTS.antwerpSofa);
    expect(page.variants?.filter((reference) => reference.productId === PRODUCTS.antwerpSofa)).toEqual([
      { key: `${PRODUCTS.antwerpSofa}:${ANTWERP_72}`, productId: PRODUCTS.antwerpSofa, variantId: ANTWERP_72 },
    ]);
  });

  it('summarizes sizes across variants with the weakest source', () => {
    const { dimensions } = getCatalogPage(seeded.db, { ...emptyCatalogFilters, category: SOFA });

    expect(dimensions[PRODUCTS.antwerpSofa]).toMatchObject({
      width: { min: 72, max: 120, source: 'verified' },
      depth: { min: 40, max: 40, source: 'verified' },
      unmeasuredVariants: 0,
    });
    expect(dimensions[PRODUCTS.elevate96]).toMatchObject({
      width: { min: 96, max: 96, source: 'listing' },
      depth: { source: 'synthetic' },
    });
    expect(dimensions[PRODUCTS.essentialSofa]).toMatchObject({ width: null, depth: null });
    expect(dimensions[PRODUCTS.essentialSofa].unmeasuredVariants).toBe(dimensions[PRODUCTS.essentialSofa].variantCount);
  });

  it('applies the workspace’s own measurements in search', () => {
    applyRoomMutation(seeded.db, 'workspace-a', {
      operation: 'setDimensions',
      productId: PRODUCTS.essentialSofa,
      variantId: null,
      values: { width: 95, depth: 37, height: null },
      note: '',
    });
    const filters = { ...emptyCatalogFilters, category: SOFA, maxWidthIn: 90 };

    expect(getCatalogPage(seeded.db, filters, { workspaceId: 'workspace-a' }).products.map((p) => p.id)).not.toContain(
      PRODUCTS.essentialSofa,
    );
    expect(getCatalogPage(seeded.db, filters, { workspaceId: 'workspace-b' }).products.map((p) => p.id)).toContain(
      PRODUCTS.essentialSofa,
    );
  });
});

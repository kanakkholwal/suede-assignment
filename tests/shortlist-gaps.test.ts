import { describe, expect, it } from 'vitest';

import { armchair } from '@/tests/api-fixtures';
import { emptyCatalogFilters } from '@/lib/catalog-contract';
import { type DimensionSummary, resolveDimensions, type DimensionRecord } from '@/lib/dimensions';
import { matchReasons, rankForBrief } from '@/lib/match-reasons';
import type { RoomItem } from '@/lib/room-state';
import { countGaps, itemGaps } from '@/lib/shortlist-gaps';

function claim(overrides: Partial<DimensionRecord>): DimensionRecord {
  return {
    productId: armchair.id,
    variantId: null,
    width: null,
    depth: null,
    height: null,
    source: 'verified',
    sourceUrl: null,
    note: '',
    capturedAt: '2026-11-04',
    ...overrides,
  };
}

function item(records: DimensionRecord[], variantId: string | null = null): RoomItem {
  return {
    id: 'item',
    productId: armchair.id,
    variantId,
    xIn: null,
    yIn: null,
    rotationDeg: 0,
    dimensions: resolveDimensions(records, variantId),
  };
}

describe('itemGaps', () => {
  it('blocks the fit check when the footprint is unknown and asks for an option', () => {
    const gaps = itemGaps(item([]), armchair, 'Sep 15, 2026');
    expect(gaps.map((gap) => [gap.kind, gap.severity])).toEqual([
      ['size-missing', 'blocker'],
      ['option', 'check'],
    ]);
    expect(gaps[0].message).toBe('Width and Depth not on file, so fit can’t be checked.');
    expect(countGaps(gaps)).toEqual({ blocker: 1, check: 1 });
  });

  it('asks to confirm synthetic or title-only sizes, and nothing for verified ones', () => {
    const variant = armchair.variants.find((candidate) => candidate.available)!;
    expect(itemGaps(item([claim({ width: 30, depth: 30, source: 'synthetic' })], variant.id), armchair, 'x')[0].kind).toBe(
      'size-placeholder',
    );
    expect(itemGaps(item([claim({ width: 30, depth: 30, source: 'listing' })], variant.id), armchair, 'x')[0].kind).toBe(
      'size-from-title',
    );
    expect(itemGaps(item([claim({ width: 30, depth: 30 })], variant.id), armchair, 'x')).toEqual([]);
  });

  it('flags an option that was unavailable on the snapshot date', () => {
    const [first, ...rest] = armchair.variants;
    const product = { ...armchair, variants: [{ ...first, available: false }, ...rest] };
    const gaps = itemGaps(item([claim({ width: 30, depth: 30 })], first.id), product, 'Sep 15, 2026');
    expect(gaps).toEqual([
      { kind: 'unavailable', severity: 'check', message: 'This option was not available to order on Sep 15, 2026.' },
    ]);
  });
});

describe('matchReasons and rankForBrief', () => {
  const sized: DimensionSummary = {
    width: { min: 86.5, max: 86.5, source: 'verified' },
    depth: { min: 38.25, max: 38.25, source: 'verified' },
    height: null,
    unmeasuredVariants: 0,
    variantCount: 1,
  };
  const unsized: DimensionSummary = { ...sized, width: null, depth: null, unmeasuredVariants: 1 };
  const filters = { ...emptyCatalogFilters, maxWidthIn: 90, inStockOnly: true };

  it('reports a known width as a match and an unknown one as unknown', () => {
    expect(matchReasons(armchair, sized, filters)).toEqual([
      { status: 'match', label: '86½″ wide' },
      { status: 'match', label: 'Available to order' },
    ]);
    expect(matchReasons(armchair, unsized, filters)[0]).toEqual({ status: 'unknown', label: 'Width not on file' });
  });

  it('lists products with a known width before unknowns only when width is filtered', () => {
    const other = { ...armchair, id: 'other' };
    const dimensions = { [armchair.id]: unsized, other: sized };
    expect(rankForBrief([armchair, other], dimensions, filters).map((product) => product.id)).toEqual(['other', armchair.id]);
    expect(rankForBrief([armchair, other], dimensions, emptyCatalogFilters).map((product) => product.id)).toEqual([
      armchair.id,
      'other',
    ]);
  });
});

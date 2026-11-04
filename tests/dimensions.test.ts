import { describe, expect, it } from 'vitest';

import {
  type DimensionRecord,
  footprintConfidence,
  hasFootprint,
  parseListedDimensions,
  resolveDimensions,
} from '@/lib/dimensions';

function claim(overrides: Partial<DimensionRecord>): DimensionRecord {
  return {
    productId: 'p',
    variantId: null,
    width: null,
    depth: null,
    height: null,
    source: 'listing',
    sourceUrl: null,
    note: '',
    capturedAt: '2026-11-04',
    ...overrides,
  };
}

describe('parseListedDimensions', () => {
  it.each([
    ['50" x 21" x 13"', { width: 50, depth: 21, height: 13 }],
    ['60" x 27.5" x 13"', { width: 60, depth: 27.5, height: 13 }],
    ["8'x10'", { width: 96, depth: 120, height: null }],
    ["12'x15'", { width: 144, depth: 180, height: null }],
    ['72"', { width: 72, depth: null, height: null }],
    ['The Elevate 86" Sofa in Recycled Velvet', { width: 86, depth: null, height: null }],
    ['Length: 84"', { width: 84, depth: null, height: null }],
  ])('reads %j', (text, expected) => {
    expect(parseListedDimensions(text)).toEqual(expected);
  });

  it.each(['Moss', 'Default Title', 'Swatch', '4in1 Montessori Climbing Set', 'Natural / Metal Legs'])(
    'ignores %j',
    (text) => {
      expect(parseListedDimensions(text)).toBeNull();
    },
  );
});

describe('resolveDimensions', () => {
  it('lets a verified claim beat the size in the product name, per field', () => {
    const resolved = resolveDimensions(
      [
        claim({ width: 86, source: 'listing' }),
        claim({ width: 86.5, depth: 38.25, height: 26, source: 'verified', sourceUrl: 'https://brand' }),
      ],
      null,
    );
    expect(resolved.width).toMatchObject({ value: 86.5, source: 'verified', sourceUrl: 'https://brand' });
    expect(resolved.depth.value).toBe(38.25);
  });

  it('mixes sources field by field and keeps unknown fields unknown', () => {
    const resolved = resolveDimensions(
      [claim({ width: 96, source: 'listing' }), claim({ depth: 38.25, source: 'synthetic' })],
      null,
    );
    expect(resolved.width.source).toBe('listing');
    expect(resolved.depth.source).toBe('synthetic');
    expect(resolved.height).toMatchObject({ value: null, source: 'unknown' });
    expect(footprintConfidence(resolved)).toBe('synthetic');
  });

  it('uses only the selected variant and prefers it over a product-wide claim of equal rank', () => {
    const records = [
      claim({ depth: 40, height: 33, source: 'verified' }),
      claim({ variantId: 'v72', width: 72, source: 'verified' }),
      claim({ variantId: 'v96', width: 96, source: 'verified' }),
      claim({ width: 80, source: 'verified' }),
    ];
    expect(resolveDimensions(records, 'v96').width.value).toBe(96);
    expect(resolveDimensions(records, null).width.value).toBe(80);
    expect(resolveDimensions(records, 'v96').depth.value).toBe(40);
  });

  it('puts the designer’s own entry above everything else', () => {
    const resolved = resolveDimensions(
      [claim({ width: 86.5, depth: 38.25, source: 'verified' }), claim({ width: 85, source: 'designer' })],
      null,
    );
    expect(resolved.width).toMatchObject({ value: 85, source: 'designer' });
    expect(resolved.depth.source).toBe('verified');
  });

  it('reports no footprint while width or depth is missing', () => {
    const resolved = resolveDimensions([claim({ width: 90 })], null);
    expect(hasFootprint(resolved)).toBe(false);
    expect(footprintConfidence(resolved)).toBe('unknown');
  });
});

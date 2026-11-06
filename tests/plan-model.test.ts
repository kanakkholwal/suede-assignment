import { describe, expect, it } from 'vitest';

import { resolveDimensions } from '@/lib/dimensions';
import { footprintOf, planPieces } from '@/lib/plan-model';
import { armchair, roomFixture } from './api-fixtures';

const sized = (width: number | null, depth: number | null) =>
  resolveDimensions(width === null && depth === null ? [] : [{ productId: armchair.id, variantId: null, width, depth, height: null, source: 'listing', sourceUrl: null, note: '', capturedAt: '2026-11-06' }], null);

describe('footprintOf', () => {
  it('draws an unknown piece at a typical size for its kind, and says so', () => {
    expect(footprintOf({ dimensions: sized(null, null) }, armchair)).toEqual({ widthIn: 32, depthIn: 34, source: 'typical' });
  });

  it('keeps the side it knows and fills only the missing one', () => {
    expect(footprintOf({ dimensions: sized(120, null) }, armchair)).toEqual({ widthIn: 120, depthIn: 34, source: 'typical' });
  });

  it('uses the real size when both sides are known', () => {
    expect(footprintOf({ dimensions: sized(37, 30) }, armchair)).toEqual({ widthIn: 37, depthIn: 30, source: 'listing' });
  });
});

describe('planPieces', () => {
  it('puts a placed piece without a size on the plan as typical', () => {
    const snapshot = { ...roomFixture(), products: [armchair], items: [{ id: 'chair', productId: armchair.id, variantId: null, xIn: 60, yIn: 60, rotationDeg: 0 as const, dimensions: sized(null, null) }] };
    const [piece] = planPieces(snapshot);
    expect(piece.footprintSource).toBe('typical');
    expect(piece.widthIn).toBe(32);
  });
});

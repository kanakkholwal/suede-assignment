import type { CatalogProduct } from '@/data/product-types';
import type { CatalogFilters } from '@/lib/catalog-contract';
import { type DimensionSummary, widthWithin } from '@/lib/dimensions';
import { formatPrice, startingPriceCents } from '@/lib/format';
import { formatInches } from '@/lib/units';

export type MatchStatus = 'match' | 'unknown';

export interface MatchReason {
  status: MatchStatus;
  label: string;
}

function widthReason(summary: DimensionSummary, filters: CatalogFilters): MatchReason {
  const { width } = summary;
  if (!width) return { status: 'unknown', label: 'Width not on file' };
  const fitsAll = widthWithin(width.min, filters.minWidthIn, filters.maxWidthIn) && widthWithin(width.max, filters.minWidthIn, filters.maxWidthIn);
  if (summary.unmeasuredVariants > 0) return { status: 'unknown', label: 'Some sizes unmeasured' };
  if (!fitsAll) return { status: 'match', label: 'Some sizes fit' };
  return {
    status: 'match',
    label: width.min === width.max ? `${formatInches(width.min)} wide` : `${formatInches(width.min)}–${formatInches(width.max)} wide`,
  };
}

/**
 * Why a product is in the results, one reason per active brief constraint. Unknowns are
 * listed as unknowns, never as passes.
 */
export function matchReasons(
  product: CatalogProduct,
  summary: DimensionSummary | undefined,
  filters: CatalogFilters,
): MatchReason[] {
  const reasons: MatchReason[] = [];
  if ((filters.minWidthIn !== null || filters.maxWidthIn !== null) && summary) {
    reasons.push(widthReason(summary, filters));
  }
  if (filters.minPriceCents !== null || filters.maxPriceCents !== null) {
    const price = startingPriceCents(product.variants);
    if (price !== undefined) reasons.push({ status: 'match', label: `From ${formatPrice(price)}` });
  }
  if (filters.inStockOnly) reasons.push({ status: 'match', label: 'Available to order' });
  return reasons;
}

/** Results with a confirmed width first, unknowns after: a short, checkable starting set. */
export function rankForBrief(
  products: readonly CatalogProduct[],
  dimensions: Record<string, DimensionSummary>,
  filters: CatalogFilters,
): CatalogProduct[] {
  if (filters.minWidthIn === null && filters.maxWidthIn === null) return [...products];
  const unknown = (product: CatalogProduct) => Number(!dimensions[product.id]?.width);
  return [...products].sort((left, right) => unknown(left) - unknown(right));
}

import type { CatalogFilters } from '@/lib/catalog-contract';
import { type DimensionSummary, widthWithin } from '@/lib/dimensions';

export type MatchStatus = 'match';

export interface MatchReason {
  status: MatchStatus;
  label: string;
}

/**
 * The one thing a card can add beyond the filter chips: whether the width fits, for every
 * size or only some. Missing sizes are shown by the size line, not repeated here.
 */
export function matchReasons(summary: DimensionSummary | undefined, filters: CatalogFilters): MatchReason[] {
  const width = summary?.width;
  if (!width || (filters.minWidthIn === null && filters.maxWidthIn === null)) return [];
  const fits = (value: number) => widthWithin(value, filters.minWidthIn, filters.maxWidthIn);
  if (fits(width.min) && fits(width.max)) return [{ status: 'match', label: 'Width fits the brief' }];
  return [{ status: 'match', label: 'One of its sizes fits' }];
}

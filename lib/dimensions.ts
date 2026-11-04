import { INCHES_PER_FOOT } from '@/lib/units';

export type DimensionSource = 'designer' | 'verified' | 'listing' | 'synthetic';
export type DimensionField = 'width' | 'depth' | 'height';

export const DIMENSION_FIELDS: readonly DimensionField[] = ['width', 'depth', 'height'];

/** Higher wins when two claims cover the same field. */
export const DIMENSION_SOURCE_RANK: Record<DimensionSource, number> = {
  designer: 4,
  verified: 3,
  listing: 2,
  synthetic: 1,
};

export const DIMENSION_SOURCE_LABEL: Record<DimensionSource | 'unknown', string> = {
  designer: 'Entered by designer',
  verified: 'Verified on brand site',
  listing: 'Stated in listing',
  synthetic: 'Synthetic for this exercise',
  unknown: 'Unknown',
};

export interface DimensionValues {
  width: number | null;
  depth: number | null;
  height: number | null;
}

export interface DimensionRecord extends DimensionValues {
  productId: string;
  variantId: string | null;
  source: DimensionSource;
  sourceUrl: string | null;
  note: string;
  capturedAt: string;
}

export interface ResolvedField {
  value: number | null;
  source: DimensionSource | 'unknown';
  sourceUrl: string | null;
  note: string;
  capturedAt: string | null;
}

export type ResolvedDimensions = Record<DimensionField, ResolvedField>;

const UNKNOWN_FIELD: ResolvedField = {
  value: null,
  source: 'unknown',
  sourceUrl: null,
  note: '',
  capturedAt: null,
};

function claimOrder(variantId: string | null) {
  return (left: DimensionRecord, right: DimensionRecord) =>
    DIMENSION_SOURCE_RANK[right.source] - DIMENSION_SOURCE_RANK[left.source] ||
    Number(right.variantId === variantId) - Number(left.variantId === variantId);
}

/**
 * Merges claims per field: highest source rank wins, a variant-specific claim beats a
 * product-wide one of the same rank. Claims for other variants are ignored.
 */
export function resolveDimensions(
  records: readonly DimensionRecord[],
  variantId: string | null,
): ResolvedDimensions {
  const applicable = records
    .filter((record) => record.variantId === null || record.variantId === variantId)
    .sort(claimOrder(variantId));

  const resolveField = (field: DimensionField): ResolvedField => {
    const claim = applicable.find((record) => record[field] !== null);
    if (!claim) return UNKNOWN_FIELD;
    return {
      value: claim[field],
      source: claim.source,
      sourceUrl: claim.sourceUrl,
      note: claim.note,
      capturedAt: claim.capturedAt,
    };
  };

  return { width: resolveField('width'), depth: resolveField('depth'), height: resolveField('height') };
}

export function hasFootprint(dimensions: ResolvedDimensions): boolean {
  return dimensions.width.value !== null && dimensions.depth.value !== null;
}

/** The least trustworthy of several sources; `unknown` if any is missing. */
export function weakestSource(sources: ReadonlyArray<DimensionSource | 'unknown'>): DimensionSource | 'unknown' {
  if (sources.length === 0 || sources.includes('unknown')) return 'unknown';
  return (sources as DimensionSource[]).reduce((weakest, source) =>
    DIMENSION_SOURCE_RANK[source] < DIMENSION_SOURCE_RANK[weakest] ? source : weakest,
  );
}

/** The weakest source across the footprint; drives how confidently a fit is reported. */
export function footprintConfidence(dimensions: ResolvedDimensions): DimensionSource | 'unknown' {
  return weakestSource([dimensions.width.source, dimensions.depth.source]);
}

export interface FieldSummary {
  min: number;
  max: number;
  /** The weakest source among the variants that report this field. */
  source: DimensionSource;
}

export interface DimensionSummary {
  width: FieldSummary | null;
  depth: FieldSummary | null;
  height: FieldSummary | null;
  /** Variants whose width or depth is still unknown, so their footprint can't be checked. */
  unmeasuredVariants: number;
  variantCount: number;
}

/** Ranges across a product's variants, so a 72″/96″/120″ sofa reads as one honest span. */
export function summarizeDimensions(
  records: readonly DimensionRecord[],
  variantIds: readonly string[],
): DimensionSummary {
  const resolved = (variantIds.length ? variantIds : [null]).map((id) => resolveDimensions(records, id));

  const summarize = (field: DimensionField): FieldSummary | null => {
    const known = resolved.map((dimensions) => dimensions[field]).filter((entry) => entry.value !== null);
    if (known.length === 0) return null;
    const values = known.map((entry) => entry.value as number);
    return {
      min: Math.min(...values),
      max: Math.max(...values),
      source: weakestSource(known.map((entry) => entry.source)) as DimensionSource,
    };
  };

  return {
    width: summarize('width'),
    depth: summarize('depth'),
    height: summarize('height'),
    unmeasuredVariants: resolved.filter((dimensions) => !hasFootprint(dimensions)).length,
    variantCount: resolved.length,
  };
}

/** The weakest footprint source across a product's options. */
export function summaryConfidence(summary: DimensionSummary): DimensionSource | 'unknown' {
  return weakestSource([summary.width?.source ?? 'unknown', summary.depth?.source ?? 'unknown']);
}

/** Unknown width passes: a missing measurement is a reason to check, not to exclude. */
export function widthWithin(width: number | null, min: number | null, max: number | null): boolean {
  if (width === null) return true;
  return (min === null || width >= min) && (max === null || width <= max);
}

const NUMBER = String.raw`(\d+(?:\.\d+)?)`;
const INCH_MARK = String.raw`\s*(?:"|”|″|in\b)`;
const FOOT_MARK = String.raw`\s*(?:'|’|′|ft\b)`;
const BY = String.raw`\s*[x×]\s*`;
const INCH_TRIPLE = new RegExp(`${NUMBER}${INCH_MARK}${BY}${NUMBER}${INCH_MARK}(?:${BY}${NUMBER}${INCH_MARK})?`, 'i');
const FOOT_PAIR = new RegExp(`${NUMBER}${FOOT_MARK}${BY}${NUMBER}${FOOT_MARK}`, 'i');
const SINGLE_INCH = new RegExp(`(?:^|[^\\d.])${NUMBER}${INCH_MARK}`, 'i');

/**
 * Reads sizes a listing states outright in a title or variant label: `72"`, `50" x 21" x 13"`,
 * `8'x10'`. A lone number is treated as width. Never reads free-text descriptions.
 */
export function parseListedDimensions(text: string): DimensionValues | null {
  const inches = text.match(INCH_TRIPLE);
  if (inches) {
    return {
      width: Number(inches[1]),
      depth: Number(inches[2]),
      height: inches[3] === undefined ? null : Number(inches[3]),
    };
  }

  const feet = text.match(FOOT_PAIR);
  if (feet) {
    return {
      width: Number(feet[1]) * INCHES_PER_FOOT,
      depth: Number(feet[2]) * INCHES_PER_FOOT,
      height: null,
    };
  }

  const single = text.match(SINGLE_INCH);
  if (single) return { width: Number(single[1]), depth: null, height: null };

  return null;
}

import type { CatalogProduct } from '@/data/product-types';
import { DIMENSION_FIELDS, footprintConfidence } from '@/lib/dimensions';
import { formatPrice } from '@/lib/format';
import type { RoomItem } from '@/lib/room-state';

/** `blocker`: fit can't be checked at all. `check`: confirm before presenting to the client. */
export type GapSeverity = 'blocker' | 'check';
export type GapKind = 'size-missing' | 'size-placeholder' | 'size-from-title' | 'option' | 'unavailable';

export interface Gap {
  kind: GapKind;
  severity: GapSeverity;
  message: string;
}

const FIELD_NAMES = { width: 'Width', depth: 'Depth', height: 'Height' } as const;

function listMissing(item: RoomItem): string[] {
  return DIMENSION_FIELDS.filter((field) => item.dimensions[field].value === null).map((field) => FIELD_NAMES[field]);
}

function sizeGap(item: RoomItem): Gap | null {
  const confidence = footprintConfidence(item.dimensions);
  if (confidence === 'unknown') {
    const missing = listMissing(item).filter((field) => field !== 'Height');
    return {
      kind: 'size-missing',
      severity: 'blocker',
      message: `${missing.join(' and ')} not on file, so fit can’t be checked.`,
    };
  }
  if (confidence === 'synthetic') {
    return {
      kind: 'size-placeholder',
      severity: 'check',
      message: 'Footprint uses a synthetic placeholder. Confirm with the brand before presenting.',
    };
  }
  if (confidence === 'listing') {
    return {
      kind: 'size-from-title',
      severity: 'check',
      message: 'Size comes from the product title only. Confirm on the brand page.',
    };
  }
  return null;
}

function optionGap(item: RoomItem, product: CatalogProduct): Gap | null {
  if (item.variantId !== null || product.variants.length < 2) return null;
  const prices = product.variants.map((variant) => variant.priceCents);
  const low = Math.min(...prices);
  const high = Math.max(...prices);
  return {
    kind: 'option',
    severity: 'check',
    message:
      low === high
        ? `Choose one of ${product.variants.length} options.`
        : `Choose an option. Price ranges ${formatPrice(low)} to ${formatPrice(high)}.`,
  };
}

function availabilityGap(item: RoomItem, product: CatalogProduct, capturedAt: string): Gap | null {
  const variant = product.variants.find((candidate) => candidate.id === item.variantId);
  const unavailable = variant ? !variant.available : product.availability !== 'in_stock';
  if (!unavailable) return null;
  return {
    kind: 'unavailable',
    severity: 'check',
    message: `${variant ? 'This option was' : 'This piece was'} not available to order on ${capturedAt}.`,
  };
}

/** What still needs a human before this piece can be shown to a client, worst first. */
export function itemGaps(item: RoomItem, product: CatalogProduct, capturedAt: string): Gap[] {
  return [sizeGap(item), optionGap(item, product), availabilityGap(item, product, capturedAt)].filter(
    (gap): gap is Gap => gap !== null,
  );
}

export function countGaps(gaps: readonly Gap[]): Record<GapSeverity, number> {
  return {
    blocker: gaps.filter((gap) => gap.severity === 'blocker').length,
    check: gaps.filter((gap) => gap.severity === 'check').length,
  };
}

import { Check } from '@/components/icons';

import { AddToRoomButton, type ShortlistContext } from '@/components/room/add-to-room-button';
import { SummaryDimensionLine } from '@/components/shared/dimension-line';
import type { CatalogProduct } from '@/data/product-types';
import { matchReasons } from '@/lib/match-reasons';

interface FitProps {
  product: CatalogProduct;
  shortlist?: ShortlistContext;
}

/** Size with its source, or "Size unknown", and whether it fits the brief. */
export function CardFitLines({ product, shortlist }: FitProps) {
  const summary = shortlist?.dimensions[product.id];
  const reasons = shortlist ? matchReasons(summary, shortlist.filters) : [];

  return (
    <>
      {summary ? <SummaryDimensionLine summary={summary} showUnknown className="pointer-events-auto" /> : <p className="text-xs text-muted-foreground">Size unknown</p>}
      {reasons.map((reason) => (
        <p key={reason.label} className="inline-flex items-center gap-1 text-xs text-success-strong">
          <Check className="size-3.5" aria-hidden="true" />
          {reason.label}
        </p>
      ))}
    </>
  );
}

export function CardRoomToggle({ product, variantId, shortlist }: FitProps & { variantId: string | null }) {
  if (!shortlist) return null;
  return (
    <AddToRoomButton
      productName={product.name}
      inRoom={shortlist.roomCount(product.id) > 0}
      disabled={shortlist.roomDisabled}
      onToggle={() => shortlist.onToggleRoom(product.id, variantId)}
    />
  );
}

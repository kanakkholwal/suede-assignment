import { Check } from 'lucide-react';

import { AddToRoomButton, type ShortlistContext } from '@/components/room/add-to-room-button';
import { SummaryDimensionLine } from '@/components/shared/dimension-line';
import type { CatalogProduct } from '@/data/product-types';
import { matchReasons } from '@/lib/match-reasons';

interface FitProps {
  product: CatalogProduct;
  shortlist?: ShortlistContext;
}

/** Size with its source, and whether it fits the brief. Renders nothing when neither is known. */
export function CardFitLines({ product, shortlist }: FitProps) {
  const summary = shortlist?.dimensions[product.id];
  const reasons = shortlist ? matchReasons(summary, shortlist.filters) : [];
  if (!summary?.width && !reasons.length) return null;

  return (
    <>
      {summary ? <SummaryDimensionLine summary={summary} className="pointer-events-auto" /> : null}
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

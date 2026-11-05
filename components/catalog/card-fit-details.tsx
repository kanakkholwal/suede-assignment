import { Check } from 'lucide-react';

import { AddToRoomButton, type ShortlistContext } from '@/components/room/add-to-room-button';
import { SummaryDimensionLine } from '@/components/shared/dimension-line';
import type { CatalogProduct } from '@/data/product-types';
import { matchReasons } from '@/lib/match-reasons';

interface CardFitDetailsProps {
  product: CatalogProduct;
  variantId: string | null;
  priceLabel: string;
  shortlist?: ShortlistContext;
}

/** Size with its source, whether it fits the brief, price and the room toggle. */
export function CardFitDetails({ product, variantId, priceLabel, shortlist }: CardFitDetailsProps) {
  const summary = shortlist?.dimensions[product.id];
  const reasons = shortlist ? matchReasons(summary, shortlist.filters) : [];
  const inRoom = (shortlist?.roomCount(product.id) ?? 0) > 0;

  return (
    <>
      {summary ? <SummaryDimensionLine summary={summary} className="pointer-events-auto" /> : null}
      {reasons.length ? (
        <ul aria-label="Why it matches" className="flex flex-wrap gap-x-2.5 gap-y-1 text-xs">
          {reasons.map((reason) => (
            <li key={reason.label} className="inline-flex items-center gap-1 text-success-strong">
              <Check className="size-3" aria-hidden="true" />
              {reason.label}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-auto flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5 pt-1.5">
        <span className="text-sm tabular-nums text-foreground">{priceLabel}</span>
        {shortlist ? (
          <AddToRoomButton
            productName={product.name}
            inRoom={inRoom}
            disabled={shortlist.roomDisabled}
            onToggle={() => shortlist.onToggleRoom(product.id, variantId)}
            className="pointer-events-auto"
          />
        ) : null}
      </div>
    </>
  );
}

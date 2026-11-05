import { MatchReasonsList } from '@/components/catalog/match-reasons-list';
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

/** Size with its source, why it matched the brief, price and the room toggle. */
export function CardFitDetails({ product, variantId, priceLabel, shortlist }: CardFitDetailsProps) {
  const summary = shortlist?.dimensions[product.id];
  const inRoom = (shortlist?.roomCount(product.id) ?? 0) > 0;

  return (
    <>
      {summary ? <SummaryDimensionLine summary={summary} className="pointer-events-auto" /> : null}
      {shortlist ? <MatchReasonsList reasons={matchReasons(summary, shortlist.filters)} /> : null}
      <div className="mt-auto flex items-center justify-between gap-2 pt-1 text-xs text-[#665c54]">
        <span className="min-w-0 truncate">{priceLabel}</span>
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

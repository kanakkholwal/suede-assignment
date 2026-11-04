'use client';

import { Armchair, Info, Map as MapIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { MeasurementStatusBadge } from '@/components/room/measurement-status-badge';
import { ShortlistItem } from '@/components/room/shortlist-item';
import { formatCalendarDate } from '@/lib/format';
import { countGaps, itemGaps } from '@/lib/shortlist-gaps';
import { formatFeetInches } from '@/lib/units';
import type { RoomStore } from '@/lib/use-room';

interface RoomShortlistProps {
  room: RoomStore;
  capturedAt: string;
  /** Called after the designer saves or clears a measurement, so search can re-rank. */
  onDimensionsChanged: () => void;
}

function plural(count: number, one: string, many: string): string {
  return `${count} ${count === 1 ? one : many}`;
}

/** The room's working shortlist and everything still missing before it can be presented. */
export function RoomShortlist({ room, capturedAt, onDimensionsChanged }: RoomShortlistProps) {
  const { snapshot } = room;

  if (room.loading) return <p role="status" className="text-sm text-muted-foreground">Loading room…</p>;
  if (!snapshot) return <p role="alert" className="text-sm text-destructive-strong">{room.error ?? 'Room unavailable.'}</p>;

  const snapshotDate = capturedAt ? formatCalendarDate(capturedAt) : 'the snapshot date';
  const productsById = new Map(snapshot.products.map((product) => [product.id, product]));
  const rows = snapshot.items.flatMap((item) => {
    const product = productsById.get(item.productId);
    return product ? [{ item, product, gaps: itemGaps(item, product, snapshotDate) }] : [];
  });
  const totals = countGaps(rows.flatMap((row) => row.gaps));
  const { room: details } = snapshot;

  const saveDimensions = (productId: string, variantId: string | null) => async (values: Parameters<RoomStore['setDimensions']>[2], note: string) => {
    const saved = await room.setDimensions(productId, variantId, values, note);
    if (saved) onDimensionsChanged();
    return saved;
  };

  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-col gap-1.5">
        <h2 className="font-serif text-2xl leading-none tracking-[-0.03em] text-foreground">{details.name}</h2>
        <p className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="tabular-nums text-foreground">
            {formatFeetInches(details.lengthIn)} × {formatFeetInches(details.widthIn)}
            {details.ceilingIn ? ` · ${formatFeetInches(details.ceilingIn)} ceiling` : ''}
          </span>
          <MeasurementStatusBadge status={details.dimensionsStatus} />
        </p>
      </header>

      {room.error ? <p role="alert" className="text-xs text-destructive-strong">{room.error}</p> : null}

      {rows.length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-border bg-white/60 px-4 py-8 text-center">
          <Armchair className="size-5 text-muted-foreground" aria-hidden="true" />
          <p className="text-sm text-foreground">No pieces yet</p>
          <p className="text-xs leading-relaxed text-muted-foreground">Add pieces from the results to check them against this room.</p>
        </div>
      ) : (
        <>
          <p className="rounded-md bg-accent px-3 py-2 text-xs leading-relaxed text-accent-foreground" aria-live="polite">
            {plural(rows.length, 'piece', 'pieces')}
            {totals.blocker ? ` · ${plural(totals.blocker, 'needs a size', 'need a size')}` : ''}
            {totals.check ? ` · ${plural(totals.check, 'thing', 'things')} to confirm` : ''}
            {!totals.blocker && !totals.check ? ' · nothing left to check' : ''}
          </p>
          <Button href="/room" size="sm" variant="default" className="w-full">
            <MapIcon aria-hidden="true" /> Open floor plan
          </Button>
          <ul className="flex flex-col divide-y divide-border">
            {rows.map(({ item, product, gaps }) => (
              <ShortlistItem
                key={item.id}
                item={item}
                product={product}
                gaps={gaps}
                disabled={room.loading}
                onRemove={() => room.removeItem(item.id)}
                onSelectVariant={(variantId) => room.selectVariant(item.id, variantId)}
                onSaveDimensions={saveDimensions(item.productId, item.variantId)}
                onClearDimensions={() => {
                  void room.clearDimensions(item.productId, item.variantId).then((cleared) => {
                    if (cleared) onDimensionsChanged();
                  });
                }}
              />
            ))}
          </ul>
        </>
      )}

      <p className="flex gap-1.5 text-[11px] leading-relaxed text-muted-foreground">
        <Info className="mt-px size-3.5 shrink-0" aria-hidden="true" />
        Lead times are not in this catalog for any piece. Availability is as of {snapshotDate}; confirm both with the vendor before promising dates.
      </p>
    </div>
  );
}

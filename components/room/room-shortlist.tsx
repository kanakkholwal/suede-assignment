'use client';

import { ArrowRight, Armchair } from 'lucide-react';
import type { ReactNode } from 'react';

import { useRoomStore } from '@/components/room/room-provider';
import { ShortlistItem } from '@/components/room/shortlist-item';
import { Button } from '@/components/ui/button';
import { formatCalendarDate } from '@/lib/format';
import { countGaps, itemGaps } from '@/lib/shortlist-gaps';
import type { RoomStore } from '@/lib/use-room';

interface RoomShortlistProps {
  capturedAt: string;
  /** Called after the designer saves or clears a measurement, so search can re-rank. */
  onDimensionsChanged: () => void;
}

function StatusDot({ tone, children }: { tone: string; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`size-1.5 rounded-full ${tone}`} aria-hidden="true" />
      {children}
    </span>
  );
}

function plural(count: number, one: string, many: string): string {
  return `${count} ${count === 1 ? one : many}`;
}

/** The room's working shortlist and everything still missing before it can be presented. */
export function RoomShortlist({ capturedAt, onDimensionsChanged }: RoomShortlistProps) {
  const room = useRoomStore();
  const { snapshot } = room;

  if (room.loading) return <p role="status" className="p-4 text-sm text-muted-foreground">Loading room…</p>;
  if (!snapshot) return <p role="alert" className="p-4 text-sm text-destructive-strong">{room.error ?? 'Room unavailable.'}</p>;

  const snapshotDate = capturedAt ? formatCalendarDate(capturedAt) : 'the snapshot date';
  const productsById = new Map(snapshot.products.map((product) => [product.id, product]));
  const rows = snapshot.items.flatMap((item) => {
    const product = productsById.get(item.productId);
    return product ? [{ item, product, gaps: itemGaps(item, product, snapshotDate) }] : [];
  });
  const totals = countGaps(rows.flatMap((row) => row.gaps));

  const saveDimensions = (productId: string, variantId: string | null) => async (values: Parameters<RoomStore['setDimensions']>[2], note: string) => {
    const saved = await room.setDimensions(productId, variantId, values, note);
    if (saved) onDimensionsChanged();
    return saved;
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="flex shrink-0 items-baseline justify-between gap-2 px-4 pt-4 pb-1">
        <h2 className="text-sm font-semibold text-foreground">Shortlist</h2>
        <span className="text-xs tabular-nums text-muted-foreground">{plural(rows.length, 'piece', 'pieces')}</span>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3">
        {room.error ? <p role="alert" className="mb-3 text-xs text-destructive-strong">{room.error}</p> : null}
        {rows.length === 0 ? (
          <div className="flex flex-col items-center gap-2 px-4 py-10 text-center">
            <span className="grid size-10 place-items-center rounded-full bg-muted text-muted-foreground">
              <Armchair className="size-5" aria-hidden="true" />
            </span>
            <p className="text-sm font-medium text-foreground">No pieces yet</p>
            <p className="max-w-56 text-xs text-muted-foreground">Tap <span className="font-medium text-foreground">+</span> on any photo to check that piece against this room.</p>
          </div>
        ) : (
          <>
            <p className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground" aria-live="polite">
              {totals.blocker ? <StatusDot tone="bg-destructive">{plural(totals.blocker, 'needs a size', 'need a size')}</StatusDot> : null}
              {totals.check ? <StatusDot tone="bg-warning">{plural(totals.check, 'thing', 'things')} to confirm</StatusDot> : null}
              {!totals.blocker && !totals.check ? <StatusDot tone="bg-success">Ready for the floor plan</StatusDot> : null}
            </p>
            <ul className="flex flex-col">
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
      </div>

      {rows.length ? (
        <footer className="shrink-0 p-3 pt-1">
          <Button href="/room?view=plan" className="w-full">
            Open floor plan <ArrowRight aria-hidden="true" />
          </Button>
        </footer>
      ) : null}
    </div>
  );
}

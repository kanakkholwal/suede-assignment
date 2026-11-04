'use client';

import { MoveDown, RotateCw, Ruler, Undo2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { DimensionForm } from '@/components/room/dimension-form';
import { ResolvedDimensionLine } from '@/components/shared/dimension-line';
import { Button } from '@/components/ui/button';
import type { CatalogProduct } from '@/data/product-types';
import { type DimensionValues, hasFootprint } from '@/lib/dimensions';
import { frontSide, wallDistances } from '@/lib/geometry';
import { type PlanPiece, shortName } from '@/lib/plan-model';
import type { Room, RoomItem } from '@/lib/room-state';
import { formatInches } from '@/lib/units';

interface PiecesPanelProps {
  room: Room;
  items: readonly RoomItem[];
  products: ReadonlyMap<string, CatalogProduct>;
  pieces: readonly PlanPiece[];
  selectedId: string | null;
  disabled: boolean;
  onSelect: (id: string) => void;
  onPlace: (item: RoomItem, product: CatalogProduct) => void;
  onRotate: (piece: PlanPiece) => void;
  onUnplace: (id: string) => void;
  onSaveDimensions: (item: RoomItem, values: DimensionValues, note: string) => Promise<boolean>;
}

function Thumb({ product, variantId }: { product: CatalogProduct; variantId: string | null }) {
  const image = product.variants.find((variant) => variant.id === variantId)?.image ?? product.images[0];
  return (
    <span className="relative size-10 shrink-0 overflow-hidden rounded-md bg-[#ebe7e1]">
      {image ? <Image src={image.src} alt="" fill sizes="40px" className="object-cover" /> : null}
    </span>
  );
}

function Inspector({ room, piece, disabled, onRotate, onUnplace }: { room: Room; piece: PlanPiece; disabled: boolean; onRotate: () => void; onUnplace: () => void }) {
  const distances = wallDistances(room, piece.rect);
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-primary/40 bg-white p-3.5">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#877c72]">Selected · facing {frontSide(piece.rotation)}</p>
        <p className="mt-1 font-serif text-lg leading-tight text-foreground">{piece.product.name}</p>
      </div>
      <ResolvedDimensionLine dimensions={piece.item.dimensions} />
      <dl className="grid grid-cols-4 gap-1 text-center text-[11px]">
        {(['north', 'east', 'south', 'west'] as const).map((wall) => (
          <div key={wall} className="rounded-md bg-accent px-1 py-1.5">
            <dt className="text-muted-foreground">{wall[0].toUpperCase()}</dt>
            <dd className="font-medium tabular-nums text-foreground">{distances[wall] < 0 ? 'through' : formatInches(distances[wall])}</dd>
          </div>
        ))}
      </dl>
      <div className="flex gap-2">
        <Button size="xs" variant="outline" onClick={onRotate} disabled={disabled}>
          <RotateCw aria-hidden="true" /> Rotate
        </Button>
        <Button size="xs" variant="ghost" onClick={onUnplace} disabled={disabled}>
          <Undo2 aria-hidden="true" /> Take off plan
        </Button>
      </div>
      <p className="text-[11px] leading-relaxed text-muted-foreground">Drag to move, or use arrow keys (Shift for 6″). R rotates. Pieces snap flush to walls.</p>
    </div>
  );
}

/** The selected piece's controls, plus every shortlisted piece: placed, ready, or missing a size. */
export function PiecesPanel({
  room,
  items,
  products,
  pieces,
  selectedId,
  disabled,
  onSelect,
  onPlace,
  onRotate,
  onUnplace,
  onSaveDimensions,
}: PiecesPanelProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const selected = pieces.find((piece) => piece.id === selectedId);
  const placedIds = new Set(pieces.map((piece) => piece.id));

  return (
    <section aria-labelledby="pieces-title" className="flex flex-col gap-3">
      <h2 id="pieces-title" className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#84776e]">Pieces</h2>
      {selected ? (
        <Inspector room={room} piece={selected} disabled={disabled} onRotate={() => onRotate(selected)} onUnplace={() => onUnplace(selected.id)} />
      ) : null}

      {items.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          The shortlist is empty. <Link href="/catalog" className="text-primary underline underline-offset-4">Add pieces in the catalog</Link>.
        </p>
      ) : (
        <ul className="flex flex-col divide-y divide-border rounded-lg border border-border bg-white">
          {items.map((item) => {
            const product = products.get(item.productId);
            if (!product) return null;
            const placed = placedIds.has(item.id);
            const sized = hasFootprint(item.dimensions);
            return (
              <li key={item.id} className="flex flex-col gap-2 p-2.5">
                <div className="flex items-center gap-2.5">
                  <Thumb product={product} variantId={item.variantId} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm text-foreground">{shortName(product)}</span>
                    <span className="block text-[11px] text-muted-foreground">
                      {placed ? 'On the plan' : sized ? 'Ready to place' : 'Needs width and depth'}
                    </span>
                  </span>
                  {placed ? (
                    <Button size="xs" variant="ghost" onClick={() => onSelect(item.id)} aria-label={`Select ${product.name}`}>
                      Select
                    </Button>
                  ) : sized ? (
                    <Button size="xs" variant="outline" disabled={disabled} onClick={() => onPlace(item, product)}>
                      <MoveDown aria-hidden="true" /> Place
                    </Button>
                  ) : (
                    <Button size="xs" variant="outline" disabled={disabled} onClick={() => setEditingId(item.id)}>
                      <Ruler aria-hidden="true" /> Enter size
                    </Button>
                  )}
                </div>
                {editingId === item.id ? (
                  <DimensionForm
                    current={item.dimensions}
                    onSave={(values, note) => onSaveDimensions(item, values, note)}
                    onCancel={() => setEditingId(null)}
                  />
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

'use client';

import { MoveDown, Ruler } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

import { SizeEditor } from '@/components/room/size-editor';
import { Button, button } from '@/components/ui/button';
import type { CatalogProduct } from '@/data/product-types';
import { type DimensionValues, hasFootprint } from '@/lib/dimensions';
import { type PlanPiece, shortName } from '@/lib/plan-model';
import type { RoomItem } from '@/lib/room-state';
import { formatDimensionTriple } from '@/lib/units';
import { cn } from '@/lib/utils';

interface PiecesPanelProps {
  items: readonly RoomItem[];
  products: ReadonlyMap<string, CatalogProduct>;
  pieces: readonly PlanPiece[];
  selectedId: string | null;
  disabled: boolean;
  onSelect: (id: string) => void;
  onPlace: (item: RoomItem, product: CatalogProduct) => void;
  onSaveDimensions: (item: RoomItem, values: DimensionValues, note: string) => Promise<boolean>;
}

function Thumb({ product, variantId }: { product: CatalogProduct; variantId: string | null }) {
  const image = product.variants.find((variant) => variant.id === variantId)?.image ?? product.images[0];
  return (
    <span className="relative size-10 shrink-0 overflow-hidden rounded-md bg-muted">
      {image ? <Image src={image.src} alt="" fill sizes="40px" className="object-cover" /> : null}
    </span>
  );
}

/** Every shortlisted piece: on the plan, ready to place, or missing a size. */
export function PiecesPanel({ items, products, pieces, selectedId, disabled, onSelect, onPlace, onSaveDimensions }: PiecesPanelProps) {
  const placedIds = new Set(pieces.map((piece) => piece.id));

  if (items.length === 0) {
    return (
      <p className="px-1 py-6 text-center text-sm text-muted-foreground">
        The shortlist is empty. <Link href="/catalog" className="font-medium text-primary underline-offset-4 hover:underline">Add pieces in the catalog</Link>.
      </p>
    );
  }

  return (
    <ul aria-label="Pieces" className="-mx-1.5 flex flex-col">
      {items.map((item) => {
        const product = products.get(item.productId);
        if (!product) return null;
        const placed = placedIds.has(item.id);
        const sized = hasFootprint(item.dimensions);
        const selected = item.id === selectedId;
        const { width, depth, height } = item.dimensions;
        return (
          <li key={item.id} className="enter flex flex-col gap-1">
            <div className={cn('flex items-center gap-2.5 rounded-lg p-1.5 transition-colors duration-(--duration-fast)', selected ? 'bg-primary/[0.07]' : placed && 'hover:bg-foreground/[0.04]')}>
              <Thumb product={product} variantId={item.variantId} />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm text-foreground">{shortName(product)}</span>
                <span className="block truncate text-xs tabular-nums text-muted-foreground">
                  {sized ? formatDimensionTriple(width.value, depth.value, height.value) : 'Needs width and depth'}
                  {placed ? ' · on the plan' : ''}
                </span>
              </span>
              {placed ? (
                <Button size="xs" variant="ghost" onClick={() => onSelect(item.id)} aria-label={`Select ${product.name}`} aria-pressed={selected}>
                  {selected ? 'Selected' : 'Select'}
                </Button>
              ) : sized ? (
                <Button size="xs" variant="default" disabled={disabled} onClick={() => onPlace(item, product)}>
                  <MoveDown aria-hidden="true" /> Place
                </Button>
              ) : (
                <SizeEditor
                  current={item.dimensions}
                  onSave={(values, note) => onSaveDimensions(item, values, note)}
                  disabled={disabled}
                  triggerClassName={button({ variant: 'outline', size: 'xs' })}
                >
                  <Ruler aria-hidden="true" /> Enter size
                </SizeEditor>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

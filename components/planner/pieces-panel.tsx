'use client';

import { MoveDown, Ruler } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

import { OptionPicker } from '@/components/room/option-picker';
import { SizeEditor } from '@/components/room/size-editor';
import { Button, button } from '@/components/ui/button';
import type { CatalogProduct } from '@/data/product-types';
import { type DimensionValues, hasFootprint, type ResolvedDimensions } from '@/lib/dimensions';
import { pieceKind } from '@/lib/piece-kind';
import { footprintOf, type PlanPiece, shortName } from '@/lib/plan-model';
import type { RoomItem } from '@/lib/room-state';
import { typicalLabel } from '@/lib/typical-size';
import { formatDimensionTriple, formatInches } from '@/lib/units';
import { useRoomHref } from '@/lib/url-state';
import { cn } from '@/lib/utils';

interface PiecesPanelProps {
  items: readonly RoomItem[];
  products: ReadonlyMap<string, CatalogProduct>;
  pieces: readonly PlanPiece[];
  selectedId: string | null;
  disabled: boolean;
  onSelect: (id: string) => void;
  onPlace: (item: RoomItem, product: CatalogProduct) => void;
  onSelectVariant: (item: RoomItem, variantId: string) => void;
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

/** Names the missing side, so a width known from the chosen option is never reported as unknown. */
function missing(dimensions: ResolvedDimensions): string {
  if (dimensions.width.value !== null) return `${formatInches(dimensions.width.value)} wide · depth unknown`;
  if (dimensions.depth.value !== null) return `${formatInches(dimensions.depth.value)} deep · width unknown`;
  return 'Size unknown';
}

/** Every shortlisted piece: on the plan, ready to place, or placeable at a typical size until its own is known. */
export function PiecesPanel({ items, products, pieces, selectedId, disabled, onSelect, onPlace, onSelectVariant, onSaveDimensions }: PiecesPanelProps) {
  const placed = new Map(pieces.map((piece) => [piece.id, piece]));
  const roomHref = useRoomHref();

  if (items.length === 0) {
    return (
      <p className="px-1 py-6 text-center text-sm text-muted-foreground">
        The shortlist is empty. <Link href={roomHref('/catalog')} className="font-medium text-primary underline-offset-4 hover:underline">Add pieces in the catalog</Link>.
      </p>
    );
  }

  return (
    <ul aria-label="Pieces" className="-mx-1.5 flex flex-col gap-1">
      {items.map((item) => {
        const product = products.get(item.productId);
        if (!product) return null;
        const piece = placed.get(item.id);
        const sized = hasFootprint(item.dimensions);
        const selected = item.id === selectedId;
        const { width, depth, height } = item.dimensions;
        const drawn = footprintOf(item, product);
        const kind = typicalLabel(pieceKind(product));
        const needsOption = !item.variantId && product.variants.length > 1;
        return (
          <li key={item.id} className={cn('enter flex flex-col gap-2 rounded-lg p-1.5 transition-colors duration-(--duration-fast)', selected ? 'bg-primary/7' : piece && 'hover:bg-foreground/4')}>
            <div className="flex items-center gap-2.5">
              <Thumb product={product} variantId={item.variantId} />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm text-foreground">{shortName(product)}</span>
                <span className="block truncate text-xs tabular-nums text-muted-foreground">
                  {sized ? formatDimensionTriple(width.value, depth.value, height.value) : piece ? `Drawn as ${kind}` : missing(item.dimensions)}
                  {piece ? ' · on the plan' : ''}
                </span>
              </span>
              {piece ? (
                <Button size="xs" variant="ghost" onClick={() => onSelect(item.id)} aria-label={`Select ${product.name}`} aria-pressed={selected}>
                  {selected ? 'Selected' : 'Select'}
                </Button>
              ) : sized ? (
                <Button size="xs" variant="default" disabled={disabled} onClick={() => onPlace(item, product)}>
                  <MoveDown aria-hidden="true" /> Place
                </Button>
              ) : null}
            </div>
            {sized ? null : (
              <div className="flex flex-col gap-1.5 pl-12.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  {needsOption ? <OptionPicker product={product} value={item.variantId} disabled={disabled} onChange={(variantId) => onSelectVariant(item, variantId)} /> : null}
                  {piece ? null : (
                    <Button size="xs" variant="default" disabled={disabled} onClick={() => onPlace(item, product)}>
                      <MoveDown aria-hidden="true" /> Place at typical size
                    </Button>
                  )}
                  <SizeEditor
                    current={item.dimensions}
                    onSave={(values, note) => onSaveDimensions(item, values, note)}
                    disabled={disabled}
                    triggerClassName={button({ variant: 'outline', size: 'xs' })}
                  >
                    <Ruler aria-hidden="true" /> Enter size
                  </SizeEditor>
                </div>
                <p className="text-xs text-muted-foreground">
                  {piece
                    ? 'Dashed until you enter its real size.'
                    : `Draws ${kind}, ${formatInches(drawn.widthIn)} × ${formatInches(drawn.depthIn)}, dashed until you enter its real size.`}
                </p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

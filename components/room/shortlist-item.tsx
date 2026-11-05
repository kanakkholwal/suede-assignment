'use client';

import Image from 'next/image';

import { Ruler, X } from '@/components/icons';
import { OptionPicker } from '@/components/room/option-picker';
import { SizeEditor } from '@/components/room/size-editor';
import { SourceBadge } from '@/components/shared/source-badge';
import { button } from '@/components/ui/button';
import type { CatalogProduct } from '@/data/product-types';
import { type DimensionValues, footprintConfidence, hasFootprint } from '@/lib/dimensions';
import { formatPrice } from '@/lib/format';
import type { RoomItem } from '@/lib/room-state';
import type { Gap, GapKind } from '@/lib/shortlist-gaps';
import { formatDimensionTriple } from '@/lib/units';
import { cn } from '@/lib/utils';

const GAP_LABEL: Record<GapKind, string> = {
  'size-missing': 'No size on file',
  'size-placeholder': 'Placeholder size',
  'size-from-title': 'Size from title only',
  option: 'Option not chosen',
  unavailable: 'Unavailable',
};

interface ShortlistItemProps {
  item: RoomItem;
  product: CatalogProduct;
  gaps: readonly Gap[];
  disabled: boolean;
  onRemove: () => void;
  onSelectVariant: (variantId: string | null) => void;
  onSaveDimensions: (values: DimensionValues, note: string) => Promise<boolean>;
  onClearDimensions: () => void;
}

/** One shortlisted piece: what it is, what is still open, and the two fixes, each on one line. */
export function ShortlistItem({ item, product, gaps, disabled, onRemove, onSelectVariant, onSaveDimensions, onClearDimensions }: ShortlistItemProps) {
  const variant = product.variants.find((candidate) => candidate.id === item.variantId);
  const image = variant?.image ?? product.images[0];
  const hasDesignerEntry = [item.dimensions.width, item.dimensions.depth, item.dimensions.height].some((field) => field.source === 'designer');
  const sized = hasFootprint(item.dimensions);
  const { width, depth, height } = item.dimensions;
  const meta = [product.brand, variant ? `${variant.label || 'Default'} · ${formatPrice(variant.priceCents)}` : null].filter(Boolean).join(' · ');

  return (
    <li className="group/item enter grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-3 py-3">
      <div className="relative size-10 overflow-hidden rounded-lg bg-muted">
        {image ? <Image src={image.src} alt="" fill sizes="40px" className="object-cover" /> : null}
      </div>
      <div className="flex min-w-0 flex-col gap-2">
        <div className="flex items-start gap-2">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm leading-5 font-medium text-foreground">{product.name}</p>
            <p className="truncate text-xs leading-4 text-muted-foreground">{meta}</p>
          </div>
          <button
            type="button"
            onClick={onRemove}
            disabled={disabled}
            aria-label={`Remove ${product.name} from room`}
            className="-mt-0.5 -mr-1 grid size-6 shrink-0 place-items-center rounded-md text-muted-foreground outline-none transition-[background-color,color,opacity] duration-(--duration-fast) hover:bg-foreground/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 pointer-fine:opacity-0 pointer-fine:group-hover/item:opacity-100 pointer-fine:focus-visible:opacity-100"
          >
            <X className="size-3.5" aria-hidden="true" />
          </button>
        </div>

        {sized ? (
          <p className="flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground">
            <span className="tabular-nums text-foreground">{formatDimensionTriple(width.value, depth.value, height.value)}</span>
            <SourceBadge source={footprintConfidence(item.dimensions)} />
          </p>
        ) : null}

        {gaps.length ? (
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground" aria-label="Still to check">
            {gaps.map((gap) => (
              <li key={gap.kind} title={gap.message} className="inline-flex items-center gap-1.5">
                <span className={cn('size-1.5 rounded-full', gap.severity === 'blocker' ? 'bg-destructive' : 'bg-warning')} aria-hidden="true" />
                {GAP_LABEL[gap.kind]}
                <span className="sr-only">: {gap.message}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="flex flex-wrap items-center gap-1.5">
          {product.variants.length > 1 ? (
            <OptionPicker product={product} value={item.variantId} disabled={disabled} onChange={onSelectVariant} />
          ) : null}
          <SizeEditor
            current={item.dimensions}
            onSave={onSaveDimensions}
            onClear={hasDesignerEntry ? onClearDimensions : undefined}
            disabled={disabled}
            triggerClassName={button({ variant: sized ? 'ghost' : 'outline', size: 'xs', className: sized ? 'text-muted-foreground' : '' })}
          >
            <Ruler aria-hidden="true" />
            {!sized ? 'Enter size' : hasDesignerEntry ? 'Edit my size' : 'Own size'}
          </SizeEditor>
        </div>
      </div>
    </li>
  );
}

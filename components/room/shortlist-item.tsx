'use client';

import { CircleAlert, Ruler, TriangleAlert, X } from '@/components/icons';
import Image from 'next/image';
import { useId, useState } from 'react';

import { SizeEditor } from '@/components/room/size-editor';
import { button } from '@/components/ui/button';
import { NativeSelect } from '@/components/ui/native-select';
import { ResolvedDimensionLine } from '@/components/shared/dimension-line';
import type { CatalogProduct } from '@/data/product-types';
import type { DimensionValues } from '@/lib/dimensions';
import { formatPrice } from '@/lib/format';
import type { RoomItem } from '@/lib/room-state';
import type { Gap } from '@/lib/shortlist-gaps';

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

export function ShortlistItem({
  item,
  product,
  gaps,
  disabled,
  onRemove,
  onSelectVariant,
  onSaveDimensions,
  onClearDimensions,
}: ShortlistItemProps) {
  const selectId = useId();
  const variant = product.variants.find((candidate) => candidate.id === item.variantId);
  const image = variant?.image ?? product.images[0];
  const hasDesignerEntry = [item.dimensions.width, item.dimensions.depth, item.dimensions.height].some(
    (field) => field.source === 'designer',
  );
  const sizeBlocked = gaps.some((gap) => gap.kind === 'size-missing');
  // The option picker already says "Choose an option"; repeating it as a gap is noise.
  const notes = gaps.filter((gap) => gap.kind !== 'size-missing' && gap.kind !== 'option');

  return (
    <li className="enter grid grid-cols-[3rem_minmax(0,1fr)] gap-x-3 gap-y-2.5 py-3">
      <div className="relative size-12 overflow-hidden rounded-lg bg-muted">
        {image ? <Image src={image.src} alt="" fill sizes="48px" className="object-cover" /> : null}
      </div>
      <div className="flex min-w-0 items-start gap-2">
        <div className="flex min-w-0 flex-1 flex-col">
          <p className="line-clamp-2 text-sm leading-5 font-medium text-foreground">{product.name}</p>
          <p className="truncate text-sm text-muted-foreground">{product.brand}</p>
        </div>
        <button
          type="button"
          onClick={onRemove}
          disabled={disabled}
          aria-label={`Remove ${product.name} from room`}
          className="-mt-1 -mr-1.5 grid size-8 shrink-0 place-items-center rounded-md text-muted-foreground outline-none transition-[background-color,color,scale] duration-(--duration-fast) hover:bg-foreground/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-icon) disabled:opacity-50"
        >
          <X className="size-3.5" aria-hidden="true" />
        </button>
      </div>

      <div className="col-start-2 flex min-w-0 flex-col gap-2">
      {product.variants.length > 1 ? (
        <div>
          <label htmlFor={selectId} className="sr-only">Option for {product.name}</label>
          <NativeSelect
            id={selectId}
            size="sm"
            value={item.variantId ?? ''}
            disabled={disabled}
            onChange={(event) => onSelectVariant(event.target.value || null)}
            className="w-full"
          >
            <option value="">Choose an option…</option>
            {product.variants.map((candidate) => (
              <option key={candidate.id} value={candidate.id}>
                {candidate.label || 'Default'} · {formatPrice(candidate.priceCents)}
                {candidate.available ? '' : ' · unavailable'}
              </option>
            ))}
          </NativeSelect>
        </div>
      ) : null}

      {sizeBlocked ? (
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <CircleAlert className="size-3.5 shrink-0 text-destructive-strong" aria-label="Blocks fit check" />
          No width and depth on file, so it can’t go on the plan yet.
        </p>
      ) : (
        <ResolvedDimensionLine dimensions={item.dimensions} />
      )}

      {notes.length ? (
        <ul className="flex flex-col gap-1">
          {notes.map((gap) => (
            <li key={gap.kind} className="flex items-start gap-1.5 text-xs text-muted-foreground">
              <TriangleAlert className="mt-px size-3.5 shrink-0 text-warning-strong" aria-label="Check before presenting" />
              <span>{gap.message}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <SizeEditor
        current={item.dimensions}
        onSave={onSaveDimensions}
        onClear={hasDesignerEntry ? onClearDimensions : undefined}
        disabled={disabled}
        triggerClassName={
          sizeBlocked
            ? button({ variant: 'outline', size: 'sm', className: 'w-fit' })
            : 'inline-flex w-fit items-center gap-1.5 rounded-sm text-xs text-muted-foreground underline-offset-4 outline-none hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 [&_svg]:size-3.5'
        }
      >
        <Ruler aria-hidden="true" />
        {sizeBlocked ? 'Enter size' : hasDesignerEntry ? 'Edit my measurement' : 'Use my own measurement'}
      </SizeEditor>
      </div>
    </li>
  );
}

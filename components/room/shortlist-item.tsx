'use client';

import { CircleAlert, Ruler, TriangleAlert, X } from 'lucide-react';
import Image from 'next/image';
import { useId, useState } from 'react';

import { DimensionForm } from '@/components/room/dimension-form';
import { Button } from '@/components/ui/button';
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
  const [editing, setEditing] = useState(false);
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
    <li className="enter flex flex-col gap-2.5 rounded-lg py-3">
      <div className="flex gap-3">
        <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-muted">
          {image ? <Image src={image.src} alt="" fill sizes="56px" className="object-cover" /> : null}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <p className="truncate text-xs text-muted-foreground">{product.brand}</p>
          <p className="line-clamp-2 text-sm leading-snug font-medium text-foreground">{product.name}</p>
        </div>
        <button
          type="button"
          onClick={onRemove}
          disabled={disabled}
          aria-label={`Remove ${product.name} from room`}
          className="grid size-7 shrink-0 place-items-center rounded-md text-muted-foreground outline-none transition-[background-color,color,scale] duration-(--duration-fast) hover:bg-foreground/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-icon) disabled:opacity-50"
        >
          <X className="size-3.5" aria-hidden="true" />
        </button>
      </div>

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

      {editing ? (
        <DimensionForm
          current={item.dimensions}
          onSave={onSaveDimensions}
          onCancel={() => setEditing(false)}
          onClear={hasDesignerEntry ? () => {
            onClearDimensions();
            setEditing(false);
          } : undefined}
        />
      ) : sizeBlocked ? (
        <Button size="xs" variant="outline" className="w-fit" disabled={disabled} onClick={() => setEditing(true)}>
          <Ruler aria-hidden="true" /> Enter size
        </Button>
      ) : (
        <button
          type="button"
          onClick={() => setEditing(true)}
          disabled={disabled}
          className="inline-flex w-fit items-center gap-1.5 rounded-sm text-xs text-muted-foreground underline-offset-4 outline-none hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
        >
          <Ruler className="size-3.5" aria-hidden="true" />
          {hasDesignerEntry ? 'Edit my measurement' : 'Use my own measurement'}
        </button>
      )}
    </li>
  );
}

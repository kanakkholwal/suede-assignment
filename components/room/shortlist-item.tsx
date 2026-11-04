'use client';

import { CircleAlert, Ruler, TriangleAlert, X } from 'lucide-react';
import Image from 'next/image';
import { useId, useState } from 'react';

import { DimensionForm } from '@/components/room/dimension-form';
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

  return (
    <li className="flex flex-col gap-2.5 py-4 first:pt-0 last:pb-0">
      <div className="flex gap-3">
        <div className="relative size-14 shrink-0 overflow-hidden rounded-md bg-[#ebe7e1]">
          {image ? <Image src={image.src} alt="" fill sizes="56px" className="object-cover" /> : null}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#877c72]">{product.brand}</p>
          <p className="line-clamp-2 font-serif text-base leading-tight tracking-[-0.02em] text-foreground">{product.name}</p>
        </div>
        <button
          type="button"
          onClick={onRemove}
          disabled={disabled}
          aria-label={`Remove ${product.name} from room`}
          className="grid size-7 shrink-0 place-items-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground disabled:opacity-50"
        >
          <X className="size-3.5" aria-hidden="true" />
        </button>
      </div>

      {product.variants.length > 1 ? (
        <div>
          <label htmlFor={selectId} className="sr-only">Option for {product.name}</label>
          <select
            id={selectId}
            value={item.variantId ?? ''}
            disabled={disabled}
            onChange={(event) => onSelectVariant(event.target.value || null)}
            className="h-8 w-full rounded-md border border-input bg-white px-2 text-xs text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/15"
          >
            <option value="">Choose an option…</option>
            {product.variants.map((candidate) => (
              <option key={candidate.id} value={candidate.id}>
                {candidate.label || 'Default'} · {formatPrice(candidate.priceCents)}
                {candidate.available ? '' : ' · unavailable'}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <ResolvedDimensionLine dimensions={item.dimensions} />

      {gaps.length ? (
        <ul className="flex flex-col gap-1">
          {gaps.map((gap) => (
            <li
              key={gap.kind}
              className={`flex items-start gap-1.5 text-xs leading-snug ${gap.severity === 'blocker' ? 'text-destructive-strong' : 'text-warning-strong'}`}
            >
              {gap.severity === 'blocker' ? (
                <CircleAlert className="mt-px size-3.5 shrink-0" aria-label="Blocks fit check" />
              ) : (
                <TriangleAlert className="mt-px size-3.5 shrink-0" aria-label="Check before presenting" />
              )}
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
      ) : (
        <button
          type="button"
          onClick={() => setEditing(true)}
          disabled={disabled}
          className={`inline-flex w-fit items-center gap-1.5 text-xs font-medium underline-offset-4 hover:underline disabled:opacity-50 ${sizeBlocked ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <Ruler className="size-3.5" aria-hidden="true" />
          {hasDesignerEntry ? 'Edit my measurement' : sizeBlocked ? 'Enter size' : 'Enter my own measurement'}
        </button>
      )}
    </li>
  );
}

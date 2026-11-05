'use client';

import { useState } from 'react';

import { Check, ChevronDown } from '@/components/icons';
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, ComboboxTrigger } from '@/components/ui/combobox';
import type { CatalogProduct } from '@/data/product-types';
import { formatPrice } from '@/lib/format';
import { cn } from '@/lib/utils';

interface OptionPickerProps {
  product: CatalogProduct;
  value: string | null;
  disabled?: boolean;
  onChange: (variantId: string) => void;
}

/** Pick one of a product's options; searchable because some products carry a dozen or more. */
export function OptionPicker({ product, value, disabled, onChange }: OptionPickerProps) {
  const [open, setOpen] = useState(false);
  const selected = product.variants.find((variant) => variant.id === value);

  return (
    <Combobox open={open} onOpenChange={setOpen}>
      <ComboboxTrigger size="xs" disabled={disabled} aria-label={`Option for ${product.name}`} className="w-auto max-w-44 gap-1">
        <span className={cn('min-w-0 truncate', !selected && 'text-muted-foreground')}>{selected ? selected.label || 'Default' : 'Choose option'}</span>
        <ChevronDown className="size-3 text-muted-foreground" aria-hidden="true" />
      </ComboboxTrigger>
      <ComboboxContent size="sm" align="start" className="w-72">
        <ComboboxInput placeholder="Search options" />
        <ComboboxList>
          <ComboboxEmpty>No option matches.</ComboboxEmpty>
          {product.variants.map((variant) => (
            <ComboboxItem
              key={variant.id}
              value={`${variant.label || 'Default'} ${variant.id}`}
              onSelect={() => {
                onChange(variant.id);
                setOpen(false);
              }}
            >
              <span className={cn('min-w-0 flex-1 truncate', !variant.available && 'text-muted-foreground')}>{variant.label || 'Default'}</span>
              <span className="text-xs tabular-nums text-muted-foreground">
                {variant.available ? formatPrice(variant.priceCents) : `Unavailable · ${formatPrice(variant.priceCents)}`}
              </span>
              <Check className={cn('size-3.5 text-primary', variant.id === value ? 'opacity-100' : 'opacity-0')} aria-hidden="true" />
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

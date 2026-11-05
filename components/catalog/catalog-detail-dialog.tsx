'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';

import type { CatalogProduct, ProductVariant } from '@/data/product-types';
import { AddToRoomButton } from '@/components/room/add-to-room-button';
import { ProductFacts } from '@/components/shared/product-facts';
import type { DimensionSummary } from '@/lib/dimensions';
import { formatPrice } from '@/lib/format';

export interface DetailRoomActions {
  inRoom: boolean;
  disabled: boolean;
  onToggle: (variantId: string | null) => void;
}

interface CatalogDetailDialogProps {
  product: CatalogProduct | null;
  selectedVariantId?: string | null;
  onClose: () => void;
  dimensions?: DimensionSummary;
  room?: DetailRoomActions;
}

interface VariantPickerProps {
  productId: string;
  productName: string;
  variants: readonly ProductVariant[];
  selectedVariant: ProductVariant | null;
  onSelect: (variantId: string) => void;
}

function initialVariantFor(variants: readonly ProductVariant[], initialVariantId: string | null) {
  return (
    variants.find((variant) => variant.id === initialVariantId) ??
    variants.find((variant) => variant.available) ??
    variants[0] ??
    null
  );
}

function VariantPicker({ productId, productName, variants, selectedVariant, onSelect }: VariantPickerProps) {
  if (!selectedVariant) return null;

  return (
    <section className="mt-7 flex flex-col gap-3" aria-labelledby="catalog-variants-title">
      <div className="flex items-baseline justify-between gap-4">
        <h3 id="catalog-variants-title" className="text-sm font-semibold text-foreground">Options</h3>
        <span className="text-xs tabular-nums text-muted-foreground">{variants.length} options</span>
      </div>
      <p className="text-xs text-muted-foreground">Each option has its own price and availability in the snapshot.</p>

      <div role="status" aria-live="polite" aria-label="Selected variant" className="flex items-center justify-between gap-4 rounded-lg bg-muted/70 px-3.5 py-3">
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">Selected option</p>
          <p className="mt-0.5 truncate text-sm font-medium text-foreground">{selectedVariant.label || 'Default option'}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-medium tabular-nums text-foreground">{formatPrice(selectedVariant.priceCents)}</p>
          <p className={`mt-0.5 text-xs ${selectedVariant.available ? 'text-success-strong' : 'text-muted-foreground'}`}>
            {selectedVariant.available ? 'Available to order' : 'Unavailable in snapshot'}
          </p>
        </div>
      </div>

      <fieldset>
        <legend className="text-xs text-muted-foreground">Choose an option</legend>
        <div className="mt-2 flex max-h-56 flex-col gap-0.5 overflow-y-auto pr-1" aria-label={`${productName} variants`}>
          {variants.map((variant) => {
            const isSelected = variant.id === selectedVariant.id;
            const label = variant.label || 'Default option';
            const availability = variant.available ? 'Available' : 'Unavailable';

            return (
              <label key={variant.id} className="block cursor-pointer">
                <input
                  type="radio"
                  name={`variant-${productId}`}
                  value={variant.id}
                  checked={isSelected}
                  onChange={() => onSelect(variant.id)}
                  aria-label={`${label}, ${formatPrice(variant.priceCents)}, ${availability}`}
                  className="peer sr-only"
                />
                <span className={`flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-sm text-foreground transition-[background-color,scale] duration-(--duration-fast) active:scale-(--press-scale-row) peer-focus-visible:ring-2 peer-focus-visible:ring-ring ${isSelected ? 'bg-primary/10' : 'hover:bg-foreground/[0.04]'}`}>
                  <span className="min-w-0 truncate">{label}</span>
                  <span className="flex shrink-0 items-center gap-2">
                    <span className="font-medium tabular-nums">{formatPrice(variant.priceCents)}</span>
                    <span className={variant.available ? 'text-success-strong' : 'text-muted-foreground'}>{availability}</span>
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>
    </section>
  );
}

interface CatalogDetailContentProps {
  product: CatalogProduct;
  initialVariantId: string | null;
  dimensions?: DimensionSummary;
  room?: DetailRoomActions;
}

function CatalogDetailContent({ product, initialVariantId, dimensions, room }: CatalogDetailContentProps) {
  const initialVariant = initialVariantFor(product.variants, initialVariantId);
  const [selectedVariantId, setSelectedVariantId] = useState(initialVariant?.id ?? null);
  const selectedVariant =
    product.variants.find((variant) => variant.id === selectedVariantId) ?? initialVariant;
  const image = selectedVariant?.image ?? product.images[0];
  const hasVariantImage = Boolean(selectedVariant?.image);

  return (
    <div className="grid gap-7 p-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)] sm:p-6">
      <figure>
        <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
          {image ? (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          ) : null}
        </div>
        <figcaption className="mt-2 text-xs text-muted-foreground">
          {hasVariantImage
            ? 'Image assigned to the selected option in the static staging snapshot.'
            : 'Primary product image captured with the static staging snapshot.'}
        </figcaption>
      </figure>
      <div className="flex min-w-0 flex-col">
        <p className="text-sm text-muted-foreground">{product.brand}</p>
        <h2 id="catalog-detail-title" className="mt-1.5 font-serif text-4xl leading-none text-foreground">{product.name}</h2>
        {room ? (
          <div className="mt-4 flex items-center gap-3">
            <AddToRoomButton
              productName={product.name}
              inRoom={room.inRoom}
              disabled={room.disabled}
              onToggle={() => room.onToggle(selectedVariant?.id ?? null)}
              size="default"
            />
            <p className="text-xs text-muted-foreground">
              {room.inRoom ? 'On the room shortlist.' : 'Adds the selected option to the room shortlist.'}
            </p>
          </div>
        ) : null}
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        <div className="mt-6"><ProductFacts product={product} dimensions={dimensions} /></div>
        <VariantPicker
          productId={product.id}
          productName={product.name}
          variants={product.variants}
          selectedVariant={selectedVariant}
          onSelect={setSelectedVariantId}
        />
      </div>
    </div>
  );
}

export function CatalogDetailDialog({ product, selectedVariantId = null, onClose, dimensions, room }: CatalogDetailDialogProps) {
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!product) return;

    triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();
    const onDocumentKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseRef.current();
      }
    };
    document.addEventListener('keydown', onDocumentKeyDown);

    return () => {
      document.removeEventListener('keydown', onDocumentKeyDown);
      triggerRef.current?.focus();
    };
  }, [product]);

  if (!product) return null;
  const trapFocus = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Tab' || !dialogRef.current) return;
    const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]):not([type="radio"]), input[type="radio"]:checked:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-end bg-foreground/25 p-0 transition-opacity duration-(--duration-backdrop) ease-(--ease-ui-out) starting:opacity-0 sm:place-items-center sm:p-6" onMouseDown={onClose}>
      <section ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="catalog-detail-title" onKeyDown={trapFocus} onMouseDown={(event) => event.stopPropagation()} className="max-h-[94svh] w-full max-w-4xl overflow-y-auto rounded-t-2xl bg-popover shadow-overlay transition-[opacity,scale,translate] duration-(--duration-overlay) ease-(--ease-out-quad) starting:translate-y-4 starting:opacity-0 sm:rounded-2xl sm:starting:translate-y-0 sm:starting:scale-(--modal-enter-scale) motion-reduce:starting:translate-y-0">
        <div className="sticky top-0 z-10 flex items-center justify-between bg-popover/90 py-2 pr-2 pl-4 backdrop-blur-sm sm:pl-6">
          <p className="text-xs text-muted-foreground">Catalog item</p>
          <button ref={closeButtonRef} type="button" aria-label="Close details" onClick={onClose} className="grid size-8 place-items-center rounded-lg text-muted-foreground outline-none transition-[background-color,color,scale] duration-(--duration-fast) hover:bg-foreground/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-icon)">
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        <CatalogDetailContent
          key={`${product.id}:${selectedVariantId ?? 'default'}`}
          product={product}
          initialVariantId={selectedVariantId}
          dimensions={dimensions}
          room={room}
        />
      </section>
    </div>
  );
}

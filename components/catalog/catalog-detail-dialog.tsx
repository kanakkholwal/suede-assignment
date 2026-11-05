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
    <section className="mt-6 border-t border-[#e4ded7] pt-5" aria-labelledby="catalog-variants-title">
      <div className="flex items-baseline justify-between gap-4">
        <h3 id="catalog-variants-title" className="font-serif text-2xl tracking-[-0.025em] text-[#29211d]">Variants</h3>
        <span className="text-xs tabular-nums text-[#776d65]">{variants.length} options</span>
      </div>
      <p className="mt-1 text-xs leading-relaxed text-[#796f67]">Choose an option to inspect its exact price and availability from the staging snapshot.</p>

      <div role="status" aria-live="polite" aria-label="Selected variant" className="mt-4 flex items-center justify-between gap-4 rounded-md border border-[#d9cec4] bg-[#f4efe9] px-3.5 py-3">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#77695f]">Selected option</p>
          <p className="mt-1 truncate text-sm font-medium text-[#2f2620]">{selectedVariant.label || 'Default option'}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-medium tabular-nums text-[#2f2620]">{formatPrice(selectedVariant.priceCents)}</p>
          <p className={`mt-0.5 text-xs ${selectedVariant.available ? 'text-[#586d5d]' : 'text-[#8a7465]'}`}>
            {selectedVariant.available ? 'Available to order' : 'Unavailable in snapshot'}
          </p>
        </div>
      </div>

      <fieldset className="mt-4">
        <legend className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#776c63]">Choose an option</legend>
        <div className="mt-2 max-h-56 space-y-1.5 overflow-y-auto pr-1" aria-label={`${productName} variants`}>
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
                <span className={`flex items-center justify-between gap-4 rounded-md border px-3 py-2.5 text-sm transition ${isSelected ? 'border-[#9e8069] bg-[#f4efe9] text-[#2f2620]' : 'border-[#e4ded7] bg-white/60 text-[#40362f] hover:border-[#cfc1b5] hover:bg-[#fcfaf7]'} peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#886b54]`}>
                  <span className="min-w-0 truncate">{label}</span>
                  <span className="flex shrink-0 items-center gap-2">
                    <span className="font-medium tabular-nums text-[#302720]">{formatPrice(variant.priceCents)}</span>
                    <span className={variant.available ? 'text-[#586d5d]' : 'text-[#8a7465]'}>{availability}</span>
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
    <div className="grid gap-7 p-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)] sm:p-7">
      <figure>
        <div className="relative aspect-square overflow-hidden rounded-lg bg-[#eeeae5]">
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
        <figcaption className="mt-2 text-[11px] leading-relaxed text-[#7d7167]">
          {hasVariantImage
            ? 'Image assigned to the selected option in the static staging snapshot.'
            : 'Primary product image captured with the static staging snapshot.'}
        </figcaption>
      </figure>
      <div className="flex min-w-0 flex-col">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7d7167]">{product.brand}</p>
        <h2 id="catalog-detail-title" className="mt-2 font-serif text-4xl leading-[0.96] tracking-[-0.04em] text-[#1f1814]">{product.name}</h2>
        {room ? (
          <div className="mt-4 flex items-center gap-3">
            <AddToRoomButton
              productName={product.name}
              inRoom={room.inRoom}
              disabled={room.disabled}
              onToggle={() => room.onToggle(selectedVariant?.id ?? null)}
              className="h-8 px-3"
            />
            <p className="text-xs text-muted-foreground">
              {room.inRoom ? 'On the room shortlist.' : 'Adds the selected option to the room shortlist.'}
            </p>
          </div>
        ) : null}
        <p className="mt-4 text-sm leading-relaxed text-[#635a52]">{product.description}</p>
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
    <div className="fixed inset-0 z-50 grid place-items-end bg-black/35 p-0 backdrop-blur-[1px] sm:place-items-center sm:p-6" onMouseDown={onClose}>
      <section ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="catalog-detail-title" onKeyDown={trapFocus} onMouseDown={(event) => event.stopPropagation()} className="max-h-[94svh] w-full max-w-4xl overflow-y-auto rounded-t-xl bg-[#fdfcfa] shadow-2xl sm:rounded-xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e6e0da] bg-[#fdfcfa]/95 px-5 py-4 backdrop-blur sm:px-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#806f63]">Catalog item</p>
          <button ref={closeButtonRef} type="button" aria-label="Close details" onClick={onClose} className="grid size-8 place-items-center rounded-full text-[#564b43] hover:bg-[#f0ece7] focus-visible:outline-2 focus-visible:outline-[#886b54]">
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

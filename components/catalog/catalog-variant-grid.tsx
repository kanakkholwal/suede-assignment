'use client';

import { Bookmark } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import type { CatalogVariantItem } from '@/lib/catalog-contract';
import type { LibraryCollection } from '@/lib/library-state';
import type { IsLibraryMutationBlocked } from '@/lib/use-library';
import { formatPrice } from '@/lib/format';
import { ProductActionsMenu } from '@/components/shared/product-actions-menu';
import type { CatalogProduct } from '@/data/product-types';

interface CatalogVariantGridProps {
  items: readonly CatalogVariantItem[];
  savedIds: readonly string[];
  collections: LibraryCollection[];
  isBlocked: IsLibraryMutationBlocked;
  onView: (product: CatalogProduct, variantId: string) => void;
  onToggleSaved: (productId: string) => void;
  onAddToCollection: (collectionId: string, productId: string) => void;
  onCreateCollection: (name: string, productId: string) => Promise<boolean>;
}

const PAGE_SIZE = 80;

/**
 * One card per returned SKU. Rendering incrementally keeps large API result
 * sets reviewable.
 */
export function CatalogVariantGrid({
  items,
  savedIds,
  collections,
  isBlocked,
  onView,
  onToggleSaved,
  onAddToCollection,
  onCreateCollection,
}: CatalogVariantGridProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleItems = items.slice(0, visibleCount);

  if (!items.length) {
    return (
      <div className="flex min-h-80 flex-1 flex-col items-center justify-center rounded-lg border border-dashed border-[#d8d0c8] bg-white/55 px-6 text-center">
        <p className="font-serif text-2xl text-[#2c241f]">No exact matches</p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#776d65]">Try clearing a filter or using a more exact phrase.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {visibleItems.map(({ key, product, variant }) => {
          const image = variant.image ?? product.images[0];
          const saved = savedIds.includes(product.id);
          const label = variant.label || 'Default option';
          return (
            <article key={key} className="group relative flex min-w-0 flex-col overflow-hidden rounded-lg border border-[#e1dcd6] bg-white shadow-[0_1px_1px_rgba(37,28,22,0.03)] transition hover:-translate-y-0.5 hover:border-[#cfc6bd] hover:shadow-[0_9px_24px_rgba(44,34,26,0.08)]">
              <div className="relative aspect-square overflow-hidden bg-[#ebe7e1]">
                {image ? <Image src={image.src} alt={`${product.name} — ${label}`} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" loading="lazy" className="object-cover transition duration-500 group-hover:scale-[1.025]" /> : null}
                {!variant.available ? <span className="absolute left-2.5 top-2.5 z-10 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#665b52] shadow-sm">Unavailable</span> : null}
                {saved ? <span className="absolute bottom-2.5 left-2.5 grid size-7 place-items-center rounded-full bg-[#2c2420] text-white shadow-sm"><Bookmark className="size-3.5 fill-current" aria-label="Saved" /></span> : null}
                <ProductActionsMenu product={product} saved={saved} collections={collections} isBlocked={isBlocked} onToggleSaved={onToggleSaved} onAddToCollection={onAddToCollection} onCreateCollection={onCreateCollection} className="absolute right-2.5 top-2.5" />
              </div>
              <div className="relative z-10 pointer-events-none flex min-h-32 flex-col gap-1.5 p-3.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#877c72]">{product.brand}</p>
                <h2 className="line-clamp-2 font-serif text-lg leading-tight tracking-[-0.025em] text-[#1e1814]">{product.name}</h2>
                <p className="line-clamp-1 text-xs text-[#6d6259]">{label}</p>
                <p className="mt-auto text-xs font-medium text-[#453a33]">{formatPrice(variant.priceCents)}</p>
              </div>
              <button type="button" aria-label={`View ${product.name}, ${label}`} onClick={() => onView(product, variant.id)} className="absolute inset-0 z-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#886b54]" />
            </article>
          );
        })}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-[#746a61]">
        <p>Showing {visibleItems.length.toLocaleString()} of {items.length.toLocaleString()} variants</p>
        {visibleItems.length < items.length ? (
          <button type="button" onClick={() => setVisibleCount((count) => Math.min(count + PAGE_SIZE, items.length))} className="rounded-md border border-[#d9d3cd] bg-white px-3 py-2 font-medium text-[#51443a] shadow-sm transition hover:bg-[#f4f0eb] focus-visible:outline-2 focus-visible:outline-[#886b54]">
            Load {Math.min(PAGE_SIZE, items.length - visibleItems.length).toLocaleString()} more
          </button>
        ) : null}
      </div>
    </div>
  );
}

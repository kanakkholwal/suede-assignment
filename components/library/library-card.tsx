'use client';

import { BookmarkMinus, Eye, FolderPlus } from 'lucide-react';
import Image from 'next/image';

import type { CatalogProduct } from '@/data/product-types';
import type { LibraryCollection } from '@/lib/library-state';
import type { IsLibraryMutationBlocked } from '@/lib/use-library';
import { formatPrice, startingPriceCents } from '@/lib/format';

interface LibraryCardProps {
  product: CatalogProduct;
  collections: LibraryCollection[];
  isBlocked: IsLibraryMutationBlocked;
  onView: (product: CatalogProduct) => void;
  onRemove: (productId: string) => void;
  onAddToCollection: (collectionId: string, productId: string) => void;
}

export function LibraryCard({ product, collections, isBlocked, onView, onRemove, onAddToCollection }: LibraryCardProps) {
  const productCollections = collections.filter((collection) => collection.productIds.includes(product.id));
  const availableCollections = collections.filter((collection) => !collection.productIds.includes(product.id));
  const price = startingPriceCents(product.variants);
  const image = product.images[0];

  return (
    <article className="group overflow-hidden rounded-lg border border-[#e1dcd6] bg-white shadow-[0_1px_1px_rgba(37,28,22,0.03)]">
      <button type="button" onClick={() => onView(product)} className="relative block aspect-[4/3] w-full overflow-hidden bg-[#ece8e2] text-left focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#886b54]">
        {image ? <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" loading="lazy" className="object-cover transition duration-500 group-hover:scale-[1.025]" /> : null}
        <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#574b43] shadow-sm"><Eye className="size-3" aria-hidden="true" /> View</span>
      </button>
      <div className="p-3.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#877c72]">{product.brand}</p>
        <h2 className="mt-1 font-serif text-xl leading-tight tracking-[-0.025em] text-[#1e1814]">{product.name}</h2>
        <p className="mt-1 text-sm text-[#6c625a]">{price === undefined ? 'Price not provided' : `From ${formatPrice(price)}`}</p>
        {productCollections.length ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {productCollections.map((collection) => <span key={collection.id} className="rounded-full bg-[#eee8e1] px-2 py-1 text-[10px] font-medium text-[#69594e]">{collection.name}</span>)}
          </div>
        ) : null}
        <div className="mt-4 flex items-center gap-2 border-t border-[#ede8e3] pt-3">
          <button type="button" disabled={isBlocked({ operation: 'toggleSaved', productId: product.id })} onClick={() => onRemove(product.id)} className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6b5544] hover:text-[#241c17] disabled:opacity-50">
            <BookmarkMinus className="size-3.5" aria-hidden="true" /> Remove
          </button>
          {availableCollections.length ? (
            <label className="ml-auto inline-flex items-center gap-1.5 text-xs text-[#72675e]">
              <FolderPlus className="size-3.5" aria-hidden="true" />
              <span className="sr-only">Add {product.name} to collection</span>
              <select value="" onChange={(event) => { if (event.target.value) onAddToCollection(event.target.value, product.id); }} className="max-w-30 bg-transparent text-xs outline-none">
                <option value="">Add to…</option>
                {availableCollections.map((collection) => <option key={collection.id} value={collection.id} disabled={isBlocked({ operation: 'addToCollection', collectionId: collection.id, productId: product.id })}>{collection.name}</option>)}
              </select>
            </label>
          ) : null}
        </div>
      </div>
    </article>
  );
}

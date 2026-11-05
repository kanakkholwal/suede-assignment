'use client';

import { Bookmark } from 'lucide-react';
import Image from 'next/image';

import type { CatalogProduct } from '@/data/product-types';
import type { LibraryCollection } from '@/lib/library-state';
import type { IsLibraryMutationBlocked } from '@/lib/use-library';
import { formatPrice, startingPriceCents } from '@/lib/format';
import { CardFitDetails } from '@/components/catalog/card-fit-details';
import type { ShortlistContext } from '@/components/room/add-to-room-button';
import { ProductActionsMenu } from '@/components/shared/product-actions-menu';

interface CatalogCardProps {
  product: CatalogProduct;
  saved: boolean;
  collections: LibraryCollection[];
  isBlocked: IsLibraryMutationBlocked;
  onView: (product: CatalogProduct) => void;
  onToggleSaved: (productId: string) => void;
  onAddToCollection: (collectionId: string, productId: string) => void;
  onCreateCollection: (name: string, productId: string) => Promise<boolean>;
  shortlist?: ShortlistContext;
}

export function CatalogCard({
  product,
  saved,
  collections,
  isBlocked,
  onView,
  onToggleSaved,
  onAddToCollection,
  onCreateCollection,
  shortlist,
}: CatalogCardProps) {
  const price = startingPriceCents(product.variants);
  const unavailable = product.availability !== 'in_stock';
  const image = product.images[0];

  return (
    <article className="group relative flex min-w-0 flex-col overflow-hidden rounded-lg border border-[#e1dcd6] bg-white shadow-[0_1px_1px_rgba(37,28,22,0.03)] transition hover:-translate-y-0.5 hover:border-[#cfc6bd] hover:shadow-[0_9px_24px_rgba(44,34,26,0.08)]">
      <div className="relative aspect-square overflow-hidden bg-[#ebe7e1]">
        {image ? <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" loading="lazy" className="object-cover transition duration-500 group-hover:scale-[1.025]" /> : null}
        {unavailable ? <span className="absolute left-2.5 top-2.5 z-10 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#665b52] shadow-sm">{product.availability === 'backorder' ? 'Unavailable' : 'Availability unknown'}</span> : null}
        {saved ? <span className="absolute bottom-2.5 left-2.5 grid size-7 place-items-center rounded-full bg-[#2c2420] text-white shadow-sm"><Bookmark className="size-3.5 fill-current" aria-label="Saved" /></span> : null}
        <ProductActionsMenu product={product} saved={saved} collections={collections} isBlocked={isBlocked} onToggleSaved={onToggleSaved} onAddToCollection={onAddToCollection} onCreateCollection={onCreateCollection} className="absolute right-2.5 top-2.5" />
      </div>
      <div className="relative z-10 pointer-events-none flex min-h-29 flex-col gap-1.5 p-3.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#877c72]">{product.brand}</p>
        <h2 className="line-clamp-2 font-serif text-lg leading-tight tracking-[-0.025em] text-[#1e1814]">{product.name}</h2>
        <CardFitDetails
          product={product}
          variantId={null}
          shortlist={shortlist}
          priceLabel={price === undefined ? 'Price not provided' : `From ${formatPrice(price)}`}
        />
      </div>
      <button type="button" aria-label={`View ${product.name}`} onClick={() => onView(product)} className="absolute inset-0 z-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#886b54]" />
    </article>
  );
}

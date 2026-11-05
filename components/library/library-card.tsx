'use client';

import { BookmarkMinus, FolderPlus } from 'lucide-react';

import { ProductTile } from '@/components/catalog/product-tile';
import type { CatalogProduct } from '@/data/product-types';
import { formatPrice, startingPriceCents } from '@/lib/format';
import type { LibraryCollection } from '@/lib/library-state';
import type { IsLibraryMutationBlocked } from '@/lib/use-library';

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

  return (
    <ProductTile
      image={product.images[0]}
      brand={product.brand}
      name={product.name}
      saved={false}
      viewLabel={`View ${product.name}`}
      onView={() => onView(product)}
      actions={null}
      price={price === undefined ? 'Price not provided' : `From ${formatPrice(price)}`}
      footer={
      <div className="-mx-1.5 flex items-center gap-2">
        <button
          type="button"
          disabled={isBlocked({ operation: 'toggleSaved', productId: product.id })}
          onClick={() => onRemove(product.id)}
          className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-xs font-medium text-muted-foreground outline-none transition-[background-color,color,scale] duration-(--duration-fast) hover:bg-foreground/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-sm) disabled:opacity-50"
        >
          <BookmarkMinus className="size-3.5" aria-hidden="true" /> Remove
        </button>
        {availableCollections.length ? (
          <label className="ml-auto inline-flex min-w-0 items-center gap-1.5 rounded-md px-1.5 py-1 text-xs text-muted-foreground transition-colors duration-(--duration-fast) focus-within:ring-2 focus-within:ring-ring hover:bg-foreground/[0.06] hover:text-foreground">
            <FolderPlus className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="sr-only">Add {product.name} to collection</span>
            <select
              value=""
              onChange={(event) => {
                if (event.target.value) onAddToCollection(event.target.value, product.id);
              }}
              className="max-w-28 min-w-0 bg-transparent text-xs outline-none"
            >
              <option value="">Add to…</option>
              {availableCollections.map((collection) => (
                <option key={collection.id} value={collection.id} disabled={isBlocked({ operation: 'addToCollection', collectionId: collection.id, productId: product.id })}>
                  {collection.name}
                </option>
              ))}
            </select>
          </label>
        ) : null}
      </div>
      }
    >
      {productCollections.length ? (
        <div className="flex flex-wrap gap-1">
          {productCollections.map((collection) => (
            <span key={collection.id} className="pop rounded-md bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">{collection.name}</span>
          ))}
        </div>
      ) : null}
    </ProductTile>
  );
}

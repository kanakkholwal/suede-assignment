'use client';

import { FolderMinus } from '@/components/icons';

import { ProductTile } from '@/components/catalog/product-tile';
import type { LibraryActions } from '@/components/catalog/catalog-card';
import { AddToRoomButton } from '@/components/room/add-to-room-button';
import { ProductActionsMenu } from '@/components/shared/product-actions-menu';
import type { CatalogProduct } from '@/data/product-types';
import { formatPrice, startingPriceCents } from '@/lib/format';
import type { LibraryCollection } from '@/lib/library-state';

export interface LibraryRoomActions {
  inRoom: (productId: string) => boolean;
  disabled: boolean;
  onToggle: (productId: string) => void;
}

interface LibraryCardProps {
  product: CatalogProduct;
  library: LibraryActions;
  room: LibraryRoomActions;
  /** The collection being viewed, which gets its own remove action. */
  collection: LibraryCollection | null;
  onRemoveFromCollection: (collectionId: string, productId: string) => void;
  onView: (product: CatalogProduct) => void;
}

export function LibraryCard({ product, library, room, collection, onRemoveFromCollection, onView }: LibraryCardProps) {
  const memberOf = library.collections.filter((item) => item.id !== collection?.id && item.productIds.includes(product.id));
  const price = startingPriceCents(product.variants);
  const removeBlocked = collection
    ? library.isBlocked({ operation: 'removeFromCollection', collectionId: collection.id, productId: product.id })
    : false;

  return (
    <ProductTile
      image={product.images[0]}
      brand={product.brand}
      name={product.name}
      saved={false}
      viewLabel={`View ${product.name}`}
      onView={() => onView(product)}
      actions={<ProductActionsMenu product={product} saved {...library} />}
      imageAction={<AddToRoomButton productName={product.name} inRoom={room.inRoom(product.id)} disabled={room.disabled} onToggle={() => room.onToggle(product.id)} />}
      price={price === undefined ? 'Price not provided' : `From ${formatPrice(price)}`}
      footer={
        collection ? (
          <button
            type="button"
            disabled={removeBlocked}
            onClick={() => onRemoveFromCollection(collection.id, product.id)}
            className="-mx-1.5 inline-flex w-fit items-center gap-1.5 rounded-md px-1.5 py-1 text-xs font-medium text-muted-foreground outline-none transition-[background-color,color,scale] duration-(--duration-fast) hover:bg-foreground/6 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-sm) disabled:opacity-50"
          >
            <FolderMinus className="size-3.5" aria-hidden="true" /> Remove from {collection.name}
          </button>
        ) : null
      }
    >
      {memberOf.length ? (
        <p className="truncate text-xs text-muted-foreground">In {memberOf.map((item) => item.name).join(', ')}</p>
      ) : null}
    </ProductTile>
  );
}

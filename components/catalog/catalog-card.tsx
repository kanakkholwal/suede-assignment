'use client';

import { CardFitDetails } from '@/components/catalog/card-fit-details';
import { ProductTile } from '@/components/catalog/product-tile';
import type { ShortlistContext } from '@/components/room/add-to-room-button';
import { ProductActionsMenu } from '@/components/shared/product-actions-menu';
import type { CatalogProduct } from '@/data/product-types';
import { formatPrice, startingPriceCents } from '@/lib/format';
import type { LibraryCollection } from '@/lib/library-state';
import type { IsLibraryMutationBlocked } from '@/lib/use-library';

export interface LibraryActions {
  savedIds: readonly string[];
  collections: LibraryCollection[];
  isBlocked: IsLibraryMutationBlocked;
  onToggleSaved: (productId: string) => void;
  onAddToCollection: (collectionId: string, productId: string) => void;
  onCreateCollection: (name: string, productId: string) => Promise<boolean>;
}

interface CatalogCardProps {
  product: CatalogProduct;
  library: LibraryActions;
  onView: (product: CatalogProduct) => void;
  shortlist?: ShortlistContext;
}

const AVAILABILITY_FLAG: Record<CatalogProduct['availability'], string | undefined> = {
  in_stock: undefined,
  backorder: 'Unavailable',
  unknown: 'Availability unknown',
};

export function CatalogCard({ product, library, onView, shortlist }: CatalogCardProps) {
  const price = startingPriceCents(product.variants);
  const image = product.images[0];

  return (
    <ProductTile
      image={image}
      brand={product.brand}
      name={product.name}
      flag={AVAILABILITY_FLAG[product.availability]}
      saved={library.savedIds.includes(product.id)}
      viewLabel={`View ${product.name}`}
      onView={() => onView(product)}
      actions={<ProductActionsMenu product={product} saved={library.savedIds.includes(product.id)} {...library} />}
    >
      <CardFitDetails product={product} variantId={null} shortlist={shortlist} priceLabel={price === undefined ? 'Price not provided' : `From ${formatPrice(price)}`} />
    </ProductTile>
  );
}

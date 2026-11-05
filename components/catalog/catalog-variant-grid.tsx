'use client';

import { useState } from 'react';

import { CardFitLines, CardRoomToggle } from '@/components/catalog/card-fit-details';
import type { LibraryActions } from '@/components/catalog/catalog-card';
import { NoMatches, ProductTile, TILE_GRID } from '@/components/catalog/product-tile';
import type { ShortlistContext } from '@/components/room/add-to-room-button';
import { ProductActionsMenu } from '@/components/shared/product-actions-menu';
import { Button } from '@/components/ui/button';
import type { CatalogProduct } from '@/data/product-types';
import type { CatalogVariantItem } from '@/lib/catalog-contract';
import { formatPrice } from '@/lib/format';

interface CatalogVariantGridProps {
  items: readonly CatalogVariantItem[];
  library: LibraryActions;
  onView: (product: CatalogProduct, variantId: string) => void;
  shortlist?: ShortlistContext;
}

const PAGE_SIZE = 80;

/** One tile per returned SKU, rendered a page at a time so large result sets stay quick. */
export function CatalogVariantGrid({ items, library, onView, shortlist }: CatalogVariantGridProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleItems = items.slice(0, visibleCount);

  if (!items.length) return <NoMatches hint="Try clearing a filter or using a more exact phrase." />;

  return (
    <div className="flex flex-col gap-6">
      <div className={TILE_GRID}>
        {visibleItems.map(({ key, product, variant }) => {
          const image = variant.image ?? product.images[0];
          const label = variant.label || 'Default option';
          const saved = library.savedIds.includes(product.id);
          return (
            <ProductTile
              key={key}
              image={image ? { src: image.src, alt: `${product.name} — ${label}` } : undefined}
              brand={product.brand}
              name={product.name}
              subtitle={label}
              flag={variant.available ? undefined : 'Unavailable'}
              saved={saved}
              viewLabel={`View ${product.name}, ${label}`}
              onView={() => onView(product, variant.id)}
              actions={<ProductActionsMenu product={product} saved={saved} {...library} />}
              imageAction={<CardRoomToggle product={product} variantId={variant.id} shortlist={shortlist} />}
              price={formatPrice(variant.priceCents)}
            >
              <CardFitLines product={product} shortlist={shortlist} />
            </ProductTile>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>Showing {visibleItems.length.toLocaleString()} of {items.length.toLocaleString()} variants</p>
        {visibleItems.length < items.length ? (
          <Button size="sm" variant="outline" onClick={() => setVisibleCount((count) => Math.min(count + PAGE_SIZE, items.length))}>
            Load {Math.min(PAGE_SIZE, items.length - visibleItems.length).toLocaleString()} more
          </Button>
        ) : null}
      </div>
    </div>
  );
}

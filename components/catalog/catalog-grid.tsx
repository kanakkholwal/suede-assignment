import { CatalogCard, type LibraryActions } from '@/components/catalog/catalog-card';
import { NoMatches, TILE_GRID } from '@/components/catalog/product-tile';
import type { ShortlistContext } from '@/components/room/add-to-room-button';
import type { CatalogProduct } from '@/data/product-types';

interface CatalogGridProps {
  products: readonly CatalogProduct[];
  library: LibraryActions;
  onView: (product: CatalogProduct) => void;
  shortlist?: ShortlistContext;
}

export function CatalogGrid({ products, library, onView, shortlist }: CatalogGridProps) {
  if (!products.length) return <NoMatches hint="This catalog only recognizes literal product, brand, and type terms. Try clearing a filter or a more exact phrase." />;

  return (
    <div className={TILE_GRID}>
      {products.map((product) => (
        <CatalogCard key={product.id} product={product} library={library} onView={onView} shortlist={shortlist} />
      ))}
    </div>
  );
}

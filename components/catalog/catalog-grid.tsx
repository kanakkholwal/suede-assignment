import type { CatalogProduct } from '@/data/product-types';
import type { LibraryCollection } from '@/lib/library-state';
import type { IsLibraryMutationBlocked } from '@/lib/use-library';
import { CatalogCard } from '@/components/catalog/catalog-card';
import type { ShortlistContext } from '@/components/room/add-to-room-button';

interface CatalogGridProps {
  products: readonly CatalogProduct[];
  savedIds: readonly string[];
  collections: LibraryCollection[];
  isBlocked: IsLibraryMutationBlocked;
  onView: (product: CatalogProduct) => void;
  onToggleSaved: (productId: string) => void;
  onAddToCollection: (collectionId: string, productId: string) => void;
  onCreateCollection: (name: string, productId: string) => Promise<boolean>;
  shortlist?: ShortlistContext;
}

export function CatalogGrid(props: CatalogGridProps) {
  if (!props.products.length) {
    return (
      <div className="flex min-h-80 flex-1 flex-col items-center justify-center rounded-lg border border-dashed border-[#d8d0c8] bg-white/55 px-6 text-center">
        <p className="font-serif text-2xl text-[#2c241f]">No exact matches</p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#776d65]">This catalog only recognizes literal product, brand, and type terms. Try clearing a filter or a more exact phrase.</p>
      </div>
    );
  }

  return (
    <div className="grid flex-1 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(11.5rem,1fr))] gap-3">
      {props.products.map((product) => (
        <CatalogCard key={product.id} product={product} saved={props.savedIds.includes(product.id)} collections={props.collections} isBlocked={props.isBlocked} onView={props.onView} onToggleSaved={props.onToggleSaved} onAddToCollection={props.onAddToCollection} onCreateCollection={props.onCreateCollection} shortlist={props.shortlist} />
      ))}
    </div>
  );
}

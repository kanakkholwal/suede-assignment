'use client';

import { Bookmark, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

import { CatalogDetailDialog } from '@/components/catalog/catalog-detail-dialog';
import { TILE_GRID } from '@/components/catalog/product-tile';
import { LibraryCard } from '@/components/library/library-card';
import { LibraryCollections } from '@/components/library/library-collections';
import { Island } from '@/components/shell/island';
import { Input } from '@/components/ui/input';
import type { CatalogProduct } from '@/data/product-types';
import { useLibrary } from '@/lib/use-library';

export function LibraryApp() {
  const library = useLibrary();
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [detailProduct, setDetailProduct] = useState<CatalogProduct | null>(null);

  const selectedCollection = library.state.collections.find((collection) => collection.id === selectedCollectionId) ?? null;
  const visibleProducts = useMemo(() => {
    const ids = selectedCollection ? selectedCollection.productIds : library.state.savedIds;
    const needle = query.trim().toLowerCase();
    return library.products.filter((product) => {
      if (!ids.includes(product.id)) return false;
      if (!needle) return true;
      return `${product.name} ${product.brand}`.toLowerCase().includes(needle);
    });
  }, [library.products, library.state.savedIds, query, selectedCollection]);

  return (
    <main className="grid flex-1 gap-1.5 lg:min-h-0 lg:grid-cols-[16rem_minmax(0,1fr)]">
      <Island aria-label="Collections">
        <div className="min-h-0 flex-1 overflow-y-auto p-3">
          <LibraryCollections collections={library.state.collections} savedCount={library.state.savedIds.length} selectedCollectionId={selectedCollectionId} isBlocked={library.isBlocked} onSelect={setSelectedCollectionId} onCreate={library.createCollection} onRename={library.renameCollection} onDelete={library.deleteCollection} />
        </div>
      </Island>
      <Island aria-label="Saved products">
        <header className="flex shrink-0 flex-wrap items-center justify-between gap-x-3 gap-y-2 px-3 pt-3 sm:px-4">
          <div className="flex min-w-0 items-baseline gap-2">
            <h1 className="text-sm font-semibold text-foreground">Library</h1>
            <p className="truncate text-xs tabular-nums text-muted-foreground">
              <span>{`${visibleProducts.length} ${visibleProducts.length === 1 ? 'saved item' : 'saved items'}`}</span>
              {selectedCollection ? <span>{` · ${selectedCollection.name}`}</span> : null}
            </p>
          </div>
          <div className="relative w-full sm:w-64">
            <label htmlFor="library-search" className="sr-only">Search saved items</label>
            <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input id="library-search" size="sm" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search saved items" className="w-full pl-8" />
          </div>
        </header>
        <div className="min-h-0 flex-1 p-3 sm:p-4 lg:overflow-y-auto">
          {library.error ? <p role="alert" className="mb-4 rounded-lg bg-destructive/[0.06] p-3 text-sm text-destructive-strong">{library.error}</p> : null}
          {library.loading ? (
            <p role="status" aria-label="Loading library" className="py-4 text-sm text-muted-foreground">Loading library…</p>
          ) : visibleProducts.length ? (
            <div className={TILE_GRID}>
              {visibleProducts.map((product) => <LibraryCard key={product.id} product={product} collections={library.state.collections} isBlocked={library.isBlocked} onView={setDetailProduct} onRemove={library.toggleSaved} onAddToCollection={library.addToCollection} />)}
            </div>
          ) : library.error ? null : (
            <div className="flex min-h-80 flex-col items-center justify-center gap-2 px-6 text-center">
              <span className="grid size-10 place-items-center rounded-full bg-muted text-muted-foreground"><Bookmark className="size-4" aria-hidden="true" /></span>
              <p className="font-serif text-2xl text-foreground">{query ? 'No saved matches' : 'Your library is empty'}</p>
              <p className="max-w-sm text-sm text-muted-foreground">{query ? 'Try a different product or brand name.' : 'Save an item from the Catalog to keep it here. Your choices stay in this locally running app.'}</p>
            </div>
          )}
        </div>
      </Island>
      <CatalogDetailDialog product={detailProduct} onClose={() => setDetailProduct(null)} />
    </main>
  );
}

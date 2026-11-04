'use client';

import { Bookmark, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

import { CatalogDetailDialog } from '@/components/catalog/catalog-detail-dialog';
import { LibraryCard } from '@/components/library/library-card';
import { LibraryCollections } from '@/components/library/library-collections';
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
    <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col gap-7 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <header className="flex flex-col justify-between gap-4 border-b border-[#ded8d1] pb-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#84776e]">Personal sourcing shelf</p>
          <h1 className="mt-2 font-serif text-4xl leading-none tracking-[-0.045em] text-[#1c1612] sm:text-5xl">Library</h1>
        </div>
        <div className="relative w-full sm:w-70">
          <label htmlFor="library-search" className="sr-only">Search saved items</label>
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#847870]" aria-hidden="true" />
          <input id="library-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search saved items" className="h-10 w-full rounded-md border border-[#d9d3cd] bg-white pl-9 pr-3 text-sm outline-none focus:border-[#886b54] focus:ring-2 focus:ring-[#886b54]/15" />
        </div>
      </header>
      <div className="flex flex-col gap-7 md:flex-row md:items-start">
        <LibraryCollections collections={library.state.collections} savedCount={library.state.savedIds.length} selectedCollectionId={selectedCollectionId} isBlocked={library.isBlocked} onSelect={setSelectedCollectionId} onCreate={library.createCollection} onRename={library.renameCollection} onDelete={library.deleteCollection} />
        <section className="min-w-0 flex-1" aria-label="Saved products">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-[#756b62]"><span className="font-medium text-[#2e2621]">{visibleProducts.length} {visibleProducts.length === 1 ? 'saved item' : 'saved items'}</span></p>
            {selectedCollection ? <p className="text-[11px] text-[#8a8078]">{selectedCollection.name}</p> : null}
          </div>
          {library.error ? <p role="alert" className="mb-4 rounded-md border border-[#d9d3cd] bg-white p-3 text-sm text-[#91554b]">{library.error}</p> : null}
          {library.loading ? <p role="status" aria-label="Loading library" className="py-4 text-sm text-[#756b62]">Loading library…</p> : visibleProducts.length ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visibleProducts.map((product) => <LibraryCard key={product.id} product={product} collections={library.state.collections} isBlocked={library.isBlocked} onView={setDetailProduct} onRemove={library.toggleSaved} onAddToCollection={library.addToCollection} />)}
            </div>
          ) : library.error ? null : (
            <div className="flex min-h-80 flex-col items-center justify-center rounded-lg border border-dashed border-[#d8d0c8] bg-white/55 px-6 text-center">
              <span className="grid size-10 place-items-center rounded-full bg-[#ede6df] text-[#725e51]"><Bookmark className="size-4" aria-hidden="true" /></span>
              <p className="mt-4 font-serif text-2xl text-[#2c241f]">{query ? 'No saved matches' : 'Your library is empty'}</p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#776d65]">{query ? 'Try a different product or brand name.' : 'Save an item from the Catalog to keep it here. Your choices stay in this locally running app.'}</p>
            </div>
          )}
        </section>
      </div>
      <CatalogDetailDialog product={detailProduct} onClose={() => setDetailProduct(null)} />
    </main>
  );
}

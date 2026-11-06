'use client';

import { Bookmark, Search } from '@/components/icons';
import Link from 'next/link';
import { useCallback, useMemo } from 'react';

import type { LibraryActions } from '@/components/catalog/catalog-card';
import { CatalogDetailDialog } from '@/components/catalog/catalog-detail-dialog';
import { TILE_GRID } from '@/components/catalog/product-tile';
import { LibraryCard, type LibraryRoomActions } from '@/components/library/library-card';
import { LibraryCollections } from '@/components/library/library-collections';
import { useRoomStore } from '@/components/room/room-provider';
import { TileGridSkeleton } from '@/components/shared/skeletons';
import { Island } from '@/components/shell/island';
import { Button, button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { plural } from '@/lib/format';
import { useLibraryUrlState, useRoomHref } from '@/lib/url-state';
import { useLibrary } from '@/lib/use-library';

export function LibraryApp() {
  const library = useLibrary();
  const room = useRoomStore();
  const roomHref = useRoomHref();
  const [url, setUrl] = useLibraryUrlState();
  const { q: query } = url;

  const collection = library.state.collections.find((item) => item.id === url.collection) ?? null;
  const detailProduct = library.products.find((product) => product.id === url.product) ?? null;
  const visibleProducts = useMemo(() => {
    const ids = collection ? collection.productIds : library.state.savedIds;
    const needle = query.trim().toLowerCase();
    return library.products.filter((product) => ids.includes(product.id) && (!needle || `${product.name} ${product.brand}`.toLowerCase().includes(needle)));
  }, [library.products, library.state.savedIds, query, collection]);

  const selectCollection = useCallback((id: string | null) => void setUrl({ collection: id }, { history: 'push' }), [setUrl]);

  const actions: LibraryActions = {
    savedIds: library.state.savedIds,
    collections: library.state.collections,
    isBlocked: library.isBlocked,
    onToggleSaved: library.toggleSaved,
    onAddToCollection: library.addToCollection,
    onCreateCollection: library.createCollection,
  };

  const roomActions: LibraryRoomActions = {
    inRoom: (productId) => room.itemCount(productId) > 0,
    disabled: !room.snapshot,
    onToggle: (productId) => {
      const existing = room.snapshot?.items.filter((item) => item.productId === productId).at(-1);
      void (existing ? room.removeItem(existing.id) : room.addItem(productId));
    },
  };

  const empty = query
    ? { title: 'No saved matches', body: 'Try a different product or brand name.', action: <Button size="sm" variant="outline" onClick={() => void setUrl({ q: '' })}>Clear search</Button> }
    : collection
      ? { title: `Nothing in ${collection.name} yet`, body: 'Add pieces from All saved with the ••• menu on any tile.', action: <Button size="sm" variant="outline" onClick={() => selectCollection(null)}>Show all saved</Button> }
      : { title: 'Your library is empty', body: 'Save an item from the Catalog to keep it here. Your choices stay in this locally running app.', action: <Link href={roomHref('/catalog')} className={button({ size: 'sm' })}>Browse the catalog</Link> };

  return (
    <main className="grid flex-1 gap-1.5 lg:min-h-0 lg:grid-cols-[16rem_minmax(0,1fr)]">
      <Island aria-label="Collections">
        <div className="min-h-0 flex-1 overflow-y-auto p-3">
          <LibraryCollections
            collections={library.state.collections}
            savedCount={library.state.savedIds.length}
            selectedCollectionId={collection?.id ?? null}
            isBlocked={library.isBlocked}
            onSelect={selectCollection}
            onCreate={library.createCollection}
            onRename={library.renameCollection}
            onDelete={library.deleteCollection}
            onDeleted={(id) => void setUrl((current) => (current.collection === id ? { collection: null } : {}))}
          />
        </div>
      </Island>
      <Island aria-label="Saved products">
        <header className="flex min-h-12 shrink-0 flex-wrap items-center justify-between gap-x-3 gap-y-2 px-3 pt-3 sm:px-4">
          <div className="flex min-w-0 items-baseline gap-2">
            <h1 className="truncate text-sm font-semibold text-foreground">{collection ? collection.name : 'Library'}</h1>
            <p className="shrink-0 text-xs tabular-nums text-muted-foreground">{plural(visibleProducts.length, 'saved item')}</p>
          </div>
          <div className="relative w-full sm:w-64">
            <label htmlFor="library-search" className="sr-only">Search saved items</label>
            <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input id="library-search" type="search" size="sm" value={query} onChange={(event) => void setUrl({ q: event.target.value })} placeholder="Search saved items" className="w-full pl-8" />
          </div>
        </header>
        <div className="min-h-0 flex-1 p-3 sm:p-4 lg:overflow-y-auto">
          {library.error ? <p role="alert" className="mb-4 rounded-lg bg-destructive/6 p-3 text-sm text-destructive-strong">{library.error}</p> : null}
          {library.loading ? (
            <TileGridSkeleton label="Loading library" count={4} />
          ) : visibleProducts.length ? (
            <div className={TILE_GRID}>
              {visibleProducts.map((product) => (
                <LibraryCard
                  key={product.id}
                  product={product}
                  library={actions}
                  room={roomActions}
                  collection={collection}
                  onRemoveFromCollection={library.removeFromCollection}
                  onView={(next) => void setUrl({ product: next.id }, { history: 'push' })}
                />
              ))}
            </div>
          ) : library.error ? null : (
            <div className="flex min-h-80 flex-col items-center justify-center gap-2 px-6 text-center">
              <span className="grid size-10 place-items-center rounded-full bg-muted text-muted-foreground"><Bookmark className="size-4" aria-hidden="true" /></span>
              <p className="font-serif text-2xl tracking-tight text-foreground">{empty.title}</p>
              <p className="max-w-sm text-sm text-muted-foreground">{empty.body}</p>
              <div className="mt-2">{empty.action}</div>
            </div>
          )}
        </div>
      </Island>
      <CatalogDetailDialog product={detailProduct} onClose={() => void setUrl({ product: null })} />
    </main>
  );
}

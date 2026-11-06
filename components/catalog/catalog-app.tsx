'use client';

import { ArrowRight, RotateCcw, SlidersHorizontal } from '@/components/icons';
import { useCallback, useMemo, useRef, useState } from 'react';

import { BriefBar } from '@/components/catalog/brief-bar';
import type { LibraryActions } from '@/components/catalog/catalog-card';
import { CatalogDetailDialog } from '@/components/catalog/catalog-detail-dialog';
import { activeFilterCount, CatalogFilterRail, CatalogSearch } from '@/components/catalog/catalog-filter-rail';
import { CatalogGrid } from '@/components/catalog/catalog-grid';
import { CatalogVariantGrid } from '@/components/catalog/catalog-variant-grid';
import { CatalogViewToggle, type CatalogView } from '@/components/catalog/catalog-view-toggle';
import type { ShortlistContext } from '@/components/room/add-to-room-button';
import { useRoomStore } from '@/components/room/room-provider';
import { RoomShortlist } from '@/components/room/room-shortlist';
import { SideSheet } from '@/components/shared/side-sheet';
import { TileGridSkeleton } from '@/components/shared/skeletons';
import { Island } from '@/components/shell/island';
import { Button, button } from '@/components/ui/button';
import type { CatalogProduct } from '@/data/product-types';
import type { DimensionSummary } from '@/lib/dimensions';
import { type BriefVocabulary, type FilterChipKey, type ParsedBrief, removeFilterChip } from '@/lib/brief';
import { emptyCatalogFilters, type CatalogVariantItem } from '@/lib/catalog-contract';
import { useCatalogUrlState, useRoomHref } from '@/lib/url-state';
import { useCatalog } from '@/lib/use-catalog';
import { useLibrary } from '@/lib/use-library';

function plural(count: number, one: string, many = `${one}s`): string {
  return `${count.toLocaleString()} ${count === 1 ? one : many}`;
}

/** Full size first, then width only, then unknown. Stable, so search relevance holds within each group. */
function sizedFirst(products: readonly CatalogProduct[], dimensions: Readonly<Record<string, DimensionSummary>>): CatalogProduct[] {
  const rank = (id: string) => (dimensions[id]?.width && dimensions[id]?.depth ? 0 : dimensions[id]?.width ? 1 : 2);
  return [...products].sort((left, right) => rank(left.id) - rank(right.id));
}

export function CatalogApp() {
  const url = useCatalogUrlState();
  const { filters, setFilters } = url;
  const { terms: softTerms, view, brief } = url.state;
  const roomHref = useRoomHref();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [roomOpen, setRoomOpen] = useState(false);
  const [revision, setRevision] = useState(0);
  const filterTriggerRef = useRef<HTMLButtonElement>(null);
  const roomTriggerRef = useRef<HTMLButtonElement>(null);
  const library = useLibrary();
  const room = useRoomStore();
  const catalog = useCatalog(filters, view === 'variants', revision);
  const { products = [], brands = [], categoryTree = [], capturedAt = '', dimensions = {} } = catalog.data ?? {};
  const vocabulary = useMemo<BriefVocabulary>(() => ({ categories: categoryTree, brands }), [categoryTree, brands]);
  const variants = useMemo<CatalogVariantItem[]>(() => {
    if (!catalog.data?.variants) return [];
    const byProduct = new Map(catalog.data.products.map((product) => [product.id, {
      product,
      byVariant: new Map(product.variants.map((variant) => [variant.id, variant])),
    }]));
    return catalog.data.variants.flatMap((reference) => {
      const entry = byProduct.get(reference.productId);
      const variant = entry?.byVariant.get(reference.variantId);
      return entry && variant ? [{ key: reference.key, product: entry.product, variant }] : [];
    });
  }, [catalog.data]);
  const resultCount = view === 'products' ? products.length : variants.length;
  const widthFiltered = filters.minWidthIn !== null || filters.maxWidthIn !== null;
  const sizedProducts = widthFiltered ? products.filter((product) => dimensions[product.id]?.width) : sizedFirst(products, dimensions);
  const unsizedProducts = widthFiltered ? products.filter((product) => !dimensions[product.id]?.width) : [];
  const roomItems = useMemo(() => room.snapshot?.items ?? [], [room.snapshot]);
  const roomCount = roomItems.length;
  const filterCount = activeFilterCount(filters);

  const toggleRoom = useCallback(
    (productId: string, variantId: string | null) => {
      const existing = roomItems.filter((item) => item.productId === productId).at(-1);
      void (existing ? room.removeItem(existing.id) : room.addItem(productId, variantId));
    },
    [room, roomItems],
  );

  const shortlist: ShortlistContext = {
    filters,
    dimensions,
    roomCount: room.itemCount,
    onToggleRoom: toggleRoom,
    roomDisabled: !room.snapshot,
  };

  const libraryActions: LibraryActions = {
    savedIds: library.state.savedIds,
    collections: library.state.collections,
    isBlocked: library.isBlocked,
    onToggleSaved: library.toggleSaved,
    onAddToCollection: library.addToCollection,
    onCreateCollection: library.createCollection,
  };

  const { setState: setUrlState } = url;
  const applyBrief = useCallback(
    (text: string, parsed: ParsedBrief) => {
      setFilters(parsed.filters);
      void setUrlState({ brief: text, terms: parsed.softTerms });
    },
    [setFilters, setUrlState],
  );

  const removeChip = useCallback((key: FilterChipKey) => setFilters((current) => removeFilterChip(current, key)), [setFilters]);
  const setView = useCallback((next: CatalogView) => void setUrlState({ view: next }), [setUrlState]);
  const detailProduct = useMemo(
    () => (url.state.product ? (catalog.data?.products.find((product) => product.id === url.state.product) ?? null) : null),
    [catalog.data, url.state.product],
  );
  const detailVariantId = url.state.option;
  const refreshResults = useCallback(() => setRevision((value) => value + 1), []);

  const openDetail = useCallback(
    (product: CatalogProduct, variantId: string | null = null) => void setUrlState({ product: product.id, option: variantId }),
    [setUrlState],
  );
  const closeDetail = useCallback(() => void setUrlState({ product: null, option: null }), [setUrlState]);

  const shortlistPanel = <RoomShortlist capturedAt={capturedAt} onDimensionsChanged={refreshResults} />;
  const filterRail = <CatalogFilterRail filters={filters} brands={brands} categoryTree={categoryTree} onChange={setFilters} />;
  const meta = catalog.loading
    ? 'Loading'
    : `${plural(resultCount, view === 'products' ? 'item' : 'variant')}${view === 'products' ? ` · ${products.filter((product) => dimensions[product.id]?.width).length} with a size on file` : ''}`;

  return (
    <main className="grid flex-1 gap-1.5 lg:min-h-0 xl:grid-cols-[minmax(0,1fr)_22rem]">
      <Island aria-label="Catalog results">
        <div className="shrink-0 px-3 pt-3 sm:px-4 sm:pt-4">
          <BriefBar
            filters={filters}
            softTerms={softTerms}
            brief={brief}
            vocabulary={vocabulary}
            onApply={applyBrief}
            onRemoveChip={removeChip}
            onRemoveSoftTerm={(term) => void setUrlState({ terms: softTerms.filter((candidate) => candidate !== term) })}
          />
        </div>
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-x-3 gap-y-2 px-3 pt-5 pb-1 sm:px-4">
          <div className="flex min-w-0 items-baseline gap-2">
            <h1 className="text-sm font-semibold text-foreground">Catalog</h1>
            <p className="truncate text-xs tabular-nums text-muted-foreground" aria-live="polite">{meta}</p>
          </div>
          <div className="flex w-full items-center gap-1.5 sm:w-auto">
            <CatalogSearch value={filters.query} onChange={(query) => setFilters((current) => ({ ...current, query }))} />
            <button ref={filterTriggerRef} type="button" onClick={() => setFiltersOpen(true)} className={button({ variant: 'outline', size: 'sm' })}>
              <SlidersHorizontal aria-hidden="true" /> Filters
              {filterCount ? <span aria-hidden="true" className="pop grid size-4 place-items-center rounded-full bg-foreground text-xs text-background tabular-nums">{filterCount}</span> : null}
            </button>
            <CatalogViewToggle view={view} onChange={setView} />
          </div>
        </div>
        <div className="min-h-0 flex-1 p-3 pb-24 sm:p-4 sm:pb-24 lg:overflow-y-auto lg:[mask-image:linear-gradient(to_bottom,transparent,black_1rem)] xl:pb-4">
          {catalog.error ? <p role="alert" className="mb-4 rounded-lg border border-destructive/30 bg-destructive/[0.06] p-3 text-sm text-destructive-strong">{catalog.error}</p> : null}
          {library.error ? <p role="alert" className="mb-4 text-sm text-destructive-strong">{library.error}</p> : null}
          {catalog.loading ? (
            <TileGridSkeleton label="Loading catalog" />
          ) : catalog.error ? null : view === 'products' ? (
            <div className="flex flex-col gap-8">
              {sizedProducts.length || !unsizedProducts.length ? (
                <CatalogGrid products={sizedProducts} library={libraryActions} onView={openDetail} shortlist={shortlist} />
              ) : (
                <p className="rounded-lg bg-muted/60 px-4 py-6 text-center text-sm text-muted-foreground">
                  Nothing that matches has a size on file yet. Open the set below and enter a size for the likeliest pieces.
                </p>
              )}
              {unsizedProducts.length ? (
                <details className="group/unsized rounded-xl border border-dashed border-border-strong">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-(--duration-fast) hover:bg-foreground/[0.03] focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                    <span>
                      <span className="font-medium text-foreground">{unsizedProducts.length} more match everything except size.</span>{' '}
                      <span className="text-muted-foreground">No width is on file, so fit can’t be checked yet.</span>
                    </span>
                    <span className="shrink-0 text-xs font-medium text-primary group-open/unsized:hidden">Show</span>
                    <span className="hidden shrink-0 text-xs font-medium text-primary group-open/unsized:inline">Hide</span>
                  </summary>
                  <div className="enter px-4 pt-2 pb-5">
                    <CatalogGrid products={unsizedProducts} library={libraryActions} onView={openDetail} shortlist={shortlist} />
                  </div>
                </details>
              ) : null}
            </div>
          ) : (
            <CatalogVariantGrid items={variants} library={libraryActions} onView={openDetail} shortlist={shortlist} />
          )}
        </div>
      </Island>

      <Island aria-label="Room shortlist" className="hidden xl:flex">
        {shortlistPanel}
      </Island>

      {roomCount ? (
      <div className="pointer-events-none fixed inset-x-0 bottom-3 z-40 flex justify-center px-3 xl:hidden">
        <div className="rise pointer-events-auto flex items-center gap-1 rounded-2xl bg-foreground p-1.5 pl-4 text-background shadow-overlay">
          <button
            ref={roomTriggerRef}
            type="button"
            onClick={() => setRoomOpen(true)}
            className="rounded-lg py-1.5 pr-2 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-background"
          >
            Room shortlist <span className="tabular-nums text-background/70">· {roomCount}</span>
          </button>
          <Button href={roomHref('/room?view=plan')} size="sm" className="rounded-xl">
            Fit the room <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>
      ) : null}

      <SideSheet
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        label="Catalog filters"
        closeLabel="Close filters"
        title={
          <span className="inline-flex items-baseline gap-2">
            Filters
            {filterCount ? <span className="text-xs font-normal text-muted-foreground tabular-nums">{filterCount} active</span> : null}
          </span>
        }
        returnFocusRef={filterTriggerRef}
        footer={
          <div className="flex items-center gap-2">
            {filterCount || filters.query ? (
              <Button variant="ghost" onClick={() => setFilters(emptyCatalogFilters)}>
                <RotateCcw aria-hidden="true" /> Clear all
              </Button>
            ) : null}
            <Button className="flex-1" onClick={() => setFiltersOpen(false)}>
              Show {plural(resultCount, 'result')}
            </Button>
          </div>
        }
      >
        {filterRail}
      </SideSheet>

      <SideSheet
        open={roomOpen}
        onClose={() => setRoomOpen(false)}
        label="Room shortlist"
        closeLabel="Close room shortlist"
        title="Room shortlist"
        returnFocusRef={roomTriggerRef}
        flush
      >
        {shortlistPanel}
      </SideSheet>

      <CatalogDetailDialog
        product={detailProduct}
        selectedVariantId={detailVariantId}
        onClose={closeDetail}
        dimensions={detailProduct ? dimensions[detailProduct.id] : undefined}
        room={detailProduct ? {
          inRoom: room.itemCount(detailProduct.id) > 0,
          disabled: !room.snapshot,
          onToggle: (variantId) => toggleRoom(detailProduct.id, variantId),
        } : undefined}
      />
    </main>
  );
}

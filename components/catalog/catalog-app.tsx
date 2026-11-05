'use client';

import { Armchair, SlidersHorizontal } from 'lucide-react';
import { useCallback, useMemo, useRef, useState } from 'react';

import { BriefBar } from '@/components/catalog/brief-bar';
import { CatalogDetailDialog } from '@/components/catalog/catalog-detail-dialog';
import { CatalogFilterRail } from '@/components/catalog/catalog-filter-rail';
import { CatalogGrid } from '@/components/catalog/catalog-grid';
import { CatalogVariantGrid } from '@/components/catalog/catalog-variant-grid';
import { CatalogViewToggle, type CatalogView } from '@/components/catalog/catalog-view-toggle';
import type { ShortlistContext } from '@/components/room/add-to-room-button';
import { RoomShortlist } from '@/components/room/room-shortlist';
import { SideSheet } from '@/components/shared/side-sheet';
import { WorkflowBar } from '@/components/shared/workflow-bar';
import type { CatalogProduct } from '@/data/product-types';
import { type BriefVocabulary, type FilterChipKey, type ParsedBrief, removeFilterChip } from '@/lib/brief';
import { emptyCatalogFilters, type CatalogFilters, type CatalogVariantItem } from '@/lib/catalog-contract';
import { useCatalog } from '@/lib/use-catalog';
import { useLibrary } from '@/lib/use-library';
import { useRoom } from '@/lib/use-room';

export function CatalogApp() {
  const [filters, setFilters] = useState<CatalogFilters>(emptyCatalogFilters);
  const [softTerms, setSoftTerms] = useState<string[]>([]);
  const [view, setView] = useState<CatalogView>('products');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [roomOpen, setRoomOpen] = useState(false);
  const [revision, setRevision] = useState(0);
  const [detailProduct, setDetailProduct] = useState<CatalogProduct | null>(null);
  const [detailVariantId, setDetailVariantId] = useState<string | null>(null);
  const filterTriggerRef = useRef<HTMLButtonElement>(null);
  const roomTriggerRef = useRef<HTMLButtonElement>(null);
  const library = useLibrary();
  const room = useRoom();
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
  const resultLabel = view === 'products' ? (resultCount === 1 ? 'item' : 'items') : (resultCount === 1 ? 'variant' : 'variants');
  const widthFiltered = filters.minWidthIn !== null || filters.maxWidthIn !== null;
  const sizedProducts = widthFiltered ? products.filter((product) => dimensions[product.id]?.width) : products;
  const unsizedProducts = widthFiltered ? products.filter((product) => !dimensions[product.id]?.width) : [];
  const roomItems = useMemo(() => room.snapshot?.items ?? [], [room.snapshot]);

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

  const applyBrief = useCallback((brief: ParsedBrief) => {
    setFilters(brief.filters);
    setSoftTerms(brief.softTerms);
  }, []);

  const removeChip = useCallback((key: FilterChipKey) => setFilters((current) => removeFilterChip(current, key)), []);
  const refreshResults = useCallback(() => setRevision((value) => value + 1), []);

  const openDetail = useCallback((product: CatalogProduct, variantId: string | null = null) => {
    setDetailProduct(product);
    setDetailVariantId(variantId);
  }, []);

  const closeDetail = useCallback(() => {
    setDetailProduct(null);
    setDetailVariantId(null);
  }, []);

  const roomCount = roomItems.length;
  const shortlistPanel = <RoomShortlist room={room} capturedAt={capturedAt} onDimensionsChanged={refreshResults} />;

  return (
    <main className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <WorkflowBar
        room={room.snapshot?.room ?? null}
        active="find"
        shortlisted={roomCount}
        placed={roomItems.filter((item) => item.xIn !== null).length}
      />
      <header className="flex flex-col gap-1.5">
        <h1 className="font-serif text-4xl leading-none tracking-[-0.045em] text-[#1c1612]">Catalog</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-[#70665d]">Describe what the client needs. Pieces with a known size that fits come first; anything the catalog can’t confirm is set aside, not hidden.</p>
      </header>

      <BriefBar
        filters={filters}
        softTerms={softTerms}
        vocabulary={vocabulary}
        onApply={applyBrief}
        onRemoveChip={removeChip}
        onRemoveSoftTerm={(term) => setSoftTerms((terms) => terms.filter((candidate) => candidate !== term))}
      />

      <div className="flex flex-col gap-7 md:flex-row md:items-start">
        <div className="hidden md:block">
          <CatalogFilterRail filters={filters} brands={brands} categoryTree={categoryTree} onChange={setFilters} />
        </div>
        <section className="min-w-0 flex-1" aria-label="Catalog results">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-sm text-[#756b62]">
              <span className="font-medium text-[#2e2621]">{resultCount.toLocaleString()}</span> {resultLabel}
              {unsizedProducts.length ? <span> · {sizedProducts.length} with a size on file</span> : null}
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <button ref={filterTriggerRef} type="button" onClick={() => setFiltersOpen(true)} className="inline-flex items-center gap-1.5 rounded-md border border-[#d9d3cd] bg-white px-2.5 py-1.5 text-xs font-medium text-[#554940] shadow-sm md:hidden">
                <SlidersHorizontal className="size-3.5" aria-hidden="true" /> Filters
              </button>
              <button ref={roomTriggerRef} type="button" onClick={() => setRoomOpen(true)} className="inline-flex items-center gap-1.5 rounded-md border border-[#d9d3cd] bg-white px-2.5 py-1.5 text-xs font-medium text-[#554940] shadow-sm xl:hidden">
                <Armchair className="size-3.5" aria-hidden="true" /> Room{roomCount ? ` · ${roomCount}` : ''}
              </button>
              <CatalogViewToggle view={view} onChange={setView} />
              {capturedAt ? <p className="hidden text-[11px] text-[#8a8078] sm:block">Static snapshot · {capturedAt}</p> : null}
            </div>
          </div>
          {catalog.error ? <p role="alert" className="mb-4 rounded-md border border-[#d9d3cd] bg-white p-3 text-sm text-[#91554b]">{catalog.error}</p> : null}
          {library.error ? <p role="alert" className="mb-4 text-sm text-[#91554b]">{library.error}</p> : null}
          {catalog.loading ? <p role="status" aria-label="Loading catalog" className="py-4 text-sm text-[#756b62]">Loading catalog…</p> : catalog.error ? null : view === 'products' ? (
            <div className="flex flex-col gap-6">
              {sizedProducts.length || !unsizedProducts.length ? <CatalogGrid products={sizedProducts} savedIds={library.state.savedIds} collections={library.state.collections} isBlocked={library.isBlocked} onView={openDetail} onToggleSaved={library.toggleSaved} onAddToCollection={library.addToCollection} onCreateCollection={library.createCollection} shortlist={shortlist} /> : (
                <p className="rounded-xl border border-border bg-white px-4 py-6 text-center text-sm text-muted-foreground">
                  Nothing that matches has a size on file yet. Open the set below and enter a size for the likeliest pieces.
                </p>
              )}
              {unsizedProducts.length ? (
                <details className="group rounded-xl border border-dashed border-border bg-white/50 open:bg-transparent">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm text-[#4a3e35] [&::-webkit-details-marker]:hidden">
                    <span>
                      <span className="font-medium">{unsizedProducts.length} more match everything except size.</span>{' '}
                      <span className="text-muted-foreground">No width is on file, so fit can’t be checked yet.</span>
                    </span>
                    <span className="shrink-0 text-xs font-medium text-primary group-open:hidden">Show</span>
                    <span className="hidden shrink-0 text-xs font-medium text-primary group-open:inline">Hide</span>
                  </summary>
                  <div className="px-4 pb-4">
                    <CatalogGrid products={unsizedProducts} savedIds={library.state.savedIds} collections={library.state.collections} isBlocked={library.isBlocked} onView={openDetail} onToggleSaved={library.toggleSaved} onAddToCollection={library.addToCollection} onCreateCollection={library.createCollection} shortlist={shortlist} />
                  </div>
                </details>
              ) : null}
            </div>
          ) : (
            <CatalogVariantGrid items={variants} savedIds={library.state.savedIds} collections={library.state.collections} isBlocked={library.isBlocked} onView={openDetail} onToggleSaved={library.toggleSaved} onAddToCollection={library.addToCollection} onCreateCollection={library.createCollection} shortlist={shortlist} />
          )}
        </section>
        <aside aria-label="Room shortlist" className="sticky top-6 hidden max-h-[calc(100svh-3rem)] w-80 shrink-0 overflow-y-auto rounded-xl border border-border bg-white/70 p-5 shadow-surface xl:block">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#84776e]">Room shortlist</p>
          {shortlistPanel}
        </aside>
      </div>

      <SideSheet
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        label="Catalog filters"
        closeLabel="Close filters"
        title="Catalog filters"
        returnFocusRef={filterTriggerRef}
        className="md:hidden"
        footer={
          <button type="button" onClick={() => setFiltersOpen(false)} className="h-10 w-full rounded-md bg-[#2c241f] px-4 text-sm font-medium text-white transition hover:bg-[#463a32] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#886b54]">
            Show {resultCount.toLocaleString()} {resultCount === 1 ? 'result' : 'results'}
          </button>
        }
      >
        <CatalogFilterRail filters={filters} brands={brands} categoryTree={categoryTree} onChange={setFilters} />
      </SideSheet>

      <SideSheet
        open={roomOpen}
        onClose={() => setRoomOpen(false)}
        label="Room shortlist"
        closeLabel="Close room shortlist"
        title="Room shortlist"
        returnFocusRef={roomTriggerRef}
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

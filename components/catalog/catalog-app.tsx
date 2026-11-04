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
import type { CatalogProduct } from '@/data/product-types';
import { type BriefVocabulary, type FilterChipKey, type ParsedBrief, removeFilterChip } from '@/lib/brief';
import { emptyCatalogFilters, type CatalogFilters, type CatalogVariantItem } from '@/lib/catalog-contract';
import { rankForBrief } from '@/lib/match-reasons';
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
  const { products: rawProducts = [], brands = [], categoryTree = [], capturedAt = '', dimensions = {} } = catalog.data ?? {};
  const products = useMemo(() => rankForBrief(rawProducts, dimensions, filters), [rawProducts, dimensions, filters]);
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
  const unsized = widthFiltered ? products.filter((product) => !dimensions[product.id]?.width).length : 0;
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
      <header className="flex flex-col justify-between gap-3 border-b border-[#ded8d1] pb-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#84776e]">Sourcing catalog</p>
          <h1 className="mt-2 font-serif text-4xl leading-none tracking-[-0.045em] text-[#1c1612] sm:text-5xl">Catalog</h1>
        </div>
        <p className="w-full max-w-sm text-sm leading-relaxed text-[#70665d]">Describe the client’s brief, shortlist pieces for their room, and see what still needs checking before you present.</p>
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
              {unsized ? <span className="text-warning-strong"> · {unsized} without a width on file, listed last</span> : null}
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
            <CatalogGrid products={products} savedIds={library.state.savedIds} collections={library.state.collections} isBlocked={library.isBlocked} onView={openDetail} onToggleSaved={library.toggleSaved} onAddToCollection={library.addToCollection} onCreateCollection={library.createCollection} shortlist={shortlist} />
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

'use client';

import { SlidersHorizontal, X } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';

import type { CatalogProduct } from '@/data/product-types';
import { emptyCatalogFilters, type CatalogFilters, type CatalogVariantItem } from '@/lib/catalog-contract';
import { useCatalog } from '@/lib/use-catalog';
import { useLibrary } from '@/lib/use-library';
import { CatalogDetailDialog } from '@/components/catalog/catalog-detail-dialog';
import { CatalogFilterRail } from '@/components/catalog/catalog-filter-rail';
import { CatalogGrid } from '@/components/catalog/catalog-grid';
import { CatalogVariantGrid } from '@/components/catalog/catalog-variant-grid';
import { CatalogViewToggle, type CatalogView } from '@/components/catalog/catalog-view-toggle';

export function CatalogApp() {
  const [filters, setFilters] = useState<CatalogFilters>(emptyCatalogFilters);
  const [view, setView] = useState<CatalogView>('products');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState<CatalogProduct | null>(null);
  const [detailVariantId, setDetailVariantId] = useState<string | null>(null);
  const filterTriggerRef = useRef<HTMLButtonElement>(null);
  const filterDialogRef = useRef<HTMLElement>(null);
  const filterCloseRef = useRef<HTMLButtonElement>(null);
  const library = useLibrary();
  const catalog = useCatalog(filters, view === 'variants');
  const { products = [], brands = [], categoryTree = [], capturedAt } = catalog.data ?? {};
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

  const openDetail = useCallback((product: CatalogProduct, variantId: string | null = null) => {
    setDetailProduct(product);
    setDetailVariantId(variantId);
  }, []);

  const closeDetail = useCallback(() => {
    setDetailProduct(null);
    setDetailVariantId(null);
  }, []);

  const closeFilters = useCallback(() => {
    setFiltersOpen(false);
    filterTriggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!filtersOpen) return;

    filterCloseRef.current?.focus();
    const onDocumentKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeFilters();
      }
    };
    document.addEventListener('keydown', onDocumentKeyDown);
    return () => document.removeEventListener('keydown', onDocumentKeyDown);
  }, [closeFilters, filtersOpen]);

  const trapFilterDialogFocus = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Tab' || !filterDialogRef.current) return;
    const focusable = [...filterDialogRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col gap-7 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <header className="flex flex-col justify-between gap-3 border-b border-[#ded8d1] pb-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#84776e]">Sourcing catalog</p>
          <h1 className="mt-2 font-serif text-4xl leading-none tracking-[-0.045em] text-[#1c1612] sm:text-5xl">Catalog</h1>
        </div>
          <p className="w-full max-w-sm text-sm leading-relaxed text-[#70665d]">Browse a local snapshot of active catalog products and save options to your local library.</p>
      </header>
      <div className="flex flex-col gap-7 md:flex-row md:items-start">
        <div className="hidden md:block">
          <CatalogFilterRail filters={filters} brands={brands} categoryTree={categoryTree} onChange={setFilters} />
        </div>
        <section className="min-w-0 flex-1" aria-label="Catalog results">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-sm text-[#756b62]"><span className="font-medium text-[#2e2621]">{resultCount.toLocaleString()}</span> {resultLabel}</p>
            <div className="flex shrink-0 items-center gap-3">
              <button ref={filterTriggerRef} type="button" onClick={() => setFiltersOpen(true)} className="inline-flex items-center gap-1.5 rounded-md border border-[#d9d3cd] bg-white px-2.5 py-1.5 text-xs font-medium text-[#554940] shadow-sm md:hidden">
                <SlidersHorizontal className="size-3.5" aria-hidden="true" /> Filters
              </button>
              <CatalogViewToggle view={view} onChange={setView} />
              {capturedAt ? <p className="hidden text-[11px] text-[#8a8078] sm:block">Static snapshot · {capturedAt}</p> : null}
            </div>
          </div>
          {catalog.error ? <p role="alert" className="mb-4 rounded-md border border-[#d9d3cd] bg-white p-3 text-sm text-[#91554b]">{catalog.error}</p> : null}
          {library.error ? <p role="alert" className="mb-4 text-sm text-[#91554b]">{library.error}</p> : null}
          {catalog.loading ? <p role="status" aria-label="Loading catalog" className="py-4 text-sm text-[#756b62]">Loading catalog…</p> : catalog.error ? null : view === 'products' ? (
            <CatalogGrid products={products} savedIds={library.state.savedIds} collections={library.state.collections} isBlocked={library.isBlocked} onView={openDetail} onToggleSaved={library.toggleSaved} onAddToCollection={library.addToCollection} onCreateCollection={library.createCollection} />
          ) : (
            <CatalogVariantGrid items={variants} savedIds={library.state.savedIds} collections={library.state.collections} isBlocked={library.isBlocked} onView={openDetail} onToggleSaved={library.toggleSaved} onAddToCollection={library.addToCollection} onCreateCollection={library.createCollection} />
          )}
        </section>
      </div>
      {filtersOpen ? (
        <div className="fixed inset-0 z-50 bg-black/35 p-4 backdrop-blur-[1px] md:hidden" onMouseDown={closeFilters}>
          <section ref={filterDialogRef} role="dialog" aria-modal="true" aria-label="Catalog filters" onKeyDown={trapFilterDialogFocus} onMouseDown={(event) => event.stopPropagation()} className="ml-auto flex h-full w-full max-w-sm flex-col overflow-hidden rounded-xl bg-[#fdfcfa] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e6e0da] px-5 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#806f63]">Catalog filters</p>
              <button ref={filterCloseRef} type="button" aria-label="Close filters" onClick={closeFilters} className="grid size-8 place-items-center rounded-full text-[#564b43] hover:bg-[#f0ece7] focus-visible:outline-2 focus-visible:outline-[#886b54]">
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
            <div className="min-h-0 overflow-y-auto p-5">
              <CatalogFilterRail filters={filters} brands={brands} categoryTree={categoryTree} onChange={setFilters} />
            </div>
            <div className="border-t border-[#e6e0da] bg-[#fdfcfa] p-4">
              <button type="button" onClick={closeFilters} className="h-10 w-full rounded-md bg-[#2c241f] px-4 text-sm font-medium text-white transition hover:bg-[#463a32] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#886b54]">
                Show {resultCount.toLocaleString()} {resultCount === 1 ? 'result' : 'results'}
              </button>
            </div>
          </section>
        </div>
      ) : null}
      <CatalogDetailDialog product={detailProduct} selectedVariantId={detailVariantId} onClose={closeDetail} />
    </main>
  );
}

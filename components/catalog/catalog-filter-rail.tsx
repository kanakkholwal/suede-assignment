'use client';

import { RotateCcw, Search } from 'lucide-react';

import { type CatalogCategoryNode, type CatalogFilters, emptyCatalogFilters } from '@/lib/catalog-contract';
import { CatalogCategoryTree } from '@/components/catalog/catalog-category-tree';

interface CatalogFilterRailProps {
  filters: CatalogFilters;
  brands: string[];
  categoryTree: readonly CatalogCategoryNode[];
  onChange: (next: CatalogFilters) => void;
}

function parsePrice(value: string): number | null {
  if (!value.trim()) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? Math.round(parsed * 100) : null;
}

export function CatalogFilterRail({ filters, brands, categoryTree, onChange }: CatalogFilterRailProps) {
  const hasActiveFilters = Boolean(
    filters.query ||
      filters.category ||
      filters.brands.length ||
      filters.minPriceCents !== null ||
      filters.maxPriceCents !== null ||
      filters.inStockOnly,
  );

  return (
    <aside className="flex w-full shrink-0 flex-col gap-6 md:w-48 lg:w-56" aria-label="Catalog filters">
      <div>
        <label htmlFor="catalog-search" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#776c63]">
          Search
        </label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#837870]" aria-hidden="true" />
          <input
            id="catalog-search"
            type="search"
            value={filters.query}
            placeholder="Search catalog"
            onChange={(event) => onChange({ ...filters, query: event.target.value })}
            className="h-10 w-full rounded-md border border-[#d9d3cd] bg-white pl-9 pr-3 text-sm text-[#29211d] outline-none placeholder:text-[#958a81] focus:border-[#886b54] focus:ring-2 focus:ring-[#886b54]/15"
          />
        </div>
        <p className="mt-1.5 text-[11px] leading-snug text-[#8a7f76]">Matches titles, brands, types, and tags.</p>
      </div>

      <fieldset>
        <legend className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#776c63]">Category</legend>
        <CatalogCategoryTree nodes={categoryTree} selected={filters.category} onSelect={(category) => onChange({ ...filters, category })} />
      </fieldset>

      <fieldset>
        <legend className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#776c63]">Brand</legend>
        <div className="max-h-52 space-y-1 overflow-auto pr-1">
          {brands.map((brand) => {
            const checked = filters.brands.includes(brand);
            return (
              <label key={brand} className="flex cursor-pointer items-center gap-2 py-1 text-sm text-[#342c27]">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    onChange({
                      ...filters,
                      brands: checked ? filters.brands.filter((item) => item !== brand) : [...filters.brands, brand],
                    })
                  }
                />
                <span className="truncate">{brand}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#776c63]">Price</legend>
        <div className="grid grid-cols-2 gap-2">
          <label className="sr-only" htmlFor="catalog-min-price">Minimum price</label>
          <input id="catalog-min-price" inputMode="numeric" placeholder="Min" value={filters.minPriceCents !== null ? String(filters.minPriceCents / 100) : ''} onChange={(event) => onChange({ ...filters, minPriceCents: parsePrice(event.target.value) })} className="h-9 min-w-0 rounded-md border border-[#d9d3cd] bg-white px-2 text-sm outline-none focus:border-[#886b54]" />
          <label className="sr-only" htmlFor="catalog-max-price">Maximum price</label>
          <input id="catalog-max-price" inputMode="numeric" placeholder="Max" value={filters.maxPriceCents !== null ? String(filters.maxPriceCents / 100) : ''} onChange={(event) => onChange({ ...filters, maxPriceCents: parsePrice(event.target.value) })} className="h-9 min-w-0 rounded-md border border-[#d9d3cd] bg-white px-2 text-sm outline-none focus:border-[#886b54]" />
        </div>
      </fieldset>

      <label className="flex cursor-pointer items-center gap-2 text-sm text-[#342c27]">
        <input type="checkbox" checked={filters.inStockOnly} onChange={(event) => onChange({ ...filters, inStockOnly: event.target.checked })} />
        Available to order only
      </label>

      {hasActiveFilters ? (
        <button
          type="button"
          onClick={() => onChange(emptyCatalogFilters)}
          className="inline-flex w-fit items-center gap-1.5 text-sm text-[#6a5a4e] hover:text-[#241c17]"
        >
          <RotateCcw className="size-3.5" aria-hidden="true" /> Clear all
        </button>
      ) : null}
    </aside>
  );
}

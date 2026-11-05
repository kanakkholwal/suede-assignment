'use client';

import { RotateCcw, Search } from '@/components/icons';
import type { ReactNode } from 'react';

import { CatalogCategoryTree } from '@/components/catalog/catalog-category-tree';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { type CatalogCategoryNode, type CatalogFilters, emptyCatalogFilters } from '@/lib/catalog-contract';

interface CatalogFilterRailProps {
  filters: CatalogFilters;
  brands: string[];
  categoryTree: readonly CatalogCategoryNode[];
  onChange: (next: CatalogFilters) => void;
}

/** Rail filters in effect; search and the brief's width live elsewhere. */
export function activeFilterCount(filters: CatalogFilters): number {
  return [filters.category !== null, filters.brands.length > 0, filters.minPriceCents !== null || filters.maxPriceCents !== null, filters.inStockOnly].filter(Boolean).length;
}

function parsePrice(value: string): number | null {
  if (!value.trim()) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? Math.round(parsed * 100) : null;
}

function priceText(cents: number | null): string {
  return cents === null ? '' : String(cents / 100);
}

function Group({ legend, children }: { legend: string; children: ReactNode }) {
  return (
    <fieldset className="flex min-w-0 flex-col gap-2">
      <legend className="mb-2 text-xs font-medium text-muted-foreground">{legend}</legend>
      {children}
    </fieldset>
  );
}

const CHECK_ROW = 'flex cursor-pointer items-center gap-2.5 rounded-md px-1.5 py-1 text-sm text-foreground transition-colors duration-(--duration-fast) hover:bg-foreground/[0.04] [&_input]:size-4 [&_input]:accent-primary';

export function CatalogFilterRail({ filters, brands, categoryTree, onChange }: CatalogFilterRailProps) {
  const hasActiveFilters = activeFilterCount(filters) > 0 || Boolean(filters.query);

  return (
    <div className="flex w-full flex-col gap-6" role="group" aria-label="Catalog filters">
      <Group legend="Category">
        <CatalogCategoryTree nodes={categoryTree} selected={filters.category} onSelect={(category) => onChange({ ...filters, category })} />
      </Group>

      <Group legend="Brand">
        <div className="flex max-h-52 flex-col overflow-y-auto">
          {brands.map((brand) => {
            const checked = filters.brands.includes(brand);
            return (
              <label key={brand} className={CHECK_ROW}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    onChange({ ...filters, brands: checked ? filters.brands.filter((item) => item !== brand) : [...filters.brands, brand] })
                  }
                />
                <span className="truncate">{brand}</span>
              </label>
            );
          })}
        </div>
      </Group>

      <Group legend="Price, USD">
        <div className="grid grid-cols-2 gap-2">
          <label className="sr-only" htmlFor="catalog-min-price">Minimum price</label>
          <Input id="catalog-min-price" size="sm" inputMode="numeric" placeholder="Min" value={priceText(filters.minPriceCents)} onChange={(event) => onChange({ ...filters, minPriceCents: parsePrice(event.target.value) })} className="min-w-0 tabular-nums" />
          <label className="sr-only" htmlFor="catalog-max-price">Maximum price</label>
          <Input id="catalog-max-price" size="sm" inputMode="numeric" placeholder="Max" value={priceText(filters.maxPriceCents)} onChange={(event) => onChange({ ...filters, maxPriceCents: parsePrice(event.target.value) })} className="min-w-0 tabular-nums" />
        </div>
      </Group>

      <label className={CHECK_ROW}>
        <input type="checkbox" checked={filters.inStockOnly} onChange={(event) => onChange({ ...filters, inStockOnly: event.target.checked })} />
        Available to order only
      </label>

      {hasActiveFilters ? (
        <Button variant="ghost" size="sm" className="pop w-fit" onClick={() => onChange(emptyCatalogFilters)}>
          <RotateCcw aria-hidden="true" /> Clear all
        </Button>
      ) : null}
    </div>
  );
}

export function CatalogSearch({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="relative w-full sm:w-56">
      <label htmlFor="catalog-search" className="sr-only">Search</label>
      <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      <Input id="catalog-search" type="search" size="sm" value={value} placeholder="Search titles, brands, tags" onChange={(event) => onChange(event.target.value)} className="w-full pl-8" />
    </div>
  );
}

'use client';

import { Search } from '@/components/icons';
import type { ReactNode } from 'react';

import { CatalogCategoryTree } from '@/components/catalog/catalog-category-tree';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import type { CatalogCategoryNode, CatalogFilters } from '@/lib/catalog-contract';

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

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="flex min-w-0 flex-col gap-2">
      <legend className="mb-2 text-sm font-semibold text-foreground">{title}</legend>
      {children}
    </fieldset>
  );
}

const ROW = 'flex h-9 items-center rounded-lg px-2 transition-colors duration-(--duration-fast) hover:bg-foreground/[0.04]';

export function CatalogFilterRail({ filters, brands, categoryTree, onChange }: CatalogFilterRailProps) {
  return (
    <div className="flex w-full flex-col gap-7" role="group" aria-label="Catalog filters">
      <Section title="Category">
        <CatalogCategoryTree nodes={categoryTree} selected={filters.category} onSelect={(category) => onChange({ ...filters, category })} />
      </Section>

      <Section title="Brand">
        <div className="-mx-2 flex flex-col">
          {brands.map((brand) => {
            const checked = filters.brands.includes(brand);
            return (
              <div key={brand} className={ROW}>
                <Checkbox
                  label={brand}
                  checked={checked}
                  onCheckedChange={() =>
                    onChange({ ...filters, brands: checked ? filters.brands.filter((item) => item !== brand) : [...filters.brands, brand] })
                  }
                  className="w-full"
                />
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="Price">
        <div className="flex items-center gap-2">
          <PriceField id="catalog-min-price" label="Minimum price" placeholder="Min" value={filters.minPriceCents} onChange={(minPriceCents) => onChange({ ...filters, minPriceCents })} />
          <span className="text-sm text-muted-foreground">to</span>
          <PriceField id="catalog-max-price" label="Maximum price" placeholder="Max" value={filters.maxPriceCents} onChange={(maxPriceCents) => onChange({ ...filters, maxPriceCents })} />
        </div>
      </Section>

      <Section title="Availability">
        <div className={`${ROW} -mx-2`}>
          <Checkbox label="Available to order only" checked={filters.inStockOnly} onCheckedChange={(inStockOnly) => onChange({ ...filters, inStockOnly })} className="w-full" />
        </div>
      </Section>
    </div>
  );
}

function PriceField({ id, label, placeholder, value, onChange }: { id: string; label: string; placeholder: string; value: number | null; onChange: (cents: number | null) => void }) {
  return (
    <div className="relative min-w-0 flex-1">
      <label className="sr-only" htmlFor={id}>{label}</label>
      <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-sm text-muted-foreground" aria-hidden="true">$</span>
      <Input id={id} inputMode="numeric" placeholder={placeholder} value={priceText(value)} onChange={(event) => onChange(parsePrice(event.target.value))} className="w-full pl-6 tabular-nums" />
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

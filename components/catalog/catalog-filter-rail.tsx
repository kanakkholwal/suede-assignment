'use client';

import { type ReactNode, useId, useState } from 'react';

import { ChevronDown, Search } from '@/components/icons';

import { CatalogCategoryTree } from '@/components/catalog/catalog-category-tree';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import type { CatalogCategoryNode, CatalogFilters } from '@/lib/catalog-contract';
import { cn } from '@/lib/utils';

interface CatalogFilterRailProps {
  filters: CatalogFilters;
  brands: string[];
  categoryTree: readonly CatalogCategoryNode[];
  onChange: (next: CatalogFilters) => void;
}

/** Rail filters in effect; search and the brief's width live elsewhere. */
export function activeFilterCount(filters: CatalogFilters): number {
  return [filters.query.trim() !== '', filters.category !== null, filters.brands.length > 0, filters.minPriceCents !== null || filters.maxPriceCents !== null, filters.inStockOnly].filter(Boolean).length;
}

function parsePrice(value: string): number | null {
  if (!value.trim()) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? Math.round(parsed * 100) : null;
}

function priceText(cents: number | null): string {
  return cents === null ? '' : String(cents / 100);
}

function findName(nodes: readonly CatalogCategoryNode[], id: CatalogFilters['category']): string | null {
  for (const node of nodes) {
    if (node.id === id) return node.name;
    const child = findName(node.children, id);
    if (child) return child;
  }
  return null;
}

function money(cents: number): string {
  return `$${(cents / 100).toLocaleString()}`;
}

function priceSummary({ minPriceCents: min, maxPriceCents: max }: CatalogFilters): string | null {
  if (min !== null && max !== null) return `${money(min)} to ${money(max)}`;
  if (max !== null) return `Up to ${money(max)}`;
  return min !== null ? `From ${money(min)}` : null;
}

/** One foldable filter group; its header carries the current value so a closed group still reports. */
function Section({ title, summary, defaultOpen, children }: { title: string; summary: string | null; defaultOpen: boolean; children: ReactNode }) {
  const [open, setOpen] = useState(defaultOpen || summary !== null);
  const id = useId();
  return (
    <section className="flex flex-col">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((value) => !value)}
          className="-mx-2 flex h-11 w-[calc(100%+1rem)] items-center gap-2 rounded-lg px-2 text-left outline-none transition-colors duration-(--duration-fast) hover:bg-foreground/[0.04] focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="text-sm font-semibold text-foreground">{title}</span>
          {summary ? <span className="pop min-w-0 truncate text-xs text-primary">{summary}</span> : null}
          <ChevronDown className={cn('ml-auto size-4 shrink-0 text-muted-foreground transition-transform duration-(--duration-base) ease-(--ease-ui-out)', open && 'rotate-180')} aria-hidden="true" />
        </button>
      </h3>
      <div id={id} className="disclosure" data-open={open} inert={!open}>
        <div>
          <fieldset className="flex min-w-0 flex-col gap-2 pt-1 pb-3">
            <legend className="sr-only">{title}</legend>
            {children}
          </fieldset>
        </div>
      </div>
    </section>
  );
}

const ROW = 'flex h-9 items-center rounded-lg px-2 transition-colors duration-(--duration-fast) hover:bg-foreground/[0.04]';

export function CatalogFilterRail({ filters, brands, categoryTree, onChange }: CatalogFilterRailProps) {
  return (
    <div className="flex w-full flex-col" role="group" aria-label="Catalog filters">
      <Section title="Name, brand or tag" summary={filters.query.trim() ? `“${filters.query.trim()}”` : null} defaultOpen>
        <CatalogSearch value={filters.query} onChange={(query) => onChange({ ...filters, query })} />
      </Section>
      <Section title="Category" summary={filters.category === null ? null : findName(categoryTree, filters.category)} defaultOpen>
        <CatalogCategoryTree nodes={categoryTree} selected={filters.category} onSelect={(category) => onChange({ ...filters, category })} />
      </Section>

      <Section title="Brand" summary={filters.brands.length ? `${filters.brands.length} selected` : null} defaultOpen={false}>
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

      <Section title="Price" summary={priceSummary(filters)} defaultOpen={false}>
        <div className="flex items-center gap-2">
          <PriceField id="catalog-min-price" label="Minimum price" placeholder="Min" value={filters.minPriceCents} onChange={(minPriceCents) => onChange({ ...filters, minPriceCents })} />
          <span className="text-sm text-muted-foreground">to</span>
          <PriceField id="catalog-max-price" label="Maximum price" placeholder="Max" value={filters.maxPriceCents} onChange={(maxPriceCents) => onChange({ ...filters, maxPriceCents })} />
        </div>
      </Section>

      <Section title="Availability" summary={filters.inStockOnly ? 'Available to order' : null} defaultOpen={false}>
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

function CatalogSearch({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="relative w-full">
      <label htmlFor="catalog-search" className="sr-only">Search</label>
      <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      <Input id="catalog-search" type="search" size="sm" value={value} placeholder="Exact words, e.g. Kyoto or linen" onChange={(event) => onChange(event.target.value)} className="w-full pl-8" />
    </div>
  );
}

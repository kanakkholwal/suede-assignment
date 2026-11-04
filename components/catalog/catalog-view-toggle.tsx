'use client';

import { LayoutGrid, Rows3 } from 'lucide-react';

export type CatalogView = 'products' | 'variants';

interface CatalogViewToggleProps {
  view: CatalogView;
  onChange: (view: CatalogView) => void;
}

export function CatalogViewToggle({ view, onChange }: CatalogViewToggleProps) {
  return (
    <div role="group" aria-label="Catalog view" className="inline-flex rounded-md border border-[#d9d3cd] bg-white p-0.5 shadow-sm">
      <button
        type="button"
        aria-label="Products view"
        aria-pressed={view === 'products'}
        onClick={() => onChange('products')}
        className={`inline-flex h-7 items-center gap-1.5 rounded px-2 text-xs font-medium transition focus-visible:outline-2 focus-visible:outline-[#886b54] ${
          view === 'products' ? 'bg-[#ede7e0] text-[#2c241f]' : 'text-[#766b62] hover:text-[#2c241f]'
        }`}
      >
        <LayoutGrid className="size-3.5" aria-hidden="true" />
        <span className="hidden sm:inline">Products</span>
      </button>
      <button
        type="button"
        aria-label="Variants view"
        aria-pressed={view === 'variants'}
        onClick={() => onChange('variants')}
        className={`inline-flex h-7 items-center gap-1.5 rounded px-2 text-xs font-medium transition focus-visible:outline-2 focus-visible:outline-[#886b54] ${
          view === 'variants' ? 'bg-[#ede7e0] text-[#2c241f]' : 'text-[#766b62] hover:text-[#2c241f]'
        }`}
      >
        <Rows3 className="size-3.5" aria-hidden="true" />
        <span className="hidden sm:inline">Variants</span>
      </button>
    </div>
  );
}

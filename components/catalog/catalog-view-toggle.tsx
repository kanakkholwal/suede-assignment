'use client';

import { LayoutGrid, Rows3 } from 'lucide-react';

import { type SegmentOption, SegmentedControl } from '@/components/shared/segmented-control';

export type CatalogView = 'products' | 'variants';

const OPTIONS: readonly SegmentOption<CatalogView>[] = [
  { value: 'products', label: 'Products', ariaLabel: 'Products view', icon: LayoutGrid },
  { value: 'variants', label: 'Variants', ariaLabel: 'Variants view', icon: Rows3 },
];

interface CatalogViewToggleProps {
  view: CatalogView;
  onChange: (view: CatalogView) => void;
}

export function CatalogViewToggle({ view, onChange }: CatalogViewToggleProps) {
  return <SegmentedControl label="Catalog view" value={view} options={OPTIONS} onChange={onChange} compact />;
}

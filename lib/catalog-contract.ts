import type { CatalogProduct, ProductVariant } from '@/data/product-types';

export type CatalogCategoryFilter = number | 'uncategorized' | null;

export interface CatalogFilters {
  query: string;
  category: CatalogCategoryFilter;
  brands: string[];
  minPriceCents: number | null;
  maxPriceCents: number | null;
  inStockOnly: boolean;
}

export interface CatalogCategoryNode {
  id: number | 'uncategorized';
  name: string;
  count: number;
  children: CatalogCategoryNode[];
}

/** Compact API reference; the product and variant are already in products. */
export interface CatalogVariantReference {
  key: string;
  productId: string;
  variantId: string;
}

/** Hydrated client view model, never serialized by the collection API. */
export interface CatalogVariantItem {
  key: string;
  product: CatalogProduct;
  variant: ProductVariant;
}

export interface CatalogQueryResult {
  capturedAt: string;
  products: CatalogProduct[];
  variants?: CatalogVariantReference[];
  brands: string[];
  categoryTree: CatalogCategoryNode[];
}

export const emptyCatalogFilters: CatalogFilters = {
  query: '',
  category: null,
  brands: [],
  minPriceCents: null,
  maxPriceCents: null,
  inStockOnly: false,
};

export class CatalogQueryInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CatalogQueryInputError';
  }
}

export function parseIncludeVariants(params: URLSearchParams): boolean {
  const values = params.getAll('includeVariants');
  if (values.length === 0) return false;
  if (values.length !== 1 || !['true', 'false'].includes(values[0])) {
    throw new CatalogQueryInputError('includeVariants must be a single "true" or "false".');
  }
  return values[0] === 'true';
}

function parseNonNegativeInteger(params: URLSearchParams, name: string): number | null {
  const value = params.get(name);
  if (value === null) return null;
  if (!/^\d+$/.test(value)) {
    throw new CatalogQueryInputError(`${name} must be a non-negative integer.`);
  }
  const parsed = Number(value);
  if (!Number.isSafeInteger(parsed)) {
    throw new CatalogQueryInputError(`${name} must be a safe non-negative integer.`);
  }
  return parsed;
}

function parseCategory(value: string | null): CatalogCategoryFilter {
  if (value === null) return null;
  if (value === 'uncategorized') return value;
  if (!/^[1-9]\d*$/.test(value)) {
    throw new CatalogQueryInputError('category must be a positive integer or "uncategorized".');
  }
  const parsed = Number(value);
  if (!Number.isSafeInteger(parsed)) {
    throw new CatalogQueryInputError('category must be a safe positive integer.');
  }
  return parsed;
}

function parseInStockOnly(value: string | null): boolean {
  if (value === null || value === 'false') return false;
  if (value === 'true') return true;
  throw new CatalogQueryInputError('inStockOnly must be "true" or "false".');
}

export function parseCatalogFilters(params: URLSearchParams): CatalogFilters {
  const minPriceCents = parseNonNegativeInteger(params, 'minPriceCents');
  const maxPriceCents = parseNonNegativeInteger(params, 'maxPriceCents');
  if (minPriceCents !== null && maxPriceCents !== null && minPriceCents > maxPriceCents) {
    throw new CatalogQueryInputError('minPriceCents must not be greater than maxPriceCents.');
  }

  return {
    query: params.get('query') ?? '',
    category: parseCategory(params.get('category')),
    brands: params.getAll('brand').filter((brand) => brand.length > 0),
    minPriceCents,
    maxPriceCents,
    inStockOnly: parseInStockOnly(params.get('inStockOnly')),
  };
}

export function catalogFiltersToSearchParams(filters: CatalogFilters): URLSearchParams {
  const params = new URLSearchParams();
  if (filters.query) params.set('query', filters.query);
  if (filters.category !== null) params.set('category', String(filters.category));
  for (const brand of filters.brands) params.append('brand', brand);
  if (filters.minPriceCents !== null) params.set('minPriceCents', String(filters.minPriceCents));
  if (filters.maxPriceCents !== null) params.set('maxPriceCents', String(filters.maxPriceCents));
  if (filters.inStockOnly) params.set('inStockOnly', 'true');
  return params;
}

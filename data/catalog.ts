import { STAGING_PRODUCT_CATEGORY_IDS } from './staging-category-assignments';
import { STAGING_VARIANT_IMAGES } from './staging-variant-images';
import {
  STAGING_CATALOG_CAPTURED_AT,
  STAGING_CATALOG_PRODUCTS,
} from './staging-catalog';
import type { CatalogProduct } from './product-types';

export { STAGING_CATALOG_CAPTURED_AT };
export { STAGING_CATALOG_CATEGORIES } from './staging-categories';

/**
 * Raw, server-side seed source for the deterministic SQLite template.
 * This module must never be imported by a client component.
 */
export const CATALOG_PRODUCTS: readonly CatalogProduct[] = STAGING_CATALOG_PRODUCTS.map(
  (product) => ({
    ...product,
    categoryId: STAGING_PRODUCT_CATEGORY_IDS[product.id] ?? null,
    variants: product.variants.map((variant) => ({
      ...variant,
      ...(STAGING_VARIANT_IMAGES[variant.id]
        ? { image: STAGING_VARIANT_IMAGES[variant.id] }
        : {}),
    })),
  }),
);

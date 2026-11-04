// @vitest-environment node
import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { CATALOG_PRODUCTS } from '@/data/catalog';
import { STAGING_PRODUCT_CATEGORY_IDS } from '@/data/staging-category-assignments';
import { STAGING_CATALOG_CATEGORIES } from '@/data/staging-categories';
import { checkInterviewDatabase } from '@/lib/db/seed';

describe('catalog snapshot', () => {
  it('documents a Node floor supported by the pinned package manager', () => {
    const manifest = JSON.parse(readFileSync('package.json', 'utf8'));
    const readme = readFileSync('README.md', 'utf8');
    expect(manifest.engines.node).toBe('>=22.13.0');
    expect(readme).toContain('>=22.13.0');
    expect(readme).toContain('Node 24 LTS');
    expect(readme).toContain('npm install --global corepack');
  });

  it('describes the local SQLite runtime boundary consistently in candidate source notes', () => {
    const sourceNotes = [
      readFileSync('data/product-sources.md', 'utf8'),
      readFileSync('data/staging-catalog.ts', 'utf8').split(
        'export const STAGING_CATALOG_CAPTURED_AT',
      )[0],
    ];

    for (const notes of sourceNotes) {
      expect(notes).not.toMatch(/no runtime database calls/i);
      expect(notes).toMatch(/queries (?:the )?local SQLite(?: database)? at runtime/i);
      expect(notes).toMatch(/no remote database, catalog, or image requests/i);
      expect(notes).toMatch(/source (?:URLs|links) open only\s+when a user explicitly chooses/i);
    }

    const applicationNotes = [
      readFileSync('data/staging-categories.ts', 'utf8').split(
        'export interface StagingCatalogCategory',
      )[0],
      readFileSync('app/layout.tsx', 'utf8'),
    ];

    for (const notes of applicationNotes) {
      expect(notes).not.toMatch(/does not read a database at runtime|static sourcing catalog/i);
      expect(notes).toMatch(/local Next\.js[^.]*local SQLite[^.]*runtime through local APIs/i);
      expect(notes).toMatch(/no remote runtime database, catalog, or image requests/i);
    }
  });

  it('ships the checked-in SQLite template used by the running catalog', () => {
    expect(existsSync('data/catalog-lab-interview.sqlite')).toBe(true);
    expect(checkInterviewDatabase('data/catalog-lab-interview.sqlite')).toMatchObject({
      products: 280,
      variants: 2165,
      categories: 198,
      variantImages: 1862,
      ok: true,
      integrityCheck: ['ok'],
    });
  });

  it('contains the complete, uniquely identified staging snapshot', () => {
    expect(CATALOG_PRODUCTS).toHaveLength(280);
    expect(new Set(CATALOG_PRODUCTS.map((product) => product.id)).size).toBe(280);
    const variantIds = CATALOG_PRODUCTS.flatMap((product) => product.variants.map((variant) => variant.id));
    expect(variantIds).toHaveLength(2165);
    expect(new Set(variantIds).size).toBe(2165);
  });

  it('keeps every rendered image local while retaining an explicit HTTPS source and provenance', () => {
    for (const product of CATALOG_PRODUCTS) {
      expect(product.sourceUrl).toMatch(/^https:\/\//);
      expect(product.images.length).toBeGreaterThan(0);
      expect(product.images.every((image) => image.src.startsWith('/products/staging-'))).toBe(true);
      expect(product.images.every((image) => existsSync(`public${image.src}`))).toBe(true);
      expect(product.provenance.price).toBe('verified');
      expect(product.provenance.availability).toBe('verified');
      expect(product.provenance.leadTime).toBe('unknown');
      expect(product.provenance.margin).toBe('unknown');
    }
  });

  it('binds every staging-assigned variant image to a local static asset', () => {
    const variantImages = CATALOG_PRODUCTS.flatMap((product) =>
      product.variants.flatMap((variant) => (variant.image ? [variant.image] : [])),
    );

    expect(variantImages).toHaveLength(1862);
    expect(new Set(variantImages.map((image) => image.src)).size).toBe(1777);
    expect(variantImages.every((image) => image.src.startsWith('/products/variants/staging-variant-'))).toBe(true);
    expect(variantImages.every((image) => existsSync(`public${image.src}`))).toBe(true);
  });

  it('does not model reviews when the exercise has no review source', () => {
    for (const product of CATALOG_PRODUCTS) {
      expect('reviewSummary' in product).toBe(false);
      expect('reviews' in product.provenance).toBe(false);
    }
  });

  it('uses a product-specific accessible label for every staging image without exposing supplier margin', () => {
    for (const product of CATALOG_PRODUCTS) {
      expect(product.images.every((image) => image.alt === `${product.name} by ${product.brand}`)).toBe(true);
      expect(product.margin).toBeNull();
    }
  });

  it('keeps the complete staging category ontology and an explicit assignment for every product', () => {
    expect(STAGING_CATALOG_CATEGORIES).toHaveLength(198);
    expect(Object.keys(STAGING_PRODUCT_CATEGORY_IDS)).toHaveLength(280);

    const categoryIds = new Set(STAGING_CATALOG_CATEGORIES.map((category) => category.id));
    for (const product of CATALOG_PRODUCTS) {
      expect(Object.hasOwn(STAGING_PRODUCT_CATEGORY_IDS, product.id)).toBe(true);
      expect(product.categoryId === null || categoryIds.has(product.categoryId)).toBe(true);
    }
  });
});

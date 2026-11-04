import { vi } from 'vitest';

// Test-only transport fixtures retain complete product/variant/image shapes.
// No repository or route implementation participates in the UI tests.
import { CATALOG_PRODUCTS } from '@/data/catalog';
import type { CatalogProduct } from '@/data/product-types';
import type { CatalogQueryResult } from '@/lib/catalog-contract';
import type { LibrarySnapshot } from '@/lib/library-state';

export const quilt = CATALOG_PRODUCTS.find((product) => product.id === '7a7e801d-cb56-42ed-aa20-5b0dfa146d32')!;
export const boneQuilt = CATALOG_PRODUCTS.find((product) => product.name === 'Linen Box Quilt (Bone)')!;
export const armchair = CATALOG_PRODUCTS.find((product) => product.name === 'Antwerp Armchair')!;

export const pillow = CATALOG_PRODUCTS.find((product) => product.name === 'Down Alternative Pillow')!;
export const vase = CATALOG_PRODUCTS.find((product) => product.name === 'River Stone Vase')!;
export const fullCatalogProducts = [...CATALOG_PRODUCTS];

export function catalogFixture(products: CatalogProduct[] = [quilt, boneQuilt, armchair, pillow, vase]): CatalogQueryResult {
  return {
    capturedAt: '2026-09-15',
    products,
    variants: products.flatMap((product) => product.variants.map((variant) => ({ key: `${product.id}:${variant.id}`, productId: product.id, variantId: variant.id }))),
    brands: ['House of Leon', 'Parachute Home'],
    categoryTree: [
      { id: 7, name: 'Decor', count: 1, children: [{ id: 300, name: 'Vase', count: 1, children: [] }] },
      { id: 1, name: 'Seating', count: 1, children: [{ id: 11, name: 'Chair', count: 1, children: [{ id: 30, name: 'Armchair', count: 1, children: [] }] }] },
      { id: 8, name: 'Textiles', count: 3, children: [{ id: 400, name: 'Bedding', count: 3, children: [
        { id: 416, name: 'Bed Pillow', count: 1, children: [] },
        { id: 413, name: 'Quilt', count: 2, children: [] },
      ] }] },
    ],
  };
}

export function libraryFixture(products: CatalogProduct[] = [], collections: LibrarySnapshot['state']['collections'] = []): LibrarySnapshot {
  return { state: { version: 1, savedIds: products.map((product) => product.id), collections }, products };
}

export function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason: unknown) => void;
  const promise = new Promise<T>((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });
  return { promise, resolve, reject };
}

export function mockApi(options: {
  catalog?: (url: URL, init?: RequestInit) => Response | Promise<Response>;
  library?: LibrarySnapshot | Promise<Response>;
  mutation?: (init: RequestInit) => Response | Promise<Response>;
} = {}) {
  const fetchMock = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = new URL(String(input), 'http://localhost');
    if (url.pathname === '/api/catalog') {
      if (options.catalog) return options.catalog(url, init);
      // Fixed response scenarios; SQL matching itself is covered by repository tests.
      const respond = (products?: CatalogProduct[]) => {
        const result = catalogFixture(products);
        if (url.searchParams.get('includeVariants') !== 'true') delete result.variants;
        return Response.json(result);
      };
      const query = url.searchParams.get('query');
      if (url.searchParams.has('maxPriceCents')) return respond([]);
      if (url.searchParams.get('category') === '7') return respond([vase]);
      if (query === 'Antwerp Armchair') return respond([armchair]);
      if (query === 'Linen Box Quilt (Dusk)') return respond([quilt]);
      if (query === 'Linen Box Quilt') return respond([boneQuilt, quilt]);
      return respond();
    }
    if (url.pathname === '/api/library') {
      if (init?.method === 'POST') {
        if (options.mutation) return options.mutation(init);
        return Response.json(libraryFixture([quilt]));
      }
      return options.library instanceof Promise ? options.library : Response.json(options.library ?? libraryFixture());
    }
    throw new Error(`Unexpected request: ${input}`);
  });
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}

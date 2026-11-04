// @vitest-environment node
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import Database from 'better-sqlite3';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const connectionBoundary = vi.hoisted(() => ({
  getDatabase: vi.fn(),
}));

vi.mock('@/lib/db/connection', () => ({
  getDatabase: connectionBoundary.getDatabase,
}));

import { GET as detailGET } from '@/app/api/catalog/[id]/route';
import { GET } from '@/app/api/catalog/route';
import { seedInterviewDatabase } from '@/lib/db/seed';

const LINEN_BOX_QUILT_ID = '945e52df-2f3c-439f-8926-35e5b7411f12';

let directory: string;
let db: Database.Database;

beforeEach(() => {
  directory = mkdtempSync(path.join(tmpdir(), 'catalog-lab-interview-catalog-route-'));
  const databasePath = path.join(directory, 'catalog.sqlite');
  seedInterviewDatabase({ databasePath });
  db = new Database(databasePath);
  connectionBoundary.getDatabase.mockReturnValue(db);
});

afterEach(() => {
  db.close();
  rmSync(directory, { recursive: true, force: true });
});

describe('Catalog API routes', () => {
  it.each(['', '?includeVariants=false'])('omits variant references for product requests (%s) while preserving product options', async (query) => {
    const response = GET(new Request(`http://localhost/api/catalog${query}`));
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body).not.toHaveProperty('variants');
    expect(body.products).toHaveLength(280);
    expect(body.products.find((product: { id: string }) => product.id === LINEN_BOX_QUILT_ID).variants).toHaveLength(3);
  });

  it('returns only compact variant references when explicitly requested', async () => {
    const response = GET(new Request('http://localhost/api/catalog?includeVariants=true'));
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body.variants).toHaveLength(2165);
    for (const reference of body.variants) {
      expect(Object.keys(reference).sort()).toEqual(['key', 'productId', 'variantId']);
      expect(reference.key).toBe(`${reference.productId}:${reference.variantId}`);
    }
    expect(Buffer.byteLength(JSON.stringify(body))).toBeLessThan(2_000_000);
  });

  it.each(['', '1', 'TRUE', 'true&includeVariants=false'])('rejects invalid includeVariants=%s', async (value) => {
    const response = GET(new Request(`http://localhost/api/catalog?includeVariants=${value}`));
    expect(response.status).toBe(400);
    expect(await response.json()).toMatchObject({ error: expect.stringContaining('includeVariants') });
  });

  it('returns products from literal repository search with validated filters', async () => {
    const response = await GET(
      new Request('http://localhost/api/catalog?query=Linen%20Box%20Quilt&inStockOnly=true'),
    );

    expect(response.status).toBe(200);
    expect(
      ((await response.json()) as { products: Array<{ id: string }> }).products.map(
        (product) => product.id,
      ),
    ).toContain(LINEN_BOX_QUILT_ID);
  });

  it('returns 400 for an invalid price range', async () => {
    const response = await GET(
      new Request('http://localhost/api/catalog?minPriceCents=600&maxPriceCents=100'),
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({
      error: expect.stringContaining('minPriceCents'),
    });
  });

  it('returns 404 when a catalog product does not exist', async () => {
    const response = await detailGET(new Request('http://localhost/api/catalog/not-a-product'), {
      params: Promise.resolve({ id: 'not-a-product' }),
    });

    expect(response.status).toBe(404);
    await expect(response.json()).resolves.toMatchObject({ error: expect.any(String) });
  });

  it('returns an actionable 503 when the local database is unavailable', async () => {
    connectionBoundary.getDatabase.mockImplementationOnce(() => {
      throw new Error(
        'The local catalog database is unavailable. Run pnpm db:reset to restore it.',
      );
    });

    const response = await GET(new Request('http://localhost/api/catalog'));

    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toMatchObject({
      error: expect.stringContaining('pnpm db:reset'),
    });
  });
});

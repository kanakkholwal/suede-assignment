// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const boundaries = vi.hoisted(() => ({ cookies: vi.fn(), getDatabase: vi.fn() }));

vi.mock('next/headers', () => ({ cookies: boundaries.cookies }));
vi.mock('@/lib/db/connection', () => ({ getDatabase: boundaries.getDatabase }));

import { GET, POST } from '@/app/api/room/route';
import type { RoomSnapshot } from '@/lib/room-state';
import { createSeededDatabase, PRODUCTS, type SeededDatabase, UNKNOWN_ID } from '@/tests/seeded-database';

const WORKSPACE_COOKIE = 'catalog_lab_interview_workspace';
let seeded: SeededDatabase;

function useWorkspaceCookie(value?: string): void {
  boundaries.cookies.mockResolvedValue({
    get: (name: string) => (name === WORKSPACE_COOKIE && value ? { name, value } : undefined),
  });
}

function post(body: unknown): Promise<Response> {
  return POST(
    new Request('http://localhost/api/room', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: typeof body === 'string' ? body : JSON.stringify(body),
    }),
  );
}

beforeEach(() => {
  seeded = createSeededDatabase('room-route');
  boundaries.getDatabase.mockReturnValue(seeded.db);
  useWorkspaceCookie('workspace-a');
});

afterEach(() => seeded.dispose());

describe('Room API route', () => {
  it('returns the client room and sets a workspace cookie on first visit', async () => {
    useWorkspaceCookie();
    const response = await GET(new Request('http://localhost/api/room'));

    expect(response.status).toBe(200);
    const snapshot = (await response.json()) as RoomSnapshot;
    expect(snapshot.room).toMatchObject({ lengthIn: 180, widthIn: 144 });
    expect(snapshot.features).toHaveLength(4);
    expect(response.headers.get('set-cookie')).toContain(WORKSPACE_COOKIE);
  });

  it('adds and places an item, returning resolved dimensions', async () => {
    const added = (await (
      await post({ operation: 'addItem', productId: PRODUCTS.elevate86, variantId: null })
    ).json()) as RoomSnapshot;
    const [item] = added.items;
    expect(item.dimensions.width).toMatchObject({ value: 86.5, source: 'verified' });
    expect(added.products.map((product) => product.id)).toEqual([PRODUCTS.elevate86]);

    const placed = await post({ operation: 'placeItem', itemId: item.id, xIn: 90, yIn: 110, rotationDeg: 90 });
    expect(placed.status).toBe(200);
    expect(((await placed.json()) as RoomSnapshot).items[0]).toMatchObject({ xIn: 90, yIn: 110, rotationDeg: 90 });
  });

  it.each([
    ['malformed JSON', '{', 'The request body must be valid JSON.'],
    ['an unknown operation', { operation: 'teleport' }, 'The request body is not a valid Room mutation.'],
    ['extra fields', { operation: 'removeItem', itemId: 'x', extra: 1 }, 'The request body is not a valid Room mutation.'],
    [
      'a non-right-angle rotation',
      { operation: 'placeItem', itemId: 'x', xIn: 1, yIn: 1, rotationDeg: 45 },
      'rotationDeg must be one of 0, 90, 180, 270.',
    ],
    [
      'a typo-sized room',
      { operation: 'updateRoom', lengthIn: 18000, widthIn: 144, ceilingIn: 102, status: 'confirmed' },
      'lengthIn must be a number between 12 and 1200.',
    ],
    [
      'an empty dimension entry',
      {
        operation: 'setDimensions',
        productId: PRODUCTS.essentialSofa,
        variantId: null,
        values: { width: null, depth: null, height: null },
        note: '',
      },
      'Enter at least one dimension.',
    ],
    [
      'an unknown feature field',
      { operation: 'updateFeature', featureId: 'x', patch: { colour: 'red' }, status: 'assumed' },
      'The request body is not a valid Room mutation.',
    ],
  ])('rejects %s as a 400', async (_label, body, error) => {
    const response = await post(body);
    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({ error });
    expect(response.headers.get('set-cookie')).toBeNull();
  });

  it('serves and mutates the room picked by ?room=, and rejects unknown presets', async () => {
    const studio = await GET(new Request('http://localhost/api/room?room=open-studio'));
    expect(((await studio.json()) as RoomSnapshot).room.preset).toBe('open-studio');

    const added = await POST(
      new Request('http://localhost/api/room?room=open-studio', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ operation: 'addItem', productId: PRODUCTS.elevate86, variantId: null }),
      }),
    );
    expect(((await added.json()) as RoomSnapshot).items).toHaveLength(1);
    expect(((await (await GET(new Request('http://localhost/api/room'))).json()) as RoomSnapshot).items).toEqual([]);

    expect((await GET(new Request('http://localhost/api/room?room=castle'))).status).toBe(400);
  });

  it('returns missing resources as a 404', async () => {
    const response = await post({ operation: 'addItem', productId: UNKNOWN_ID, variantId: null });
    expect(response.status).toBe(404);
  });

  it('returns an actionable 503 when the database is unavailable', async () => {
    boundaries.getDatabase.mockImplementation(() => {
      throw new Error('disk gone');
    });
    const response = await GET(new Request('http://localhost/api/room'));
    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toEqual({
      error: 'The local catalog database is unavailable. Run pnpm db:reset to restore it.',
    });
  });
});

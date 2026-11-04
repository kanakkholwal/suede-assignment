// @vitest-environment node
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import Database from 'better-sqlite3';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const boundaries = vi.hoisted(() => ({
  cookies: vi.fn(),
  getDatabase: vi.fn(),
}));

vi.mock('next/headers', () => ({ cookies: boundaries.cookies }));
vi.mock('@/lib/db/connection', () => ({ getDatabase: boundaries.getDatabase }));

import { GET, POST } from '@/app/api/library/route';
import { seedInterviewDatabase } from '@/lib/db/seed';

const LINEN_BOX_QUILT_ID = '7a7e801d-cb56-42ed-aa20-5b0dfa146d32';
const DOWN_ALTERNATIVE_PILLOW_ID = 'f2173f5b-7cbb-40df-a2a9-dc287bdf2406';
const UNKNOWN_PRODUCT_ID = '00000000-0000-4000-8000-000000000000';

let directory: string;
let db: Database.Database;

function useWorkspaceCookie(value?: string): void {
  boundaries.cookies.mockResolvedValue({
    get: (name: string) =>
      name === 'catalog_lab_interview_workspace' && value ? { name: 'catalog_lab_interview_workspace', value } : undefined,
  });
}

function mutationRequest(body: unknown, query = ''): Request {
  return new Request(`http://localhost/api/library${query}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
}

beforeEach(() => {
  directory = mkdtempSync(path.join(tmpdir(), 'catalog-lab-interview-library-route-'));
  const databasePath = path.join(directory, 'catalog.sqlite');
  seedInterviewDatabase({ databasePath });
  db = new Database(databasePath);
  db.pragma('foreign_keys = ON');
  boundaries.getDatabase.mockReturnValue(db);
  useWorkspaceCookie();
});

afterEach(() => {
  vi.unstubAllEnvs();
  db.close();
  rmSync(directory, { recursive: true, force: true });
});

describe('Library API route', () => {
  it('creates an anonymous workspace cookie on the first snapshot request', async () => {
    const response = await GET(
      new Request('http://localhost/api/library?workspaceId=untrusted-query-workspace'),
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      state: { version: 1, savedIds: [], collections: [] },
      products: [],
    });
    const workspaceId = response.cookies.get('catalog_lab_interview_workspace')?.value;
    expect(workspaceId).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
    );
    expect(response.headers.get('set-cookie')).toContain('HttpOnly');
    expect(response.headers.get('set-cookie')).toContain('SameSite=lax');
    expect(response.headers.get('set-cookie')).toContain('Path=/');
    expect(response.headers.get('set-cookie')).toContain('Max-Age=2592000');
    expect(response.headers.get('set-cookie')).not.toContain('Secure');
    expect(db.prepare('SELECT id FROM workspaces').all()).toEqual([{ id: workspaceId }]);
  });

  it('marks a newly created workspace cookie secure in production', async () => {
    vi.stubEnv('NODE_ENV', 'production');

    const response = await GET(new Request('http://localhost/api/library'));

    expect(response.headers.get('set-cookie')).toContain('Secure');
  });

  it('uses only the cookie workspace and returns the updated mutation snapshot', async () => {
    useWorkspaceCookie('trusted-cookie-workspace');

    const response = await POST(
      mutationRequest(
        { operation: 'toggleSaved', productId: LINEN_BOX_QUILT_ID },
        '?workspaceId=untrusted-query-workspace',
      ),
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toMatchObject({
      state: { version: 1, savedIds: [LINEN_BOX_QUILT_ID], collections: [] },
      products: [{ id: LINEN_BOX_QUILT_ID }],
    });
    expect(response.headers.get('set-cookie')).toBeNull();
    expect(db.prepare('SELECT id FROM workspaces').all()).toEqual([
      { id: 'trusted-cookie-workspace' },
    ]);
  });

  it('returns authoritative collection state through a complete same-workspace lifecycle', async () => {
    useWorkspaceCookie('trusted-cookie-workspace');

    const createResponse = await POST(
      mutationRequest({
        operation: 'createCollection',
        name: 'Family room',
        productId: LINEN_BOX_QUILT_ID,
      }),
    );
    expect(createResponse.status).toBe(200);
    const created = await createResponse.json();
    const collectionId = created.state.collections[0]?.id as string;
    expect(created).toMatchObject({
      state: {
        savedIds: [LINEN_BOX_QUILT_ID],
        collections: [
          { id: collectionId, name: 'Family room', productIds: [LINEN_BOX_QUILT_ID] },
        ],
      },
      products: [{ id: LINEN_BOX_QUILT_ID }],
    });

    const addResponse = await POST(
      mutationRequest({
        operation: 'addToCollection',
        collectionId,
        productId: DOWN_ALTERNATIVE_PILLOW_ID,
      }),
    );
    expect(addResponse.status).toBe(200);
    await expect(addResponse.json()).resolves.toMatchObject({
      state: {
        savedIds: [LINEN_BOX_QUILT_ID, DOWN_ALTERNATIVE_PILLOW_ID].sort(),
        collections: [
          {
            id: collectionId,
            name: 'Family room',
            productIds: [LINEN_BOX_QUILT_ID, DOWN_ALTERNATIVE_PILLOW_ID].sort(),
          },
        ],
      },
      products: expect.arrayContaining([
        expect.objectContaining({ id: LINEN_BOX_QUILT_ID }),
        expect.objectContaining({ id: DOWN_ALTERNATIVE_PILLOW_ID }),
      ]),
    });

    const removeResponse = await POST(
      mutationRequest({
        operation: 'removeFromCollection',
        collectionId,
        productId: DOWN_ALTERNATIVE_PILLOW_ID,
      }),
    );
    expect(removeResponse.status).toBe(200);
    await expect(removeResponse.json()).resolves.toMatchObject({
      state: {
        savedIds: [LINEN_BOX_QUILT_ID, DOWN_ALTERNATIVE_PILLOW_ID].sort(),
        collections: [
          { id: collectionId, name: 'Family room', productIds: [LINEN_BOX_QUILT_ID] },
        ],
      },
      products: expect.arrayContaining([
        expect.objectContaining({ id: LINEN_BOX_QUILT_ID }),
        expect.objectContaining({ id: DOWN_ALTERNATIVE_PILLOW_ID }),
      ]),
    });

    const renameResponse = await POST(
      mutationRequest({ operation: 'renameCollection', collectionId, name: 'Living room' }),
    );
    expect(renameResponse.status).toBe(200);
    await expect(renameResponse.json()).resolves.toMatchObject({
      state: {
        collections: [
          { id: collectionId, name: 'Living room', productIds: [LINEN_BOX_QUILT_ID] },
        ],
      },
    });

    const deleteResponse = await POST(
      mutationRequest({ operation: 'deleteCollection', collectionId }),
    );
    expect(deleteResponse.status).toBe(200);
    await expect(deleteResponse.json()).resolves.toMatchObject({
      state: {
        savedIds: [LINEN_BOX_QUILT_ID, DOWN_ALTERNATIVE_PILLOW_ID].sort(),
        collections: [],
      },
      products: expect.arrayContaining([
        expect.objectContaining({ id: LINEN_BOX_QUILT_ID }),
        expect.objectContaining({ id: DOWN_ALTERNATIVE_PILLOW_ID }),
      ]),
    });
  });

  it('does not let another workspace mutate a collection it does not own', async () => {
    useWorkspaceCookie('workspace-a');
    const createResponse = await POST(
      mutationRequest({ operation: 'createCollection', name: 'Family room' }),
    );
    const created = await createResponse.json();
    const collectionId = created.state.collections[0]?.id as string;

    useWorkspaceCookie('workspace-b');
    const response = await POST(
      mutationRequest({
        operation: 'addToCollection',
        collectionId,
        productId: LINEN_BOX_QUILT_ID,
      }),
    );

    expect(response.status).toBe(404);
    await expect(response.json()).resolves.toEqual({
      error: `Collection "${collectionId}" was not found.`,
    });
    expect(
      db
        .prepare('SELECT workspace_id FROM collections WHERE id = ?')
        .get(collectionId),
    ).toEqual({ workspace_id: 'workspace-a' });
  });

  it('rejects malformed JSON as a 400', async () => {
    const response = await POST(
      new Request('http://localhost/api/library', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: '{',
      }),
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({ error: expect.any(String) });
  });

  it('rejects fields outside the selected mutation operation', async () => {
    useWorkspaceCookie('trusted-cookie-workspace');

    const response = await POST(
      mutationRequest({
        operation: 'toggleSaved',
        productId: LINEN_BOX_QUILT_ID,
        workspaceId: 'untrusted-body-workspace',
      }),
    );

    expect(response.status).toBe(400);
    expect(db.prepare('SELECT id FROM workspaces').all()).toEqual([]);
  });

  it('returns repository input errors as a 400', async () => {
    useWorkspaceCookie('trusted-cookie-workspace');

    const response = await POST(
      mutationRequest({ operation: 'createCollection', name: '   ' }),
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({
      error: expect.stringContaining('between 1 and 60 characters'),
    });
  });

  it('returns repository missing-resource errors as a 404', async () => {
    useWorkspaceCookie('trusted-cookie-workspace');

    const response = await POST(
      mutationRequest({ operation: 'toggleSaved', productId: UNKNOWN_PRODUCT_ID }),
    );

    expect(response.status).toBe(404);
    await expect(response.json()).resolves.toMatchObject({
      error: expect.stringContaining(UNKNOWN_PRODUCT_ID),
    });
  });

  it('returns an actionable 503 when the local database is unavailable', async () => {
    boundaries.getDatabase.mockImplementationOnce(() => {
      throw new Error(
        'The local catalog database is unavailable. Run pnpm db:reset to restore it.',
      );
    });

    const response = await GET(new Request('http://localhost/api/library'));

    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toMatchObject({
      error: expect.stringContaining('pnpm db:reset'),
    });
  });
});

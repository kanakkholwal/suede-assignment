import { describe, expect, it } from 'vitest';

import {
  emptyLibraryState,
  type LibraryMutation,
  type LibrarySnapshot,
} from '@/lib/library-state';

const LINEN_BOX_QUILT_ID = '7a7e801d-cb56-42ed-aa20-5b0dfa146d32';

describe('library state', () => {
  it('returns a fresh deterministic empty transport state', () => {
    const first = emptyLibraryState();
    const second = emptyLibraryState();

    expect(first).toEqual({ version: 1, savedIds: [], collections: [] });
    expect(second).toEqual(first);
    expect(second).not.toBe(first);
  });

  it('defines snapshots as JSON-safe data', () => {
    const snapshot: LibrarySnapshot = {
      state: {
        version: 1,
        savedIds: [LINEN_BOX_QUILT_ID],
        collections: [
          {
            id: 'collection-family-room',
            name: 'Family room options',
            productIds: [LINEN_BOX_QUILT_ID],
          },
        ],
      },
      products: [],
    };

    expect(JSON.parse(JSON.stringify(snapshot))).toEqual(snapshot);
  });

  it('defines every library mutation as JSON-safe data', () => {
    const mutations: LibraryMutation[] = [
      { operation: 'toggleSaved', productId: LINEN_BOX_QUILT_ID },
      {
        operation: 'createCollection',
        name: 'Family room options',
        productId: LINEN_BOX_QUILT_ID,
      },
      {
        operation: 'addToCollection',
        collectionId: 'collection-family-room',
        productId: LINEN_BOX_QUILT_ID,
      },
      {
        operation: 'removeFromCollection',
        collectionId: 'collection-family-room',
        productId: LINEN_BOX_QUILT_ID,
      },
      {
        operation: 'renameCollection',
        collectionId: 'collection-family-room',
        name: 'Living room options',
      },
      { operation: 'deleteCollection', collectionId: 'collection-family-room' },
    ];

    expect(JSON.parse(JSON.stringify(mutations))).toEqual(mutations);
  });
});

'use client';

import { emptyLibraryState, type LibraryMutation, type LibrarySnapshot } from '@/lib/library-state';
import { type PendingMutations, useSnapshotStore } from '@/lib/use-snapshot-store';

export type IsLibraryMutationBlocked = (mutation: LibraryMutation) => boolean;

const emptySnapshot: LibrarySnapshot = { state: emptyLibraryState(), products: [] };

function mutationBlocked(initialized: boolean, pending: PendingMutations<LibraryMutation>, mutation: LibraryMutation): boolean {
  if (pending.has(JSON.stringify(mutation))) return true;
  if (!('productId' in mutation) || !mutation.productId) return false;
  return !initialized || [...pending.values()].some((item) => 'productId' in item && item.productId === mutation.productId);
}

export function useLibrary() {
  const store = useSnapshotStore<LibrarySnapshot, LibraryMutation>({
    endpoint: '/api/library',
    loadError: 'Unable to load library. Please try again.',
    mutateError: 'Unable to update library. Please try again.',
    isBlocked: mutationBlocked,
  });
  const snapshot = store.snapshot ?? emptySnapshot;
  const { mutate } = store;

  return {
    state: snapshot.state,
    products: snapshot.products,
    loading: store.loading,
    error: store.error,
    isBlocked: store.isBlocked,
    isSaved: (productId: string) => snapshot.state.savedIds.includes(productId),
    toggleSaved: (productId: string) => mutate({ operation: 'toggleSaved', productId }),
    createCollection: (name: string, productId?: string) => mutate({ operation: 'createCollection', name, ...(productId ? { productId } : {}) }),
    addToCollection: (collectionId: string, productId: string) => mutate({ operation: 'addToCollection', collectionId, productId }),
    removeFromCollection: (collectionId: string, productId: string) => mutate({ operation: 'removeFromCollection', collectionId, productId }),
    renameCollection: (collectionId: string, name: string) => mutate({ operation: 'renameCollection', collectionId, name }),
    deleteCollection: (collectionId: string) => mutate({ operation: 'deleteCollection', collectionId }),
  };
}

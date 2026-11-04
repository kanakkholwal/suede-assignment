'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { emptyLibraryState, type LibraryMutation, type LibrarySnapshot } from '@/lib/library-state';

export type IsLibraryMutationBlocked = (mutation: LibraryMutation) => boolean;

const emptySnapshot: LibrarySnapshot = { state: emptyLibraryState(), products: [] };

function mutationBlocked(initialized: boolean, pending: ReadonlyMap<string, LibraryMutation>, mutation: LibraryMutation): boolean {
  if (pending.has(JSON.stringify(mutation))) return true;
  if (!('productId' in mutation) || !mutation.productId) return false;
  return !initialized || [...pending.values()].some((item) => 'productId' in item && item.productId === mutation.productId);
}

async function readSnapshot(response: Response): Promise<LibrarySnapshot> {
  const body = await response.json();
  if (!response.ok) throw new Error(body.error ?? 'Unable to update library. Please try again.');
  return body as LibrarySnapshot;
}

export function useLibrary() {
  const [snapshot, setSnapshot] = useState<LibrarySnapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState<ReadonlyMap<string, LibraryMutation>>(new Map());
  const pendingRef = useRef(new Map<string, LibraryMutation>());
  const initializedRef = useRef(false);
  const queueRef = useRef<Promise<unknown>>(Promise.resolve());
  const lifecycleRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    lifecycleRef.current = controller;
    // Establish the anonymous workspace cookie before any queued mutations.
    queueRef.current = fetch('/api/library', { signal: controller.signal })
      .then(readSnapshot)
      .then((next) => {
        if (!controller.signal.aborted) {
          initializedRef.current = true;
          setSnapshot(next);
          setError(null);
        }
      })
      .catch((cause: unknown) => {
        if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : 'Unable to load library. Please try again.');
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, []);

  const mutate = useCallback((mutation: LibraryMutation): Promise<boolean> => {
    const key = JSON.stringify(mutation);
    const controller = lifecycleRef.current;
    if (!controller || controller.signal.aborted || mutationBlocked(initializedRef.current, pendingRef.current, mutation)) return Promise.resolve(false);
    pendingRef.current.set(key, mutation);
    setPending(new Map(pendingRef.current));

    // Each response is a full snapshot. Ordering requests prevents an older
    // response from overwriting a newer save or collection change.
    const request = queueRef.current.then(async () => {
      if (controller.signal.aborted) return false;
      try {
        const response = await fetch('/api/library', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mutation),
          signal: controller.signal,
        });
        const next = await readSnapshot(response);
        if (controller.signal.aborted) return false;
        initializedRef.current = true;
        setSnapshot(next);
        setError(null);
        return true;
      } catch (cause) {
        if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : 'Unable to update library. Please try again.');
        return false;
      } finally {
        pendingRef.current.delete(key);
        if (!controller.signal.aborted) setPending(new Map(pendingRef.current));
      }
    });
    queueRef.current = request;
    return request;
  }, []);

  return {
    state: (snapshot ?? emptySnapshot).state,
    products: (snapshot ?? emptySnapshot).products,
    loading,
    error,
    isBlocked: (mutation: LibraryMutation) => mutationBlocked(snapshot !== null, pending, mutation),
    isSaved: (productId: string) => (snapshot ?? emptySnapshot).state.savedIds.includes(productId),
    toggleSaved: (productId: string) => mutate({ operation: 'toggleSaved', productId }),
    createCollection: (name: string, productId?: string) => mutate({ operation: 'createCollection', name, ...(productId ? { productId } : {}) }),
    addToCollection: (collectionId: string, productId: string) => mutate({ operation: 'addToCollection', collectionId, productId }),
    removeFromCollection: (collectionId: string, productId: string) => mutate({ operation: 'removeFromCollection', collectionId, productId }),
    renameCollection: (collectionId: string, name: string) => mutate({ operation: 'renameCollection', collectionId, name }),
    deleteCollection: (collectionId: string) => mutate({ operation: 'deleteCollection', collectionId }),
  };
}

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export type PendingMutations<M> = ReadonlyMap<string, M>;

interface SnapshotStoreOptions<M> {
  endpoint: string;
  loadError: string;
  mutateError: string;
  /** Whether `mutation` must wait; receives whether the first snapshot has loaded. */
  isBlocked: (initialized: boolean, pending: PendingMutations<M>, mutation: M) => boolean;
}

async function readSnapshot<S>(response: Response, fallback: string): Promise<S> {
  const body = await response.json();
  if (!response.ok) throw new Error(body.error ?? fallback);
  return body as S;
}

/**
 * Loads a server snapshot, then applies mutations one at a time; every response is a full
 * snapshot, so serial requests keep an older response from overwriting a newer change.
 */
export function useSnapshotStore<S, M>({ endpoint, loadError, mutateError, isBlocked }: SnapshotStoreOptions<M>) {
  const [snapshot, setSnapshot] = useState<S | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState<PendingMutations<M>>(new Map());
  const pendingRef = useRef(new Map<string, M>());
  const initializedRef = useRef(false);
  const queueRef = useRef<Promise<unknown>>(Promise.resolve());
  const lifecycleRef = useRef<AbortController | null>(null);
  const isBlockedRef = useRef(isBlocked);
  const [loadedEndpoint, setLoadedEndpoint] = useState(endpoint);

  // A new endpoint (another room) must never show or mutate the previous snapshot.
  if (loadedEndpoint !== endpoint) {
    setLoadedEndpoint(endpoint);
    setSnapshot(null);
    setLoading(true);
    setError(null);
  }

  useEffect(() => {
    isBlockedRef.current = isBlocked;
  }, [isBlocked]);

  useEffect(() => {
    const controller = new AbortController();
    lifecycleRef.current = controller;
    // The first GET establishes the workspace cookie before any queued mutation.
    queueRef.current = fetch(endpoint, { signal: controller.signal })
      .then((response) => readSnapshot<S>(response, loadError))
      .then((next) => {
        if (controller.signal.aborted) return;
        initializedRef.current = true;
        setSnapshot(next);
        setError(null);
      })
      .catch((cause: unknown) => {
        if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : loadError);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [endpoint, loadError]);

  const mutate = useCallback(
    (mutation: M): Promise<boolean> => {
      const key = JSON.stringify(mutation);
      const controller = lifecycleRef.current;
      if (
        !controller ||
        controller.signal.aborted ||
        isBlockedRef.current(initializedRef.current, pendingRef.current, mutation)
      ) {
        return Promise.resolve(false);
      }
      pendingRef.current.set(key, mutation);
      setPending(new Map(pendingRef.current));

      const request = queueRef.current.then(async () => {
        if (controller.signal.aborted) return false;
        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mutation),
            signal: controller.signal,
          });
          const next = await readSnapshot<S>(response, mutateError);
          if (controller.signal.aborted) return false;
          initializedRef.current = true;
          setSnapshot(next);
          setError(null);
          return true;
        } catch (cause) {
          if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : mutateError);
          return false;
        } finally {
          pendingRef.current.delete(key);
          if (!controller.signal.aborted) setPending(new Map(pendingRef.current));
        }
      });
      queueRef.current = request;
      return request;
    },
    [endpoint, mutateError],
  );

  return {
    snapshot,
    loading,
    error,
    pending,
    mutate,
    isBlocked: (mutation: M) => isBlocked(snapshot !== null, pending, mutation),
  };
}

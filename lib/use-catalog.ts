'use client';

import { useEffect, useState } from 'react';

import { catalogFiltersToSearchParams, type CatalogFilters, type CatalogQueryResult } from '@/lib/catalog-contract';

export function useCatalog(filters: CatalogFilters, includeVariants = false) {
  const params = catalogFiltersToSearchParams(filters);
  if (includeVariants) params.set('includeVariants', 'true');
  const query = params.toString();
  const [result, setResult] = useState<{
    query: string;
    data: CatalogQueryResult | null;
    error: string | null;
  } | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const response = await fetch(`/api/catalog${query ? `?${query}` : ''}`, { signal: controller.signal });
        const body = await response.json();
        if (controller.signal.aborted) return;
        if (!response.ok) {
          setResult({ query, data: null, error: body.error ?? 'Unable to load catalog. Please try again.' });
          return;
        }
        setResult({ query, data: body as CatalogQueryResult, error: null });
      } catch {
        if (!controller.signal.aborted) {
          setResult({ query, data: null, error: 'Unable to load catalog. Please try again.' });
        }
      }
    }
    void load();
    return () => controller.abort();
  }, [query]);

  return {
    data: result?.data ?? null,
    loading: result === null || result.query !== query,
    error: result?.query === query ? result.error : null,
  };
}

'use client';

import {
  createParser,
  createSerializer,
  parseAsArrayOf,
  parseAsBoolean,
  parseAsFloat,
  parseAsString,
  parseAsStringLiteral,
  useQueryState,
  useQueryStates,
} from 'nuqs';
import { useCallback, useMemo } from 'react';

import { DEFAULT_ROOM_PRESET, ROOM_PRESET_IDS, type RoomPresetId } from '@/data/room-presets';
import type { CatalogCategoryFilter, CatalogFilters } from '@/lib/catalog-contract';
import { WALLS } from '@/lib/room-state';

// --- Room: shared by every page so links and the shortlist never lose it ---

export const roomParam = parseAsStringLiteral(ROOM_PRESET_IDS).withDefault(DEFAULT_ROOM_PRESET);

export function useRoomPreset() {
  return useQueryState('room', roomParam);
}

const serializeRoom = createSerializer({ room: roomParam });

/** Builds links that keep the active room. */
export function useRoomHref(): (path: string) => string {
  const [room] = useRoomPreset();
  return useCallback((path: string) => withRoom(path, room), [room]);
}

/** `path` with the active room carried over; the default room adds nothing. */
export function withRoom(path: string, room: RoomPresetId): string {
  const [base, query = ''] = path.split('?');
  return serializeRoom(`${base}${query ? `?${query}` : ''}`, { room: room === DEFAULT_ROOM_PRESET ? null : room });
}

// --- Catalog: brief, filters, search and view ---

const parseAsCategory = createParser<Exclude<CatalogCategoryFilter, null>>({
  parse: (value) => (value === 'uncategorized' ? value : /^\d+$/.test(value) ? Number(value) : null),
  serialize: String,
});

export const CATALOG_VIEWS = ['products', 'variants'] as const;
export type CatalogView = (typeof CATALOG_VIEWS)[number];

const catalogParams = {
  brief: parseAsString.withDefault(''),
  terms: parseAsArrayOf(parseAsString).withDefault([]),
  q: parseAsString.withDefault(''),
  category: parseAsCategory,
  brand: parseAsArrayOf(parseAsString).withDefault([]),
  min: parseAsFloat,
  max: parseAsFloat,
  wmin: parseAsFloat,
  wmax: parseAsFloat,
  stock: parseAsBoolean.withDefault(false),
  view: parseAsStringLiteral(CATALOG_VIEWS).withDefault('products'),
  product: parseAsString,
  option: parseAsString,
};

const toCents = (dollars: number | null) => (dollars === null ? null : Math.round(dollars * 100));
const toDollars = (cents: number | null) => (cents === null ? null : cents / 100);

/** Catalog state in the URL: shareable, survives reload, and back/forward walks through it. */
export function useCatalogUrlState() {
  const [state, setState] = useQueryStates(catalogParams, { history: 'replace' });

  const filters = useMemo<CatalogFilters>(
    () => ({
      query: state.q,
      category: state.category,
      brands: state.brand,
      minPriceCents: toCents(state.min),
      maxPriceCents: toCents(state.max),
      inStockOnly: state.stock,
      minWidthIn: state.wmin,
      maxWidthIn: state.wmax,
    }),
    [state],
  );

  const setFilters = useCallback(
    (next: CatalogFilters | ((current: CatalogFilters) => CatalogFilters)) =>
      setState((current) => {
        const resolved =
          typeof next === 'function'
            ? next({
                query: current.q,
                category: current.category,
                brands: current.brand,
                minPriceCents: toCents(current.min),
                maxPriceCents: toCents(current.max),
                inStockOnly: current.stock,
                minWidthIn: current.wmin,
                maxWidthIn: current.wmax,
              })
            : next;
        return {
          q: resolved.query,
          category: resolved.category,
          brand: resolved.brands,
          min: toDollars(resolved.minPriceCents),
          max: toDollars(resolved.maxPriceCents),
          stock: resolved.inStockOnly,
          wmin: resolved.minWidthIn,
          wmax: resolved.maxWidthIn,
        };
      }),
    [setState],
  );

  return { state, setState, filters, setFilters };
}

// --- Planner: view, inspector tab, wall and selected piece ---

export const PLANNER_VIEWS = ['plan', 'wall'] as const;
export type PlannerView = (typeof PLANNER_VIEWS)[number];
export const INSPECTOR_TABS = ['fit', 'pieces', 'room'] as const;
export type InspectorTab = (typeof INSPECTOR_TABS)[number];

const plannerParams = {
  view: parseAsStringLiteral(PLANNER_VIEWS).withDefault('plan'),
  tab: parseAsStringLiteral(INSPECTOR_TABS),
  wall: parseAsStringLiteral(WALLS),
  piece: parseAsString,
};

export function usePlannerUrlState() {
  return useQueryStates(plannerParams, { history: 'replace' });
}

// --- Library: collection, search and open product ---

const libraryParams = {
  collection: parseAsString,
  q: parseAsString.withDefault(''),
  product: parseAsString,
};

export function useLibraryUrlState() {
  return useQueryStates(libraryParams, { history: 'replace' });
}

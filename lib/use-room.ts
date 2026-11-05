'use client';

import { DEFAULT_ROOM_PRESET, type RoomPresetId } from '@/data/room-presets';
import type { DimensionValues } from '@/lib/dimensions';
import type { MeasurementStatus, RoomFeaturePatch, RoomMutation, RoomSnapshot, Rotation } from '@/lib/room-state';
import { type PendingMutations, useSnapshotStore } from '@/lib/use-snapshot-store';

function mutationBlocked(initialized: boolean, pending: PendingMutations<RoomMutation>, mutation: RoomMutation): boolean {
  return !initialized || pending.has(JSON.stringify(mutation));
}

export type RoomStore = ReturnType<typeof useRoom>;

export function useRoom(preset: RoomPresetId = DEFAULT_ROOM_PRESET) {
  const store = useSnapshotStore<RoomSnapshot, RoomMutation>({
    endpoint: preset === DEFAULT_ROOM_PRESET ? '/api/room' : `/api/room?room=${preset}`,
    loadError: 'Unable to load the room. Please try again.',
    mutateError: 'Unable to update the room. Please try again.',
    isBlocked: mutationBlocked,
  });
  const { mutate, snapshot } = store;

  return {
    snapshot,
    loading: store.loading,
    error: store.error,
    isBlocked: store.isBlocked,
    itemCount: (productId: string) => snapshot?.items.filter((item) => item.productId === productId).length ?? 0,
    addItem: (productId: string, variantId: string | null = null) => mutate({ operation: 'addItem', productId, variantId }),
    removeItem: (itemId: string) => mutate({ operation: 'removeItem', itemId }),
    selectVariant: (itemId: string, variantId: string | null) => mutate({ operation: 'selectVariant', itemId, variantId }),
    placeItem: (itemId: string, xIn: number, yIn: number, rotationDeg: Rotation) =>
      mutate({ operation: 'placeItem', itemId, xIn, yIn, rotationDeg }),
    unplaceItem: (itemId: string) => mutate({ operation: 'unplaceItem', itemId }),
    setDimensions: (productId: string, variantId: string | null, values: DimensionValues, note: string) =>
      mutate({ operation: 'setDimensions', productId, variantId, values, note }),
    clearDimensions: (productId: string, variantId: string | null) =>
      mutate({ operation: 'clearDimensions', productId, variantId }),
    updateRoom: (lengthIn: number, widthIn: number, ceilingIn: number | null, status: MeasurementStatus) =>
      mutate({ operation: 'updateRoom', lengthIn, widthIn, ceilingIn, status }),
    updateFeature: (featureId: string, patch: RoomFeaturePatch, status: MeasurementStatus) =>
      mutate({ operation: 'updateFeature', featureId, patch, status }),
  };
}

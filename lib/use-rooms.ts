'use client';

import { useCallback, useState } from 'react';

import type { NewRoom, RoomSnapshot, RoomSummary } from '@/lib/room-state';

/** Rooms the user created, loaded on demand (when the switcher opens), and a way to make one. */
export function useRooms() {
  const [rooms, setRooms] = useState<RoomSummary[] | null>(null);

  const refresh = useCallback(async () => {
    try {
      const response = await fetch('/api/rooms', { cache: 'no-store' });
      if (response.ok) setRooms(((await response.json()) as { rooms: RoomSummary[] }).rooms);
    } catch {
      // The switcher still lists the presets; created rooms reappear on the next open.
    }
  }, []);

  const create = useCallback(async (room: NewRoom): Promise<{ id: string } | { error: string }> => {
    try {
      const response = await fetch('/api/rooms', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(room) });
      const body = (await response.json()) as RoomSnapshot | { error?: string };
      if (!response.ok || !('room' in body)) return { error: ('error' in body && body.error) || 'Unable to create the room. Please try again.' };
      void refresh();
      return { id: body.room.id };
    } catch {
      return { error: 'Unable to create the room. Please try again.' };
    }
  }, [refresh]);

  return { rooms, refresh, create };
}

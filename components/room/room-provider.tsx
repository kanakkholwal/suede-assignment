'use client';

import { createContext, type ReactNode, useContext, useMemo } from 'react';

import { useRoomKey } from '@/lib/url-state';
import { countProblems, usePlan } from '@/lib/use-plan';
import { type RoomStore, useRoom } from '@/lib/use-room';

export interface RoomProgress {
  shortlisted: number;
  placed: number;
  /** Conflicts and tight fits on the committed plan; tips are not problems. */
  problems: number;
}

interface RoomContextValue {
  room: RoomStore;
  progress: RoomProgress;
}

const RoomContext = createContext<RoomContextValue | null>(null);

/** One room store for the whole app, so the step bar, catalog and planner never disagree. */
export function RoomProvider({ children }: { children: ReactNode }) {
  const [key] = useRoomKey();
  const room = useRoom(key);
  const { pieces, warnings } = usePlan(room.snapshot);
  const progress = useMemo<RoomProgress>(
    () => ({ shortlisted: room.snapshot?.items.length ?? 0, placed: pieces.length, problems: countProblems(warnings) }),
    [room.snapshot, pieces, warnings],
  );

  return <RoomContext.Provider value={{ room, progress }}>{children}</RoomContext.Provider>;
}

function useRoomContext(): RoomContextValue {
  const value = useContext(RoomContext);
  if (!value) throw new Error('Room hooks must be used inside <RoomProvider>');
  return value;
}

export const useRoomStore = (): RoomStore => useRoomContext().room;
export const useRoomProgress = (): RoomProgress => useRoomContext().progress;

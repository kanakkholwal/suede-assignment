'use client';

import { createContext, type ReactNode, useContext, useMemo } from 'react';

import { evaluateFit } from '@/lib/fit-rules';
import { planPieces } from '@/lib/plan-model';
import { useRoomPreset } from '@/lib/url-state';
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
  const [preset] = useRoomPreset();
  const room = useRoom(preset);
  const { snapshot } = room;
  const progress = useMemo<RoomProgress>(() => {
    if (!snapshot) return { shortlisted: 0, placed: 0, problems: 0 };
    const pieces = planPieces(snapshot, {});
    const warnings = evaluateFit({ room: snapshot.room, features: snapshot.features, pieces });
    return {
      shortlisted: snapshot.items.length,
      placed: pieces.length,
      problems: warnings.filter((warning) => warning.severity !== 'tip').length,
    };
  }, [snapshot]);

  return <RoomContext.Provider value={{ room, progress }}>{children}</RoomContext.Provider>;
}

function useRoomContext(): RoomContextValue {
  const value = useContext(RoomContext);
  if (!value) throw new Error('Room hooks must be used inside <RoomProvider>');
  return value;
}

export const useRoomStore = (): RoomStore => useRoomContext().room;
export const useRoomProgress = (): RoomProgress => useRoomContext().progress;

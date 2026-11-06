import { useMemo } from 'react';

import { evaluateFit, type FitWarning } from '@/lib/fit-rules';
import { type Placement, type PlanPiece, planPieces } from '@/lib/plan-model';
import type { RoomSnapshot } from '@/lib/room-state';

const NO_OVERRIDES: Record<string, Placement> = {};

/** Placed pieces and their fit warnings; `overrides` are drag previews not yet saved. */
export function usePlan(snapshot: RoomSnapshot | null, overrides: Record<string, Placement> = NO_OVERRIDES): { pieces: PlanPiece[]; warnings: FitWarning[] } {
  const pieces = useMemo(() => (snapshot ? planPieces(snapshot, overrides) : []), [snapshot, overrides]);
  const warnings = useMemo(
    () => (snapshot ? evaluateFit({ room: snapshot.room, features: snapshot.features, pieces }) : []),
    [snapshot, pieces],
  );
  return { pieces, warnings };
}

/** Warnings that need a decision; tips are advice. */
export const countProblems = (warnings: readonly FitWarning[]): number => warnings.filter((warning) => warning.severity !== 'tip').length;

/** Pieces drawn at a typical size because their own is unknown; fine to plan with, not to send. */
export const countTypical = (pieces: readonly PlanPiece[]): number => pieces.filter((piece) => piece.footprintSource === 'typical').length;

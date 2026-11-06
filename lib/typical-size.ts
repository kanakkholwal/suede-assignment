import type { PieceKind } from '@/lib/piece-kind';

/** Width by depth in inches; common retail sizes, used only to sketch a piece whose own size is unknown. */
export const TYPICAL_FOOTPRINT: Record<PieceKind, { width: number; depth: number }> = {
  sofa: { width: 84, depth: 38 },
  chair: { width: 32, depth: 34 },
  'coffee-table': { width: 48, depth: 24 },
  'side-table': { width: 20, depth: 20 },
  storage: { width: 60, depth: 18 },
  ottoman: { width: 36, depth: 18 },
  rug: { width: 120, depth: 96 },
  other: { width: 24, depth: 24 },
};

const KIND_NOUN: Record<PieceKind, string> = {
  sofa: 'sofa',
  chair: 'armchair',
  'coffee-table': 'coffee table',
  'side-table': 'side table',
  storage: 'storage piece',
  ottoman: 'bench or ottoman',
  rug: 'rug',
  other: 'piece like this',
};

/** `a typical sofa`, for labels that say whose size is being shown. */
export const typicalLabel = (kind: PieceKind): string => `a typical ${KIND_NOUN[kind]}`;

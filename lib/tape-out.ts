import { frontSide, type Rect, rectHeight, rectWidth, type Side, wallDistances } from '@/lib/geometry';
import type { PlanPiece } from '@/lib/plan-model';
import type { Room, RoomFeature, Wall } from '@/lib/room-state';
import { formatFeetInches } from '@/lib/units';

export interface TapeOutStep {
  pieceId: string;
  name: string;
  /** East–west by north–south extent on the floor, after rotation. */
  size: string;
  anchors: Array<{ wall: Wall; distance: string }>;
  facing: Side;
  caution: string | null;
}

function nearestWalls(room: Room, rect: Rect): Array<{ wall: Wall; distance: number }> {
  const distances = wallDistances(room, rect);
  const northSouth: Wall = distances.north <= distances.south ? 'north' : 'south';
  const eastWest: Wall = distances.west <= distances.east ? 'west' : 'east';
  return [northSouth, eastWest].map((wall) => ({ wall, distance: distances[wall] }));
}

/** Instructions for marking each placed piece on the real floor with painter's tape. */
export function tapeOutSteps(room: Room, pieces: readonly PlanPiece[]): TapeOutStep[] {
  return pieces.map((piece) => ({
    pieceId: piece.id,
    name: piece.name,
    size: `${formatFeetInches(rectWidth(piece.rect))} × ${formatFeetInches(rectHeight(piece.rect))}`,
    anchors: nearestWalls(room, piece.rect).map(({ wall, distance }) => ({ wall, distance: formatFeetInches(Math.max(0, distance)) })),
    facing: frontSide(piece.rotation),
    caution:
      piece.footprintSource === 'synthetic'
        ? 'Placeholder size: confirm with the brand before relying on this outline.'
        : piece.footprintSource === 'listing'
          ? 'Size read from the product title: confirm on the brand page.'
          : null,
  }));
}

const QUESTION_BY_KIND: Record<RoomFeature['kind'], string> = {
  window:
    'Which long wall are the windows on? How wide is each window, how far is it from the nearest corner, and how high is the sill off the floor?',
  radiator:
    'Is the radiator under the window on your left as you face the windows? How wide is it, and how far does it stick out from the wall?',
  door: 'Which corner is the door in, and how wide is it? Does it swing into the room, and which side are the hinges on?',
};

/** Plain-language follow-ups for every measurement that is still an assumption. */
export function clientQuestions(room: Room, features: readonly RoomFeature[]): string[] {
  const questions: string[] = [];
  if (room.dimensionsStatus !== 'confirmed') {
    questions.push(
      `Is ${formatFeetInches(room.widthIn)} × ${formatFeetInches(room.lengthIn)} measured wall to wall, or rounded? A tape across the room at floor level settles it.`,
    );
  }
  const openKinds = new Set(features.filter((feature) => feature.status !== 'confirmed').map((feature) => feature.kind));
  for (const kind of ['window', 'radiator', 'door'] as const) {
    if (openKinds.has(kind)) questions.push(QUESTION_BY_KIND[kind]);
  }
  return questions;
}

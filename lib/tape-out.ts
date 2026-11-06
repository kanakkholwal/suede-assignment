import { frontSide, type Rect, rectHeight, rectWidth, type Side, wallDistances, wallLength } from '@/lib/geometry';
import type { PlanPiece } from '@/lib/plan-model';
import type { Room, RoomFeature, Wall } from '@/lib/room-state';
import { formatFeetInches, formatInches } from '@/lib/units';

export interface TapeOutStep {
  pieceId: string;
  name: string;
  /** East-west by north-south extent on the floor, after rotation. */
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
    anchors: nearestWalls(room, piece.rect).map(({ wall, distance }) => ({ wall, distance: distance < 0.5 ? 'against the wall' : formatFeetInches(distance) })),
    facing: frontSide(piece.rotation),
    caution:
      piece.footprintSource === 'synthetic'
        ? 'Placeholder size: confirm with the brand before relying on this outline.'
        : piece.footprintSource === 'typical'
          ? 'Typical size, not this piece’s own: check the brand page before taping.'
          : piece.footprintSource === 'listing'
          ? 'Size read from the product title: confirm on the brand page.'
          : null,
  }));
}

// Each wall's corners in the direction `offsetIn` runs: west to east, or north to south.
const CORNERS: Record<Wall, [string, string]> = {
  north: ['north-west', 'north-east'],
  south: ['south-west', 'south-east'],
  west: ['north-west', 'south-west'],
  east: ['north-east', 'south-east'],
};

/** `2′ from the north-west corner`, measured to whichever corner is nearer. */
export function nearestCorner(room: Pick<Room, 'lengthIn' | 'widthIn'>, feature: Pick<RoomFeature, 'wall' | 'offsetIn' | 'widthIn'>): string {
  const fromEnd = wallLength(room, feature.wall) - feature.offsetIn - feature.widthIn;
  const [start, end] = CORNERS[feature.wall];
  const [corner, distance] = feature.offsetIn <= fromEnd ? [start, feature.offsetIn] : [end, fromEnd];
  return distance < 0.5 ? `in the ${corner} corner` : `${formatFeetInches(distance)} from the ${corner} corner`;
}

const quoted = (said: string) => (said ? `You said “${said}”. ` : '');

function drawn(room: Room, kind: RoomFeature['kind'], group: readonly RoomFeature[]): string {
  const [first] = group;
  const where = `on the ${first.wall} wall`;
  if (kind === 'window') {
    const walls = [...new Set(group.map((window) => window.wall))];
    const sizes = [...new Set(group.map((window) => `${formatInches(window.widthIn)} wide, sill ${formatInches(window.sillIn ?? 30)} off the floor`))].join('; ');
    const one = group.length === 1;
    const placed = one ? `one window ${where}` : walls.length === 1 ? `${group.length} windows ${where}` : `${group.length} windows, on the ${walls.join(' and ')} walls`;
    const sameSize = !sizes.includes(';');
    return `${quoted(first.clientSaid)}We drew ${placed}, ${!one && sameSize ? 'each ' : ''}${sizes}. If that is off: which wall, how wide ${one ? 'is it' : 'is each'}, how far from the nearest corner, and how high is the sill?`;
  }
  if (kind === 'radiator') {
    const depth = first.depthIn ? `, sticking out ${formatInches(first.depthIn)}` : '';
    return `${quoted(first.clientSaid)}We drew the radiator ${where}, ${formatInches(first.widthIn)} wide, ${nearestCorner(room, first)}${depth}. If that is off: where is it, how wide, and how far does it stick out?`;
  }
  const swing = first.swing === 'out' ? 'swinging out of the room' : 'swinging into the room';
  return `${quoted(first.clientSaid)}We drew the door ${where}, ${formatInches(first.widthIn)} wide, ${nearestCorner(room, first)}, ${swing}. If that is off: which wall and corner, how wide, which way does it swing, and which side are the hinges on?`;
}

/** One question per unconfirmed fact, quoting the client and saying what was drawn so they can correct it. */
export function clientQuestions(room: Room, features: readonly RoomFeature[]): string[] {
  const questions: string[] = [];
  if (room.dimensionsStatus !== 'confirmed') {
    questions.push(
      `Is ${formatFeetInches(room.widthIn)} × ${formatFeetInches(room.lengthIn)} measured wall to wall, or rounded? A tape across the room at floor level settles it.`,
    );
  }
  const open = features.filter((feature) => feature.status !== 'confirmed');
  for (const kind of ['window', 'radiator', 'door'] as const) {
    // Windows the client described in one breath share a question; doors and radiators go one by one.
    const ofKind = open.filter((feature) => feature.kind === kind);
    const groups = kind === 'window' ? [...new Set(ofKind.map((feature) => feature.clientSaid))].map((said) => ofKind.filter((feature) => feature.clientSaid === said)) : ofKind.map((feature) => [feature]);
    for (const group of groups) questions.push(drawn(room, kind, group));
  }
  return questions;
}

/** The sheet as plain text, for pasting into a message to the client. */
export function tapeOutText(room: Room, steps: readonly TapeOutStep[], questions: readonly string[]): string {
  const lines = [`Tape it on your floor: ${room.name}`, 'North is the top of the plan. Measure from the wall itself, not the baseboard.', ''];
  if (questions.length) lines.push('Before you tape, please check:', ...questions.map((question, index) => `${index + 1}. ${question}`), '');
  steps.forEach((step, index) => {
    lines.push(`${index + 1}. ${step.name}: ${step.size} (east-west by north-south), front faces ${step.facing}.`);
    lines.push(`   ${step.anchors.map((anchor) => `${anchor.distance} from the ${anchor.wall} wall`).join('; ')}.`);
  });
  return lines.join('\n');
}

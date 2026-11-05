import type { DimensionSource } from '@/lib/dimensions';
import {
  contains,
  edgeStrip,
  facingGap,
  featureBand,
  frontSide,
  intersection,
  type Rect,
  rectHeight,
  rectWidth,
  roomRect,
  type Side,
  wallDistances,
  zoneBeyond,
} from '@/lib/geometry';
import { blocksWalkways, isSeating, type PieceKind } from '@/lib/piece-kind';
import type { Room, RoomFeature, Rotation, Wall } from '@/lib/room-state';
import { formatInches } from '@/lib/units';

/** Residential rules of thumb designers use, in inches. */
export const CLEARANCE = {
  walkwayMain: 36,
  walkwayMin: 30,
  coffeeTableMin: 14,
  coffeeTableMax: 18,
  radiatorClear: 12,
  windowReach: 18,
  rugFrontLegs: 6,
  rugBorderMin: 8,
  touching: 1,
} as const;

export type FitSeverity = 'conflict' | 'tight' | 'tip';
export type FitRule =
  | 'outside-room'
  | 'overlap'
  | 'door-swing'
  | 'radiator'
  | 'window'
  | 'walkway'
  | 'behind'
  | 'coffee-gap'
  | 'coffee-length'
  | 'rug-legs'
  | 'rug-border';

export interface PlannedPiece {
  id: string;
  name: string;
  kind: PieceKind;
  rect: Rect;
  rotation: Rotation;
  heightIn: number | null;
  footprintSource: DimensionSource | 'unknown';
}

export interface FitWarning {
  id: string;
  rule: FitRule;
  severity: FitSeverity;
  pieceIds: string[];
  featureId?: string;
  title: string;
  /** The rule of thumb and the fix, in a sentence or two. */
  detail: string;
  /** Unconfirmed inputs the warning rests on; empty means it follows from confirmed data. */
  dependsOn: string[];
}

interface FitInput {
  room: Room;
  features: readonly RoomFeature[];
  pieces: readonly PlannedPiece[];
}

const SEVERITY_ORDER: Record<FitSeverity, number> = { conflict: 0, tight: 1, tip: 2 };
const OPPOSITE: Record<Side, Side> = { north: 'south', south: 'north', east: 'west', west: 'east' };
const FEATURE_NAME: Record<RoomFeature['kind'], string> = { window: 'Window', door: 'Door', radiator: 'Radiator' };

const inch = (value: number) => formatInches(Math.max(0, value));

function pieceAssumptions(pieces: readonly PlannedPiece[]): string[] {
  return pieces.flatMap((piece) => {
    if (piece.footprintSource === 'synthetic') return [`${piece.name}: size is a synthetic placeholder`];
    if (piece.footprintSource === 'listing') return [`${piece.name}: size read from the product title`];
    return [];
  });
}

function featureAssumptions(feature: RoomFeature | undefined): string[] {
  return feature && feature.status !== 'confirmed' ? [`${FEATURE_NAME[feature.kind]} position and size are assumed`] : [];
}

function roomAssumptions(room: Room): string[] {
  return room.dimensionsStatus === 'confirmed' ? [] : ['Room size is client-stated, not tape-measured'];
}

function warning(
  rule: FitRule,
  severity: FitSeverity,
  pieces: readonly PlannedPiece[],
  title: string,
  detail: string,
  extra: { feature?: RoomFeature; room?: Room } = {},
): FitWarning {
  return {
    id: [rule, ...pieces.map((piece) => piece.id), extra.feature?.id ?? ''].join(':'),
    rule,
    severity,
    pieceIds: pieces.map((piece) => piece.id),
    ...(extra.feature ? { featureId: extra.feature.id } : {}),
    title,
    detail,
    dependsOn: [
      ...pieceAssumptions(pieces),
      ...featureAssumptions(extra.feature),
      ...(extra.room ? roomAssumptions(extra.room) : []),
    ],
  };
}

function pairs<T>(items: readonly T[]): Array<[T, T]> {
  return items.flatMap((left, index) => items.slice(index + 1).map((right) => [left, right] as [T, T]));
}

function outsideRoom(room: Room, piece: PlannedPiece): FitWarning | null {
  if (contains(roomRect(room), piece.rect)) return null;
  const [wall, distance] = (Object.entries(wallDistances(room, piece.rect)) as Array<[Wall, number]>).sort(
    (left, right) => left[1] - right[1],
  )[0];
  return warning(
    'outside-room',
    'conflict',
    [piece],
    `${piece.name} goes through the ${wall} wall`,
    `It extends ${inch(-distance)} past the wall. Move it into the room or choose a smaller size.`,
    { room },
  );
}

function overlap(a: PlannedPiece, b: PlannedPiece): FitWarning | null {
  const shared = intersection(a.rect, b.rect);
  if (!shared) return null;
  return warning(
    'overlap',
    'conflict',
    [a, b],
    `${a.name} overlaps ${b.name}`,
    `They share ${inch(Math.min(rectWidth(shared), rectHeight(shared)))} of floor. Two solid pieces can’t occupy the same space.`,
  );
}

function doorSwing(room: Room, door: RoomFeature, piece: PlannedPiece): FitWarning | null {
  if (door.swing !== 'in') return null;
  const shared = intersection(featureBand(room, door, door.widthIn), piece.rect);
  if (!shared) return null;
  return warning(
    'door-swing',
    'conflict',
    [piece],
    `${piece.name} blocks the door`,
    `A ${inch(door.widthIn)} door needs its whole swing clear. Move the piece about ${inch(Math.min(rectWidth(shared), rectHeight(shared)))} out of the arc.`,
    { feature: door },
  );
}

function radiator(room: Room, feature: RoomFeature, piece: PlannedPiece): FitWarning | null {
  const body = featureBand(room, feature, feature.depthIn ?? 0);
  const zone = featureBand(room, feature, (feature.depthIn ?? 0) + CLEARANCE.radiatorClear);
  if (feature.depthIn && intersection(body, piece.rect)) {
    return warning(
      'radiator',
      'conflict',
      [piece],
      `${piece.name} sits on the radiator`,
      `The radiator sticks out ${inch(feature.depthIn)} from the wall. Pull the piece forward or move it along the wall.`,
      { feature },
    );
  }
  if (!intersection(zone, piece.rect)) return null;
  return warning(
    'radiator',
    'tight',
    [piece],
    `${piece.name} crowds the radiator`,
    `Keep about ${inch(CLEARANCE.radiatorClear)} clear in front of a radiator for heat and access, and keep upholstery off it.`,
    { feature },
  );
}

function windowSill(room: Room, feature: RoomFeature, piece: PlannedPiece): FitWarning | null {
  if (feature.sillIn === null || piece.heightIn === null || piece.heightIn <= feature.sillIn) return null;
  if (!intersection(featureBand(room, feature, CLEARANCE.windowReach), piece.rect)) return null;
  return warning(
    'window',
    'tip',
    [piece],
    `${piece.name} rises above the window sill`,
    `At ${inch(piece.heightIn)} tall it covers ${inch(piece.heightIn - feature.sillIn)} of a window with a ${inch(feature.sillIn)} sill.`,
    { feature },
  );
}

function walkway(a: PlannedPiece, b: PlannedPiece): FitWarning | null {
  const seatingTable = (isSeating(a.kind) && b.kind === 'coffee-table') || (isSeating(b.kind) && a.kind === 'coffee-table');
  // Two seats side by side are a conversation group; the gap usually holds a side table.
  const seatingPair = isSeating(a.kind) && isSeating(b.kind);
  const onWalkway = (kind: PieceKind) => blocksWalkways(kind) || kind === 'coffee-table';
  if (seatingTable || seatingPair || !onWalkway(a.kind) || !onWalkway(b.kind)) return null;
  const facing = facingGap(a.rect, b.rect);
  if (!facing || facing.gap <= CLEARANCE.touching || facing.gap >= CLEARANCE.walkwayMin || facing.along < 12) return null;
  return warning(
    'walkway',
    'tight',
    [a, b],
    `Only ${inch(facing.gap)} between ${a.name} and ${b.name}`,
    `Walkways need ${inch(CLEARANCE.walkwayMin)} at minimum and ${inch(CLEARANCE.walkwayMain)} on the main path. Close the gap or open it up.`,
  );
}

function behind(room: Room, piece: PlannedPiece): FitWarning | null {
  if (!blocksWalkways(piece.kind)) return null;
  const back = OPPOSITE[frontSide(piece.rotation)];
  const gap = wallDistances(room, piece.rect)[back];
  if (gap <= CLEARANCE.touching || gap >= CLEARANCE.walkwayMin) return null;
  return warning(
    'behind',
    'tight',
    [piece],
    `${inch(gap)} behind ${piece.name}`,
    `Too narrow to walk behind, too wide to read as against the wall. Push it back or leave ${inch(CLEARANCE.walkwayMin)}.`,
    { room },
  );
}

function coffeeTable(seat: PlannedPiece, table: PlannedPiece): FitWarning[] {
  const front = frontSide(seat.rotation);
  if (!intersection(zoneBeyond(seat.rect, front, 40), table.rect)) return [];
  const facing = facingGap(seat.rect, table.rect);
  if (!facing) return [];
  const warnings: FitWarning[] = [];
  if (facing.gap < CLEARANCE.coffeeTableMin) {
    warnings.push(
      warning(
        'coffee-gap',
        'tight',
        [seat, table],
        `Only ${inch(facing.gap)} from ${seat.name} to ${table.name}`,
        `Leave ${inch(CLEARANCE.coffeeTableMin)}–${inch(CLEARANCE.coffeeTableMax)} so knees clear and drinks stay in reach.`,
      ),
    );
  } else if (facing.gap > CLEARANCE.coffeeTableMax) {
    warnings.push(
      warning(
        'coffee-gap',
        'tip',
        [seat, table],
        `${inch(facing.gap)} from ${seat.name} to ${table.name}`,
        `That is a stretch to reach a drink. ${inch(CLEARANCE.coffeeTableMin)}–${inch(CLEARANCE.coffeeTableMax)} is the usual range.`,
      ),
    );
  }
  if (seat.kind === 'sofa') {
    const alongX = front === 'north' || front === 'south';
    const ratio = (alongX ? rectWidth(table.rect) : rectHeight(table.rect)) / (alongX ? rectWidth(seat.rect) : rectHeight(seat.rect));
    if (ratio < 0.5 || ratio > 0.8) {
      warnings.push(
        warning(
          'coffee-length',
          'tip',
          [seat, table],
          `${table.name} is ${Math.round(ratio * 100)}% of the sofa’s length`,
          'About two-thirds of the sofa length usually looks balanced and keeps both ends in reach.',
        ),
      );
    }
  }
  return warnings;
}

function rugLegs(rug: PlannedPiece, seat: PlannedPiece): FitWarning | null {
  const front = frontSide(seat.rotation);
  const legs = edgeStrip(seat.rect, front, CLEARANCE.rugFrontLegs);
  const near = intersection(zoneBeyond(seat.rect, front, 24), rug.rect) ?? intersection(seat.rect, rug.rect);
  if (!near || contains(rug.rect, legs)) return null;
  const shortBy = {
    north: rug.rect.y0 - legs.y0,
    south: legs.y1 - rug.rect.y1,
    west: rug.rect.x0 - legs.x0,
    east: legs.x1 - rug.rect.x1,
  };
  const reach = Math.max(shortBy[OPPOSITE[front]], 0);
  return warning(
    'rug-legs',
    'tight',
    [rug, seat],
    `${seat.name}’s front legs are off the rug`,
    reach > 0
      ? `Seating should rest at least its front legs on the rug so the group reads as one. Move it ${inch(reach)} closer or size the rug up.`
      : 'Seating should rest at least its front legs on the rug so the group reads as one. Line it up with the rug or size the rug up.',
  );
}

function rugBorder(room: Room, rug: PlannedPiece): FitWarning | null {
  const [wall, distance] = (Object.entries(wallDistances(room, rug.rect)) as Array<[Wall, number]>).sort(
    (left, right) => left[1] - right[1],
  )[0];
  if (distance < 0 || distance >= CLEARANCE.rugBorderMin) return null;
  return warning(
    'rug-border',
    'tip',
    [rug],
    `${rug.name} is ${inch(distance)} from the ${wall} wall`,
    'In a room this size, 12–18″ of bare floor around a rug looks intentional. A rug almost touching the wall reads as too big.',
    { room },
  );
}

/** Every warning for the current layout, worst first. Pure: safe to run on each drag frame. */
export function evaluateFit({ room, features, pieces }: FitInput): FitWarning[] {
  const solid = pieces.filter((piece) => piece.kind !== 'rug');
  const rugs = pieces.filter((piece) => piece.kind === 'rug');
  const seats = solid.filter((piece) => isSeating(piece.kind));
  const tables = solid.filter((piece) => piece.kind === 'coffee-table');
  const byKind = (kind: RoomFeature['kind']) => features.filter((feature) => feature.kind === kind);

  const warnings = [
    ...pieces.map((piece) => outsideRoom(room, piece)),
    ...pairs(solid).map(([a, b]) => overlap(a, b)),
    ...byKind('door').flatMap((door) => solid.map((piece) => doorSwing(room, door, piece))),
    ...byKind('radiator').flatMap((feature) => solid.map((piece) => radiator(room, feature, piece))),
    ...byKind('window').flatMap((feature) => solid.map((piece) => windowSill(room, feature, piece))),
    ...pairs(solid).map(([a, b]) => walkway(a, b)),
    ...solid.map((piece) => behind(room, piece)),
    ...seats.flatMap((seat) => tables.flatMap((table) => coffeeTable(seat, table))),
    ...rugs.flatMap((rug) => seats.map((seat) => rugLegs(rug, seat))),
    ...rugs.map((rug) => rugBorder(room, rug)),
  ].filter((entry): entry is FitWarning => entry !== null);

  return warnings.sort((left, right) => SEVERITY_ORDER[left.severity] - SEVERITY_ORDER[right.severity]);
}

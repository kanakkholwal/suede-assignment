import type { Room, RoomFeature, Rotation, Wall } from '@/lib/room-state';

/** Axis-aligned rectangle in plan inches. */
export interface Rect {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export type Side = 'north' | 'east' | 'south' | 'west';

/** Rotation 0 faces south; each 90° turns the piece clockwise on the plan. */
const FRONT_BY_ROTATION: Record<Rotation, Side> = { 0: 'south', 90: 'west', 180: 'north', 270: 'east' };

export function frontSide(rotation: Rotation): Side {
  return FRONT_BY_ROTATION[rotation];
}

export function footprintRect(centerX: number, centerY: number, width: number, depth: number, rotation: Rotation): Rect {
  const sideways = rotation === 90 || rotation === 270;
  const halfX = (sideways ? depth : width) / 2;
  const halfY = (sideways ? width : depth) / 2;
  return { x0: centerX - halfX, y0: centerY - halfY, x1: centerX + halfX, y1: centerY + halfY };
}

export function rectWidth(rect: Rect): number {
  return rect.x1 - rect.x0;
}

export function rectHeight(rect: Rect): number {
  return rect.y1 - rect.y0;
}

export function intersection(a: Rect, b: Rect): Rect | null {
  const rect = { x0: Math.max(a.x0, b.x0), y0: Math.max(a.y0, b.y0), x1: Math.min(a.x1, b.x1), y1: Math.min(a.y1, b.y1) };
  return rect.x1 > rect.x0 && rect.y1 > rect.y0 ? rect : null;
}

export function contains(outer: Rect, inner: Rect): boolean {
  return inner.x0 >= outer.x0 && inner.y0 >= outer.y0 && inner.x1 <= outer.x1 && inner.y1 <= outer.y1;
}

/** Overlap of the two rects' spans along one axis (negative when apart). */
export function spanOverlap(a0: number, a1: number, b0: number, b1: number): number {
  return Math.min(a1, b1) - Math.max(a0, b0);
}

/**
 * Clear distance between two rects that face each other across one axis, with the length they
 * face each other along. Null when they overlap or sit diagonally apart.
 */
export function facingGap(a: Rect, b: Rect): { gap: number; along: number; axis: 'x' | 'y' } | null {
  const overlapX = spanOverlap(a.x0, a.x1, b.x0, b.x1);
  const overlapY = spanOverlap(a.y0, a.y1, b.y0, b.y1);
  if (overlapX > 0 && overlapY <= 0) return { gap: -overlapY, along: overlapX, axis: 'y' };
  if (overlapY > 0 && overlapX <= 0) return { gap: -overlapX, along: overlapY, axis: 'x' };
  return null;
}

/** The strip `depth` deep along one side of a rect, inside it. */
export function edgeStrip(rect: Rect, side: Side, depth: number): Rect {
  switch (side) {
    case 'north':
      return { ...rect, y1: Math.min(rect.y1, rect.y0 + depth) };
    case 'south':
      return { ...rect, y0: Math.max(rect.y0, rect.y1 - depth) };
    case 'west':
      return { ...rect, x1: Math.min(rect.x1, rect.x0 + depth) };
    case 'east':
      return { ...rect, x0: Math.max(rect.x0, rect.x1 - depth) };
  }
}

/** The zone `depth` deep in front of a side of a rect, outside it. */
export function zoneBeyond(rect: Rect, side: Side, depth: number): Rect {
  switch (side) {
    case 'north':
      return { ...rect, y0: rect.y0 - depth, y1: rect.y0 };
    case 'south':
      return { ...rect, y0: rect.y1, y1: rect.y1 + depth };
    case 'west':
      return { ...rect, x0: rect.x0 - depth, x1: rect.x0 };
    case 'east':
      return { ...rect, x0: rect.x1, x1: rect.x1 + depth };
  }
}

export function roomRect(room: Pick<Room, 'lengthIn' | 'widthIn'>): Rect {
  return { x0: 0, y0: 0, x1: room.lengthIn, y1: room.widthIn };
}

export function wallLength(room: Pick<Room, 'lengthIn' | 'widthIn'>, wall: Wall): number {
  return wall === 'north' || wall === 'south' ? room.lengthIn : room.widthIn;
}

/** A band `depth` deep against a wall, from `offset` along it for `length`. */
export function wallBand(room: Pick<Room, 'lengthIn' | 'widthIn'>, wall: Wall, offset: number, length: number, depth: number): Rect {
  switch (wall) {
    case 'north':
      return { x0: offset, y0: 0, x1: offset + length, y1: depth };
    case 'south':
      return { x0: offset, y0: room.widthIn - depth, x1: offset + length, y1: room.widthIn };
    case 'west':
      return { x0: 0, y0: offset, x1: depth, y1: offset + length };
    case 'east':
      return { x0: room.lengthIn - depth, y0: offset, x1: room.lengthIn, y1: offset + length };
  }
}

export function featureBand(room: Pick<Room, 'lengthIn' | 'widthIn'>, feature: RoomFeature, depth: number): Rect {
  return wallBand(room, feature.wall, feature.offsetIn, feature.widthIn, depth);
}

/** Hinge point and the end of the closed door leaf, for drawing the swing arc. */
export function doorGeometry(room: Pick<Room, 'lengthIn' | 'widthIn'>, door: RoomFeature) {
  const band = featureBand(room, door, door.widthIn);
  const atStart = door.hinge !== 'end';
  const along = door.wall === 'north' || door.wall === 'south' ? 'x' : 'y';
  const wallCoordinate = { north: 0, south: room.widthIn, west: 0, east: room.lengthIn }[door.wall];
  const start = door.offsetIn;
  const end = door.offsetIn + door.widthIn;
  const hingeAlong = atStart ? start : end;
  const leafAlong = atStart ? end : start;
  const point = (alongValue: number) =>
    along === 'x' ? { x: alongValue, y: wallCoordinate } : { x: wallCoordinate, y: alongValue };
  return { swingZone: band, hinge: point(hingeAlong), closedLeafEnd: point(leafAlong) };
}

/** Distances from a rect to each wall; negative means it pokes through that wall. */
export function wallDistances(room: Pick<Room, 'lengthIn' | 'widthIn'>, rect: Rect): Record<Wall, number> {
  return { north: rect.y0, west: rect.x0, south: room.widthIn - rect.y1, east: room.lengthIn - rect.x1 };
}

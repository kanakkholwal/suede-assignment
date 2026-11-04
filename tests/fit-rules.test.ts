import { describe, expect, it } from 'vitest';

import { CLIENT_ROOM_TEMPLATE } from '@/data/client-room';
import { evaluateFit, type FitRule, type PlannedPiece } from '@/lib/fit-rules';
import { doorGeometry, footprintRect } from '@/lib/geometry';
import { snapPlacement } from '@/lib/plan-model';
import type { Room, RoomFeature, Rotation } from '@/lib/room-state';

const { features: templateFeatures, ...roomFields } = CLIENT_ROOM_TEMPLATE;
const room: Room = { id: 'room', ...roomFields };
const features: RoomFeature[] = templateFeatures.map((feature, index) => ({ id: `f${index}`, ...feature }));
const door = features.find((feature) => feature.kind === 'door')!;

function piece(
  id: string,
  kind: PlannedPiece['kind'],
  [x, y]: [number, number],
  [width, depth]: [number, number],
  rotation: Rotation = 0,
  overrides: Partial<PlannedPiece> = {},
): PlannedPiece {
  return {
    id,
    name: id,
    kind,
    rect: footprintRect(x, y, width, depth, rotation),
    rotation,
    heightIn: null,
    footprintSource: 'verified',
    ...overrides,
  };
}

function rules(pieces: PlannedPiece[], roomOverride: Room = room, featureList: RoomFeature[] = features): FitRule[] {
  return evaluateFit({ room: roomOverride, features: featureList, pieces }).map((warning) => warning.rule);
}

// Sofa against the south wall facing north, clear of the door at x 144–176.
const sofa = (x = 80, rotation: Rotation = 180) => piece('Sofa', 'sofa', [x, 144 - 19.125], [86.5, 38.25], rotation);

describe('geometry', () => {
  it('swaps width and depth when a piece turns sideways', () => {
    expect(footprintRect(50, 50, 80, 40, 90)).toEqual({ x0: 30, y0: 10, x1: 70, y1: 90 });
  });

  it('places the assumed door hinge at the east corner of the south wall', () => {
    expect(doorGeometry(room, door)).toMatchObject({
      hinge: { x: 176, y: 144 },
      closedLeafEnd: { x: 144, y: 144 },
      swingZone: { x0: 144, y0: 112, x1: 176, y1: 144 },
    });
  });

  it('snaps to half inches and flush to a nearby wall', () => {
    expect(snapPlacement(room, { xIn: 50.3, yIn: 122.4, rotationDeg: 180 }, 86.5, 38.25)).toEqual({
      xIn: 50.5,
      yIn: 124.875,
      rotationDeg: 180,
    });
  });
});

describe('evaluateFit', () => {
  it('finds nothing wrong with a sofa flush against a clear wall', () => {
    expect(rules([sofa()])).toEqual([]);
  });

  it('flags a piece through a wall and depends on the client-stated room size', () => {
    const [warning] = evaluateFit({ room, features, pieces: [sofa(160)] });
    expect(warning).toMatchObject({ rule: 'outside-room', severity: 'conflict', title: 'Sofa goes through the east wall' });
    expect(warning.dependsOn).toContain('Room size is client-stated, not tape-measured');
  });

  it('flags the door swing and says the door position is assumed', () => {
    const blocking = piece('Chair', 'chair', [150, 125], [30, 30]);
    const warning = evaluateFit({ room, features, pieces: [blocking] }).find((entry) => entry.rule === 'door-swing');
    expect(warning).toMatchObject({ severity: 'conflict', title: 'Chair blocks the door' });
    expect(warning?.dependsOn).toEqual(['Door position and size are assumed']);
    const outward = features.map((feature) => (feature.kind === 'door' ? { ...feature, swing: 'out' as const } : feature));
    expect(rules([blocking], room, outward)).not.toContain('door-swing');
  });

  it('flags overlapping solid pieces but lets a rug sit under them', () => {
    expect(rules([sofa(), piece('Chair', 'chair', [80, 110], [30, 30])])).toContain('overlap');
    expect(rules([sofa(), piece('Rug', 'rug', [80, 100], [96, 120])])).not.toContain('overlap');
  });

  it('wants 14–18″ between seating and its coffee table', () => {
    const close = piece('Table', 'coffee-table', [80, 144 - 38.25 - 8 - 10.5], [60, 21]);
    const right = piece('Table', 'coffee-table', [80, 144 - 38.25 - 16 - 10.5], [60, 21]);
    const far = piece('Table', 'coffee-table', [80, 144 - 38.25 - 26 - 10.5], [60, 21]);
    expect(rules([sofa(), close])).toContain('coffee-gap');
    expect(rules([sofa(), right])).toEqual([]);
    expect(evaluateFit({ room, features, pieces: [sofa(), far] })[0]).toMatchObject({ rule: 'coffee-gap', severity: 'tip' });
  });

  it('suggests a coffee table about two-thirds the sofa length', () => {
    const small = piece('Table', 'coffee-table', [80, 144 - 38.25 - 16 - 10.5], [36, 21]);
    expect(rules([sofa(), small])).toContain('coffee-length');
  });

  it('flags a dead gap behind a floating sofa', () => {
    expect(rules([piece('Sofa', 'sofa', [80, 144 - 19.125 - 12], [86.5, 38.25], 180)])).toContain('behind');
  });

  it('flags a narrow walkway between large pieces', () => {
    const console = piece('Console', 'storage', [80, 9], [70, 18]);
    const chair = piece('Chair', 'chair', [80, 18 + 20 + 15], [30, 30]);
    expect(rules([console, chair])).toContain('walkway');
  });

  it('flags seating that crowds the radiator, and tall pieces above the window sill', () => {
    const underWindow = piece('Console', 'storage', [54, 10], [40, 18], 0, { heightIn: 34 });
    expect(rules([underWindow])).toEqual(expect.arrayContaining(['radiator', 'window']));
  });

  it('wants seating front legs on the rug', () => {
    const smallRug = piece('Rug', 'rug', [80, 60], [96, 60]);
    const bigRug = piece('Rug', 'rug', [80, 84], [108, 96]);
    expect(rules([sofa(), smallRug])).toContain('rug-legs');
    expect(rules([sofa(), bigRug])).not.toContain('rug-legs');
  });

  it('marks warnings that rest on a synthetic size', () => {
    const synthetic = { ...sofa(160), footprintSource: 'synthetic' as const };
    expect(evaluateFit({ room, features, pieces: [synthetic] })[0].dependsOn).toContain('Sofa: size is a synthetic placeholder');
  });
});

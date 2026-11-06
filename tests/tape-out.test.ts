import { ROOM_PRESETS } from '@/data/room-presets';
import { describe, expect, it } from 'vitest';

import { CLIENT_ROOM_TEMPLATE } from '@/data/client-room';
import { armchair } from '@/tests/api-fixtures';
import { resolveDimensions } from '@/lib/dimensions';
import { planPieces, shortName } from '@/lib/plan-model';
import type { Room, RoomFeature, RoomSnapshot } from '@/lib/room-state';
import { clientQuestions, tapeOutSteps, tapeOutText } from '@/lib/tape-out';

const { features: templateFeatures, ...roomFields } = CLIENT_ROOM_TEMPLATE;
const room: Room = { id: 'room', preset: 'client-living-room', ...roomFields };
const features: RoomFeature[] = templateFeatures.map((feature, index) => ({ id: `f${index}`, ...feature }));

function snapshotWith(source: 'verified' | 'synthetic'): RoomSnapshot {
  const dimensions = resolveDimensions(
    [{ productId: armchair.id, variantId: null, width: 37, depth: 30.25, height: 30.5, source, sourceUrl: null, note: '', capturedAt: '2026-11-04' }],
    null,
  );
  return {
    room,
    features,
    products: [armchair],
    items: [{ id: 'chair', productId: armchair.id, variantId: null, xIn: 30, yIn: 72, rotationDeg: 270, dimensions }],
  };
}

describe('tape-out', () => {
  it('gives the rotated outline and distances from the two nearest walls', () => {
    const [step] = tapeOutSteps(room, planPieces(snapshotWith('verified')));
    expect(step).toEqual({
      pieceId: 'chair',
      name: shortName(armchair),
      size: '2′ 6¼″ × 3′ 1″',
      anchors: [
        { wall: 'north', distance: '4′ 5½″' },
        { wall: 'west', distance: '1′ 3″' },
      ],
      facing: 'east',
      caution: null,
    });
  });

  it('warns when the outline rests on a placeholder size', () => {
    expect(tapeOutSteps(room, planPieces(snapshotWith('synthetic')))[0].caution).toMatch(/Placeholder size/);
  });
});

describe('clientQuestions', () => {
  it('asks about every assumption and drops what is confirmed', () => {
    expect(clientQuestions(room, features)).toHaveLength(4);
    const confirmed = features.map((feature) => (feature.kind === 'door' ? feature : { ...feature, status: 'confirmed' as const }));
    const questions = clientQuestions({ ...room, dimensionsStatus: 'confirmed' }, confirmed);
    expect(questions).toEqual([expect.stringMatching(/^You said “Door’s in the corner by the kitchen”. We drew the door on the south wall, 32″ wide, 4″ from the south-east corner/)]);
  });
});

describe('clientQuestions per room', () => {
  it.each(ROOM_PRESETS.map((preset) => [preset.id, preset.template] as const))('describes what was drawn in %s, in the client’s words', (preset, template) => {
    const features = template.features.map((feature, index) => ({ ...feature, id: String(index) }));
    const questions = clientQuestions({ id: 'room', preset, ...template }, features).join(' ');
    for (const feature of features) {
      expect(questions).toContain(`You said “${feature.clientSaid}”`);
      expect(questions).toContain(feature.wall);
    }
    expect(questions).not.toMatch(/window on your left|Which long wall/);
  });

  it('asks once about windows the client described together', () => {
    const studio = ROOM_PRESETS.find((preset) => preset.id === 'open-studio')!.template;
    const features = studio.features.map((feature, index) => ({ ...feature, id: String(index) }));
    const questions = clientQuestions({ id: 'room', preset: 'open-studio', ...studio }, features);
    expect(questions.filter((question) => question.includes('window'))).toEqual([expect.stringContaining('2 windows, on the north and south walls, each 48″ wide')]);
  });
});

describe('tapeOutText', () => {
  it('reads as a message: questions first, then each outline with its walls', () => {
    const steps = tapeOutSteps(room, planPieces(snapshotWith('verified')));
    const text = tapeOutText(room, steps, ['Which corner is the door in?']);
    expect(text).toContain('Before you tape, please check:\n1. Which corner is the door in?');
    expect(text).toContain(`1. ${shortName(armchair)}: 2′ 6¼″ × 3′ 1″ (east-west by north-south), front faces east.`);
    expect(text).toContain('4′ 5½″ from the north wall; 1′ 3″ from the west wall.');
  });
});

import { describe, expect, it } from 'vitest';

import { countOpenFacts, openFactLabels } from '@/lib/room-certainty';
import { roomFixture } from './api-fixtures';

describe('open room facts', () => {
  it('keeps the client-stated size apart from the positions we assumed', () => {
    const { room, features } = roomFixture();
    expect(openFactLabels(room, features)).toEqual(['room size client-stated', `${features.length} positions assumed`]);
    expect(countOpenFacts(room, features)).toBe(features.length + 1);
  });

  it('drops what the client confirmed', () => {
    const { room, features } = roomFixture();
    const confirmed = features.map((feature) => ({ ...feature, status: 'confirmed' as const }));
    expect(openFactLabels({ ...room, dimensionsStatus: 'confirmed' }, confirmed)).toEqual([]);
  });
});

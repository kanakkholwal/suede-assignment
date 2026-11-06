import { plural } from '@/lib/format';
import type { MeasurementStatus, Room, RoomFeature } from '@/lib/room-state';

type Unconfirmed = Exclude<MeasurementStatus, 'confirmed'>;

/** Client-stated: the client gave the number. Assumed: we drew it. Neither is measured. */
export const STATUS_WORD: Record<Unconfirmed, string> = { stated: 'client-stated', assumed: 'assumed' };

/** Everything about the room still to confirm: the size counts once, each opening once. */
export function countOpenFacts(room: Room, features: readonly RoomFeature[]): number {
  return (room.dimensionsStatus === 'confirmed' ? 0 : 1) + features.filter((feature) => feature.status !== 'confirmed').length;
}

/** The open facts in words, keeping client-stated and assumed apart: `room size client-stated`, `4 positions assumed`. */
export function openFactLabels(room: Room, features: readonly RoomFeature[]): string[] {
  const labels = room.dimensionsStatus === 'confirmed' ? [] : [`room size ${STATUS_WORD[room.dimensionsStatus]}`];
  for (const status of ['stated', 'assumed'] as const) {
    const count = features.filter((feature) => feature.status === status).length;
    if (count) labels.push(`${plural(count, 'position')} ${STATUS_WORD[status]}`);
  }
  return labels;
}

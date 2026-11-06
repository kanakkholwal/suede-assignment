import { isRecord, RequestInputError, requireNullableNumber, requireNumber, requireOneOf, requireString } from '@/lib/api/route-helpers';
import type { MeasurementStatus, NewRoom } from '@/lib/room-state';

// Inches. Generous bounds that still reject typos like 1440 for 144.
export const MAX_ROOM_IN = 1200;
export const MIN_ROOM_IN = 12;
export const CEILING_RANGE_IN = [48, 480] as const;
export const STATUSES: readonly MeasurementStatus[] = ['stated', 'assumed', 'confirmed'];

export function parseNewRoom(value: unknown): NewRoom {
  if (!isRecord(value)) throw new RequestInputError('The request body is not a valid room.');
  const name = requireString(value, 'name').trim();
  if (!name || name.length > 60) throw new RequestInputError('Name the room in 1 to 60 characters.');
  return {
    name,
    lengthIn: requireNumber(value, 'lengthIn', MIN_ROOM_IN, MAX_ROOM_IN),
    widthIn: requireNumber(value, 'widthIn', MIN_ROOM_IN, MAX_ROOM_IN),
    ceilingIn: requireNullableNumber(value, 'ceilingIn', ...CEILING_RANGE_IN),
    status: requireOneOf(value, 'status', STATUSES),
  };
}

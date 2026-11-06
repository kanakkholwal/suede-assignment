import {
  hasExactKeys,
  isRecord,
  RequestInputError,
  requireNullableNumber,
  requireNullableString,
  requireNumber,
  requireOneOf,
  requireString,
  respondForWorkspace,
  respondToMutation,
} from '@/lib/api/route-helpers';
import { DEFAULT_ROOM_PRESET, isRoomPresetId } from '@/data/room-presets';
import { CEILING_RANGE_IN, MAX_ROOM_IN, MIN_ROOM_IN, STATUSES } from '@/lib/api/room-input';
import { getDatabase } from '@/lib/db/connection';
import { applyRoomMutation, getRoomSnapshot } from '@/lib/db/room-repository';
import {
  ROTATIONS,
  type RoomFeaturePatch,
  type RoomMutation,
  WALLS,
} from '@/lib/room-state';

export const runtime = 'nodejs';

const MAX_PIECE_IN = 600;
const PLAN_MARGIN_IN = 600;
const FEATURE_KINDS = ['window', 'door', 'radiator'] as const;
const ROOM_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function invalidMutation(): never {
  throw new RequestInputError('The request body is not a valid Room mutation.');
}

function expectKeys(value: Record<string, unknown>, keys: readonly string[]): void {
  if (!hasExactKeys(value, ['operation', ...keys])) invalidMutation();
}

function parseFeaturePatch(value: unknown): RoomFeaturePatch {
  if (!isRecord(value)) return invalidMutation();
  const parsers: { [K in keyof RoomFeaturePatch]-?: (patch: Record<string, unknown>) => RoomFeaturePatch[K] } = {
    wall: (patch) => requireOneOf(patch, 'wall', WALLS),
    offsetIn: (patch) => requireNumber(patch, 'offsetIn', 0, MAX_ROOM_IN),
    widthIn: (patch) => requireNumber(patch, 'widthIn', 1, MAX_ROOM_IN),
    depthIn: (patch) => requireNullableNumber(patch, 'depthIn', 1, MAX_PIECE_IN),
    heightIn: (patch) => requireNullableNumber(patch, 'heightIn', 1, MAX_ROOM_IN),
    sillIn: (patch) => requireNullableNumber(patch, 'sillIn', 0, MAX_ROOM_IN),
    hinge: (patch) => (patch.hinge === null ? null : requireOneOf(patch, 'hinge', ['start', 'end'] as const)),
    swing: (patch) => (patch.swing === null ? null : requireOneOf(patch, 'swing', ['in', 'out'] as const)),
  };
  const patch: Record<string, unknown> = {};
  for (const key of Object.keys(value)) {
    if (!(key in parsers)) invalidMutation();
    patch[key] = parsers[key as keyof RoomFeaturePatch](value);
  }
  return patch as RoomFeaturePatch;
}

function parseRoomMutation(value: unknown): RoomMutation {
  if (!isRecord(value) || typeof value.operation !== 'string') return invalidMutation();

  switch (value.operation) {
    case 'addItem':
      expectKeys(value, ['productId', 'variantId']);
      return {
        operation: value.operation,
        productId: requireString(value, 'productId'),
        variantId: requireNullableString(value, 'variantId'),
      };
    case 'removeItem':
    case 'unplaceItem':
      expectKeys(value, ['itemId']);
      return { operation: value.operation, itemId: requireString(value, 'itemId') };
    case 'selectVariant':
      expectKeys(value, ['itemId', 'variantId']);
      return {
        operation: value.operation,
        itemId: requireString(value, 'itemId'),
        variantId: requireNullableString(value, 'variantId'),
      };
    case 'placeItem':
      expectKeys(value, ['itemId', 'xIn', 'yIn', 'rotationDeg']);
      return {
        operation: value.operation,
        itemId: requireString(value, 'itemId'),
        xIn: requireNumber(value, 'xIn', -PLAN_MARGIN_IN, MAX_ROOM_IN + PLAN_MARGIN_IN),
        yIn: requireNumber(value, 'yIn', -PLAN_MARGIN_IN, MAX_ROOM_IN + PLAN_MARGIN_IN),
        rotationDeg: requireOneOf(value, 'rotationDeg', ROTATIONS),
      };
    case 'setDimensions': {
      expectKeys(value, ['productId', 'variantId', 'values', 'note']);
      if (!isRecord(value.values) || !hasExactKeys(value.values, ['width', 'depth', 'height'])) {
        return invalidMutation();
      }
      const values = {
        width: requireNullableNumber(value.values, 'width', 0.25, MAX_PIECE_IN),
        depth: requireNullableNumber(value.values, 'depth', 0.25, MAX_PIECE_IN),
        height: requireNullableNumber(value.values, 'height', 0.25, MAX_PIECE_IN),
      };
      if (values.width === null && values.depth === null && values.height === null) {
        throw new RequestInputError('Enter at least one dimension.');
      }
      const note = requireString(value, 'note');
      if (note.length > 280) throw new RequestInputError('note must be 280 characters or fewer.');
      return {
        operation: value.operation,
        productId: requireString(value, 'productId'),
        variantId: requireNullableString(value, 'variantId'),
        values,
        note,
      };
    }
    case 'clearDimensions':
      expectKeys(value, ['productId', 'variantId']);
      return {
        operation: value.operation,
        productId: requireString(value, 'productId'),
        variantId: requireNullableString(value, 'variantId'),
      };
    case 'updateRoom':
      expectKeys(value, ['lengthIn', 'widthIn', 'ceilingIn', 'status']);
      return {
        operation: value.operation,
        lengthIn: requireNumber(value, 'lengthIn', MIN_ROOM_IN, MAX_ROOM_IN),
        widthIn: requireNumber(value, 'widthIn', MIN_ROOM_IN, MAX_ROOM_IN),
        ceilingIn: requireNullableNumber(value, 'ceilingIn', ...CEILING_RANGE_IN),
        status: requireOneOf(value, 'status', STATUSES),
      };
    case 'updateFeature':
      expectKeys(value, ['featureId', 'patch', 'status']);
      return {
        operation: value.operation,
        featureId: requireString(value, 'featureId'),
        patch: parseFeaturePatch(value.patch),
        status: requireOneOf(value, 'status', STATUSES),
      };
    case 'addFeature': {
      expectKeys(value, ['kind', 'patch', 'status']);
      const patch = parseFeaturePatch(value.patch);
      const required = ['wall', 'offsetIn', 'widthIn', 'depthIn', 'heightIn', 'sillIn', 'hinge', 'swing'] as const;
      if (required.some((key) => !(key in patch))) return invalidMutation();
      return {
        operation: value.operation,
        kind: requireOneOf(value, 'kind', FEATURE_KINDS),
        patch: patch as Required<RoomFeaturePatch>,
        status: requireOneOf(value, 'status', STATUSES),
      };
    }
    case 'removeFeature':
      expectKeys(value, ['featureId']);
      return { operation: value.operation, featureId: requireString(value, 'featureId') };
    default:
      return invalidMutation();
  }
}

/** `?room=` is a preset id or a created room's id; anything else is rejected rather than silently falling back. */
function readPreset(request: Request): string {
  const value = new URL(request.url).searchParams.get('room');
  if (value === null) return DEFAULT_ROOM_PRESET;
  if (!isRoomPresetId(value) && !ROOM_ID.test(value)) throw new RequestInputError('Unknown room.');
  return value;
}

export async function GET(request: Request) {
  return respondForWorkspace((workspaceId) => getRoomSnapshot(getDatabase(), workspaceId, readPreset(request)));
}

export async function POST(request: Request) {
  return respondToMutation(request, parseRoomMutation, (workspaceId, mutation) =>
    applyRoomMutation(getDatabase(), workspaceId, mutation, readPreset(request)),
  );
}

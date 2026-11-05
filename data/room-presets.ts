import { CLIENT_ROOM_TEMPLATE, type RoomTemplate } from '@/data/client-room';

export const ROOM_PRESET_IDS = ['client-living-room', 'narrow-living-room', 'open-studio'] as const;
export type RoomPresetId = (typeof ROOM_PRESET_IDS)[number];
export const DEFAULT_ROOM_PRESET: RoomPresetId = 'client-living-room';

export interface RoomPreset {
  id: RoomPresetId;
  /** Short line for the switcher. */
  summary: string;
  template: RoomTemplate;
}

const NARROW_LIVING_ROOM: RoomTemplate = {
  name: 'Example: narrow living room',
  lengthIn: 216,
  widthIn: 120,
  ceilingIn: 96,
  dimensionsStatus: 'stated',
  clientMessage: 'About 10 by 18, 8 foot ceilings, one big window at the far end, and the door is halfway down the long wall.',
  note: 'Example room for trying layouts in a long, narrow space. Not a client measurement.',
  features: [
    {
      kind: 'window',
      wall: 'east',
      offsetIn: 24,
      widthIn: 72,
      depthIn: null,
      heightIn: 54,
      sillIn: 18,
      hinge: null,
      swing: null,
      status: 'assumed',
      clientSaid: 'One big window at the far end',
      assumption: '“Far end” read as the east short wall. Width and sill not given: drawn 72″ wide, centred, 18″ sill.',
    },
    {
      kind: 'door',
      wall: 'south',
      offsetIn: 96,
      widthIn: 32,
      depthIn: null,
      heightIn: 80,
      sillIn: null,
      hinge: 'start',
      swing: 'in',
      status: 'assumed',
      clientSaid: 'The door is halfway down the long wall',
      assumption: 'Which long wall, width and swing were not given. Drawn on the south wall near the middle, 32″, swinging in.',
    },
  ],
};

const OPEN_STUDIO: RoomTemplate = {
  name: 'Example: open studio',
  lengthIn: 192,
  widthIn: 168,
  ceilingIn: 108,
  dimensionsStatus: 'stated',
  clientMessage: 'Studio, about 16 by 14 with 9 foot ceilings. A window on each long wall, the entry door on a short wall, radiator by the entry.',
  note: 'Example room where seating, sleeping and dining share one space. Not a client measurement.',
  features: [
    {
      kind: 'window',
      wall: 'north',
      offsetIn: 60,
      widthIn: 48,
      depthIn: null,
      heightIn: 54,
      sillIn: 24,
      hinge: null,
      swing: null,
      status: 'assumed',
      clientSaid: 'A window on each long wall',
      assumption: 'Window sizes and positions not given. Drawn 48″ wide with a 24″ sill.',
    },
    {
      kind: 'window',
      wall: 'south',
      offsetIn: 84,
      widthIn: 48,
      depthIn: null,
      heightIn: 54,
      sillIn: 24,
      hinge: null,
      swing: null,
      status: 'assumed',
      clientSaid: 'A window on each long wall',
      assumption: 'Window sizes and positions not given. Drawn 48″ wide with a 24″ sill.',
    },
    {
      kind: 'door',
      wall: 'west',
      offsetIn: 12,
      widthIn: 34,
      depthIn: null,
      heightIn: 80,
      sillIn: null,
      hinge: 'start',
      swing: 'in',
      status: 'assumed',
      clientSaid: 'The entry door on a short wall',
      assumption: 'Which short wall and which end were not given. Drawn on the west wall near the north corner, 34″, swinging in.',
    },
    {
      kind: 'radiator',
      wall: 'west',
      offsetIn: 72,
      widthIn: 30,
      depthIn: 6,
      heightIn: 20,
      sillIn: null,
      hinge: null,
      swing: null,
      status: 'assumed',
      clientSaid: 'Radiator by the entry',
      assumption: 'Size and exact spot not given. Drawn 30″ wide, 6″ deep, just past the door swing.',
    },
  ],
};

export const ROOM_PRESETS: readonly RoomPreset[] = [
  { id: 'client-living-room', summary: 'From the client’s message', template: CLIENT_ROOM_TEMPLATE },
  { id: 'narrow-living-room', summary: 'Example, long and narrow', template: NARROW_LIVING_ROOM },
  { id: 'open-studio', summary: 'Example, one shared space', template: OPEN_STUDIO },
];

export function isRoomPresetId(value: unknown): value is RoomPresetId {
  return typeof value === 'string' && (ROOM_PRESET_IDS as readonly string[]).includes(value);
}

export function roomPreset(id: RoomPresetId): RoomPreset {
  return ROOM_PRESETS.find((preset) => preset.id === id) as RoomPreset;
}

import type { Room, RoomFeature } from '@/lib/room-state';

export const CLIENT_ROOM_MESSAGE =
  'It’s 12 by 15, ceilings are 8 and a half feet, two windows on the long wall, door’s in the corner by the kitchen, radiator under the left window.';

type RoomTemplate = Omit<Room, 'id'> & { features: ReadonlyArray<Omit<RoomFeature, 'id'>> };

const WINDOW_ASSUMPTION =
  'Which long wall, window widths, positions and sill height were not given. Drawn 36″ wide, evenly spaced, 30″ sill.';

/**
 * The client's message turned into a plan. Stated values keep the client's numbers;
 * everything else is an explicit, editable assumption.
 */
export const CLIENT_ROOM_TEMPLATE: RoomTemplate = {
  name: 'Client living room',
  lengthIn: 180,
  widthIn: 144,
  ceilingIn: 102,
  dimensionsStatus: 'stated',
  clientMessage: CLIENT_ROOM_MESSAGE,
  note: 'Not known whether 12 × 15 is wall to wall or rounded. Confirm with a tape before ordering anything tight.',
  features: [
    {
      kind: 'window',
      wall: 'north',
      offsetIn: 36,
      widthIn: 36,
      depthIn: null,
      heightIn: 48,
      sillIn: 30,
      hinge: null,
      swing: null,
      status: 'assumed',
      clientSaid: 'Two windows on the long wall',
      assumption: WINDOW_ASSUMPTION,
    },
    {
      kind: 'window',
      wall: 'north',
      offsetIn: 108,
      widthIn: 36,
      depthIn: null,
      heightIn: 48,
      sillIn: 30,
      hinge: null,
      swing: null,
      status: 'assumed',
      clientSaid: 'Two windows on the long wall',
      assumption: WINDOW_ASSUMPTION,
    },
    {
      kind: 'radiator',
      wall: 'north',
      offsetIn: 36,
      widthIn: 36,
      depthIn: 8,
      heightIn: 24,
      sillIn: null,
      hinge: null,
      swing: null,
      status: 'assumed',
      clientSaid: 'Radiator under the left window',
      assumption: '“Left” read as facing the windows from inside. Size not given: drawn 36″ wide, 8″ deep, 24″ tall.',
    },
    {
      kind: 'door',
      wall: 'south',
      offsetIn: 144,
      widthIn: 32,
      depthIn: null,
      heightIn: 80,
      sillIn: null,
      hinge: 'end',
      swing: 'in',
      status: 'assumed',
      clientSaid: 'Door’s in the corner by the kitchen',
      assumption: 'Which corner, door width and swing were not given. Drawn on the south wall at the east corner, 32″, swinging in.',
    },
  ],
};

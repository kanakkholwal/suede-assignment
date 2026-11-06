import { parseNewRoom } from '@/lib/api/room-input';
import { respondForWorkspace, respondToMutation } from '@/lib/api/route-helpers';
import { getDatabase } from '@/lib/db/connection';
import { createRoom, listRooms } from '@/lib/db/room-repository';

export const runtime = 'nodejs';

export async function GET() {
  return respondForWorkspace((workspaceId) => ({ rooms: listRooms(getDatabase(), workspaceId) }));
}

export async function POST(request: Request) {
  return respondToMutation(request, parseNewRoom, (workspaceId, room) => createRoom(getDatabase(), workspaceId, room));
}

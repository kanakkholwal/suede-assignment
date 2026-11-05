import { Suspense } from 'react';

import { RoomPlanner } from '@/components/planner/room-planner';

export default function RoomPage() {
  return (
    <Suspense>
      <RoomPlanner />
    </Suspense>
  );
}

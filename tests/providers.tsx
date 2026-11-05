import { NuqsTestingAdapter } from 'nuqs/adapters/testing';
import type { ReactNode } from 'react';

import { RoomProvider } from '@/components/room/room-provider';

/** The app's client providers, with URL state held in memory so clicks update it as in the browser. */
export function AppProviders({ children, searchParams = '' }: { children: ReactNode; searchParams?: string }) {
  return (
    <NuqsTestingAdapter searchParams={searchParams} hasMemory>
      <RoomProvider>{children}</RoomProvider>
    </NuqsTestingAdapter>
  );
}

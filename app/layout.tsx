import type { Metadata } from 'next';
import '@fontsource-variable/inter';
import '@fontsource-variable/eb-garamond';
import '@fontsource/dm-serif-display';
import './globals.css';
import { Suspense } from 'react';

import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { RoomProvider } from '@/components/room/room-provider';
import { AppBar } from '@/components/shell/app-bar';
import { TooltipProvider } from '@/components/ui/tooltip';

export const metadata: Metadata = {
  title: 'Suede · Catalog to room',
  description:
    'Find furniture from a client brief and fit it into their room at true scale. A local Next.js server queries local SQLite at runtime through local APIs, with no remote runtime database, catalog, or image requests.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-canvas">
        <NuqsAdapter>
          <TooltipProvider delay={400}>
            {/* URL state is read on the client, so the shell waits for search params instead of failing the static render. */}
            <Suspense fallback={<div className="h-13 shrink-0" />}>
              <RoomProvider>
                <div className="flex min-h-svh flex-col lg:h-svh">
                  <AppBar />
                  <div className="flex min-h-0 flex-1 flex-col px-1.5 pb-1.5 print:p-0">{children}</div>
                </div>
              </RoomProvider>
            </Suspense>
          </TooltipProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}

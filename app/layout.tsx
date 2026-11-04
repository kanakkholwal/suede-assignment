import type { Metadata } from 'next';
import '@fontsource-variable/inter';
import '@fontsource-variable/eb-garamond';
import '@fontsource/dm-serif-display';
import './globals.css';
import { AppHeader } from '@/components/shared/app-header';

export const metadata: Metadata = {
  title: 'Catalog Lab Interview',
  description:
    'Catalog Lab Interview is a local Next.js server that queries local SQLite at runtime through local APIs, with no remote runtime database, catalog, or image requests.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="surface-app flex min-h-svh flex-col">
          <AppHeader />
          {children}
        </div>
      </body>
    </html>
  );
}

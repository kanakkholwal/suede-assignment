import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import Database from 'better-sqlite3';

import { seedInterviewDatabase } from '@/lib/db/seed';

export interface SeededDatabase {
  db: Database.Database;
  dispose: () => void;
}

/** A fresh seeded SQLite file in a temp directory; call `dispose` in afterEach. */
export function createSeededDatabase(prefix: string): SeededDatabase {
  const directory = mkdtempSync(path.join(tmpdir(), `catalog-lab-interview-${prefix}-`));
  const databasePath = path.join(directory, 'catalog.sqlite');
  seedInterviewDatabase({ databasePath });
  const db = new Database(databasePath);
  db.pragma('foreign_keys = ON');
  return {
    db,
    dispose: () => {
      db.close();
      rmSync(directory, { recursive: true, force: true });
    },
  };
}

export const PRODUCTS = {
  elevate86: 'aadc2cf3-f954-4418-a372-f5863c2b8b0f',
  elevate96: '973b652f-e5ba-4929-96d3-669e84d0ef70',
  essentialSofa: '6051bd06-3f8b-4d53-89de-d481fb60d51b',
  antwerpSofa: '7a71f46f-69bf-4cb9-8c0b-c203c7ac5751',
  kyotoTable: '09d254df-091a-4bec-82dc-f6301632a9d3',
  copperRug: 'eb74db93-c602-4d2d-bdf6-b0e0affef806',
} as const;

export const VARIANTS = {
  antwerp96: 'cddcd58d-4bb5-4949-9aab-e3c167701723',
  kyotoLong: '3541efbe-3483-44ab-bb3c-8afc972a7c79',
} as const;

export const UNKNOWN_ID = '00000000-0000-4000-8000-000000000000';

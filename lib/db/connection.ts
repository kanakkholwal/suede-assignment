import 'server-only';

import { statSync } from 'node:fs';
import path from 'node:path';
import Database from 'better-sqlite3';

import { ensureRuntimeDatabase } from '@/lib/db/paths';

const globalDatabase = globalThis as typeof globalThis & {
  catalogLabInterviewDatabase?: Database.Database;
  catalogLabInterviewDatabaseIdentity?: string;
};

export function getDatabase(): Database.Database {
  // A separate db:reset process can unlink the file while this handle stays open.
  // Recreate first, then compare file identity (ordinary writes do not change it).
  const databasePath = path.resolve(ensureRuntimeDatabase());
  const file = statSync(databasePath, { bigint: true });
  const identity = `${databasePath}:${file.dev}:${file.ino}:${file.birthtimeNs}`;
  if (!globalDatabase.catalogLabInterviewDatabase?.open || globalDatabase.catalogLabInterviewDatabaseIdentity !== identity) {
    globalDatabase.catalogLabInterviewDatabase?.close();
    const db = new Database(databasePath);
    db.pragma('foreign_keys = ON');
    globalDatabase.catalogLabInterviewDatabase = db;
    globalDatabase.catalogLabInterviewDatabaseIdentity = identity;
  }

  return globalDatabase.catalogLabInterviewDatabase;
}

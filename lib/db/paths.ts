import { copyFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import Database from 'better-sqlite3';

const projectDirectory = process.cwd();

export const seedDatabasePath = path.join(projectDirectory, 'data', 'catalog-lab-interview.sqlite');
export const runtimeDatabasePath = path.join(projectDirectory, '.catalog-lab-interview', 'runtime.sqlite');

/** Checks integrity and returns the applied migration ids. */
function inspect(databasePath: string): string[] {
  const db = new Database(databasePath, { readonly: true, fileMustExist: true });

  try {
    const rows = db.pragma('integrity_check') as Array<{ integrity_check: string }>;
    if (rows.length !== 1 || rows[0]?.integrity_check !== 'ok') {
      throw new Error('SQLite integrity check failed.');
    }
    return (db.prepare('SELECT id FROM schema_migrations').all() as Array<{ id: string }>).map((row) => row.id);
  } finally {
    db.close();
  }
}

function recoveryError(cause?: unknown): Error {
  const detail = cause instanceof Error ? ` ${cause.message}` : '';
  return new Error(`The local catalog database is unavailable.${detail} Run pnpm db:reset to restore it.`);
}

/**
 * Returns a usable runtime copy, recreating it from the seed when it predates a migration.
 * `releaseHandles` must close open connections first: Windows won't replace an open file.
 */
export function ensureRuntimeDatabase(releaseHandles?: () => void): string {
  try {
    if (!existsSync(seedDatabasePath)) throw recoveryError();
    const seedMigrations = inspect(seedDatabasePath);

    if (existsSync(runtimeDatabasePath)) {
      const runtimeMigrations = new Set(inspect(runtimeDatabasePath));
      if (seedMigrations.some((id) => !runtimeMigrations.has(id))) {
        releaseHandles?.();
        resetRuntimeDatabase();
        console.warn('Local runtime database predated the latest schema; recreated it from the seed. Local saves were reset.');
      }
    }

    if (!existsSync(runtimeDatabasePath)) {
      mkdirSync(path.dirname(runtimeDatabasePath), { recursive: true });
      copyFileSync(seedDatabasePath, runtimeDatabasePath);
    }

    inspect(runtimeDatabasePath);
    return runtimeDatabasePath;
  } catch (error) {
    if (error instanceof Error && error.message.includes('pnpm db:reset')) throw error;
    throw recoveryError(error);
  }
}

export function resetRuntimeDatabase(): void {
  const expectedPath = path.join(projectDirectory, '.catalog-lab-interview', 'runtime.sqlite');
  const resolvedPath = path.resolve(runtimeDatabasePath);
  if (resolvedPath !== path.resolve(expectedPath)) {
    throw new Error('Refusing to remove an unexpected runtime database path.');
  }

  for (const filePath of [resolvedPath, `${resolvedPath}-wal`, `${resolvedPath}-shm`, `${resolvedPath}-journal`]) {
    rmSync(filePath, { force: true });
  }
}

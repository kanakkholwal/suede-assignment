import { copyFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import Database from 'better-sqlite3';

const projectDirectory = process.cwd();

export const seedDatabasePath = path.join(projectDirectory, 'data', 'catalog-lab-interview.sqlite');
export const runtimeDatabasePath = path.join(projectDirectory, '.catalog-lab-interview', 'runtime.sqlite');

function assertIntegrity(databasePath: string): void {
  const db = new Database(databasePath, { readonly: true, fileMustExist: true });

  try {
    const rows = db.pragma('integrity_check') as Array<{ integrity_check: string }>;
    if (rows.length !== 1 || rows[0]?.integrity_check !== 'ok') {
      throw new Error('SQLite integrity check failed.');
    }
  } finally {
    db.close();
  }
}

function recoveryError(cause?: unknown): Error {
  const detail = cause instanceof Error ? ` ${cause.message}` : '';
  return new Error(`The local catalog database is unavailable.${detail} Run pnpm db:reset to restore it.`);
}

export function ensureRuntimeDatabase(): string {
  try {
    if (!existsSync(seedDatabasePath)) throw recoveryError();
    assertIntegrity(seedDatabasePath);

    if (!existsSync(runtimeDatabasePath)) {
      mkdirSync(path.dirname(runtimeDatabasePath), { recursive: true });
      copyFileSync(seedDatabasePath, runtimeDatabasePath);
    }

    assertIntegrity(runtimeDatabasePath);
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

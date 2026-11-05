// @vitest-environment node
import { copyFileSync, existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import type Database from 'better-sqlite3';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';

const paths = vi.hoisted(() => ({ seed: '', runtime: '' }));
vi.mock('server-only', () => ({}));
vi.mock('@/lib/db/paths', () => ({
  ensureRuntimeDatabase: () => {
    if (!existsSync(paths.runtime)) copyFileSync(paths.seed, paths.runtime);
    return paths.runtime;
  },
}));

import { getDatabase } from '@/lib/db/connection';
import { applyLibraryMutation, getLibrarySnapshot } from '@/lib/db/library-repository';
import { seedInterviewDatabase } from '@/lib/db/seed';

let directory: string;
const opened = new Set<Database.Database>();
const productId = '945e52df-2f3c-439f-8926-35e5b7411f12';
const cached = globalThis as typeof globalThis & { catalogLabInterviewDatabase?: Database.Database };

beforeEach(() => {
  cached.catalogLabInterviewDatabase?.close();
  delete cached.catalogLabInterviewDatabase;
  directory = mkdtempSync(path.join(tmpdir(), 'catalog-lab-interview-connection-'));
  paths.seed = path.join(directory, 'seed.sqlite');
  paths.runtime = path.join(directory, 'runtime.sqlite');
  seedInterviewDatabase({ databasePath: paths.seed });
});

afterEach(() => {
  for (const db of opened) if (db.open) db.close();
  opened.clear();
  delete cached.catalogLabInterviewDatabase;
  rmSync(directory, { recursive: true, force: true });
});

function connection() {
  const db = getDatabase();
  opened.add(db);
  return db;
}

// Windows refuses to unlink an open file, so this POSIX-only scenario cannot occur there.
it.skipIf(process.platform === 'win32').each(['removed', 'replaced'])('reconnects after the runtime file is %s and accepts Library writes without stale saves', (scenario) => {
  const original = connection();
  expect(applyLibraryMutation(original, 'workspace', { operation: 'toggleSaved', productId }).state.savedIds).toEqual([productId]);

  // The reset CLI runs in another process, so the server cannot clear its cache.
  rmSync(paths.runtime);
  if (scenario === 'replaced') copyFileSync(paths.seed, paths.runtime);
  const replacement = connection();
  expect(replacement).not.toBe(original);
  expect(original.open).toBe(false);
  expect(getLibrarySnapshot(replacement, 'workspace').state.savedIds).toEqual([]);
  expect(applyLibraryMutation(connection(), 'workspace', { operation: 'toggleSaved', productId }).state.savedIds).toEqual([productId]);
  expect(replacement.pragma('foreign_keys', { simple: true })).toBe(1);
});

it('reuses the connection after ordinary writes but reconnects when the runtime path changes', () => {
  const original = connection();
  applyLibraryMutation(original, 'workspace', { operation: 'toggleSaved', productId });
  expect(connection()).toBe(original);
  paths.runtime = path.join(directory, 'other-runtime.sqlite');
  const replacement = connection();
  expect(replacement).not.toBe(original);
  expect(getLibrarySnapshot(replacement, 'workspace').state.savedIds).toEqual([]);
});

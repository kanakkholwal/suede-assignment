import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type Database from 'better-sqlite3';

const migrationsDirectory = fileURLToPath(new URL('../../data/migrations/', import.meta.url));

function hasMigrationTable(db: Database.Database): boolean {
  const row = db
    .prepare("select 1 from sqlite_master where type = 'table' and name = 'schema_migrations'")
    .get();

  return row !== undefined;
}

export function runMigrations(db: Database.Database): string[] {
  const migrationFiles = readdirSync(migrationsDirectory)
    .filter((fileName) => fileName.endsWith('.sql'))
    .sort();
  const appliedMigrations: string[] = [];

  for (const fileName of migrationFiles) {
    const alreadyApplied =
      hasMigrationTable(db) &&
      db.prepare('select 1 from schema_migrations where id = ?').get(fileName) !== undefined;

    if (alreadyApplied) continue;

    const sql = readFileSync(path.join(migrationsDirectory, fileName), 'utf8');
    db.exec(sql);
    db.prepare('insert into schema_migrations (id) values (?)').run(fileName);
    appliedMigrations.push(fileName);
  }

  return appliedMigrations;
}

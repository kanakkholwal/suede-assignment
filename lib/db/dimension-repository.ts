import type Database from 'better-sqlite3';

import type { DimensionRecord, DimensionSource } from '@/lib/dimensions';
import { placeholders } from '@/lib/db/sql';

interface DimensionRow {
  product_id: string;
  variant_id: string | null;
  width_in: number | null;
  depth_in: number | null;
  height_in: number | null;
  source: DimensionSource;
  source_url: string | null;
  note: string;
  captured_at: string;
}

/** Every sourced claim for these products: shared catalog claims plus this workspace's entries. */
export function getDimensionRecords(
  db: Database.Database,
  productIds: readonly string[],
  workspaceId: string | null,
): DimensionRecord[] {
  if (productIds.length === 0) return [];
  const rows = db
    .prepare(`
      SELECT product_id, variant_id, width_in, depth_in, height_in, source, source_url, note, captured_at
      FROM product_dimensions
      WHERE product_id IN (${placeholders(productIds.length)})
        AND (workspace_id IS NULL OR workspace_id = ?)
      ORDER BY id
    `)
    .all(...productIds, workspaceId) as DimensionRow[];

  return rows.map((row) => ({
    productId: row.product_id,
    variantId: row.variant_id,
    width: row.width_in,
    depth: row.depth_in,
    height: row.height_in,
    source: row.source,
    sourceUrl: row.source_url,
    note: row.note,
    capturedAt: row.captured_at,
  }));
}

import type Database from 'better-sqlite3';

import type {
  Availability,
  CatalogProduct,
  DataConfidence,
  ProductImage,
  ProductVariant,
} from '@/data/product-types';
import type {
  CatalogCategoryNode,
  CatalogFilters,
  CatalogQueryResult,
  CatalogVariantReference,
} from '@/lib/catalog-contract';
import { getDimensionRecords } from '@/lib/db/dimension-repository';
import { placeholders } from '@/lib/db/sql';
import { type DimensionRecord, resolveDimensions, summarizeDimensions, widthWithin } from '@/lib/dimensions';

interface ProductRow {
  id: string;
  name: string;
  brand: string;
  product_type: string;
  source_category_label: string;
  category_id: number | null;
  source_url: string;
  description: string;
  availability_status: Availability;
  material: string | null;
  width_in: number | null;
  depth_in: number | null;
  height_in: number | null;
  lead_time_min_weeks: number | null;
  lead_time_max_weeks: number | null;
  margin_percent: number | null;
  price_confidence: DataConfidence;
  availability_confidence: DataConfidence;
  lead_time_confidence: DataConfidence;
  margin_confidence: DataConfidence;
}

interface VariantRow {
  id: string;
  product_id: string;
  label: string;
  price_cents: number;
  available: number;
  image_src: string | null;
  image_alt: string | null;
}

interface ProductImageRow {
  product_id: string;
  local_path: string;
  alt_text: string;
}

interface ProductTagRow {
  product_id: string;
  label: string;
}

interface CategoryFacetRow {
  id: number;
  name: string;
  parent_id: number | null;
  aliases: string | null;
  count: number;
}

interface ProductHydration {
  products: CatalogProduct[];
}

function escapeLike(value: string): string {
  return value.replaceAll('\\', '\\\\').replaceAll('%', '\\%').replaceAll('_', '\\_');
}

function variantPredicates(filters: CatalogFilters, alias: string): { clauses: string[]; values: unknown[] } {
  const clauses: string[] = [];
  const values: unknown[] = [];
  if (filters.minPriceCents !== null) {
    clauses.push(`${alias}.price_cents >= ?`);
    values.push(filters.minPriceCents);
  }
  if (filters.maxPriceCents !== null) {
    clauses.push(`${alias}.price_cents <= ?`);
    values.push(filters.maxPriceCents);
  }
  if (filters.inStockOnly) clauses.push(`${alias}.available = 1`);
  return { clauses, values };
}

function matchingProductIds(db: Database.Database, filters: CatalogFilters): string[] {
  const clauses: string[] = [];
  const values: unknown[] = [];
  const query = filters.query.trim();

  if (query) {
    const pattern = `%${escapeLike(query)}%`;
    clauses.push(`(
      p.name COLLATE NOCASE LIKE ? ESCAPE '\\'
      OR p.brand COLLATE NOCASE LIKE ? ESCAPE '\\'
      OR p.product_type COLLATE NOCASE LIKE ? ESCAPE '\\'
      OR EXISTS (
        SELECT 1
        FROM product_tags pt
        JOIN tags t ON t.id = pt.tag_id
        WHERE pt.product_id = p.id AND t.label COLLATE NOCASE LIKE ? ESCAPE '\\'
      )
    )`);
    values.push(pattern, pattern, pattern, pattern);
  }

  if (filters.category === 'uncategorized') {
    clauses.push('NOT EXISTS (SELECT 1 FROM product_categories pc WHERE pc.product_id = p.id)');
  } else if (typeof filters.category === 'number') {
    clauses.push(`EXISTS (
      WITH RECURSIVE selected_categories(id) AS (
        SELECT id FROM categories WHERE id = ?
        UNION ALL
        SELECT c.id
        FROM categories c
        JOIN selected_categories selected ON c.parent_id = selected.id
      )
      SELECT 1
      FROM product_categories pc
      JOIN selected_categories selected ON selected.id = pc.category_id
      WHERE pc.product_id = p.id
    )`);
    values.push(filters.category);
  }

  if (filters.brands.length > 0) {
    clauses.push(`p.brand COLLATE NOCASE IN (${placeholders(filters.brands.length)})`);
    values.push(...filters.brands);
  }

  const variantFilter = variantPredicates(filters, 'filter_variant');
  clauses.push(`EXISTS (
    SELECT 1
    FROM variants filter_variant
    WHERE filter_variant.product_id = p.id
      ${variantFilter.clauses.map((clause) => `AND ${clause}`).join('\n      ')}
  )`);
  values.push(...variantFilter.values);

  const rows = db
    .prepare(`
      SELECT p.id
      FROM products p
      WHERE ${clauses.join('\n        AND ')}
      ORDER BY p.id
    `)
    .all(...values) as Array<{ id: string }>;
  return rows.map((row) => row.id);
}

function hydrateProducts(db: Database.Database, ids: readonly string[]): ProductHydration {
  if (ids.length === 0) {
    return { products: [] };
  }

  const idPlaceholders = placeholders(ids.length);
  const rows = db
    .prepare(`
      SELECT
        p.*,
        (
          SELECT pc.category_id
          FROM product_categories pc
          WHERE pc.product_id = p.id
          ORDER BY pc.position, pc.category_id
          LIMIT 1
        ) AS category_id
      FROM products p
      WHERE p.id IN (${idPlaceholders})
    `)
    .all(...ids) as ProductRow[];
  const tagRows = db
    .prepare(`
      SELECT pt.product_id, t.label
      FROM product_tags pt
      JOIN tags t ON t.id = pt.tag_id
      WHERE pt.product_id IN (${idPlaceholders})
      ORDER BY pt.product_id, t.label
    `)
    .all(...ids) as ProductTagRow[];
  const imageRows = db
    .prepare(`
      SELECT product_id, local_path, alt_text
      FROM product_images
      WHERE variant_id IS NULL AND product_id IN (${idPlaceholders})
      ORDER BY product_id, is_primary DESC, position, id
    `)
    .all(...ids) as ProductImageRow[];
  const variantRows = db
    .prepare(`
      SELECT
        v.id,
        v.product_id,
        v.label,
        v.price_cents,
        v.available,
        image.local_path AS image_src,
        image.alt_text AS image_alt
      FROM variants v
      LEFT JOIN product_images image ON image.variant_id = v.id
      WHERE v.product_id IN (${idPlaceholders})
      ORDER BY v.product_id, v.position, v.id
    `)
    .all(...ids) as VariantRow[];

  const tagsByProductId = new Map<string, string[]>();
  for (const row of tagRows) {
    const tags = tagsByProductId.get(row.product_id) ?? [];
    tags.push(row.label);
    tagsByProductId.set(row.product_id, tags);
  }

  const imagesByProductId = new Map<string, ProductImage[]>();
  for (const row of imageRows) {
    const images = imagesByProductId.get(row.product_id) ?? [];
    images.push({ src: row.local_path, alt: row.alt_text });
    imagesByProductId.set(row.product_id, images);
  }

  const variantsByProductId = new Map<string, ProductVariant[]>();
  for (const row of variantRows) {
    const variant: ProductVariant = {
      id: row.id,
      label: row.label,
      priceCents: row.price_cents,
      available: row.available === 1,
      ...(row.image_src !== null && row.image_alt !== null
        ? { image: { src: row.image_src, alt: row.image_alt } }
        : {}),
    };
    const variants = variantsByProductId.get(row.product_id) ?? [];
    variants.push(variant);
    variantsByProductId.set(row.product_id, variants);
  }

  const productByRowId = new Map(rows.map((row) => [row.id, row]));
  const products = ids.flatMap((id) => {
    const row = productByRowId.get(id);
    if (!row) return [];
    const product: CatalogProduct = {
      id: row.id,
      name: row.name,
      brand: row.brand,
      productType: row.product_type,
      category: row.source_category_label,
      categoryId: row.category_id,
      roomTypes: [],
      tags: tagsByProductId.get(row.id) ?? [],
      sourceUrl: row.source_url,
      description: row.description,
      material: row.material,
      dimensionsIn: {
        width: row.width_in,
        depth: row.depth_in,
        height: row.height_in,
      },
      images: imagesByProductId.get(row.id) ?? [],
      variants: variantsByProductId.get(row.id) ?? [],
      availability: row.availability_status,
      leadTimeWeeks:
        row.lead_time_min_weeks === null || row.lead_time_max_weeks === null
          ? null
          : { min: row.lead_time_min_weeks, max: row.lead_time_max_weeks },
      margin:
        row.margin_percent === null
          ? null
          : { percent: row.margin_percent, confidence: row.margin_confidence },
      provenance: {
        price: row.price_confidence,
        availability: row.availability_confidence,
        leadTime: row.lead_time_confidence,
        margin: row.margin_confidence,
      },
    };
    return [product];
  });

  return {
    products,
  };
}

function getBrands(db: Database.Database): string[] {
  return (
    db.prepare('SELECT DISTINCT brand FROM products ORDER BY brand COLLATE NOCASE, brand').all() as Array<{
      brand: string;
    }>
  ).map((row) => row.brand);
}

function getCategoryTree(db: Database.Database): CatalogCategoryNode[] {
  const rows = db
    .prepare(`
      WITH RECURSIVE descendants(ancestor_id, descendant_id) AS (
        SELECT id, id FROM categories
        UNION ALL
        SELECT descendants.ancestor_id, category.id
        FROM descendants
        JOIN categories category ON category.parent_id = descendants.descendant_id
      )
      SELECT
        category.id,
        category.name,
        category.parent_id,
        (SELECT group_concat(alias, '|') FROM category_aliases WHERE category_id = category.id) AS aliases,
        COUNT(DISTINCT product_category.product_id) AS count
      FROM categories category
      JOIN descendants ON descendants.ancestor_id = category.id
      JOIN product_categories product_category ON product_category.category_id = descendants.descendant_id
      GROUP BY category.id, category.name, category.parent_id, category.path
      ORDER BY category.path
    `)
    .all() as CategoryFacetRow[];
  const nodes = new Map<number, CatalogCategoryNode>();
  for (const row of rows) {
    nodes.set(row.id, {
      id: row.id,
      name: row.name,
      count: row.count,
      children: [],
      ...(row.aliases ? { aliases: row.aliases.split('|').sort() } : {}),
    });
  }

  const roots: CatalogCategoryNode[] = [];
  for (const row of rows) {
    const node = nodes.get(row.id);
    if (!node) continue;
    const parent = row.parent_id === null ? undefined : nodes.get(row.parent_id);
    if (parent) parent.children.push(node);
    else roots.push(node);
  }

  const uncategorized = db
    .prepare(`
      SELECT COUNT(*) AS count
      FROM products p
      WHERE NOT EXISTS (SELECT 1 FROM product_categories pc WHERE pc.product_id = p.id)
    `)
    .get() as { count: number };
  if (uncategorized.count > 0) {
    roots.push({
      id: 'uncategorized',
      name: 'Uncategorized',
      count: uncategorized.count,
      children: [],
    });
  }
  return roots;
}

function matchingVariantReferences(
  db: Database.Database,
  filters: CatalogFilters,
  productIds: readonly string[],
): CatalogVariantReference[] {
  if (productIds.length === 0) return [];
  const filter = variantPredicates(filters, 'v');
  const rows = db
    .prepare(`
      SELECT v.id, v.product_id
      FROM variants v
      WHERE v.product_id IN (${placeholders(productIds.length)})
        ${filter.clauses.map((clause) => `AND ${clause}`).join('\n        ')}
      ORDER BY v.product_id, v.position, v.id
    `)
    .all(...productIds, ...filter.values) as Array<{ id: string; product_id: string }>;

  return rows.map((row) => ({
    key: `${row.product_id}:${row.id}`,
    productId: row.product_id,
    variantId: row.id,
  }));
}

export function getCatalogProductsByIds(
  db: Database.Database,
  ids: readonly string[],
): CatalogProduct[] {
  return hydrateProducts(db, [...new Set(ids)]).products;
}

function groupByProduct(records: readonly DimensionRecord[]): Map<string, DimensionRecord[]> {
  const grouped = new Map<string, DimensionRecord[]>();
  for (const record of records) grouped.set(record.productId, [...(grouped.get(record.productId) ?? []), record]);
  return grouped;
}

export function getCatalogPage(
  db: Database.Database,
  filters: CatalogFilters,
  { includeVariants = true, workspaceId = null }: { includeVariants?: boolean; workspaceId?: string | null } = {},
): CatalogQueryResult {
  let productIds = matchingProductIds(db, filters);
  const records = groupByProduct(getDimensionRecords(db, productIds, workspaceId));
  const filtersWidth = filters.minWidthIn !== null || filters.maxWidthIn !== null;
  let variants = includeVariants || filtersWidth ? matchingVariantReferences(db, filters, productIds) : [];

  if (filtersWidth) {
    variants = variants.filter((reference) =>
      widthWithin(
        resolveDimensions(records.get(reference.productId) ?? [], reference.variantId).width.value,
        filters.minWidthIn,
        filters.maxWidthIn,
      ),
    );
    const kept = new Set(variants.map((reference) => reference.productId));
    productIds = productIds.filter((id) => kept.has(id));
  }

  const hydration = hydrateProducts(db, productIds);
  const meta = db.prepare("SELECT value FROM catalog_meta WHERE key = 'captured_at'").get() as
    | { value: string }
    | undefined;

  return {
    capturedAt: meta?.value ?? '',
    products: hydration.products,
    ...(includeVariants ? { variants } : {}),
    brands: getBrands(db),
    categoryTree: getCategoryTree(db),
    dimensions: Object.fromEntries(
      hydration.products.map((product) => [
        product.id,
        summarizeDimensions(
          records.get(product.id) ?? [],
          product.variants.map((variant) => variant.id),
        ),
      ]),
    ),
  };
}

export function getCatalogProduct(db: Database.Database, id: string): CatalogProduct | null {
  return hydrateProducts(db, [id]).products[0] ?? null;
}

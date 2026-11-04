import { existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Database from 'better-sqlite3';
import { CATALOG_PRODUCTS, STAGING_CATALOG_CAPTURED_AT } from '@/data/catalog';
import type { CatalogProduct } from '@/data/product-types';
import { CURATED_PRODUCT_DIMENSIONS } from '@/data/product-dimensions';
import { STAGING_PRODUCT_CATEGORY_IDS } from '@/data/staging-category-assignments';
import { STAGING_CATALOG_CATEGORIES } from '@/data/staging-categories';
import { STAGING_VARIANT_IMAGES } from '@/data/staging-variant-images';
import { runMigrations } from '@/lib/db/migrations';
import { type DimensionRecord, parseListedDimensions } from '@/lib/dimensions';

export interface SeedSummary {
  databasePath: string;
  products: number;
  variants: number;
  categories: number;
  tags: number;
  productImages: number;
  variantImages: number;
  ftsRows: number;
  dimensionRecords: number;
}

export interface DatabaseCheckResult extends SeedSummary {
  ok: boolean;
  integrityCheck: string[];
  foreignKeyViolations: unknown[];
  missingImagePaths: string[];
}

const projectDirectory = fileURLToPath(new URL('../../', import.meta.url));
const publicDirectory = path.join(projectDirectory, 'public');

function compareText(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0;
}

function normalizeTag(label: string): string {
  return label
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Sizes the snapshot states in titles and variant labels, as `listing` claims. */
export function listedDimensionRecords(products: readonly CatalogProduct[]): DimensionRecord[] {
  return products.flatMap((product) => {
    const claim = (variantId: string | null, text: string): DimensionRecord[] => {
      const values = parseListedDimensions(text);
      if (!values) return [];
      return [
        {
          productId: product.id,
          variantId,
          source: 'listing',
          sourceUrl: product.sourceUrl,
          note: values.depth === null ? `Lone size read as width from “${text}”.` : `Read from “${text}”.`,
          capturedAt: STAGING_CATALOG_CAPTURED_AT,
          ...values,
        },
      ];
    };
    return [
      ...claim(null, product.name),
      ...product.variants.flatMap((variant) => claim(variant.id, variant.label)),
    ];
  });
}

function removeDatabaseFiles(databasePath: string): void {
  for (const filePath of [databasePath, `${databasePath}-wal`, `${databasePath}-shm`, `${databasePath}-journal`]) {
    rmSync(filePath, { force: true });
  }
}

export function seedInterviewDatabase({ databasePath }: { databasePath: string }): SeedSummary {
  const resolvedDatabasePath = path.resolve(databasePath);
  mkdirSync(path.dirname(resolvedDatabasePath), { recursive: true });
  removeDatabaseFiles(resolvedDatabasePath);

  const db = new Database(resolvedDatabasePath);

  try {
    db.pragma('page_size = 4096');
    db.pragma('journal_mode = DELETE');
    db.pragma('synchronous = FULL');
    db.pragma('temp_store = MEMORY');
    db.pragma('foreign_keys = ON');
    db.pragma('auto_vacuum = NONE');
    runMigrations(db);

    const insertMeta = db.prepare('insert into catalog_meta (key, value) values (?, ?)');
    const insertCategory = db.prepare(`
      insert into categories (id, slug, name, parent_id, level, path, status, merged_into_id)
      values (@id, @slug, @name, @parentId, @level, @path, @status, @mergedIntoId)
    `);
    const insertAlias = db.prepare('insert into category_aliases (category_id, alias) values (?, ?)');
    const insertProduct = db.prepare(`
      insert into products (
        id, name, brand, product_type, source_category_label, source_url, description,
        availability_status, in_stock_variant_count, material, width_in, depth_in, height_in,
        lead_time_min_weeks, lead_time_max_weeks, margin_percent, price_confidence,
        availability_confidence, lead_time_confidence, margin_confidence
      ) values (
        @id, @name, @brand, @productType, @sourceCategoryLabel, @sourceUrl, @description,
        @availabilityStatus, @inStockVariantCount, @material, @widthIn, @depthIn, @heightIn,
        @leadTimeMinWeeks, @leadTimeMaxWeeks, @marginPercent, @priceConfidence,
        @availabilityConfidence, @leadTimeConfidence, @marginConfidence
      )
    `);
    const insertProductCategory = db.prepare(
      'insert into product_categories (product_id, category_id, position) values (?, ?, ?)',
    );
    const insertTag = db.prepare('insert into tags (id, slug, label) values (?, ?, ?)');
    const insertProductTag = db.prepare(
      'insert into product_tags (product_id, tag_id) values (?, ?)',
    );
    const insertVariant = db.prepare(`
      insert into variants (id, product_id, label, price_cents, available, position)
      values (?, ?, ?, ?, ?, ?)
    `);
    const insertImage = db.prepare(`
      insert into product_images (
        id, product_id, variant_id, local_path, alt_text, is_primary, position
      ) values (?, ?, ?, ?, ?, ?, ?)
    `);
    const insertDimension = db.prepare(`
      insert into product_dimensions (
        product_id, variant_id, width_in, depth_in, height_in, source, source_url, note, captured_at
      ) values (
        @productId, @variantId, @width, @depth, @height, @source, @sourceUrl, @note, @capturedAt
      )
    `);
    const insertSearch = db.prepare(`
      insert into catalog_search (product_id, name, brand, product_type, category_names, tag_names)
      values (?, ?, ?, ?, ?, ?)
    `);

    const sortedCategories = [...STAGING_CATALOG_CATEGORIES].sort(
      (left, right) => left.level - right.level || left.id - right.id,
    );
    const sortedProducts = [...CATALOG_PRODUCTS].sort((left, right) => compareText(left.id, right.id));
    const tagLabels = [...new Set(CATALOG_PRODUCTS.flatMap((product) => product.tags))].sort((left, right) =>
      compareText(normalizeTag(left), normalizeTag(right)),
    );
    const tags = tagLabels.map((label, index) => ({ id: index + 1, label, slug: normalizeTag(label) }));
    const tagIds = new Map(tags.map((tag) => [tag.label, tag.id]));
    const categoryNames = new Map(STAGING_CATALOG_CATEGORIES.map((category) => [category.id, category.name]));
    const variantsById = new Map(
      CATALOG_PRODUCTS.flatMap((product) =>
        product.variants.map((variant, position) => [variant.id, { productId: product.id, position }] as const),
      ),
    );

    const dimensionRecords = [
      ...listedDimensionRecords(sortedProducts),
      ...CURATED_PRODUCT_DIMENSIONS,
    ];

    let nextImageId = 1;
    const importSnapshot = db.transaction(() => {
      db.pragma('defer_foreign_keys = ON');
      insertMeta.run('captured_at', STAGING_CATALOG_CAPTURED_AT);
      insertMeta.run('source', 'Checked-in staging catalog snapshot');

      for (const category of sortedCategories) {
        insertCategory.run(category);
        for (const alias of [...category.aliases].sort()) insertAlias.run(category.id, alias);
      }

      for (const tag of tags) insertTag.run(tag.id, tag.slug, tag.label);

      for (const product of sortedProducts) {
        insertProduct.run({
          id: product.id,
          name: product.name,
          brand: product.brand,
          productType: product.productType,
          sourceCategoryLabel: product.category,
          sourceUrl: product.sourceUrl,
          description: product.description,
          availabilityStatus: product.availability,
          inStockVariantCount: product.variants.filter((variant) => variant.available).length,
          material: product.material,
          widthIn: product.dimensionsIn.width,
          depthIn: product.dimensionsIn.depth,
          heightIn: product.dimensionsIn.height,
          leadTimeMinWeeks: product.leadTimeWeeks?.min ?? null,
          leadTimeMaxWeeks: product.leadTimeWeeks?.max ?? null,
          marginPercent: product.margin?.percent ?? null,
          priceConfidence: product.provenance.price,
          availabilityConfidence: product.provenance.availability,
          leadTimeConfidence: product.provenance.leadTime,
          marginConfidence: product.provenance.margin,
        });

        const categoryId = STAGING_PRODUCT_CATEGORY_IDS[product.id];
        if (categoryId !== null && categoryId !== undefined) {
          insertProductCategory.run(product.id, categoryId, 0);
        }

        for (const tagLabel of [...product.tags].sort(compareText)) {
          insertProductTag.run(product.id, tagIds.get(tagLabel));
        }

        product.variants.forEach((variant, position) => {
          insertVariant.run(
            variant.id,
            product.id,
            variant.label,
            variant.priceCents,
            variant.available ? 1 : 0,
            position,
          );
        });

        product.images.forEach((image, position) => {
          insertImage.run(nextImageId++, product.id, null, image.src, image.alt, position === 0 ? 1 : 0, position);
        });

        const assignedCategoryName = categoryId == null ? '' : (categoryNames.get(categoryId) ?? '');
        insertSearch.run(
          product.id,
          product.name,
          product.brand,
          product.productType,
          assignedCategoryName,
          product.tags.join(' '),
        );
      }

      for (const [variantId, image] of Object.entries(STAGING_VARIANT_IMAGES).sort(([left], [right]) =>
        compareText(left, right),
      )) {
        const variant = variantsById.get(variantId);
        if (!variant) throw new Error(`Variant image references unknown variant ${variantId}.`);
        insertImage.run(
          nextImageId++,
          variant.productId,
          variantId,
          image.src,
          image.alt,
          0,
          variant.position,
        );
      }

      for (const record of dimensionRecords) insertDimension.run(record);
    });

    importSnapshot();
    db.exec('VACUUM');

    return {
      databasePath: resolvedDatabasePath,
      products: CATALOG_PRODUCTS.length,
      variants: variantsById.size,
      categories: STAGING_CATALOG_CATEGORIES.length,
      tags: tags.length,
      productImages: CATALOG_PRODUCTS.reduce((count, product) => count + product.images.length, 0),
      variantImages: Object.keys(STAGING_VARIANT_IMAGES).length,
      ftsRows: CATALOG_PRODUCTS.length,
      dimensionRecords: dimensionRecords.length,
    };
  } finally {
    db.close();
    for (const suffix of ['-wal', '-shm', '-journal']) rmSync(`${resolvedDatabasePath}${suffix}`, { force: true });
  }
}

function dimensionRecordCount(): number {
  return listedDimensionRecords(CATALOG_PRODUCTS).length + CURATED_PRODUCT_DIMENSIONS.length;
}

function count(db: Database.Database, table: string, where = ''): number {
  return (db.prepare(`select count(*) as count from ${table} ${where}`).get() as { count: number }).count;
}

export function checkInterviewDatabase(databasePath: string): DatabaseCheckResult {
  const resolvedDatabasePath = path.resolve(databasePath);
  const db = new Database(resolvedDatabasePath, { readonly: true, fileMustExist: true });

  try {
    db.pragma('foreign_keys = ON');
    const integrityCheck = (db.pragma('integrity_check') as Array<{ integrity_check: string }>).map(
      (row) => row.integrity_check,
    );
    const foreignKeyViolations = db.pragma('foreign_key_check') as unknown[];
    const localPaths = db.prepare('select distinct local_path from product_images order by local_path').all() as Array<{
      local_path: string;
    }>;
    const missingImagePaths = localPaths
      .map((row) => row.local_path)
      .filter((localPath) => {
        if (!localPath.startsWith('/products/')) return true;
        const diskPath = path.resolve(publicDirectory, `.${localPath}`);
        return !diskPath.startsWith(`${publicDirectory}${path.sep}`) || !existsSync(diskPath);
      });
    const result: DatabaseCheckResult = {
      databasePath: resolvedDatabasePath,
      products: count(db, 'products'),
      variants: count(db, 'variants'),
      categories: count(db, 'categories'),
      tags: count(db, 'tags'),
      productImages: count(db, 'product_images', 'where variant_id is null'),
      variantImages: count(db, 'product_images', 'where variant_id is not null'),
      ftsRows: count(db, 'catalog_search'),
      dimensionRecords: count(db, 'product_dimensions'),
      integrityCheck,
      foreignKeyViolations,
      missingImagePaths,
      ok: false,
    };

    result.ok =
      result.products === 280 &&
      result.variants === 2165 &&
      result.categories === 198 &&
      result.tags === 6 &&
      result.productImages === 280 &&
      result.variantImages === 1862 &&
      result.ftsRows === 280 &&
      result.dimensionRecords === dimensionRecordCount() &&
      integrityCheck.length === 1 &&
      integrityCheck[0] === 'ok' &&
      foreignKeyViolations.length === 0 &&
      missingImagePaths.length === 0;

    return result;
  } finally {
    db.close();
  }
}

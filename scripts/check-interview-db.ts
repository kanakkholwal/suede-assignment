import { seedDatabasePath } from '@/lib/db/paths';
import { checkInterviewDatabase } from '@/lib/db/seed';

const result = checkInterviewDatabase(seedDatabasePath);

console.log(`Products: ${result.products.toLocaleString('en-US')}`);
console.log(`Variants: ${result.variants.toLocaleString('en-US')}`);
console.log(`Categories: ${result.categories.toLocaleString('en-US')}`);
console.log(`Variant images: ${result.variantImages.toLocaleString('en-US')}`);
console.log(`Integrity check: ${result.integrityCheck.join(', ')}`);
console.log(`Foreign key check: ${result.foreignKeyViolations.length === 0 ? 'ok' : 'failed'}`);
console.log(`Image paths: ${result.missingImagePaths.length === 0 ? 'ok' : 'failed'}`);
console.log(`FTS rows: ${result.ftsRows.toLocaleString('en-US')}`);
console.log(`Dimension claims: ${result.dimensionRecords.toLocaleString('en-US')}`);

if (!result.ok) {
  console.error('Database validation failed. Run pnpm db:reset to rebuild the catalog template.');
  process.exitCode = 1;
}

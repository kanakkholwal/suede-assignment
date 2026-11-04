import { resetRuntimeDatabase, seedDatabasePath } from '@/lib/db/paths';
import { seedInterviewDatabase } from '@/lib/db/seed';

const summary = seedInterviewDatabase({ databasePath: seedDatabasePath });

if (process.argv.includes('--reset-runtime')) resetRuntimeDatabase();

console.log(`Seeded ${summary.databasePath}`);
console.log(`Products: ${summary.products.toLocaleString('en-US')}`);
console.log(`Variants: ${summary.variants.toLocaleString('en-US')}`);
console.log(`Categories: ${summary.categories.toLocaleString('en-US')}`);
console.log(`Variant images: ${summary.variantImages.toLocaleString('en-US')}`);
console.log(`FTS rows: ${summary.ftsRows.toLocaleString('en-US')}`);
console.log(`Dimension claims: ${summary.dimensionRecords.toLocaleString('en-US')}`);

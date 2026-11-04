import { NextResponse } from 'next/server';

import { getCatalogProduct } from '@/lib/db/catalog-repository';
import { getDatabase } from '@/lib/db/connection';

export const runtime = 'nodejs';

const databaseUnavailableMessage =
  'The local catalog database is unavailable. Run pnpm db:reset to restore it.';

interface CatalogDetailContext {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, context: CatalogDetailContext): Promise<Response> {
  try {
    const { id } = await context.params;
    const product = getCatalogProduct(getDatabase(), id);
    if (!product) {
      return NextResponse.json({ error: `Product "${id}" was not found.` }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch {
    return NextResponse.json({ error: databaseUnavailableMessage }, { status: 503 });
  }
}

import { NextResponse } from 'next/server';

import { CatalogQueryInputError, parseCatalogFilters, parseIncludeVariants } from '@/lib/catalog-contract';
import { getCatalogPage } from '@/lib/db/catalog-repository';
import { getDatabase } from '@/lib/db/connection';
import { readWorkspaceId } from '@/lib/db/workspace';

export const runtime = 'nodejs';

const databaseUnavailableMessage =
  'The local catalog database is unavailable. Run pnpm db:reset to restore it.';

export async function GET(request: Request): Promise<Response> {
  try {
    const params = new URL(request.url).searchParams;
    const filters = parseCatalogFilters(params);
    const includeVariants = parseIncludeVariants(params);
    const workspaceId = await readWorkspaceId();
    return NextResponse.json(getCatalogPage(getDatabase(), filters, { includeVariants, workspaceId }));
  } catch (error) {
    if (error instanceof CatalogQueryInputError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: databaseUnavailableMessage }, { status: 503 });
  }
}

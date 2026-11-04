import { NextResponse } from 'next/server';

import { getDatabase } from '@/lib/db/connection';
import {
  applyLibraryMutation,
  getLibrarySnapshot,
  LibraryRepositoryError,
} from '@/lib/db/library-repository';
import {
  resolveWorkspace,
  WORKSPACE_COOKIE_NAME,
  workspaceCookieOptions,
  type WorkspaceResolution,
} from '@/lib/db/workspace';
import type { LibraryMutation } from '@/lib/library-state';

export const runtime = 'nodejs';

const databaseUnavailableMessage =
  'The local catalog database is unavailable. Run pnpm db:reset to restore it.';

class LibraryMutationInputError extends Error {}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function hasExactKeys(value: Record<string, unknown>, keys: readonly string[]): boolean {
  const actual = Object.keys(value).sort();
  const expected = [...keys].sort();
  return actual.length === expected.length && actual.every((key, index) => key === expected[index]);
}

function requireString(value: Record<string, unknown>, key: string): string {
  const field = value[key];
  if (typeof field !== 'string') {
    throw new LibraryMutationInputError(`${key} must be a string.`);
  }
  return field;
}

function invalidMutation(): never {
  throw new LibraryMutationInputError('The request body is not a valid Library mutation.');
}

function parseLibraryMutation(value: unknown): LibraryMutation {
  if (!isRecord(value) || typeof value.operation !== 'string') return invalidMutation();

  switch (value.operation) {
    case 'toggleSaved':
      if (!hasExactKeys(value, ['operation', 'productId'])) return invalidMutation();
      return { operation: value.operation, productId: requireString(value, 'productId') };
    case 'createCollection': {
      const keys = Object.keys(value);
      const validKeys =
        keys.length === 2
          ? hasExactKeys(value, ['operation', 'name'])
          : hasExactKeys(value, ['operation', 'name', 'productId']);
      if (!validKeys) return invalidMutation();
      const mutation: LibraryMutation = {
        operation: value.operation,
        name: requireString(value, 'name'),
      };
      if ('productId' in value) mutation.productId = requireString(value, 'productId');
      return mutation;
    }
    case 'addToCollection':
    case 'removeFromCollection':
      if (!hasExactKeys(value, ['operation', 'collectionId', 'productId'])) {
        return invalidMutation();
      }
      return {
        operation: value.operation,
        collectionId: requireString(value, 'collectionId'),
        productId: requireString(value, 'productId'),
      };
    case 'renameCollection':
      if (!hasExactKeys(value, ['operation', 'collectionId', 'name'])) return invalidMutation();
      return {
        operation: value.operation,
        collectionId: requireString(value, 'collectionId'),
        name: requireString(value, 'name'),
      };
    case 'deleteCollection':
      if (!hasExactKeys(value, ['operation', 'collectionId'])) return invalidMutation();
      return {
        operation: value.operation,
        collectionId: requireString(value, 'collectionId'),
      };
    default:
      return invalidMutation();
  }
}

function withWorkspaceCookie(response: NextResponse, workspace: WorkspaceResolution): NextResponse {
  if (workspace.setCookie) {
    response.cookies.set(WORKSPACE_COOKIE_NAME, workspace.workspaceId, workspaceCookieOptions());
  }
  return response;
}

function errorResponse(error: unknown): NextResponse {
  if (error instanceof LibraryMutationInputError || error instanceof SyntaxError) {
    return NextResponse.json(
      { error: error instanceof SyntaxError ? 'The request body must be valid JSON.' : error.message },
      { status: 400 },
    );
  }
  if (error instanceof LibraryRepositoryError) {
    return NextResponse.json({ error: error.message }, { status: error.status });
  }
  return NextResponse.json({ error: databaseUnavailableMessage }, { status: 503 });
}

export async function GET(_request: Request): Promise<NextResponse> {
  let workspace: WorkspaceResolution | undefined;
  try {
    workspace = await resolveWorkspace();
    const snapshot = getLibrarySnapshot(getDatabase(), workspace.workspaceId);
    return withWorkspaceCookie(NextResponse.json(snapshot), workspace);
  } catch (error) {
    const response = errorResponse(error);
    return workspace ? withWorkspaceCookie(response, workspace) : response;
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  let mutation: LibraryMutation;
  try {
    mutation = parseLibraryMutation(await request.json());
  } catch (error) {
    return errorResponse(error);
  }

  let workspace: WorkspaceResolution | undefined;
  try {
    workspace = await resolveWorkspace();
    const snapshot = applyLibraryMutation(getDatabase(), workspace.workspaceId, mutation);
    return withWorkspaceCookie(NextResponse.json(snapshot), workspace);
  } catch (error) {
    const response = errorResponse(error);
    return workspace ? withWorkspaceCookie(response, workspace) : response;
  }
}

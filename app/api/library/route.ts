import {
  hasExactKeys,
  isRecord,
  RequestInputError,
  requireString,
  respondForWorkspace,
  respondToMutation,
} from '@/lib/api/route-helpers';
import { getDatabase } from '@/lib/db/connection';
import { applyLibraryMutation, getLibrarySnapshot } from '@/lib/db/library-repository';
import type { LibraryMutation } from '@/lib/library-state';

export const runtime = 'nodejs';

function invalidMutation(): never {
  throw new RequestInputError('The request body is not a valid Library mutation.');
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

export async function GET(_request: Request) {
  return respondForWorkspace((workspaceId) => getLibrarySnapshot(getDatabase(), workspaceId));
}

export async function POST(request: Request) {
  return respondToMutation(request, parseLibraryMutation, (workspaceId, mutation) =>
    applyLibraryMutation(getDatabase(), workspaceId, mutation),
  );
}

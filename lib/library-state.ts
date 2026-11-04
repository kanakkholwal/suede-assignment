import type { CatalogProduct } from '@/data/product-types';

export interface LibraryCollection {
  id: string;
  name: string;
  productIds: string[];
}

export interface LibraryState {
  version: 1;
  savedIds: string[];
  collections: LibraryCollection[];
}

export interface LibrarySnapshot {
  state: LibraryState;
  products: CatalogProduct[];
}

export type LibraryMutation =
  | { operation: 'toggleSaved'; productId: string }
  | { operation: 'createCollection'; name: string; productId?: string }
  | { operation: 'addToCollection'; collectionId: string; productId: string }
  | { operation: 'removeFromCollection'; collectionId: string; productId: string }
  | { operation: 'renameCollection'; collectionId: string; name: string }
  | { operation: 'deleteCollection'; collectionId: string };

export function emptyLibraryState(): LibraryState {
  return { version: 1, savedIds: [], collections: [] };
}

import type { CatalogProduct } from '@/data/product-types';

export type PieceKind = 'rug' | 'sofa' | 'chair' | 'coffee-table' | 'side-table' | 'storage' | 'ottoman' | 'other';

const KIND_PATTERNS: ReadonlyArray<[PieceKind, RegExp]> = [
  ['rug', /\brug|carpet/i],
  ['coffee-table', /coffee table|cocktail table/i],
  ['side-table', /side table|end table|accent table|nightstand/i],
  ['sofa', /sofa|loveseat|sectional|settee|daybed/i],
  ['chair', /chair|recliner|chaise/i],
  ['ottoman', /ottoman|pouf|footstool|bench|stool/i],
  ['storage', /console|media|cabinet|dresser|bookcase|shel(f|v)|sideboard|credenza/i],
];

/** Read from the staging category first, then the product type and name. */
export function pieceKind(product: Pick<CatalogProduct, 'category' | 'productType' | 'name'>): PieceKind {
  for (const text of [product.category, product.productType, product.name]) {
    const match = KIND_PATTERNS.find(([, pattern]) => pattern.test(text));
    if (match) return match[0];
  }
  return 'other';
}

/** Pieces people sit on, whose front legs belong on a rug. */
export function isSeating(kind: PieceKind): boolean {
  return kind === 'sofa' || kind === 'chair';
}

/** Big enough that a narrow gap next to it is a walkway problem, not intended adjacency. */
export function blocksWalkways(kind: PieceKind): boolean {
  return kind === 'sofa' || kind === 'chair' || kind === 'storage';
}

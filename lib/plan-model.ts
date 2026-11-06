import type { CatalogProduct } from '@/data/product-types';
import { footprintConfidence, type FootprintSource, hasFootprint } from '@/lib/dimensions';
import type { PlannedPiece } from '@/lib/fit-rules';
import { footprintRect, type Rect, wallDistances } from '@/lib/geometry';
import { type PieceKind, pieceKind } from '@/lib/piece-kind';
import type { Room, RoomItem, RoomSnapshot, Rotation, Wall } from '@/lib/room-state';
import { TYPICAL_FOOTPRINT } from '@/lib/typical-size';

export interface Placement {
  xIn: number;
  yIn: number;
  rotationDeg: Rotation;
}

export interface PlanPiece extends PlannedPiece {
  item: RoomItem;
  product: CatalogProduct;
  widthIn: number;
  depthIn: number;
}

/** Drag snaps to half inches, and to a wall when within this distance of it. */
export const SNAP_STEP_IN = 0.5;
export const WALL_SNAP_IN = 3;

export function shortName(product: Pick<CatalogProduct, 'name'>): string {
  return product.name.replace(/^The\s+/i, '').replace(/\s+in\s+.+$/i, '').replace(/\s+-\s+.+$/, '');
}

/** The size to draw: the piece's own where known, a typical size for its kind where not. */
export function footprintOf(item: Pick<RoomItem, 'dimensions'>, product: Pick<CatalogProduct, 'category' | 'productType' | 'name'>): { widthIn: number; depthIn: number; source: FootprintSource } {
  const { width, depth } = item.dimensions;
  if (hasFootprint(item.dimensions)) return { widthIn: width.value as number, depthIn: depth.value as number, source: footprintConfidence(item.dimensions) };
  const typical = TYPICAL_FOOTPRINT[pieceKind(product)];
  return { widthIn: width.value ?? typical.width, depthIn: depth.value ?? typical.depth, source: 'typical' };
}

/** Placed pieces; `overrides` carries positions mid-drag. */
export function planPieces(snapshot: RoomSnapshot, overrides: Readonly<Record<string, Placement>> = {}): PlanPiece[] {
  const products = new Map(snapshot.products.map((product) => [product.id, product]));
  return snapshot.items.flatMap((item) => {
    const product = products.get(item.productId);
    const placement = overrides[item.id] ?? (item.xIn === null || item.yIn === null ? null : { xIn: item.xIn, yIn: item.yIn, rotationDeg: item.rotationDeg });
    if (!product || !placement) return [];
    const { widthIn, depthIn, source } = footprintOf(item, product);
    return [
      {
        id: item.id,
        name: shortName(product),
        kind: pieceKind(product),
        rect: footprintRect(placement.xIn, placement.yIn, widthIn, depthIn, placement.rotationDeg),
        rotation: placement.rotationDeg,
        heightIn: item.dimensions.height.value,
        footprintSource: source,
        item,
        product,
        widthIn,
        depthIn,
      },
    ];
  });
}

/** A first position that reads as a plausible layout, so warnings start meaningful. */
export function defaultPlacement(room: Room, kind: PieceKind, widthIn: number, depthIn: number): Placement {
  const midX = room.lengthIn / 2;
  const midY = room.widthIn / 2;
  switch (kind) {
    case 'sofa':
      return { xIn: midX, yIn: room.widthIn - depthIn / 2, rotationDeg: 180 };
    case 'chair':
      return { xIn: depthIn / 2, yIn: midY, rotationDeg: 270 };
    case 'storage':
      return { xIn: room.lengthIn - depthIn / 2, yIn: midY, rotationDeg: 90 };
    case 'side-table':
      return { xIn: widthIn / 2 + 6, yIn: room.widthIn - depthIn / 2 - 6, rotationDeg: 0 };
    default:
      return { xIn: midX, yIn: midY, rotationDeg: 0 };
  }
}

const snap = (value: number) => Math.round(value / SNAP_STEP_IN) * SNAP_STEP_IN;

/** Half-inch grid, then flush to any wall the footprint is within WALL_SNAP_IN of. */
export function snapPlacement(room: Room, placement: Placement, widthIn: number, depthIn: number): Placement {
  const rect: Rect = footprintRect(snap(placement.xIn), snap(placement.yIn), widthIn, depthIn, placement.rotationDeg);
  const distances = wallDistances(room, rect);
  const shift = (wall: Wall) => Math.abs(distances[wall]) <= WALL_SNAP_IN;
  let dx = 0;
  let dy = 0;
  if (shift('west')) dx = -rect.x0;
  else if (shift('east')) dx = room.lengthIn - rect.x1;
  if (shift('north')) dy = -rect.y0;
  else if (shift('south')) dy = room.widthIn - rect.y1;
  return { xIn: snap(placement.xIn) + dx, yIn: snap(placement.yIn) + dy, rotationDeg: placement.rotationDeg };
}

export function rotateClockwise(rotation: Rotation): Rotation {
  return ((rotation + 90) % 360) as Rotation;
}

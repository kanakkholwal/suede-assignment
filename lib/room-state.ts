import type { CatalogProduct } from '@/data/product-types';
import type { RoomPresetId } from '@/data/room-presets';
import type { DimensionSource, DimensionValues, ResolvedDimensions } from '@/lib/dimensions';

export type MeasurementStatus = 'stated' | 'assumed' | 'confirmed';
export type Wall = 'north' | 'east' | 'south' | 'west';
export type RoomFeatureKind = 'window' | 'door' | 'radiator';
export type Rotation = 0 | 90 | 180 | 270;

export const ROTATIONS: readonly Rotation[] = [0, 90, 180, 270];
export const WALLS: readonly Wall[] = ['north', 'east', 'south', 'west'];

/**
 * Plan coordinates are inches from the north-west corner: x runs east along the north wall
 * (`lengthIn`), y runs south along the west wall (`widthIn`).
 */
export interface Room {
  id: string;
  /** The preset this room came from (one per workspace), or `custom` for rooms the user created (many). */
  preset: RoomPresetId | 'custom';
  name: string;
  lengthIn: number;
  widthIn: number;
  ceilingIn: number | null;
  dimensionsStatus: MeasurementStatus;
  clientMessage: string;
  note: string;
}

/** `offsetIn` runs along the wall from its west end (north/south walls) or north end (east/west). */
export interface RoomFeature {
  id: string;
  kind: RoomFeatureKind;
  wall: Wall;
  offsetIn: number;
  widthIn: number;
  depthIn: number | null;
  heightIn: number | null;
  sillIn: number | null;
  hinge: 'start' | 'end' | null;
  swing: 'in' | 'out' | null;
  status: MeasurementStatus;
  clientSaid: string;
  assumption: string;
}

/** Centre point in plan inches; null while shortlisted but unplaced. Rotation 0 faces south. */
export interface RoomItem {
  id: string;
  productId: string;
  variantId: string | null;
  xIn: number | null;
  yIn: number | null;
  rotationDeg: Rotation;
  dimensions: ResolvedDimensions;
  /** Set only when this piece has no size: the same frame from the same brand in another finish that does. */
  sameFrame?: SameFrameSize | null;
}

export interface SameFrameSize {
  productId: string;
  name: string;
  values: DimensionValues;
  source: DimensionSource;
}

export interface RoomSnapshot {
  room: Room;
  features: RoomFeature[];
  items: RoomItem[];
  products: CatalogProduct[];
}

export type RoomFeaturePatch = Partial<
  Pick<RoomFeature, 'wall' | 'offsetIn' | 'widthIn' | 'depthIn' | 'heightIn' | 'sillIn' | 'hinge' | 'swing'>
>;

export type RoomMutation =
  | { operation: 'addItem'; productId: string; variantId: string | null }
  | { operation: 'removeItem'; itemId: string }
  | { operation: 'selectVariant'; itemId: string; variantId: string | null }
  | { operation: 'placeItem'; itemId: string; xIn: number; yIn: number; rotationDeg: Rotation }
  | { operation: 'unplaceItem'; itemId: string }
  | { operation: 'setDimensions'; productId: string; variantId: string | null; values: DimensionValues; note: string }
  | { operation: 'clearDimensions'; productId: string; variantId: string | null }
  | {
      operation: 'updateRoom';
      lengthIn: number;
      widthIn: number;
      ceilingIn: number | null;
      status: MeasurementStatus;
    }
  | { operation: 'updateFeature'; featureId: string; patch: RoomFeaturePatch; status: MeasurementStatus }
  | { operation: 'addFeature'; kind: RoomFeatureKind; patch: Required<RoomFeaturePatch>; status: MeasurementStatus }
  | { operation: 'removeFeature'; featureId: string };

/** A room the user made, as listed in the room switcher. */
export interface RoomSummary {
  id: string;
  name: string;
  lengthIn: number;
  widthIn: number;
  features: RoomFeature[];
}

export interface NewRoom {
  name: string;
  lengthIn: number;
  widthIn: number;
  ceilingIn: number | null;
  status: MeasurementStatus;
}

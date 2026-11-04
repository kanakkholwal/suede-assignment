export type DataConfidence = 'verified' | 'unknown' | 'exercise';

export type Availability = 'in_stock' | 'backorder' | 'unknown';

// Categories come from the static staging snapshot. Keep the raw category
// label rather than forcing it into a smaller hand-maintained taxonomy.
export type ProductCategory = string;

export type RoomType = 'living-room' | 'dining-room' | 'bedroom' | 'entry' | 'office';

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductVariant {
  id: string;
  label: string;
  priceCents: number;
  available: boolean;
  image?: ProductImage;
}

export interface ProductProvenance {
  price: DataConfidence;
  availability: DataConfidence;
  leadTime: DataConfidence;
  margin: DataConfidence;
}

export interface CatalogProduct {
  id: string;
  name: string;
  brand: string;
  productType: string;
  category: ProductCategory;
  // The raw staging snapshot stores the category assignment in a compact
  // sidecar so the catalog payload remains readable. `null` is an explicit
  // unclassified product, not an inferred category.
  categoryId: number | null;
  roomTypes: readonly RoomType[];
  tags: readonly string[];
  sourceUrl: string;
  description: string;
  material: string | null;
  dimensionsIn: {
    width: number | null;
    depth: number | null;
    height: number | null;
  };
  images: readonly ProductImage[];
  variants: readonly ProductVariant[];
  availability: Availability;
  leadTimeWeeks: { min: number; max: number } | null;
  margin: { percent: number; confidence: DataConfidence } | null;
  provenance: ProductProvenance;
}

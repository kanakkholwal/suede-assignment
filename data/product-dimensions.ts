import type { DimensionRecord } from '@/lib/dimensions';

const CAPTURED_AT = '2026-11-04';

type CuratedRecord = Omit<DimensionRecord, 'capturedAt'>;

const ELEVATE_86 = 'aadc2cf3-f954-4418-a372-f5863c2b8b0f';
const ELEVATE_96 = '973b652f-e5ba-4929-96d3-669e84d0ef70';
const ANTWERP_BONE = '7a71f46f-69bf-4cb9-8c0b-c203c7ac5751';
const KYOTO_NATURAL = '09d254df-091a-4bec-82dc-f6301632a9d3';
const BACANA_ARMCHAIR_HEMP = 'b7745558-4824-44de-a913-71704b3ff5ab';
const MILAN_MEDIA_CONSOLE = '955c5d36-b659-41fb-947c-dc4ef86660b2';
const PAPA_TEDDY_MOCHA = 'e9c50038-6c9e-4d7d-985d-4eacfdfec9a9';
const VALLEY_SIDE_TABLE_OAK = 'a071f019-90c7-4f32-b814-708d6cb6cd10';

const verified = (
  productId: string,
  url: string,
  values: Pick<CuratedRecord, 'width' | 'depth' | 'height'>,
  note: string,
  variantId: string | null = null,
): CuratedRecord => ({ productId, variantId, source: 'verified', sourceUrl: url, note, ...values });

/**
 * Hand-checked against public brand pages on CAPTURED_AT. Sizes that titles and variant
 * labels state are derived by `parseListedDimensions` during seeding instead.
 */
const CURATED: readonly CuratedRecord[] = [
  verified(
    ELEVATE_86,
    'https://sabai.design/products/the-elevate-86-sofa-in-recycled-velvet',
    { width: 86.5, depth: 38.25, height: 26 },
    'Brand lists L 86.5″, half an inch more than the name. Back pillows reach 30″.',
  ),
  verified(
    ANTWERP_BONE,
    'https://houseofleon.com/products/antwerp-sofa-bone',
    { width: null, depth: 40, height: 33 },
    'Depth and height are shared by all three widths.',
  ),
  ...(
    [
      ['dd083dbd-b950-4c5d-8b95-15d546771481', 72],
      ['cddcd58d-4bb5-4949-9aab-e3c167701723', 96],
      ['d98538f7-4b87-4d0d-8001-a6c0852d3a0e', 120],
    ] as const
  ).map(([variantId, width]) =>
    verified(
      ANTWERP_BONE,
      'https://houseofleon.com/products/antwerp-sofa-bone',
      { width, depth: null, height: null },
      'Width per size option.',
      variantId,
    ),
  ),
  verified(
    KYOTO_NATURAL,
    'https://houseofleon.com/products/kyoto-coffee-table-natural',
    { width: 50, depth: 21, height: 13 },
    'Short size.',
    'e2385420-3936-47fc-bc09-80ddcba5904d',
  ),
  verified(
    KYOTO_NATURAL,
    'https://houseofleon.com/products/kyoto-coffee-table-natural',
    { width: 60, depth: 27.5, height: 13 },
    'Long size.',
    '3541efbe-3483-44ab-bb3c-8afc972a7c79',
  ),
  verified(
    BACANA_ARMCHAIR_HEMP,
    'https://sabai.design/products/the-bacana-armchair-in-hemp',
    { width: 37, depth: 30.25, height: 30.5 },
    'Brand lists overall H 30.5″ × L 37″ × D 30.25″.',
  ),
  verified(
    MILAN_MEDIA_CONSOLE,
    'https://houseofleon.com/products/milan-media-console',
    { width: 70, depth: 18, height: 18.5 },
    'Same frame for all three finishes.',
  ),
  verified(
    PAPA_TEDDY_MOCHA,
    'https://houseofleon.com/products/papa-teddy-chair-mocha-boucle',
    { width: 38, depth: 34, height: 34 },
    'Fixed and swivel bases share the listed size.',
  ),
  {
    productId: ELEVATE_96,
    variantId: null,
    source: 'synthetic',
    sourceUrl: null,
    note: 'Brand page unavailable. Depth and height copied from the verified Elevate 86″; confirm before ordering.',
    width: null,
    depth: 38.25,
    height: 26,
  },
  {
    productId: VALLEY_SIDE_TABLE_OAK,
    variantId: null,
    source: 'synthetic',
    sourceUrl: null,
    note: 'No size published. Typical side-table size used as a placeholder.',
    width: 18,
    depth: 18,
    height: 22,
  },
];

export const CURATED_PRODUCT_DIMENSIONS: readonly DimensionRecord[] = CURATED.map((record) => ({
  ...record,
  capturedAt: CAPTURED_AT,
}));

// @vitest-environment node
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { type BriefVocabulary, describeFilters, parseBrief, removeFilterChip } from '@/lib/brief';
import { emptyCatalogFilters } from '@/lib/catalog-contract';
import { getCatalogPage } from '@/lib/db/catalog-repository';
import { createSeededDatabase, type SeededDatabase } from '@/tests/seeded-database';

let seeded: SeededDatabase;
let vocabulary: BriefVocabulary;

beforeAll(() => {
  seeded = createSeededDatabase('brief');
  const page = getCatalogPage(seeded.db, emptyCatalogFilters, { includeVariants: false });
  vocabulary = { categories: page.categoryTree, brands: page.brands };
});

afterAll(() => seeded.dispose());

const SOFA = 10;
const LOVESEAT = 22;
const COFFEE_TABLE = 41;
const SIDE_TABLE = 42;

describe('parseBrief', () => {
  it('reads the D-01 brief and keeps what it cannot filter as soft terms', () => {
    const { filters, softTerms } = parseBrief(
      'warm, durable family room sofa under six thousand, 90 inches, in stock',
      vocabulary,
    );
    expect(filters).toMatchObject({
      category: SOFA,
      maxPriceCents: 600_000,
      maxWidthIn: 90,
      minWidthIn: null,
      inStockOnly: true,
    });
    expect(softTerms).toEqual(['warm', 'durable', 'family room']);
  });

  it.each([
    ['sofa around 84 to 96 inches', { minWidthIn: 84, maxWidthIn: 96 }],
    ['sofa 84-96" wide', { minWidthIn: 84, maxWidthIn: 96 }],
    ['rug up to 7.5 ft', { maxWidthIn: 90 }],
    ['console at least 60 in', { minWidthIn: 60 }],
  ])('reads sizes in %j', (text, expected) => {
    expect(parseBrief(text, vocabulary).filters).toMatchObject(expected);
  });

  it.each([
    ['chair $2-4k', { minPriceCents: 200_000, maxPriceCents: 400_000 }],
    ['chair between 700 and 1500', { minPriceCents: 70_000, maxPriceCents: 150_000 }],
    ['chair under $1,500', { maxPriceCents: 150_000 }],
    ['chair budget 4000', { maxPriceCents: 400_000 }],
    ['chair over $700', { minPriceCents: 70_000 }],
  ])('reads prices in %j', (text, expected) => {
    expect(parseBrief(text, vocabulary).filters).toMatchObject(expected);
  });

  it('does not read a unitless small number as a price or a size', () => {
    const { filters, softTerms } = parseBrief('sofa that seats under 4', vocabulary);
    expect(filters).toMatchObject({ maxPriceCents: null, maxWidthIn: null });
    expect(softTerms).toContain('seats');
  });

  it.each([
    ['comfy couch', SOFA],
    ['velvet settee', SOFA],
    ['oak coffee table', COFFEE_TABLE],
    ['two end tables', SIDE_TABLE],
    ['sabai design loveseat', LOVESEAT],
  ])('maps %j to the ontology, aliases included', (text, category) => {
    expect(parseBrief(text, vocabulary).filters.category).toBe(category);
  });

  it('uses brands and title materials as literal filters', () => {
    const { filters, softTerms } = parseBrief('Sabai Design velvet loveseat, not white', vocabulary);
    expect(filters).toMatchObject({ brands: ['Sabai Design'], query: 'velvet', category: LOVESEAT });
    expect(softTerms).toEqual(['not white']);
  });
});

describe('filter chips', () => {
  it('describes every active filter and removes each one cleanly', () => {
    const { filters } = parseBrief('Sabai Design sofa $2-4k, 84 to 96 inches, in stock', vocabulary);
    const chips = describeFilters(filters, vocabulary.categories);
    expect(chips.map((chip) => chip.label)).toEqual([
      'Sofa',
      '84″ to 96″ wide',
      '$2,000 to $4,000',
      'Available to order',
      'Sabai Design',
    ]);

    const cleared = chips.reduce((current, chip) => removeFilterChip(current, chip.key), filters);
    expect(cleared).toEqual(emptyCatalogFilters);
  });
});

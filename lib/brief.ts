import { type CatalogCategoryNode, type CatalogFilters, emptyCatalogFilters } from '@/lib/catalog-contract';
import { formatPrice } from '@/lib/format';
import { formatInches, INCHES_PER_FOOT } from '@/lib/units';

/** Suggested briefs; each must find pieces in the seeded catalog (see catalog-query tests). */
export const BRIEF_EXAMPLES = [
  'Warm, durable family-room sofa under $6k, 84 to 96 inches, in stock',
  'Coffee table 50 to 60 in',
  'Armchair $1k-2k',
] as const;

export interface BriefVocabulary {
  categories: readonly CatalogCategoryNode[];
  brands: readonly string[];
}

export interface ParsedBrief {
  filters: CatalogFilters;
  /** Words the catalog has no data for, such as `warm` or `kid-proof`; shown, never silently dropped. */
  softTerms: string[];
}

export type FilterChipKey = 'query' | 'category' | 'price' | 'width' | 'stock' | `brand:${string}`;

export interface FilterChip {
  key: FilterChipKey;
  label: string;
}

// Material words that appear in product titles, so they work as literal search.
const TITLE_MATERIALS = [
  'velvet',
  'leather',
  'boucle',
  'linen',
  'hemp',
  'oak',
  'walnut',
  'marble',
  'limestone',
  'travertine',
  'wool',
  'sherpa',
  'cotton',
  'teak',
];

const NUMBER_WORDS: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  fifteen: 15, twenty: 20,
};

const STOPWORDS = new Set(
  'a an the for with and or of to that is are i we need needs want wants looking something some around about ish please client clients my our like but in on it its this be should can could would'
    .split(' '),
);

const NUM = String.raw`(\d+(?:\.\d+)?)`;
const UNIT = String.raw`(in(?:ch(?:es)?)?\b|"|ft\b|feet\b|foot\b|')`;
const WIDE = String.raw`(?:\s*(?:wide|width|long|across))?`;
const LESS_WORDS = String.raw`under|below|less than|no more than|up to|max(?:imum)?|at most|within|fits?(?: in)?|<`;
const MORE_WORDS = String.raw`over|above|at least|more than|min(?:imum)?|>`;
const LESS = `(?:${LESS_WORDS})`;
const MORE = `(?:${MORE_WORDS})`;

function toInches(value: string, unit: string): number {
  return /^(ft|feet|foot|')$/.test(unit) ? Number(value) * INCHES_PER_FOOT : Number(value);
}

function normalize(text: string): string {
  return ` ${text} `
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”″]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/bouclé/g, 'boucle')
    .replace(/(\d),(?=\d{3}\b)/g, '$1')
    .replace(new RegExp(`\\b(${Object.keys(NUMBER_WORDS).join('|')})\\s+(thousand|grand)\\b`, 'g'), (_, word: string) =>
      ` $${NUMBER_WORDS[word] * 1000} `,
    )
    .replace(/\$?(\d+(?:\.\d+)?)\s*(?:-|to)\s*\$?(\d+(?:\.\d+)?)\s*k\b/g, (_, low: string, high: string) =>
      ` $${Math.round(Number(low) * 1000)} to $${Math.round(Number(high) * 1000)} `,
    )
    .replace(/\$?(\d+(?:\.\d+)?)\s*(k|thousand|grand)\b/g, (_, value: string) => ` $${Math.round(Number(value) * 1000)} `)
    .replace(/\$?(\d+(?:\.\d+)?)\s*(dollars|usd|bucks)\b/g, ' $$$1 ');
}

function flatten(nodes: readonly CatalogCategoryNode[]): CatalogCategoryNode[] {
  return nodes.flatMap((node) => [node, ...flatten(node.children)]);
}

function phraseForms(phrase: string): string[] {
  const base = phrase.toLowerCase().replace(/_/g, ' ').trim();
  const forms = new Set([base]);
  if (base.endsWith('s')) forms.add(base.slice(0, -1));
  else forms.add(/(ch|sh|x)$/.test(base) ? `${base}es` : `${base}s`);
  return [...forms];
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Turns a designer's sentence into catalog filters. Deterministic and local: sizes need a unit,
 * prices need `$`, `k` or a budget word, and anything else comes back as a soft term.
 */
export function parseBrief(text: string, vocabulary: BriefVocabulary): ParsedBrief {
  const filters: CatalogFilters = { ...emptyCatalogFilters, brands: [] };
  let rest = normalize(text);

  const consume = (pattern: RegExp, apply: (match: RegExpMatchArray) => void) => {
    const match = rest.match(pattern);
    if (!match || match.index === undefined) return false;
    apply(match);
    rest = `${rest.slice(0, match.index)} , ${rest.slice(match.index + match[0].length)}`;
    return true;
  };

  consume(/\b(?:in[- ]stock|available(?: now| to order)?|ready to ship|quick[- ]ship|ships? (?:now|fast|quickly))\b/, () => {
    filters.inStockOnly = true;
  });

  const widthPatterns: Array<[RegExp, (match: RegExpMatchArray) => void]> = [
    [new RegExp(`${NUM}\\s*${UNIT}?\\s*(?:-|to)\\s*${NUM}\\s*${UNIT}${WIDE}`), (m) => {
      filters.minWidthIn = toInches(m[1], m[2] ?? m[4]);
      filters.maxWidthIn = toInches(m[3], m[4]);
    }],
    [new RegExp(`${LESS}\\s*${NUM}\\s*${UNIT}${WIDE}`), (m) => (filters.maxWidthIn = toInches(m[1], m[2]))],
    [new RegExp(`${MORE}\\s*${NUM}\\s*${UNIT}${WIDE}`), (m) => (filters.minWidthIn = toInches(m[1], m[2]))],
    [new RegExp(`${NUM}\\s*${UNIT}${WIDE}`), (m) => (filters.maxWidthIn = toInches(m[1], m[2]))],
  ];
  widthPatterns.some(([pattern, apply]) => consume(pattern, apply));

  const cents = (value: string) => Math.round(Number(value) * 100);
  const pricePatterns: Array<[RegExp, (match: RegExpMatchArray) => void]> = [
    [new RegExp(`between\\s*\\$?\\s*${NUM}\\s*and\\s*\\$?\\s*${NUM}`), (m) => {
      filters.minPriceCents = cents(m[1]);
      filters.maxPriceCents = cents(m[2]);
    }],
    [new RegExp(`\\$\\s*${NUM}\\s*(?:-|to)\\s*\\$?\\s*${NUM}`), (m) => {
      filters.minPriceCents = cents(m[1]);
      filters.maxPriceCents = cents(m[2]);
    }],
    [new RegExp(`(?:${LESS_WORDS}|budget(?: of| is)?)\\s*\\$\\s*${NUM}`), (m) => (filters.maxPriceCents = cents(m[1]))],
    [new RegExp(`(?:${LESS_WORDS}|budget(?: of| is)?)\\s*(\\d{3,}(?:\\.\\d+)?)\\b`), (m) => (filters.maxPriceCents = cents(m[1]))],
    [new RegExp(`(?:${MORE_WORDS}|from|starting at)\\s*\\$\\s*${NUM}`), (m) => (filters.minPriceCents = cents(m[1]))],
    [new RegExp(`\\$\\s*${NUM}`), (m) => (filters.maxPriceCents = cents(m[1]))],
  ];
  pricePatterns.some(([pattern, apply]) => consume(pattern, apply));

  const categoryMatches = flatten(vocabulary.categories)
    .filter((node): node is CatalogCategoryNode & { id: number } => typeof node.id === 'number')
    .flatMap((node) =>
      [node.name, ...(node.aliases ?? [])].flatMap(phraseForms).flatMap((phrase) => {
        const match = rest.match(new RegExp(`\\b${escapeRegExp(phrase)}\\b`));
        return match?.index === undefined ? [] : [{ node, phrase, index: match.index }];
      }),
    )
    .sort((left, right) => left.index - right.index || right.phrase.length - left.phrase.length);
  if (categoryMatches[0]) {
    filters.category = categoryMatches[0].node.id;
    consume(new RegExp(`\\b${escapeRegExp(categoryMatches[0].phrase)}\\b`), () => undefined);
  }

  for (const brand of vocabulary.brands) {
    consume(new RegExp(`\\b${escapeRegExp(brand.toLowerCase())}\\b`), () => filters.brands.push(brand));
  }

  const material = TITLE_MATERIALS.find((word) => new RegExp(`\\b${word}\\b`).test(rest));
  if (material) {
    filters.query = material;
    consume(new RegExp(`\\b${material}\\b`), () => undefined);
  }

  return { filters, softTerms: softTerms(rest) };
}

function softTerms(rest: string): string[] {
  const words = rest
    .replace(/[^a-z0-9' -]/g, ' ')
    .split(/\s+/)
    .filter((word) => word && !STOPWORDS.has(word) && !/^[\d'-]+$/.test(word));
  const terms: string[] = [];
  for (let index = 0; index < words.length; index += 1) {
    const word = words[index];
    const next = words[index + 1];
    const joins = next !== undefined && (/^(not|no|non)$/.test(word) || /^rooms?$/.test(next));
    terms.push(joins ? `${word} ${next}` : word);
    if (joins) index += 1;
  }
  return [...new Set(terms)];
}

function categoryName(categories: readonly CatalogCategoryNode[], id: CatalogFilters['category']): string {
  if (id === 'uncategorized') return 'Uncategorized';
  return flatten(categories).find((node) => node.id === id)?.name ?? 'Category';
}

function rangeLabel(
  min: number | null,
  max: number | null,
  format: (value: number) => string,
  suffix = '',
): string {
  if (min !== null && max !== null) return `${format(min)} to ${format(max)}${suffix}`;
  if (max !== null) return `Up to ${format(max)}${suffix}`;
  return `At least ${format(min as number)}${suffix}`;
}

/** One chip per active filter, so the brief, the chips and the filter rail always agree. */
export function describeFilters(filters: CatalogFilters, categories: readonly CatalogCategoryNode[]): FilterChip[] {
  const chips: FilterChip[] = [];
  if (filters.category !== null) chips.push({ key: 'category', label: categoryName(categories, filters.category) });
  if (filters.minWidthIn !== null || filters.maxWidthIn !== null) {
    chips.push({ key: 'width', label: rangeLabel(filters.minWidthIn, filters.maxWidthIn, formatInches, ' wide') });
  }
  if (filters.minPriceCents !== null || filters.maxPriceCents !== null) {
    chips.push({ key: 'price', label: rangeLabel(filters.minPriceCents, filters.maxPriceCents, formatPrice) });
  }
  if (filters.inStockOnly) chips.push({ key: 'stock', label: 'Available to order' });
  for (const brand of filters.brands) chips.push({ key: `brand:${brand}`, label: brand });
  if (filters.query.trim()) chips.push({ key: 'query', label: `“${filters.query.trim()}”` });
  return chips;
}

export function removeFilterChip(filters: CatalogFilters, key: FilterChipKey): CatalogFilters {
  if (key.startsWith('brand:')) {
    return { ...filters, brands: filters.brands.filter((brand) => `brand:${brand}` !== key) };
  }
  switch (key) {
    case 'query':
      return { ...filters, query: '' };
    case 'category':
      return { ...filters, category: null };
    case 'price':
      return { ...filters, minPriceCents: null, maxPriceCents: null };
    case 'width':
      return { ...filters, minWidthIn: null, maxWidthIn: null };
    default:
      return { ...filters, inStockOnly: false };
  }
}

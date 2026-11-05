import { describe, expect, it } from 'vitest';

import { formatDimensionTriple, formatFeetInches, formatInches, parseLength } from '@/lib/units';

describe('formatting', () => {
  it.each([
    [144, '12′'],
    [180, '15′'],
    [102, '8′ 6″'],
    [86.5, '7′ 2½″'],
    [38.25, '3′ 2¼″'],
    [8, '8″'],
    [0.5, '½″'],
    [95.9, '8′'],
  ])('formats %s inches as %s', (inches, expected) => {
    expect(formatFeetInches(inches)).toBe(expected);
  });

  it('formats inches with quarter fractions', () => {
    expect(formatInches(86.5)).toBe('86½″');
    expect(formatInches(27.5)).toBe('27½″');
  });

  it('marks unknown dimensions instead of inventing them', () => {
    expect(formatDimensionTriple(96, 38.25, null)).toBe('96 × 38¼ in');
    expect(formatDimensionTriple(null, 38.25, 30)).toBe('? × 38¼ × 30 in');
  });
});

describe('parseLength', () => {
  it.each([
    ['86.5', 86.5],
    ['86 1/2"', 86.5],
    ['86″', 86],
    ["7' 2.5\"", 86.5],
    ['7ft 2in', 86],
    ["12'", 144],
    ['7′ 2½', 86.5],
    ['11′ 11½″', 143.5],
    ['', null],
    ['abc', null],
    ['0', null],
    ['1/0', null],
  ])('parses %j as %s', (input, expected) => {
    expect(parseLength(input)).toBe(expected);
  });
});

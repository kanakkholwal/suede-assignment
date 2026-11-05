import { expect, it } from 'vitest';

import { formatPrice, formatLeadTime, startingPriceCents } from '@/lib/format';

it('formats catalog prices in whole-dollar USD', () => {
  expect(formatPrice(129900)).toBe('$1,299');
});

it('formats a lead-time range without inventing unavailable dates', () => {
  expect(formatLeadTime({ min: 4, max: 6 })).toBe('4 to 6 weeks');
  expect(formatLeadTime(null)).toBe('Not provided');
});

it('uses the lowest available variant price for a product starting price', () => {
  expect(startingPriceCents([{ priceCents: 32900 }, { priceCents: 30900 }, { priceCents: 34900 }])).toBe(30900);
  expect(startingPriceCents([])).toBeUndefined();
});

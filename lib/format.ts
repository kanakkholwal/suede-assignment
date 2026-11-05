export function formatPrice(priceCents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(priceCents / 100);
}

export function formatLeadTime(leadTime: { min: number; max: number } | null): string {
  if (!leadTime) return 'Not provided';
  if (leadTime.min === leadTime.max) return `${leadTime.min} weeks`;
  return `${leadTime.min} to ${leadTime.max} weeks`;
}

export function startingPriceCents(variants: readonly { priceCents: number }[]): number | undefined {
  return variants.reduce<number | undefined>(
    (lowest, variant) => (lowest === undefined ? variant.priceCents : Math.min(lowest, variant.priceCents)),
    undefined,
  );
}

/** `2026-09-15` → `Sep 15, 2026`, read as a calendar date with no timezone shift. */
export function formatCalendarDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(date);
}

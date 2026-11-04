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
  return `${leadTime.min}–${leadTime.max} weeks`;
}

export function startingPriceCents(variants: readonly { priceCents: number }[]): number | undefined {
  return variants.reduce<number | undefined>(
    (lowest, variant) => (lowest === undefined ? variant.priceCents : Math.min(lowest, variant.priceCents)),
    undefined,
  );
}

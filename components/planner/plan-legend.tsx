const SWATCH = 'h-3 w-5 shrink-0 rounded-sm';

const ITEMS = [
  { label: 'Verified or designer size', swatch: `${SWATCH} border border-(--plan-ink) bg-(--piece)` },
  { label: 'Estimated size', swatch: `${SWATCH} border border-dashed border-(--plan-ink) bg-[repeating-linear-gradient(45deg,var(--piece)_0_2px,var(--piece-firm)_2px_3px)]` },
  { label: 'Assumed position', swatch: 'h-0 w-5 shrink-0 border-t border-dashed border-(--plan-ink)' },
  { label: 'Conflict', swatch: `${SWATCH} border-2 border-destructive bg-card` },
  { label: 'Tight', swatch: `${SWATCH} border-2 border-warning bg-card` },
  { label: 'Front edge', swatch: 'h-0 w-5 shrink-0 border-t-2 border-(--plan-ink)/55' },
] as const;

/** Key to the plan's line styles. Compact, so it can float over the canvas corner. */
export function PlanLegend() {
  return (
    <ul aria-label="Legend" className="grid grid-cols-2 gap-x-4 gap-y-1 rounded-lg bg-card/85 p-2 text-xs text-muted-foreground backdrop-blur-sm sm:grid-cols-3 lg:grid-cols-2">
      {ITEMS.map((item) => (
        <li key={item.label} className="inline-flex items-center gap-1.5">
          <span className={item.swatch} aria-hidden="true" />
          {item.label}
        </li>
      ))}
    </ul>
  );
}

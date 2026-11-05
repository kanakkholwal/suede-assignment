'use client';

import { ChevronUp, Info } from '@/components/icons';
import { useId, useState } from 'react';

import { cn } from '@/lib/utils';

const SWATCH = 'h-3 w-5 shrink-0 rounded-sm';

const ITEMS = [
  { label: 'Verified or designer size', swatch: `${SWATCH} border border-(--plan-ink) bg-(--piece)` },
  { label: 'Estimated size', swatch: `${SWATCH} border border-dashed border-(--plan-ink) bg-[repeating-linear-gradient(45deg,var(--piece)_0_2px,var(--piece-firm)_2px_3px)]` },
  { label: 'Assumed position', swatch: 'h-0 w-5 shrink-0 border-t border-dashed border-(--plan-ink)' },
  { label: 'Conflict', swatch: `${SWATCH} border-2 border-destructive bg-card` },
  { label: 'Tight', swatch: `${SWATCH} border-2 border-warning bg-card` },
  { label: 'Front edge', swatch: 'h-0 w-5 shrink-0 border-t-2 border-(--plan-ink)/55' },
] as const;

/** Key to the plan's line styles, folded away until asked for. */
export function PlanLegend() {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="flex flex-col items-start gap-1.5">
      <div id={id} className="collapse" data-open={open} inert={!open}>
        <div>
          <ul aria-label="Legend" className="grid grid-cols-2 gap-x-4 gap-y-1 rounded-lg bg-muted/70 p-2.5 text-xs text-muted-foreground">
            {ITEMS.map((item) => (
              <li key={item.label} className="inline-flex items-center gap-1.5">
                <span className={item.swatch} aria-hidden="true" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium text-muted-foreground outline-none transition-[background-color,color,scale] duration-(--duration-fast) hover:bg-foreground/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-sm)"
      >
        <Info className="size-3.5" aria-hidden="true" />
        Key
        <ChevronUp className={cn('size-3.5 transition-transform duration-(--duration-base)', !open && 'rotate-180')} aria-hidden="true" />
      </button>
    </div>
  );
}

'use client';

import { Check, Plus } from 'lucide-react';

import type { CatalogFilters } from '@/lib/catalog-contract';
import type { DimensionSummary } from '@/lib/dimensions';
import { cn } from '@/lib/utils';

/** Everything a catalog card needs to show fit and toggle the room shortlist. */
export interface ShortlistContext {
  filters: CatalogFilters;
  dimensions: Record<string, DimensionSummary>;
  roomCount: (productId: string) => number;
  onToggleRoom: (productId: string, variantId: string | null) => void;
  roomDisabled: boolean;
}

interface AddToRoomButtonProps {
  productName: string;
  inRoom: boolean;
  disabled: boolean;
  onToggle: () => void;
  /** `overlay` sits on a product photo; `primary` is the main action in a detail view. */
  tone?: 'overlay' | 'primary';
  className?: string;
}

const TONE = {
  overlay: {
    base: 'h-8 rounded-lg px-2.5 text-xs backdrop-blur-sm [&_svg]:size-3.5',
    off: 'bg-card/95 text-foreground hover:bg-card',
    on: 'bg-foreground text-background',
  },
  primary: {
    base: 'h-9 rounded-lg px-3.5 text-sm [&_svg]:size-4',
    off: 'bg-primary text-primary-foreground hover:bg-primary-hover',
    on: 'bg-muted text-foreground hover:bg-foreground/[0.08]',
  },
} as const;

/** Toggles a piece on the room shortlist; the icon swaps with a small pop so the change registers. */
export function AddToRoomButton({ productName, inRoom, disabled, onToggle, tone = 'overlay', className }: AddToRoomButtonProps) {
  const Icon = inRoom ? Check : Plus;
  const style = TONE[tone];
  return (
    <button
      type="button"
      aria-pressed={inRoom}
      aria-label={inRoom ? `Remove ${productName} from room shortlist` : `Add ${productName} to room shortlist`}
      disabled={disabled}
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
      className={cn(
        'inline-flex shrink-0 items-center gap-1 font-medium outline-none',
        'transition-[background-color,color,scale] duration-(--duration-fast) ease-(--ease-ui-out) active:scale-(--press-scale-sm)',
        'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card disabled:opacity-50',
        style.base,
        inRoom ? style.on : style.off,
        className,
      )}
    >
      <Icon key={String(inRoom)} className="pop" aria-hidden="true" />
      {inRoom ? 'In room' : 'Room'}
    </button>
  );
}

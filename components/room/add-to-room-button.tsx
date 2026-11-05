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
  size?: 'sm' | 'default';
  className?: string;
}

/** Toggles a piece on the room shortlist; the icon swaps with a small pop so the change registers. */
export function AddToRoomButton({ productName, inRoom, disabled, onToggle, size = 'sm', className }: AddToRoomButtonProps) {
  const Icon = inRoom ? Check : Plus;
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
        'inline-flex shrink-0 items-center gap-1 rounded-md border font-medium outline-none',
        'transition-[background-color,border-color,color,scale] duration-(--duration-fast) ease-(--ease-ui-out) active:scale-(--press-scale-sm)',
        'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card disabled:opacity-50',
        size === 'sm' ? 'h-7 px-2 text-xs [&_svg]:size-3.5' : 'h-9 px-3.5 text-sm [&_svg]:size-4',
        inRoom
          ? 'border-primary bg-primary text-primary-foreground hover:bg-primary-hover'
          : 'border-border-strong bg-card text-foreground hover:border-primary hover:text-primary',
        className,
      )}
    >
      <Icon key={String(inRoom)} className="pop" aria-hidden="true" />
      {inRoom ? 'In room' : 'Room'}
    </button>
  );
}

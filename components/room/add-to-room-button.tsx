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
  className?: string;
}

export function AddToRoomButton({ productName, inRoom, disabled, onToggle, className }: AddToRoomButtonProps) {
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
        'inline-flex h-7 shrink-0 items-center gap-1 rounded-md border px-2 text-xs font-medium transition-[background-color,border-color,color,scale] duration-(--duration-fast) active:scale-[var(--press-scale-sm)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-50',
        inRoom
          ? 'border-primary bg-primary text-primary-foreground hover:bg-(--primary-hover)'
          : 'border-input bg-white text-[#4a3e35] hover:border-primary hover:text-primary',
        className,
      )}
    >
      {inRoom ? <Check className="size-3.5" aria-hidden="true" /> : <Plus className="size-3.5" aria-hidden="true" />}
      {inRoom ? 'In room' : 'Room'}
    </button>
  );
}

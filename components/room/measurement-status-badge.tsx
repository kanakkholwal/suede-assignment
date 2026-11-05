import { CircleCheck, CircleDashed, MessageSquareQuote, type LucideIcon } from 'lucide-react';

import type { MeasurementStatus } from '@/lib/room-state';
import { cn } from '@/lib/utils';

const STATUS: Record<MeasurementStatus, { label: string; tone: string; icon: LucideIcon }> = {
  stated: { label: 'Client-stated', tone: 'text-muted-foreground', icon: MessageSquareQuote },
  assumed: { label: 'Assumed', tone: 'text-warning-strong', icon: CircleDashed },
  confirmed: { label: 'Confirmed', tone: 'text-success-strong', icon: CircleCheck },
};

/** How sure we are of a room measurement: a tinted icon and a muted word. */
export function MeasurementStatusBadge({ status, className }: { status: MeasurementStatus; className?: string }) {
  const { label, tone, icon: Icon } = STATUS[status];
  return (
    <span className={cn('inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground', className)}>
      <Icon className={cn('size-3.5', tone)} aria-hidden="true" />
      {label}
    </span>
  );
}

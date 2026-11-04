import { CircleCheck, CircleDashed, MessageSquareQuote } from 'lucide-react';

import { Badge, type BadgeVariant } from '@/components/ui/badge';
import type { MeasurementStatus } from '@/lib/room-state';

const STATUS: Record<MeasurementStatus, { label: string; variant: BadgeVariant; icon: typeof CircleCheck }> = {
  stated: { label: 'Client-stated', variant: 'secondary', icon: MessageSquareQuote },
  assumed: { label: 'Assumed', variant: 'warning', icon: CircleDashed },
  confirmed: { label: 'Confirmed', variant: 'success', icon: CircleCheck },
};

export function MeasurementStatusBadge({ status, className }: { status: MeasurementStatus; className?: string }) {
  const { label, variant, icon: Icon } = STATUS[status];
  return (
    <Badge variant={variant} size="sm" className={className}>
      <Icon aria-hidden="true" />
      {label}
    </Badge>
  );
}

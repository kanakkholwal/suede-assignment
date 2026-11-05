import { BadgeCheck, CircleHelp, FlaskConical, PencilRuler, Tag, type LucideIcon } from 'lucide-react';

import { DIMENSION_SOURCE_LABEL, type DimensionSource } from '@/lib/dimensions';
import { cn } from '@/lib/utils';

type Source = DimensionSource | 'unknown';

const SOURCE_STYLE: Record<Source, { tone: string; icon: LucideIcon; short: string }> = {
  designer: { tone: 'text-info-strong', icon: PencilRuler, short: 'Designer' },
  verified: { tone: 'text-success-strong', icon: BadgeCheck, short: 'Verified' },
  listing: { tone: 'text-muted-foreground', icon: Tag, short: 'From title' },
  synthetic: { tone: 'text-warning-strong', icon: FlaskConical, short: 'Synthetic' },
  unknown: { tone: 'text-destructive-strong', icon: CircleHelp, short: 'Unknown' },
};

interface SourceBadgeProps {
  source: Source;
  /** Extra context for the hover title, such as the note or capture date. */
  detail?: string;
  className?: string;
}

/** Where a measurement came from: a tinted icon and a muted word, so it never outshouts the value. */
export function SourceBadge({ source, detail, className }: SourceBadgeProps) {
  const { tone, icon: Icon, short } = SOURCE_STYLE[source];
  const title = [DIMENSION_SOURCE_LABEL[source], detail].filter(Boolean).join('. ');
  return (
    <span title={title} className={cn('inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground', className)}>
      <Icon className={cn('size-3.5', tone)} aria-hidden="true" />
      <span>{short}</span>
      <span className="sr-only">: {title}</span>
    </span>
  );
}

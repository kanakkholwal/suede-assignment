import { BadgeCheck, CircleHelp, FlaskConical, PencilRuler, Tag, type LucideIcon } from 'lucide-react';

import { Badge, type BadgeVariant } from '@/components/ui/badge';
import { DIMENSION_SOURCE_LABEL, type DimensionSource } from '@/lib/dimensions';

type Source = DimensionSource | 'unknown';

const SOURCE_STYLE: Record<Source, { variant: BadgeVariant; icon: LucideIcon; short: string }> = {
  designer: { variant: 'info', icon: PencilRuler, short: 'Designer' },
  verified: { variant: 'success', icon: BadgeCheck, short: 'Verified' },
  listing: { variant: 'secondary', icon: Tag, short: 'From title' },
  synthetic: { variant: 'warning', icon: FlaskConical, short: 'Synthetic' },
  unknown: { variant: 'destructive', icon: CircleHelp, short: 'Unknown' },
};

interface SourceBadgeProps {
  source: Source;
  /** Extra context for the hover title, such as the note or capture date. */
  detail?: string;
  className?: string;
}

/** Where a measurement came from. Icon and word carry the meaning; colour only reinforces it. */
export function SourceBadge({ source, detail, className }: SourceBadgeProps) {
  const { variant, icon: Icon, short } = SOURCE_STYLE[source];
  const title = [DIMENSION_SOURCE_LABEL[source], detail].filter(Boolean).join('. ');
  return (
    <Badge variant={variant} size="sm" title={title} className={className}>
      <Icon aria-hidden="true" />
      <span>{short}</span>
      <span className="sr-only">: {title}</span>
    </Badge>
  );
}

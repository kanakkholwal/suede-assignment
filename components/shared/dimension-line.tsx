import { SourceBadge } from '@/components/shared/source-badge';
import {
  DIMENSION_FIELDS,
  type DimensionSummary,
  type FieldSummary,
  footprintConfidence,
  type ResolvedDimensions,
  summaryConfidence,
} from '@/lib/dimensions';
import { cn } from '@/lib/utils';
import { formatDimensionTriple, formatInchValue } from '@/lib/units';

function rangeText(field: FieldSummary | null): string {
  if (!field) return '?';
  return field.min === field.max
    ? formatInchValue(field.min)
    : `${formatInchValue(field.min)}–${formatInchValue(field.max)}`;
}

/** A catalog product's size across its options: `72–120 × 40 × 33 in`, with the weakest source. */
export function SummaryDimensionLine({ summary, className }: { summary: DimensionSummary; className?: string }) {
  const known = [summary.width, summary.depth].filter((field): field is FieldSummary => field !== null);
  const partial = summary.unmeasuredVariants > 0 && summary.unmeasuredVariants < summary.variantCount;

  if (known.length === 0) {
    return <p className={cn('text-xs text-muted-foreground', className)}>Size not on file</p>;
  }
  if (known.length === 1 && summary.width) {
    return (
      <p className={cn('flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground', className)}>
        <span><span className="tabular-nums text-foreground">{rangeText(summary.width)}″ wide</span> · depth not on file</span>
        <SourceBadge source={summary.width.source} />
      </p>
    );
  }

  return (
    <p className={cn('flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground', className)}>
      <span className="tabular-nums text-foreground">
        {`${rangeText(summary.width)} × ${rangeText(summary.depth)} × ${rangeText(summary.height)} in`}
      </span>
      <SourceBadge source={summaryConfidence(summary)} detail={partial ? `${summary.unmeasuredVariants} of ${summary.variantCount} options have no size` : undefined} />
    </p>
  );
}

/** One placed or shortlisted piece: exact W × D × H with a badge per weakest footprint source. */
export function ResolvedDimensionLine({ dimensions, className }: { dimensions: ResolvedDimensions; className?: string }) {
  const notes = DIMENSION_FIELDS.map((field) => dimensions[field])
    .filter((field) => field.note)
    .map((field) => field.note);

  return (
    <p className={cn('flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground', className)}>
      <span className="tabular-nums text-foreground">
        {formatDimensionTriple(dimensions.width.value, dimensions.depth.value, dimensions.height.value)}
      </span>
      <SourceBadge source={footprintConfidence(dimensions)} detail={[...new Set(notes)].join(' ')} />
    </p>
  );
}

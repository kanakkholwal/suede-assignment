'use client';

import { CircleCheck, CircleDashed, Lightbulb, OctagonX, TriangleAlert, type LucideIcon } from 'lucide-react';

import type { FitSeverity, FitWarning } from '@/lib/fit-rules';
import { cn } from '@/lib/utils';

const SEVERITY: Record<FitSeverity, { label: string; possible: string; icon: LucideIcon; tone: string }> = {
  conflict: { label: 'Won’t work', possible: 'Possible conflict', icon: OctagonX, tone: 'text-destructive-strong' },
  tight: { label: 'Tight', possible: 'Possibly tight', icon: TriangleAlert, tone: 'text-warning-strong' },
  tip: { label: 'Tip', possible: 'Tip', icon: Lightbulb, tone: 'text-muted-foreground' },
};

interface FitWarningsProps {
  warnings: readonly FitWarning[];
  placedCount: number;
  selectedId: string | null;
  onFocusPiece: (pieceId: string) => void;
}

export function fitSummary(warnings: readonly FitWarning[]): string {
  return (['conflict', 'tight', 'tip'] as const)
    .map((severity) => [severity, warnings.filter((warning) => warning.severity === severity).length] as const)
    .filter(([, count]) => count > 0)
    .map(([severity, count]) => `${count} ${SEVERITY[severity].label.toLowerCase()}`)
    .join(' · ');
}

/** The live fit check: what won't work, what's tight, and what each verdict rests on. */
export function FitWarnings({ warnings, placedCount, selectedId, onFocusPiece }: FitWarningsProps) {
  return (
    <section aria-label="Fit check" className="flex flex-col gap-2">
      <p className="sr-only" aria-live="polite">{fitSummary(warnings)}</p>
      {placedCount === 0 ? (
        <p className="px-1 py-6 text-center text-sm text-muted-foreground">Place a piece to check it against the room.</p>
      ) : warnings.length === 0 ? (
        <p className="pop flex items-center gap-2 rounded-lg bg-success/10 px-3 py-2.5 text-sm text-success-strong">
          <CircleCheck className="size-4" aria-hidden="true" /> No problems with what is placed.
        </p>
      ) : (
        <ul className="-mx-1.5 flex flex-col">
          {warnings.map((warning) => {
            const style = SEVERITY[warning.severity];
            const Icon = style.icon;
            const possible = warning.dependsOn.length > 0;
            const related = selectedId !== null && warning.pieceIds.includes(selectedId);
            return (
              <li key={warning.id} className="enter">
                <button
                  type="button"
                  onClick={() => warning.pieceIds[0] && onFocusPiece(warning.pieceIds[0])}
                  className={cn(
                    'flex w-full gap-2.5 rounded-lg p-2.5 text-left outline-none transition-[background-color,scale] duration-(--duration-fast) hover:bg-foreground/[0.04] focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-row)',
                    related && 'bg-primary/[0.07] hover:bg-primary/10',
                  )}
                >
                  <Icon className={cn('mt-0.5 size-4 shrink-0', style.tone)} aria-hidden="true" />
                  <span className="flex min-w-0 flex-col gap-0.5">
                    <span className={cn('text-xs font-medium', style.tone)}>{possible ? style.possible : style.label}</span>
                    <span className="text-sm leading-snug font-medium text-foreground">{warning.title}</span>
                    <span className="text-xs leading-relaxed text-muted-foreground">{warning.detail}</span>
                    {possible ? (
                      <span className="mt-0.5 flex items-start gap-1 text-xs text-warning-strong">
                        <CircleDashed className="mt-0.5 size-3 shrink-0" aria-hidden="true" />
                        Depends on: {warning.dependsOn.join('; ')}.
                      </span>
                    ) : null}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

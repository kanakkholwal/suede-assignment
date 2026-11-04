'use client';

import { CircleCheck, CircleDashed, Lightbulb, OctagonX, TriangleAlert, type LucideIcon } from 'lucide-react';

import type { FitSeverity, FitWarning } from '@/lib/fit-rules';

const SEVERITY: Record<FitSeverity, { label: string; possible: string; icon: LucideIcon; tone: string }> = {
  conflict: { label: 'Won’t work', possible: 'Possible conflict', icon: OctagonX, tone: 'text-destructive-strong' },
  tight: { label: 'Tight', possible: 'Possibly tight', icon: TriangleAlert, tone: 'text-warning-strong' },
  tip: { label: 'Tip', possible: 'Tip', icon: Lightbulb, tone: 'text-[#5b5048]' },
};

interface FitWarningsProps {
  warnings: readonly FitWarning[];
  placedCount: number;
  onFocusPiece: (pieceId: string) => void;
}

/** The live fit check: what won't work, what's tight, and what each verdict rests on. */
export function FitWarnings({ warnings, placedCount, onFocusPiece }: FitWarningsProps) {
  const counts = (['conflict', 'tight', 'tip'] as const)
    .map((severity) => [severity, warnings.filter((warning) => warning.severity === severity).length] as const)
    .filter(([, count]) => count > 0);

  return (
    <section aria-labelledby="fit-check-title" className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between gap-2">
        <h2 id="fit-check-title" className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#84776e]">Fit check</h2>
        <p className="text-xs text-muted-foreground" aria-live="polite">
          {counts.length ? counts.map(([severity, count]) => `${count} ${SEVERITY[severity].label.toLowerCase()}`).join(' · ') : null}
        </p>
      </div>

      {placedCount === 0 ? (
        <p className="text-sm text-muted-foreground">Place a piece to check it against the room.</p>
      ) : warnings.length === 0 ? (
        <p className="flex items-center gap-2 text-sm text-success-strong">
          <CircleCheck className="size-4" aria-hidden="true" /> No problems found with what is placed.
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {warnings.map((warning) => {
            const style = SEVERITY[warning.severity];
            const Icon = style.icon;
            const possible = warning.dependsOn.length > 0;
            return (
              <li key={warning.id}>
                <button
                  type="button"
                  onClick={() => warning.pieceIds[0] && onFocusPiece(warning.pieceIds[0])}
                  className="flex w-full gap-2.5 rounded-lg border border-border bg-white p-3 text-left transition-colors hover:border-border-strong focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <Icon className={`mt-0.5 size-4 shrink-0 ${style.tone}`} aria-hidden="true" />
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className={`text-[10px] font-semibold uppercase tracking-[0.1em] ${style.tone}`}>
                      {possible ? style.possible : style.label}
                    </span>
                    <span className="text-sm font-medium leading-snug text-foreground">{warning.title}</span>
                    <span className="text-xs leading-relaxed text-muted-foreground">{warning.detail}</span>
                    {possible ? (
                      <span className="flex items-start gap-1 text-[11px] leading-snug text-warning-strong">
                        <CircleDashed className="mt-px size-3 shrink-0" aria-hidden="true" />
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

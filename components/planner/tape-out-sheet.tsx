'use client';

import { Printer, TriangleAlert } from 'lucide-react';

import { PlanCanvas } from '@/components/planner/plan-canvas';
import { Button } from '@/components/ui/button';
import type { FitWarning } from '@/lib/fit-rules';
import type { PlanPiece } from '@/lib/plan-model';
import type { Room, RoomFeature } from '@/lib/room-state';
import { tapeOutSteps } from '@/lib/tape-out';

interface TapeOutSheetProps {
  room: Room;
  features: readonly RoomFeature[];
  pieces: readonly PlanPiece[];
  warnings: readonly FitWarning[];
}

/** A printable sheet so the client can mark every piece on their floor in painter's tape. */
export function TapeOutSheet({ room, features, pieces, warnings }: TapeOutSheetProps) {
  const steps = tapeOutSteps(room, pieces);
  const windowWall = features.find((feature) => feature.kind === 'window')?.wall;

  return (
    <article className="flex flex-col gap-5 rounded-xl border border-border bg-white p-5 sm:p-7 print:border-0 print:p-0">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="max-w-xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#84776e]">For the client</p>
          <h2 className="mt-1 font-serif text-3xl leading-none tracking-[-0.03em] text-foreground">Tape it on your floor</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Mark each outline with painter’s tape, then walk around it, sit where the sofa would be, and open the door. Measure from the wall itself, not the baseboard.
          </p>
        </div>
        <Button size="sm" variant="outline" onClick={() => window.print()} className="print:hidden" disabled={steps.length === 0}>
          <Printer aria-hidden="true" /> Print
        </Button>
      </header>

      {steps.length === 0 ? (
        <p className="text-sm text-muted-foreground">Place pieces on the plan first.</p>
      ) : (
        <>
          <PlanCanvas room={room} features={features} pieces={pieces} warnings={warnings} interactive={false} className="mx-auto max-w-2xl" />
          <ol className="flex flex-col divide-y divide-border">
            {steps.map((step, index) => (
              <li key={step.pieceId} className="flex gap-3 py-3 break-inside-avoid">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">{index + 1}</span>
                <div className="flex min-w-0 flex-col gap-1">
                  <p className="text-sm font-medium text-foreground">{step.name}</p>
                  <p className="text-sm leading-relaxed text-[#4a3e35]">
                    Tape a <strong className="font-semibold tabular-nums">{step.size}</strong> rectangle (east–west by north–south).
                    {' '}Its {step.anchors[0].wall} edge sits <strong className="font-semibold tabular-nums">{step.anchors[0].distance}</strong> from the {step.anchors[0].wall} wall;
                    {' '}its {step.anchors[1].wall} edge sits <strong className="font-semibold tabular-nums">{step.anchors[1].distance}</strong> from the {step.anchors[1].wall} wall.
                    {' '}The front faces {step.facing}.
                  </p>
                  {step.caution ? (
                    <p className="flex items-start gap-1.5 text-xs text-warning-strong">
                      <TriangleAlert className="mt-px size-3.5 shrink-0" aria-hidden="true" /> {step.caution}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
          <p className="text-xs leading-relaxed text-muted-foreground">
            North is the top of the plan{windowWall ? `; the windows are on the ${windowWall} wall` : ''}. Outlines inherit every assumption on the plan, so confirm the room and door positions first.
          </p>
        </>
      )}
    </article>
  );
}

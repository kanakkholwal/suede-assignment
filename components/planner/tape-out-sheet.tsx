'use client';

import { TriangleAlert } from '@/components/icons';

import { PlanCanvas } from '@/components/planner/plan-canvas';
import type { PlanPiece } from '@/lib/plan-model';
import type { Room, RoomFeature } from '@/lib/room-state';
import type { TapeOutStep } from '@/lib/tape-out';
import { formatFeetInches } from '@/lib/units';

interface TapeOutSheetProps {
  room: Room;
  features: readonly RoomFeature[];
  pieces: readonly PlanPiece[];
  steps: readonly TapeOutStep[];
  questions: readonly string[];
}

const NO_WARNINGS: never[] = [];

function Value({ label, children }: { label: string; children: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="text-sm font-semibold tabular-nums text-foreground">{children}</dd>
    </div>
  );
}

/** A printable sheet the client follows to mark each placed piece on their floor in painter's tape. */
export function TapeOutSheet({ room, features, pieces, steps, questions }: TapeOutSheetProps) {
  const markers = new Map(steps.map((step, index) => [step.pieceId, index + 1]));

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-8 print:gap-5">
      <header className="flex max-w-xl flex-col gap-2">
        <p className="text-xs font-medium text-primary">
          {room.name} · <span className="tabular-nums">{formatFeetInches(room.lengthIn)} × {formatFeetInches(room.widthIn)}</span>
        </p>
        <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground">Tape it on your floor</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Mark each numbered outline with painter’s tape, then walk around it, sit in the seats and open the door. Measure from the wall itself, not the baseboard.
        </p>
      </header>

      <figure className="flex flex-col gap-2 break-inside-avoid">
        <div className="rounded-xl bg-paper p-3 sm:p-5 print:bg-transparent print:p-0">
          {/* Fit warnings stay with the designer; the client sees clean outlines. */}
          <PlanCanvas room={room} features={features} pieces={pieces} warnings={NO_WARNINGS} interactive={false} markers={markers} className="mx-auto max-w-2xl print:max-w-[6.5in]" />
        </div>
      </figure>

      {questions.length ? (
        <section aria-labelledby="sheet-check" className="flex flex-col gap-3 rounded-xl bg-muted/60 p-4 break-inside-avoid print:bg-transparent print:p-0">
          <h3 id="sheet-check" className="text-sm font-semibold text-foreground">Before you tape, please check</h3>
          <ol className="flex list-decimal flex-col gap-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground marker:tabular-nums">
            {questions.map((question) => <li key={question}>{question}</li>)}
          </ol>
          <p className="text-xs text-muted-foreground">Send the answers back before ordering; the outlines move if any of these change.</p>
        </section>
      ) : null}

      <section aria-labelledby="sheet-steps" className="flex flex-col gap-3">
        <div className="flex flex-col gap-0.5">
          <h3 id="sheet-steps" className="text-sm font-semibold text-foreground">Outlines to tape</h3>
          <p className="text-xs text-muted-foreground">Sizes read east-west × north-south. North is the top of the plan.</p>
        </div>
        <ol className="flex flex-col divide-y divide-border">
          {steps.map((step, index) => (
            <li key={step.pieceId} className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-3 gap-y-3 py-4 break-inside-avoid">
              <span className="grid size-6 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground tabular-nums">{index + 1}</span>
              <p className="flex flex-wrap items-baseline gap-x-2 self-center">
                <span className="text-sm font-medium text-foreground">{step.name}</span>
                <span className="text-xs text-muted-foreground">front faces {step.facing}</span>
              </p>
              <dl className="col-start-2 grid grid-cols-3 gap-x-4 gap-y-3 sm:gap-x-6">
                <Value label="Size">{step.size}</Value>
                {step.anchors.map((anchor) => (
                  <Value key={anchor.wall} label={`From the ${anchor.wall} wall`}>{anchor.distance}</Value>
                ))}
              </dl>
              {step.caution ? (
                <p className="col-start-2 flex items-start gap-1.5 text-xs text-warning-strong">
                  <TriangleAlert className="mt-px size-3.5 shrink-0" aria-hidden="true" /> {step.caution}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}

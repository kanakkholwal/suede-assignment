'use client';

import { ArrowRight, CircleCheck, Printer, TriangleAlert } from '@/components/icons';
import Link from 'next/link';

import { TapeOutSheet } from '@/components/planner/tape-out-sheet';
import { useRoomStore } from '@/components/room/room-provider';
import { CopyButton } from '@/components/shared/copy-button';
import { SheetSkeleton } from '@/components/shared/skeletons';
import { Island } from '@/components/shell/island';
import { Button, button } from '@/components/ui/button';
import { plural } from '@/lib/format';
import { formatFeetInches } from '@/lib/units';
import { useRoomHref } from '@/lib/url-state';
import { clientQuestions, tapeOutSteps, tapeOutText } from '@/lib/tape-out';
import { countProblems, usePlan } from '@/lib/use-plan';

interface OpenItem {
  text: string;
  tab: 'fit' | 'pieces' | 'room';
}

/** What blocks sending the sheet, each item linking to the planner tab that fixes it. */
function BlockingLine({ items }: { items: readonly OpenItem[] }) {
  const roomHref = useRoomHref();
  return (
    <p role="status" className="flex flex-wrap items-center gap-x-1.5 gap-y-1 rounded-lg bg-warning/10 px-3 py-2 text-xs text-foreground print:hidden">
      <TriangleAlert className="size-3.5 shrink-0 text-warning-strong" aria-hidden="true" />
      <span className="font-medium">Fix before sending:</span>
      {items.map((item, index) => (
        <span key={item.text}>
          <Link href={roomHref(`/room?view=plan&tab=${item.tab}`)} className="underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground">
            {item.text}
          </Link>
          {index < items.length - 1 ? ',' : ''}
        </span>
      ))}
    </p>
  );
}

/** Step three: the sheet the client tapes out, with what is still open on the plan said up front. */
export function ClientSheet() {
  const room = useRoomStore();
  const roomHref = useRoomHref();
  const { snapshot } = room;
  const { pieces, warnings } = usePlan(snapshot);

  if (!snapshot) {
    if (room.loading) return <SheetSkeleton />;
    return (
      <main className="flex flex-1 items-center justify-center">
        <p role="alert" className="text-sm text-destructive-strong">{room.error}</p>
      </main>
    );
  }

  const { room: details, features } = snapshot;
  const problems = countProblems(warnings);
  const unplaced = snapshot.items.length - pieces.length;
  const blocking: OpenItem[] = [
    ...(problems ? [{ text: plural(problems, 'fit problem'), tab: 'fit' as const }] : []),
    ...(unplaced ? [{ text: `${plural(unplaced, 'piece')} not on the plan`, tab: 'pieces' as const }] : []),
  ];
  const steps = tapeOutSteps(details, pieces);
  const questions = clientQuestions(details, features);

  return (
    <main className="flex flex-1 flex-col lg:min-h-0 print:block">
      <Island aria-label="Client sheet" className="flex-1 print:bg-transparent">
        <header className="flex min-h-12 shrink-0 items-center gap-3 px-3 py-2 sm:px-4 print:hidden">
          <div className="flex min-w-0 flex-1 items-baseline gap-2">
            <h1 className="truncate text-sm font-semibold text-foreground">Client sheet</h1>
            <p className="hidden truncate text-xs tabular-nums text-muted-foreground sm:block">
              {details.name} · {formatFeetInches(details.lengthIn)} × {formatFeetInches(details.widthIn)}
            </p>
          </div>
          {pieces.length ? (
            <div className="flex shrink-0 items-center gap-1.5">
              <CopyButton text={tapeOutText(details, steps, questions)} label="Copy text" />
              <Button size="sm" variant={blocking.length ? 'outline' : 'default'} onClick={() => window.print()}>
                <Printer aria-hidden="true" /> Print
              </Button>
            </div>
          ) : null}
        </header>

        {pieces.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
            <p className="font-serif text-2xl tracking-tight text-foreground">Nothing to show yet</p>
            <p className="max-w-sm text-sm text-muted-foreground">Place pieces on the plan, then come back for a sheet the client can tape out on the floor.</p>
            <Link href={roomHref('/room?view=plan&tab=pieces')} className={button({ size: 'sm', className: 'mt-1' })}>
              Open the plan <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-6 sm:px-6 print:overflow-visible print:p-0">
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 pt-2 print:pt-0">
              {blocking.length ? (
                <BlockingLine items={blocking} />
              ) : questions.length ? null : (
                <p role="status" className="flex items-center gap-1.5 rounded-lg bg-success/10 px-3 py-2 text-xs text-foreground print:hidden">
                  <CircleCheck className="size-3.5 shrink-0 text-success-strong" aria-hidden="true" /> Every piece is placed, the room is confirmed and the fit check is clear.
                </p>
              )}
              <TapeOutSheet room={details} features={features} pieces={pieces} steps={steps} questions={questions} />
            </div>
          </div>
        )}
      </Island>
    </main>
  );
}

'use client';

import { ArrowRight, CircleCheck, CircleHelp, type IconComponent, Printer, TriangleAlert } from '@/components/icons';
import Link from 'next/link';

import { TapeOutSheet } from '@/components/planner/tape-out-sheet';
import { useRoomStore } from '@/components/room/room-provider';
import { SheetSkeleton } from '@/components/shared/skeletons';
import { Island } from '@/components/shell/island';
import { Button, button } from '@/components/ui/button';
import { plural } from '@/lib/format';
import { formatFeetInches } from '@/lib/units';
import { useRoomHref } from '@/lib/url-state';
import { cn } from '@/lib/utils';
import { openFactLabels } from '@/lib/room-certainty';
import { countProblems, usePlan } from '@/lib/use-plan';

interface OpenItem {
  text: string;
  tab: 'fit' | 'pieces' | 'room';
}

/** One line of open items, each linking to the planner tab that settles it. */
function OpenLine({ tone, icon: Icon, label, items }: { tone: 'warning' | 'muted'; icon: IconComponent; label: string; items: readonly OpenItem[] }) {
  const roomHref = useRoomHref();
  return (
    <p role="status" className={cn('flex flex-wrap items-center gap-x-1.5 gap-y-1 rounded-lg px-3 py-2 text-xs text-foreground', tone === 'warning' ? 'bg-warning/10' : 'bg-muted/60')}>
      <Icon className={cn('size-3.5 shrink-0', tone === 'warning' ? 'text-warning-strong' : 'text-muted-foreground')} aria-hidden="true" />
      <span className="font-medium">{label}</span>
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
  const caveats: OpenItem[] = openFactLabels(details, features).map((text) => ({ text, tab: 'room' as const }));

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
            <Button size="sm" variant={blocking.length ? 'outline' : 'default'} onClick={() => window.print()}>
              <Printer aria-hidden="true" /> Print
            </Button>
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
              {blocking.length || caveats.length ? (
                <div className="flex flex-col gap-1.5 print:hidden">
                  {blocking.length ? <OpenLine tone="warning" icon={TriangleAlert} label="Still open:" items={blocking} /> : null}
                  {caveats.length ? <OpenLine tone="muted" icon={CircleHelp} label="To confirm with the client:" items={caveats} /> : null}
                </div>
              ) : (
                <p role="status" className="flex items-center gap-1.5 rounded-lg bg-success/10 px-3 py-2 text-xs text-foreground print:hidden">
                  <CircleCheck className="size-3.5 shrink-0 text-success-strong" aria-hidden="true" /> Every piece is placed, the room is confirmed and the fit check is clear.
                </p>
              )}
              <TapeOutSheet room={details} features={features} pieces={pieces} warnings={warnings} />
            </div>
          </div>
        )}
      </Island>
    </main>
  );
}

'use client';

import { Bookmark, Check, ChevronDown } from '@/components/icons';
import Link from 'next/link';
import { useQueryState } from 'nuqs';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLayoutEffect, useRef, useState } from 'react';

import { type RoomProgress, useRoomProgress, useRoomStore } from '@/components/room/room-provider';
import { MeasurementStatusBadge } from '@/components/room/measurement-status-badge';
import { ROOM_PRESETS } from '@/data/room-presets';
import { button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { attachSegmentPill } from '@/components/ui/toggle-group';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { formatFeetInches } from '@/lib/units';
import { useRoomHref, useRoomPreset } from '@/lib/url-state';
import { cn } from '@/lib/utils';

export type WorkflowStep = 'find' | 'fit' | 'present';

interface Step {
  id: WorkflowStep;
  label: string;
  href: string;
  /** Short live count shown beside the label on wide screens. */
  status: (progress: RoomProgress) => string | null;
  done: (progress: RoomProgress) => boolean;
}

const STEPS: readonly Step[] = [
  { id: 'find', label: 'Find pieces', href: '/catalog', status: ({ shortlisted }) => (shortlisted ? String(shortlisted) : null), done: ({ shortlisted }) => shortlisted > 0 },
  {
    id: 'fit',
    label: 'Fit the room',
    href: '/room?view=plan',
    status: ({ shortlisted, placed, problems }) =>
      !shortlisted ? null : problems ? `${problems} to fix` : `${placed}/${shortlisted}`,
    done: ({ shortlisted, placed, problems }) => shortlisted > 0 && placed === shortlisted && problems === 0,
  },
  { id: 'present', label: 'Show the client', href: '/room?view=wall', status: () => null, done: () => false },
];

function activeStep(pathname: string, view: string | null): WorkflowStep | null {
  if (pathname.startsWith('/catalog')) return 'find';
  if (pathname.startsWith('/room')) return view === 'wall' || view === 'tape' ? 'present' : 'fit';
  return null;
}

function StepNav({ active }: { active: WorkflowStep | null }) {
  const progress = useRoomProgress();
  const roomHref = useRoomHref();
  const trackRef = useRef<HTMLOListElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!trackRef.current || !pillRef.current) return;
    return attachSegmentPill(trackRef.current, pillRef.current);
  }, []);

  return (
    <nav aria-label="Workflow" className="min-w-0 overflow-x-auto scrollbar-none">
      <ol ref={trackRef} className="relative isolate flex items-center gap-0.5 rounded-xl bg-foreground/[0.05] p-0.5">
        <span
          ref={pillRef}
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 -z-1 rounded-lg bg-card data-[ready=true]:transition-[translate,width,opacity] data-[ready=true]:duration-(--duration-spring-snappy) data-[ready=true]:ease-(--ease-spring-snappy)"
        />
        {STEPS.map((step, index) => {
          const current = step.id === active;
          const done = !current && step.done(progress);
          return (
            <li key={step.id} className="shrink-0">
              <Link
                href={roomHref(step.href)}
                aria-current={current ? 'step' : undefined}
                data-state={current ? 'on' : 'off'}
                className={cn(
                  'group flex h-8 items-center gap-2 rounded-lg px-2.5 outline-none transition-[color,scale] duration-(--duration-fast) focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-sm)',
                  current ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <span
                  className={cn(
                    'grid size-4.5 place-items-center rounded-full text-xs font-semibold tabular-nums transition-colors duration-(--duration-base)',
                    current ? 'bg-primary text-primary-foreground' : done ? 'bg-foreground text-background' : 'bg-foreground/[0.07] text-muted-foreground group-hover:text-foreground',
                  )}
                >
                  {done ? <Check key="done" className="pop size-3" aria-label="done" /> : index + 1}
                </span>
                <span className={cn('text-sm font-medium whitespace-nowrap', !current && 'sr-only sm:not-sr-only')}>{step.label}</span>
                {step.status(progress) ? (
                  <span key={step.status(progress)} className="pop hidden text-xs text-muted-foreground tabular-nums lg:inline">{step.status(progress)}</span>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** The room being worked on; opens its facts so the context is one click away from any step. */
function RoomMenu() {
  const { snapshot } = useRoomStore();
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useRoomPreset();
  const [, setPiece] = useQueryState('piece');
  const roomHref = useRoomHref();
  if (!snapshot) return null;
  const { room, features } = snapshot;
  const assumed = features.filter((feature) => feature.status !== 'confirmed').length;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="hidden h-8 min-w-0 items-baseline gap-2 rounded-lg px-2 transition-colors duration-(--duration-fast) hover:bg-foreground/[0.06] data-[popup-open]:bg-foreground/[0.06] lg:inline-flex">
        <span className="truncate font-serif text-base leading-8 text-foreground">{room.name}</span>
        <span className="text-xs tabular-nums text-muted-foreground">
          {formatFeetInches(room.lengthIn)} × {formatFeetInches(room.widthIn)}
        </span>
        <ChevronDown className="size-3.5 self-center text-muted-foreground" aria-hidden="true" />
      </PopoverTrigger>
      <PopoverContent align="start" className="flex w-80 flex-col gap-3 p-4">
        <ul aria-label="Rooms" className="-mx-2 -mt-1 flex flex-col">
          {ROOM_PRESETS.map((option) => {
            const current = option.id === preset;
            return (
              <li key={option.id}>
                <button
                  type="button"
                  aria-pressed={current}
                  onClick={() => {
                    void setPiece(null);
                    void setPreset(option.id, { history: 'push' });
                  }}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg px-2 py-1.5 text-left outline-none transition-[background-color,scale] duration-(--duration-fast) hover:bg-foreground/[0.04] focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-row)',
                    current && 'bg-primary/10 hover:bg-primary/10',
                  )}
                >
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-sm font-medium text-foreground">{option.template.name}</span>
                    <span className="truncate text-xs text-muted-foreground">
                      {formatFeetInches(option.template.lengthIn)} × {formatFeetInches(option.template.widthIn)} · {option.summary}
                    </span>
                  </span>
                  {current ? <Check className="size-3.5 text-primary" aria-hidden="true" /> : null}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="h-px bg-border" aria-hidden="true" />
        <div className="flex flex-col gap-1">
          <p className="font-serif text-xl leading-tight text-foreground">{room.name}</p>
          <p className="flex flex-wrap items-center gap-x-2 text-sm tabular-nums text-foreground">
            {formatFeetInches(room.lengthIn)} × {formatFeetInches(room.widthIn)}
            {room.ceilingIn ? <><span className="text-muted-foreground" aria-hidden="true">·</span><span className="text-muted-foreground">{formatFeetInches(room.ceilingIn)} ceiling</span></> : null}
            <MeasurementStatusBadge status={room.dimensionsStatus} />
          </p>
        </div>
        {room.clientMessage ? (
          <blockquote className="rounded-lg bg-muted/60 p-3 font-serif text-sm leading-relaxed text-foreground italic">“{room.clientMessage}”</blockquote>
        ) : null}
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">{assumed ? `${assumed} assumption${assumed === 1 ? '' : 's'} to confirm` : 'Everything confirmed'}</p>
          <Link href={roomHref('/room?view=plan&tab=room')} onClick={() => setOpen(false)} className={button({ variant: 'outline', size: 'sm' })}>
            Room facts
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}

/** Persistent top bar: brand, the room being worked on, and the three-step job. */
export function AppBar() {
  const pathname = usePathname();
  const view = useSearchParams().get('view');
  const libraryActive = pathname.startsWith('/library');
  const roomHref = useRoomHref();

  return (
    <header className="flex h-13 shrink-0 items-center gap-3 px-3 [view-transition-name:app-bar] sm:gap-5 sm:px-4 print:hidden">
      <div className="flex shrink-0 items-center gap-3 sm:min-w-0 sm:flex-1 sm:shrink">
        <Link
          href={roomHref('/catalog')}
          aria-label="Suede catalog"
          className="rounded-md font-logo text-2xl leading-none tracking-[-0.055em] text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          suede
        </Link>
        <RoomMenu />
      </div>
      <StepNav active={activeStep(pathname, view)} />
      <div className="flex shrink-0 justify-end sm:flex-1">
        <Tooltip>
          <TooltipTrigger
            render={
              <Link
                href={roomHref('/library')}
                aria-label="Library"
                aria-current={libraryActive ? 'page' : undefined}
                className={cn(
                  'grid size-8 place-items-center rounded-lg outline-none transition-[background-color,color,scale] duration-(--duration-fast) hover:bg-foreground/[0.06] focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-icon)',
                  libraryActive ? 'bg-card text-foreground' : 'text-muted-foreground',
                )}
              />
            }
          >
            <Bookmark className="size-4" aria-hidden="true" />
          </TooltipTrigger>
          <TooltipContent>Saved products and collections</TooltipContent>
        </Tooltip>
      </div>
    </header>
  );
}

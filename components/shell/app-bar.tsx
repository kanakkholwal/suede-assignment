'use client';

import { Bookmark, Check, ChevronDown, ChevronRight } from '@/components/icons';
import Link from 'next/link';
import { useQueryState } from 'nuqs';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { type RoomProgress, useRoomProgress, useRoomStore } from '@/components/room/room-provider';
import { RoomThumb } from '@/components/room/room-thumb';
import { ROOM_PRESETS, type RoomPresetId, roomPreset } from '@/data/room-presets';
import { button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { formatFeetInches } from '@/lib/units';
import { useRoomHref, useRoomPreset } from '@/lib/url-state';
import { cn } from '@/lib/utils';

export type WorkflowStep = 'find' | 'fit' | 'present';

interface Step {
  id: WorkflowStep;
  label: string;
  href: string;
  /** Short live count shown beside the label on wide screens; `alert` when something needs fixing. */
  status: (progress: RoomProgress) => { text: string; tone: 'muted' | 'alert' } | null;
  done: (progress: RoomProgress) => boolean;
}

const STEPS: readonly Step[] = [
  { id: 'find', label: 'Find pieces', href: '/catalog', status: ({ shortlisted }) => (shortlisted ? { text: `${shortlisted} shortlisted`, tone: 'muted' } : null), done: ({ shortlisted }) => shortlisted > 0 },
  {
    id: 'fit',
    label: 'Fit the room',
    href: '/room?view=plan',
    status: ({ shortlisted, placed, problems }) =>
      !shortlisted ? null : problems ? { text: `${problems} to fix`, tone: 'alert' } : { text: `${placed} of ${shortlisted} placed`, tone: 'muted' },
    done: ({ shortlisted, placed, problems }) => shortlisted > 0 && placed === shortlisted && problems === 0,
  },
  { id: 'present', label: 'Show the client', href: '/room?view=wall', status: () => null, done: () => false },
];

function activeStep(pathname: string, view: string | null): WorkflowStep | null {
  if (pathname.startsWith('/catalog')) return 'find';
  if (pathname.startsWith('/room')) return view === 'wall' || view === 'tape' ? 'present' : 'fit';
  return null;
}

/** The three-step job as navigation, underlined like the planner's tabs; each step says how far along it is. */
function StepNav({ active }: { active: WorkflowStep | null }) {
  const progress = useRoomProgress();
  const roomHref = useRoomHref();

  return (
    <nav aria-label="Workflow" className="h-full min-w-0 overflow-x-auto scrollbar-none">
      <ol className="flex h-full items-center">
        {STEPS.map((step, index) => {
          const current = step.id === active;
          const done = !current && step.done(progress);
          const status = step.status(progress);
          return (
            <li key={step.id} className="flex h-full shrink-0 items-center">
              {index > 0 ? <ChevronRight className="mx-1 size-3.5 text-muted-foreground/60" aria-hidden="true" /> : null}
              <Link
                href={roomHref(step.href)}
                aria-current={current ? 'step' : undefined}
                className={cn(
                  'group relative flex h-full items-center gap-2 px-2 outline-none transition-colors duration-(--duration-fast)',
                  'after:absolute after:inset-x-2 after:bottom-0 after:h-0.5 after:rounded-full after:transition-colors after:duration-(--duration-base)',
                  'focus-visible:after:bg-ring',
                  current ? 'text-foreground after:bg-primary' : 'text-muted-foreground after:bg-transparent hover:text-foreground',
                )}
              >
                <span
                  className={cn(
                    'grid size-4.5 shrink-0 place-items-center rounded-full text-xs leading-none font-semibold tabular-nums transition-colors duration-(--duration-base)',
                    current ? 'bg-primary text-primary-foreground' : done ? 'bg-foreground text-background' : 'bg-foreground/[0.07] text-muted-foreground group-hover:text-foreground',
                  )}
                >
                  {done ? <Check key="done" className="pop size-3" aria-label="done" /> : index + 1}
                </span>
                <span className={cn('text-sm font-medium whitespace-nowrap', !current && 'sr-only sm:not-sr-only')}>{step.label}</span>
                {status ? (
                  <span key={status.text} className={cn('pop hidden text-xs whitespace-nowrap tabular-nums lg:inline', status.tone === 'alert' ? 'font-medium text-destructive-strong' : 'text-muted-foreground')}>
                    {status.text}
                  </span>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** The room being worked on, and the switch to the other rooms. Stays in place while a room loads. */
function RoomMenu() {
  const { snapshot, loading } = useRoomStore();
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useRoomPreset();
  const [, setPiece] = useQueryState('piece');
  const roomHref = useRoomHref();
  const current = roomPreset(preset).template;
  const room = snapshot?.room.preset === preset ? snapshot.room : null;
  const lengthIn = room?.lengthIn ?? current.lengthIn;
  const widthIn = room?.widthIn ?? current.widthIn;
  const assumed = snapshot?.features.filter((feature) => feature.status !== 'confirmed').length ?? 0;

  const choose = (id: RoomPresetId) => {
    setOpen(false);
    if (id === preset) return;
    void setPiece(null);
    void setPreset(id, { history: 'push' });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        aria-label={`Room: ${current.name}. Switch room`}
        className="hidden h-8 min-w-0 items-center gap-2 rounded-lg pr-2 pl-1 transition-colors duration-(--duration-fast) hover:bg-foreground/[0.06] data-[popup-open]:bg-foreground/[0.06] lg:inline-flex"
      >
        <span className="grid size-6 shrink-0 place-items-center rounded-md bg-card">
          {loading ? <span className="spinner size-3.5 rounded-full border-2 border-muted-foreground/30 border-t-muted-foreground" aria-hidden="true" /> : <RoomThumb room={current} className="size-5" />}
        </span>
        <span key={preset} className="pop truncate font-serif text-base text-foreground">{current.name}</span>
        <span className="text-xs tabular-nums text-muted-foreground">
          {formatFeetInches(lengthIn)} × {formatFeetInches(widthIn)}
        </span>
        <ChevronDown className="size-3.5 text-muted-foreground" aria-hidden="true" />
      </PopoverTrigger>
      <PopoverContent align="start" className="flex w-96 flex-col gap-1 p-2">
        <p className="px-2 pt-1 pb-1.5 text-xs font-medium text-muted-foreground">Rooms</p>
        <ul aria-label="Rooms" className="flex flex-col gap-0.5">
          {ROOM_PRESETS.map((option) => {
            const selected = option.id === preset;
            return (
              <li key={option.id}>
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => choose(option.id)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg p-2 text-left outline-none transition-[background-color,scale] duration-(--duration-fast) focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-row)',
                    selected ? 'bg-primary/[0.08]' : 'hover:bg-foreground/[0.04]',
                  )}
                >
                  <span className="grid h-11 w-14 shrink-0 place-items-center rounded-md bg-muted/70 p-1.5">
                    <RoomThumb room={option.template} className="max-h-full max-w-full" />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-sm font-medium text-foreground">{option.template.name}</span>
                    <span className="truncate text-xs text-muted-foreground">
                      <span className="tabular-nums">{formatFeetInches(option.template.lengthIn)} × {formatFeetInches(option.template.widthIn)}</span> · {option.summary}
                    </span>
                  </span>
                  {selected ? <Check className="size-4 shrink-0 text-primary" aria-hidden="true" /> : null}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="mt-1 flex items-center justify-between gap-3 rounded-lg bg-muted/50 py-2 pr-2 pl-3">
          <p className="text-xs text-muted-foreground">
            {snapshot ? (assumed ? `${assumed} assumption${assumed === 1 ? '' : 's'} to confirm in this room` : 'Everything in this room is confirmed') : 'Loading room…'}
          </p>
          <Link href={roomHref('/room?view=plan&tab=room')} onClick={() => setOpen(false)} className={button({ variant: 'outline', size: 'xs' })}>
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
    <header className="flex h-13 shrink-0 items-stretch gap-3 px-3 [view-transition-name:app-bar] sm:gap-5 sm:px-4 print:hidden">
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
      <div className="flex shrink-0 items-center justify-end sm:flex-1">
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

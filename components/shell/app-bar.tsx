'use client';

import { Bookmark } from '@/components/icons';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLayoutEffect, useRef } from 'react';

import { type RoomProgress, useRoomProgress, useRoomStore } from '@/components/room/room-provider';
import { attachSegmentPill } from '@/components/ui/toggle-group';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { formatFeetInches } from '@/lib/units';
import { cn } from '@/lib/utils';

export type WorkflowStep = 'find' | 'fit' | 'present';

interface Step {
  id: WorkflowStep;
  label: string;
  href: string;
  /** Short live count shown beside the label on wide screens. */
  status: (progress: RoomProgress) => string | null;
}

const STEPS: readonly Step[] = [
  { id: 'find', label: 'Find pieces', href: '/catalog', status: ({ shortlisted }) => (shortlisted ? String(shortlisted) : null) },
  {
    id: 'fit',
    label: 'Fit the room',
    href: '/room?view=plan',
    status: ({ shortlisted, placed, problems }) =>
      !shortlisted ? null : problems ? `${problems} to fix` : `${placed}/${shortlisted}`,
  },
  { id: 'present', label: 'Show the client', href: '/room?view=wall', status: () => null },
];

function activeStep(pathname: string, view: string | null): WorkflowStep | null {
  if (pathname.startsWith('/catalog')) return 'find';
  if (pathname.startsWith('/room')) return view === 'wall' || view === 'tape' ? 'present' : 'fit';
  return null;
}

function StepNav({ active }: { active: WorkflowStep | null }) {
  const progress = useRoomProgress();
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
          return (
            <li key={step.id} className="shrink-0">
              <Link
                href={step.href}
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
                    current ? 'bg-primary text-primary-foreground' : 'bg-foreground/[0.07] text-muted-foreground group-hover:text-foreground',
                  )}
                >
                  {index + 1}
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

function RoomChip() {
  const { snapshot } = useRoomStore();
  if (!snapshot) return null;
  const { room } = snapshot;
  return (
    <p className="hidden min-w-0 items-baseline gap-2 truncate lg:flex">
      <span className="truncate font-serif text-base leading-none text-foreground">{room.name}</span>
      <span className="text-xs tabular-nums text-muted-foreground">
        {formatFeetInches(room.lengthIn)} × {formatFeetInches(room.widthIn)}
      </span>
    </p>
  );
}

/** Persistent top bar: brand, the room being worked on, and the three-step job. */
export function AppBar() {
  const pathname = usePathname();
  const view = useSearchParams().get('view');
  const libraryActive = pathname.startsWith('/library');

  return (
    <header className="flex h-13 shrink-0 items-center gap-3 px-3 [view-transition-name:app-bar] sm:gap-5 sm:px-4 print:hidden">
      <div className="flex shrink-0 items-center gap-5 sm:min-w-0 sm:flex-1 sm:shrink">
        <Link
          href="/catalog"
          aria-label="Suede catalog"
          className="rounded-md font-logo text-2xl leading-none tracking-[-0.055em] text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          suede
        </Link>
        <RoomChip />
      </div>
      <StepNav active={activeStep(pathname, view)} />
      <div className="flex shrink-0 justify-end sm:flex-1">
        <Tooltip>
          <TooltipTrigger
            render={
              <Link
                href="/library"
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

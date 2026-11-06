'use client';

import { Bookmark, Check, ChevronRight } from '@/components/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { type RoomProgress, useRoomProgress } from '@/components/room/room-provider';
import { RoomMenu } from '@/components/shell/room-menu';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useRoomHref } from '@/lib/url-state';
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
    href: '/room',
    status: ({ shortlisted, placed, problems }) =>
      !shortlisted ? null : problems ? { text: `${problems} to fix`, tone: 'alert' } : { text: `${placed} of ${shortlisted} placed`, tone: 'muted' },
    done: ({ shortlisted, placed, problems }) => shortlisted > 0 && placed === shortlisted && problems === 0,
  },
  { id: 'present', label: 'Show the client', href: '/present', status: () => null, done: () => false },
];

function activeStep(pathname: string): WorkflowStep | null {
  if (pathname.startsWith('/catalog')) return 'find';
  if (pathname.startsWith('/room')) return 'fit';
  if (pathname.startsWith('/present')) return 'present';
  return null;
}

/** The three-step job as navigation, underlined like the planner's tabs; each step says how far along it is. */
function StepNav({ active, className }: { active: WorkflowStep | null; className?: string }) {
  const progress = useRoomProgress();
  const roomHref = useRoomHref();

  return (
    <nav aria-label="Workflow" className={cn('min-w-0 overflow-x-auto scrollbar-none', className)}>
      <ol className="flex h-full items-center">
        {STEPS.map((step, index) => {
          const current = step.id === active;
          const done = !current && step.done(progress);
          const status = step.status(progress);
          return (
            <li key={step.id} className="flex h-full shrink-0 items-center">
              {index > 0 ? <ChevronRight className="size-3.5 text-muted-foreground/60 sm:mx-1" aria-hidden="true" /> : null}
              <Link
                href={roomHref(step.href)}
                aria-current={current ? 'step' : undefined}
                className={cn(
                  'group relative flex h-full items-center gap-1.5 px-1.5 outline-none transition-colors duration-(--duration-fast) sm:gap-2 sm:px-2',
                  'after:absolute after:inset-x-1.5 sm:after:inset-x-2 after:bottom-0 after:h-0.5 after:rounded-full after:transition-colors after:duration-(--duration-base)',
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
                <span className="text-xs font-medium whitespace-nowrap sm:text-sm">{step.label}</span>
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

/** Persistent top bar: brand, the room being worked on, and the three-step job. */
export function AppBar() {
  const pathname = usePathname();
  const libraryActive = pathname.startsWith('/library');
  const roomHref = useRoomHref();

  return (
    // Below lg the steps take a second row, so the room and all three step names stay visible.
    <header className="flex shrink-0 flex-wrap items-stretch gap-x-3 px-3 [view-transition-name:app-bar] sm:px-4 lg:h-13 lg:flex-nowrap lg:gap-x-5 print:hidden">
      <div className="flex h-13 min-w-0 flex-1 items-center gap-3 lg:h-auto">
        <Link
          href={roomHref('/catalog')}
          aria-label="Suede catalog"
          className="rounded-md font-logo text-2xl leading-none tracking-[-0.055em] text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          suede
        </Link>
        <RoomMenu />
      </div>
      <StepNav active={activeStep(pathname)} className="order-last -mx-2 h-11 w-[calc(100%+1rem)] lg:order-none lg:mx-0 lg:h-auto lg:w-auto" />
      <div className="flex h-13 shrink-0 items-center justify-end lg:h-auto lg:flex-1">
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

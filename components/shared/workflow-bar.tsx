import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { MeasurementStatusBadge } from '@/components/room/measurement-status-badge';
import type { Room } from '@/lib/room-state';
import { formatFeetInches } from '@/lib/units';
import { cn } from '@/lib/utils';

export type WorkflowStep = 'find' | 'fit' | 'present';

interface WorkflowBarProps {
  room: Room | null;
  active: WorkflowStep;
  shortlisted: number;
  placed: number;
  /** Shown on the fit step when known; the catalog does not compute fit. */
  problems?: number;
}

/** The three-step job, with where you are and what each step still needs. */
export function WorkflowBar({ room, active, shortlisted, placed, problems }: WorkflowBarProps) {
  const steps: Array<{ id: WorkflowStep; label: string; href: string; status: string }> = [
    { id: 'find', label: 'Find pieces', href: '/catalog', status: shortlisted ? `${shortlisted} shortlisted` : 'Start with the brief' },
    {
      id: 'fit',
      label: 'Fit the room',
      href: '/room?view=plan',
      status: !shortlisted
        ? 'Shortlist first'
        : problems
          ? `${placed} placed · ${problems} to fix`
          : `${placed} of ${shortlisted} placed`,
    },
    { id: 'present', label: 'Show the client', href: '/room?view=wall', status: 'Wall view, tape-out' },
  ];

  return (
    <nav aria-label="Workflow" className="flex flex-col gap-3 rounded-xl border border-border bg-white/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between print:hidden">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="truncate font-serif text-lg leading-none tracking-[-0.02em] text-foreground">{room?.name ?? 'Client room'}</span>
        {room ? (
          <span className="flex shrink-0 items-center gap-2 text-xs tabular-nums text-muted-foreground">
            {formatFeetInches(room.lengthIn)} × {formatFeetInches(room.widthIn)}
            <MeasurementStatusBadge status={room.dimensionsStatus} />
          </span>
        ) : null}
      </div>
      <ol className="flex items-center gap-1 overflow-x-auto">
        {steps.map((step, index) => {
          const current = step.id === active;
          return (
            <li key={step.id} className="flex shrink-0 items-center gap-1">
              {index > 0 ? <ChevronRight className="size-3.5 text-[#c4b8ad]" aria-hidden="true" /> : null}
              <Link
                href={step.href}
                aria-current={current ? 'step' : undefined}
                className={cn(
                  'flex items-center gap-2 rounded-lg px-2.5 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-ring',
                  current ? 'bg-accent' : 'hover:bg-accent/60',
                )}
              >
                <span
                  className={cn(
                    'grid size-5 place-items-center rounded-full text-[11px] font-semibold tabular-nums',
                    current ? 'bg-primary text-primary-foreground' : 'bg-[#ebe5de] text-[#6b5f55]',
                  )}
                >
                  {index + 1}
                </span>
                <span className="flex flex-col leading-tight">
                  <span className={cn('text-sm', current ? 'font-medium text-foreground' : 'text-[#5b5048]')}>{step.label}</span>
                  <span className="text-[11px] text-muted-foreground">{step.status}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

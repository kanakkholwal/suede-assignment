import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/lib/utils';

/** A rounded surface on the canvas. Islands sit 6px apart; the gap is the only divider. */
export function Island({ className, ...props }: ComponentProps<'section'>) {
  return (
    <section
      className={cn('flex min-h-0 min-w-0 flex-col overflow-hidden rounded-xl bg-card', className)}
      {...props}
    />
  );
}

interface IslandHeaderProps {
  title: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
  className?: string;
  /** Renders the title as this heading level for the page outline. */
  as?: 'h1' | 'h2';
}

export function IslandHeader({ title, meta, actions, className, as: Heading = 'h2' }: IslandHeaderProps) {
  return (
    <header className={cn('flex min-h-12 shrink-0 items-center gap-3 px-4 py-2', className)}>
      <div className="flex min-w-0 flex-1 items-baseline gap-2">
        <Heading className="truncate text-sm font-semibold text-foreground">{title}</Heading>
        {meta ? <span className="truncate text-xs tabular-nums text-muted-foreground">{meta}</span> : null}
      </div>
      {actions ? <div className="flex shrink-0 items-center gap-1.5">{actions}</div> : null}
    </header>
  );
}

interface PanelSectionProps {
  title: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** A titled group inside an island. Sentence-case title, no uppercase eyebrow. */
export function PanelSection({ title, action, children, className }: PanelSectionProps) {
  return (
    <section className={cn('flex flex-col gap-2.5', className)} aria-label={title}>
      <div className="flex min-h-5 items-center justify-between gap-2">
        <h3 className="text-xs font-medium text-muted-foreground">{title}</h3>
        {action}
      </div>
      {children}
    </section>
  );
}

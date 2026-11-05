import { cn } from '@/lib/utils';

/** A small count beside a tab or step label; `alert` marks problems, never decoration. */
export function CountBadge({ children, tone = 'muted', className }: { children: string | number; tone?: 'muted' | 'alert'; className?: string }) {
  return (
    <span
      key={String(children)}
      className={cn(
        'pop grid h-4.5 min-w-4.5 place-items-center rounded-full px-1.5 text-xs leading-none font-medium tabular-nums',
        tone === 'alert' ? 'bg-destructive text-destructive-foreground' : 'bg-foreground/[0.07] text-muted-foreground',
        className,
      )}
    >
      {children}
    </span>
  );
}

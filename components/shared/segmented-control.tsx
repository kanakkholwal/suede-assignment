'use client';

import type { LucideIcon } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

import { attachSegmentPill } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';

export interface SegmentOption<T extends string> {
  value: T;
  label: string;
  ariaLabel?: string;
  icon?: LucideIcon;
}

interface SegmentedControlProps<T extends string> {
  label: string;
  value: T;
  options: readonly SegmentOption<T>[];
  onChange: (value: T) => void;
  /** Hides text labels below `sm`, leaving icons. */
  compact?: boolean;
  size?: 'sm' | 'default';
  className?: string;
}

/** Toggle buttons with one pill that slides to the pressed option. */
export function SegmentedControl<T extends string>({ label, value, options, onChange, compact = false, size = 'sm', className }: SegmentedControlProps<T>) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!trackRef.current || !pillRef.current) return;
    return attachSegmentPill(trackRef.current, pillRef.current);
  }, []);

  return (
    <div
      ref={trackRef}
      role="group"
      aria-label={label}
      className={cn('relative isolate inline-flex shrink-0 items-center gap-0.5 rounded-lg bg-foreground/[0.05] p-0.5', size === 'sm' ? 'h-8' : 'h-9', className)}
    >
      <span
        ref={pillRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 -z-1 rounded-md bg-card data-[ready=true]:transition-[translate,width,height] data-[ready=true]:duration-(--duration-spring-snappy) data-[ready=true]:ease-(--ease-spring-snappy)"
      />
      {options.map((option) => {
        const Icon = option.icon;
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-label={option.ariaLabel}
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            className={cn(
              'inline-flex h-full items-center gap-1.5 rounded-md px-2.5 font-medium outline-none transition-[color,scale] duration-(--duration-fast) focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-sm) [&_svg]:size-3.5',
              size === 'sm' ? 'text-xs' : 'text-sm',
              active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {Icon ? <Icon aria-hidden="true" /> : null}
            <span className={compact && Icon ? 'hidden sm:inline' : undefined}>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}

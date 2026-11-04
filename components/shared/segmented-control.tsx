'use client';

import type { LucideIcon } from 'lucide-react';

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
  className?: string;
}

export function SegmentedControl<T extends string>({ label, value, options, onChange, compact = false, className }: SegmentedControlProps<T>) {
  return (
    <div role="group" aria-label={label} className={cn('inline-flex rounded-md border border-[#d9d3cd] bg-white p-0.5 shadow-sm', className)}>
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
              'inline-flex h-7 items-center gap-1.5 rounded px-2 text-xs font-medium transition focus-visible:outline-2 focus-visible:outline-[#886b54]',
              active ? 'bg-[#ede7e0] text-[#2c241f]' : 'text-[#766b62] hover:text-[#2c241f]',
            )}
          >
            {Icon ? <Icon className="size-3.5" aria-hidden="true" /> : null}
            <span className={compact && Icon ? 'hidden sm:inline' : undefined}>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}

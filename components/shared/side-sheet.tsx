'use client';

import { X } from 'lucide-react';
import { type KeyboardEvent, type ReactNode, type RefObject, useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface SideSheetProps {
  open: boolean;
  onClose: () => void;
  label: string;
  closeLabel: string;
  title: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  /** Receives focus back on close, usually the trigger. */
  returnFocusRef?: RefObject<HTMLElement | null>;
  className?: string;
  /** Drops body padding for content that brings its own. */
  flush?: boolean;
}

/** Right-hand modal sheet with Escape, outside click and a focus trap. */
export function SideSheet({ open, onClose, label, closeLabel, title, children, footer, returnFocusRef, className, flush = false }: SideSheetProps) {
  const sheetRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const returnTarget = returnFocusRef?.current;
    closeRef.current?.focus();
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      onCloseRef.current();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      returnTarget?.focus();
    };
  }, [open, returnFocusRef]);

  if (!open) return null;

  const trapFocus = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Tab' || !sheetRef.current) return;
    const focusable = [...sheetRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-foreground/25 p-1.5 transition-opacity duration-(--duration-backdrop) ease-(--ease-ui-out) starting:opacity-0"
      onMouseDown={onClose}
    >
      <section
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onKeyDown={trapFocus}
        onMouseDown={(event) => event.stopPropagation()}
        className={cn(
          'ml-auto flex h-full w-full max-w-sm flex-col overflow-hidden rounded-xl bg-card shadow-overlay',
          'transition-transform duration-(--duration-overlay) ease-(--ease-drawer) starting:translate-x-8 motion-reduce:starting:translate-x-0',
          className,
        )}
      >
        <div className="flex min-h-12 items-center justify-between gap-3 py-2 pr-2 pl-4">
          <div className="text-sm font-semibold text-foreground">{title}</div>
          <button
            ref={closeRef}
            type="button"
            aria-label={closeLabel}
            onClick={onClose}
            className="grid size-8 place-items-center rounded-lg text-muted-foreground outline-none transition-[background-color,color,scale] duration-(--duration-fast) hover:bg-foreground/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-icon)"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        <div className={cn('flex min-h-0 flex-1 flex-col overflow-y-auto', !flush && 'p-4')}>{children}</div>
        {footer ? <div className="p-3">{footer}</div> : null}
      </section>
    </div>
  );
}

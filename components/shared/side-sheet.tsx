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
}

/** Right-hand modal sheet with Escape, outside click and a focus trap. */
export function SideSheet({ open, onClose, label, closeLabel, title, children, footer, returnFocusRef, className }: SideSheetProps) {
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
    <div className="fixed inset-0 z-50 bg-black/35 p-4 backdrop-blur-[1px]" onMouseDown={onClose}>
      <section
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onKeyDown={trapFocus}
        onMouseDown={(event) => event.stopPropagation()}
        className={cn('ml-auto flex h-full w-full max-w-sm flex-col overflow-hidden rounded-xl bg-[#fdfcfa] shadow-overlay', className)}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#806f63]">{title}</div>
          <button
            ref={closeRef}
            type="button"
            aria-label={closeLabel}
            onClick={onClose}
            className="grid size-8 place-items-center rounded-full text-[#564b43] hover:bg-[#f0ece7] focus-visible:outline-2 focus-visible:outline-[#886b54]"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-5">{children}</div>
        {footer ? <div className="border-t border-border bg-[#fdfcfa] p-4">{footer}</div> : null}
      </section>
    </div>
  );
}

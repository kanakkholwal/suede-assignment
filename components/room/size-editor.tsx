'use client';

import { type ReactNode, useState } from 'react';

import { DimensionForm } from '@/components/room/dimension-form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import type { DimensionValues, ResolvedDimensions } from '@/lib/dimensions';

interface SizeEditorProps {
  current: ResolvedDimensions;
  onSave: (values: DimensionValues, note: string) => Promise<boolean>;
  onClear?: () => void;
  disabled?: boolean;
  /** Classes for the trigger, which renders as a plain button. */
  triggerClassName: string;
  children: ReactNode;
}

/** The designer's own measurement in a popover anchored to its trigger, so the list never jumps. */
export function SizeEditor({ current, onSave, onClear, disabled, triggerClassName, children }: SizeEditorProps) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger disabled={disabled} className={triggerClassName}>
        {children}
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80 p-4">
        <DimensionForm
          current={current}
          onSave={onSave}
          onCancel={() => setOpen(false)}
          onClear={onClear ? () => {
            onClear();
            setOpen(false);
          } : undefined}
        />
      </PopoverContent>
    </Popover>
  );
}

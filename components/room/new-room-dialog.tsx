'use client';

import { type FormEvent, useId, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import type { NewRoom } from '@/lib/room-state';
import { parseLength } from '@/lib/units';

const LABEL = 'flex min-w-0 flex-col gap-1.5 text-xs text-muted-foreground';

interface NewRoomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (room: NewRoom) => Promise<{ id: string } | { error: string }>;
  onCreated: (id: string) => void;
}

/** Starts a blank room from the user's own numbers; doors and windows are added after, on the plan. */
export function NewRoomDialog({ open, onOpenChange, onCreate, onCreated }: NewRoomDialogProps) {
  const id = useId();
  const [values, setValues] = useState({ name: '', length: '', width: '', ceiling: '' });
  const [measured, setMeasured] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const field = (key: keyof typeof values) => ({ value: values[key], onChange: (event: { target: { value: string } }) => setValues((current) => ({ ...current, [key]: event.target.value })) });

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const lengthIn = parseLength(values.length);
    const widthIn = parseLength(values.width);
    const ceilingIn = values.ceiling.trim() ? parseLength(values.ceiling) : null;
    if (!values.name.trim()) return setError('Give the room a name.');
    if (lengthIn === null || widthIn === null || (values.ceiling.trim() && ceilingIn === null)) {
      return setError('Use feet and inches like 12′ 6″, or inches like 150.');
    }
    setError(null);
    setSaving(true);
    const result = await onCreate({ name: values.name.trim(), lengthIn, widthIn, ceilingIn, status: measured ? 'confirmed' : 'stated' });
    setSaving(false);
    if ('error' in result) return setError(result.error);
    setValues({ name: '', length: '', width: '', ceiling: '' });
    onCreated(result.id);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form id={`${id}-form`} onSubmit={submit} className="flex flex-col gap-5" aria-label="New room">
          <DialogHeader>
            <DialogTitle>New room</DialogTitle>
            <DialogDescription>The size of the floor, wall to wall. You can add the door, windows and radiators next.</DialogDescription>
          </DialogHeader>
          <label htmlFor={`${id}-name`} className={LABEL}>
            Name
            <Input size="sm" id={`${id}-name`} autoFocus maxLength={60} placeholder="e.g. Living room, Sam’s bedroom" {...field('name')} />
          </label>
          <div className="grid grid-cols-3 gap-3">
            <label htmlFor={`${id}-length`} className={LABEL}>
              Long side
              <Input size="sm" id={`${id}-length`} placeholder="15′" className="tabular-nums" {...field('length')} />
            </label>
            <label htmlFor={`${id}-width`} className={LABEL}>
              Short side
              <Input size="sm" id={`${id}-width`} placeholder="12′" className="tabular-nums" {...field('width')} />
            </label>
            <label htmlFor={`${id}-ceiling`} className={LABEL}>
              Ceiling (optional)
              <Input size="sm" id={`${id}-ceiling`} placeholder="8′" className="tabular-nums" {...field('ceiling')} />
            </label>
          </div>
          <Checkbox checked={measured} onCheckedChange={setMeasured} label="Measured with a tape, wall to wall" />
          {error ? <p role="alert" className="text-xs text-destructive-strong">{error}</p> : null}
          <DialogFooter>
            <div className="flex justify-end gap-2">
              <Button type="button" size="sm" variant="ghost" onClick={() => onOpenChange(false)}>Cancel</Button>
              <Button type="submit" size="sm" form={`${id}-form`} aria-busy={saving} disabled={saving}>Create room</Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

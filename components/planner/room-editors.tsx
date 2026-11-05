'use client';

import { type FormEvent, type ReactNode, useId, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { MeasurementStatus, Room, RoomFeature, RoomFeaturePatch, Wall } from '@/lib/room-state';
import { WALLS } from '@/lib/room-state';
import { formatFeetInches, formatInches, parseLength } from '@/lib/units';

export const FEATURE_LABEL: Record<RoomFeature['kind'], string> = { window: 'Window', door: 'Door', radiator: 'Radiator' };

const LABEL = 'flex min-w-0 flex-col gap-1.5 text-xs text-muted-foreground';

export type SaveRoom = (lengthIn: number, widthIn: number, ceilingIn: number | null, status: MeasurementStatus) => Promise<boolean>;
export type SaveFeature = (patch: RoomFeaturePatch, status: MeasurementStatus) => Promise<boolean>;

function capitalise(word: string): string {
  return word[0].toUpperCase() + word.slice(1);
}

function cornerName(wall: Wall): string {
  return wall === 'north' || wall === 'south' ? 'west' : 'north';
}

function FieldSelect<T extends string>({ id, value, items, onChange }: { id: string; value: T; items: ReadonlyArray<{ value: T; label: string }>; onChange: (value: T) => void }) {
  return (
    <Select size="sm" value={value} items={items} onValueChange={(next) => onChange(next as T)}>
      <SelectTrigger id={id} className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

/** `form` ties Save to its form when the dialog footer portals outside it. */
function FormActions({ onCancel, form }: { onCancel: () => void; form?: string }) {
  return (
    <div className="flex justify-end gap-2">
      <Button type="button" size="sm" variant="ghost" onClick={onCancel}>Cancel</Button>
      <Button type="submit" size="sm" form={form}>Save</Button>
    </div>
  );
}

/** Room size in a popover anchored to its trigger. */
export function RoomSizePopover({ room, onSave, disabled, triggerClassName, children }: { room: Room; onSave: SaveRoom; disabled: boolean; triggerClassName: string; children: ReactNode }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({ length: '', width: '', ceiling: '' });
  const [measured, setMeasured] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = (next: boolean) => {
    if (next) {
      setValues({
        length: formatFeetInches(room.lengthIn),
        width: formatFeetInches(room.widthIn),
        ceiling: room.ceilingIn === null ? '' : formatFeetInches(room.ceilingIn),
      });
      setMeasured(room.dimensionsStatus === 'confirmed');
      setError(null);
    }
    setOpen(next);
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const length = parseLength(values.length);
    const width = parseLength(values.width);
    const ceiling = values.ceiling.trim() ? parseLength(values.ceiling) : null;
    if (length === null || width === null || (values.ceiling.trim() && ceiling === null)) {
      setError('Use feet and inches like 15′ or 14′ 11½″, or plain inches.');
      return;
    }
    const changed = length !== room.lengthIn || width !== room.widthIn || ceiling !== room.ceilingIn;
    const status: MeasurementStatus = measured ? 'confirmed' : changed ? 'assumed' : room.dimensionsStatus;
    if (await onSave(length, width, ceiling, status)) setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={reset}>
      <PopoverTrigger disabled={disabled} className={triggerClassName}>{children}</PopoverTrigger>
      <PopoverContent align="start" className="w-80 p-4">
        <form onSubmit={submit} className="flex flex-col gap-4" aria-label="Room size">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-semibold text-foreground">Room size</p>
            <p className="text-xs text-muted-foreground">Feet and inches, like 14′ 11½″.</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {(['length', 'width', 'ceiling'] as const).map((field) => (
              <label key={field} htmlFor={`${id}-${field}`} className={LABEL}>
                {field === 'length' ? 'Long walls' : field === 'width' ? 'Short walls' : 'Ceiling'}
                <Input size="sm" id={`${id}-${field}`} autoFocus={field === 'length'} value={values[field]} onChange={(event) => setValues((current) => ({ ...current, [field]: event.target.value }))} className="min-w-0 tabular-nums" />
              </label>
            ))}
          </div>
          <Checkbox checked={measured} onCheckedChange={setMeasured} label="Measured with a tape, wall to wall" />
          {error ? <p role="alert" className="text-xs text-destructive-strong">{error}</p> : null}
          <FormActions onCancel={() => setOpen(false)} />
        </form>
      </PopoverContent>
    </Popover>
  );
}

/** A window, door or radiator: position, size and swing, in a dialog. */
export function FeatureDialog({ feature, onSave, disabled, triggerClassName, children }: { feature: RoomFeature; onSave: SaveFeature; disabled: boolean; triggerClassName: string; children: ReactNode }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [wall, setWall] = useState<Wall>(feature.wall);
  const [offset, setOffset] = useState('');
  const [width, setWidth] = useState('');
  const [swing, setSwing] = useState<'in' | 'out'>('in');
  const [hinge, setHinge] = useState<'start' | 'end'>('start');
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const label = FEATURE_LABEL[feature.kind];

  const reset = (next: boolean) => {
    if (next) {
      setWall(feature.wall);
      setOffset(formatInches(feature.offsetIn));
      setWidth(formatInches(feature.widthIn));
      setSwing(feature.swing ?? 'in');
      setHinge(feature.hinge ?? 'start');
      setConfirmed(false);
      setError(null);
    }
    setOpen(next);
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const offsetIn = /^0\s*(″|"|in)?$/.test(offset.trim()) ? 0 : parseLength(offset);
    const widthIn = parseLength(width);
    if (offsetIn === null || widthIn === null) {
      setError('Use inches like 36, or feet and inches like 3′ 2″.');
      return;
    }
    const patch: RoomFeaturePatch = { wall, offsetIn, widthIn, ...(feature.kind === 'door' ? { swing, hinge } : {}) };
    if (await onSave(patch, confirmed ? 'confirmed' : 'assumed')) setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={reset}>
      <DialogTrigger disabled={disabled} className={triggerClassName}>{children}</DialogTrigger>
      <DialogContent>
        <form id={`${id}-form`} onSubmit={submit} className="flex flex-col gap-5" aria-label={`Adjust ${label.toLowerCase()}`}>
          <DialogHeader>
            <DialogTitle>Adjust {label.toLowerCase()}</DialogTitle>
            <DialogDescription>{feature.clientSaid ? `Client said: “${feature.clientSaid}”` : 'Where it sits and how big it is.'}</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-3">
            <label htmlFor={`${id}-wall`} className={LABEL}>
              Wall
              <FieldSelect id={`${id}-wall`} value={wall} items={WALLS.map((option) => ({ value: option, label: capitalise(option) }))} onChange={setWall} />
            </label>
            <label htmlFor={`${id}-offset`} className={LABEL}>
              From {cornerName(wall)} corner
              <Input size="sm" id={`${id}-offset`} value={offset} onChange={(event) => setOffset(event.target.value)} className="min-w-0 tabular-nums" />
            </label>
            <label htmlFor={`${id}-width`} className={LABEL}>
              Width
              <Input size="sm" id={`${id}-width`} value={width} onChange={(event) => setWidth(event.target.value)} className="min-w-0 tabular-nums" />
            </label>
            {feature.kind === 'door' ? (
              <>
                <label htmlFor={`${id}-swing`} className={LABEL}>
                  Swings
                  <FieldSelect id={`${id}-swing`} value={swing} items={[{ value: 'in', label: 'Into the room' }, { value: 'out', label: 'Out of the room' }]} onChange={setSwing} />
                </label>
                <label htmlFor={`${id}-hinge`} className={LABEL}>
                  Hinges at
                  <FieldSelect
                    id={`${id}-hinge`}
                    value={hinge}
                    items={[
                      { value: 'start', label: `${capitalise(cornerName(wall))} side` },
                      { value: 'end', label: `${cornerName(wall) === 'west' ? 'East' : 'South'} side` },
                    ]}
                    onChange={setHinge}
                  />
                </label>
              </>
            ) : null}
          </div>
          <Checkbox checked={confirmed} onCheckedChange={setConfirmed} label="Confirmed by the client or measured" />
          {error ? <p role="alert" className="text-xs text-destructive-strong">{error}</p> : null}
          <DialogFooter>
            <FormActions onCancel={() => setOpen(false)} form={`${id}-form`} />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

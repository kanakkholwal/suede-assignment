'use client';

import { Check, ChevronDown, Copy, DoorOpen, Heater, PanelsTopLeft, Pencil, type IconComponent } from '@/components/icons';
import { type FormEvent, useId, useState } from 'react';

import { MeasurementStatusBadge } from '@/components/room/measurement-status-badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NativeSelect } from '@/components/ui/native-select';
import { cn } from '@/lib/utils';
import type { MeasurementStatus, Room, RoomFeature, RoomFeaturePatch, Wall } from '@/lib/room-state';
import { WALLS } from '@/lib/room-state';
import { clientQuestions } from '@/lib/tape-out';
import { formatFeetInches, formatInches, parseLength } from '@/lib/units';

const FEATURE_ICON: Record<RoomFeature['kind'], IconComponent> = { window: PanelsTopLeft, door: DoorOpen, radiator: Heater };
const FEATURE_LABEL: Record<RoomFeature['kind'], string> = { window: 'Window', door: 'Door', radiator: 'Radiator' };
const LABEL = 'flex min-w-0 flex-col gap-1 text-xs text-muted-foreground';
const FORM = 'enter flex flex-col gap-2.5 rounded-lg bg-muted/60 p-3';
const CHECK = 'flex items-center gap-2 text-xs text-foreground [&_input]:size-4 [&_input]:accent-primary';

function cornerName(wall: Wall): string {
  return wall === 'north' || wall === 'south' ? 'west' : 'north';
}

interface RoomFactsPanelProps {
  room: Room;
  features: readonly RoomFeature[];
  disabled: boolean;
  onUpdateRoom: (lengthIn: number, widthIn: number, ceilingIn: number | null, status: MeasurementStatus) => Promise<boolean>;
  onUpdateFeature: (featureId: string, patch: RoomFeaturePatch, status: MeasurementStatus) => Promise<boolean>;
}

function RoomSizeForm({ room, onSave, onCancel }: { room: Room; onSave: RoomFactsPanelProps['onUpdateRoom']; onCancel: () => void }) {
  const id = useId();
  const [values, setValues] = useState({
    length: formatFeetInches(room.lengthIn),
    width: formatFeetInches(room.widthIn),
    ceiling: room.ceilingIn === null ? '' : formatFeetInches(room.ceilingIn),
  });
  const [measured, setMeasured] = useState(room.dimensionsStatus === 'confirmed');
  const [error, setError] = useState<string | null>(null);

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
    if (await onSave(length, width, ceiling, status)) onCancel();
  };

  return (
    <form onSubmit={submit} className={FORM} aria-label="Room size">
      <div className="grid grid-cols-3 gap-2">
        {(['length', 'width', 'ceiling'] as const).map((field) => (
          <label key={field} htmlFor={`${id}-${field}`} className={LABEL}>
            {field === 'length' ? 'Long walls' : field === 'width' ? 'Short walls' : 'Ceiling'}
            <Input size="sm" id={`${id}-${field}`} value={values[field]} onChange={(event) => setValues((current) => ({ ...current, [field]: event.target.value }))} className="min-w-0 tabular-nums" />
          </label>
        ))}
      </div>
      <label className={CHECK}>
        <input type="checkbox" checked={measured} onChange={(event) => setMeasured(event.target.checked)} />
        Measured with a tape, wall to wall
      </label>
      {error ? <p role="alert" className="text-xs text-destructive-strong">{error}</p> : null}
      <div className="flex gap-2">
        <Button type="submit" size="xs">Save</Button>
        <Button type="button" size="xs" variant="ghost" onClick={onCancel}>Cancel</Button>
      </div>
    </form>
  );
}

function FeatureForm({ feature, onSave, onCancel }: { feature: RoomFeature; onSave: (patch: RoomFeaturePatch, status: MeasurementStatus) => Promise<boolean>; onCancel: () => void }) {
  const id = useId();
  const [wall, setWall] = useState<Wall>(feature.wall);
  const [offset, setOffset] = useState(formatInches(feature.offsetIn));
  const [width, setWidth] = useState(formatInches(feature.widthIn));
  const [swing, setSwing] = useState(feature.swing);
  const [hinge, setHinge] = useState(feature.hinge);
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const offsetIn = /^0\s*(″|"|in)?$/.test(offset.trim()) ? 0 : parseLength(offset);
    const widthIn = parseLength(width);
    if (offsetIn === null || widthIn === null) {
      setError('Use inches like 36, or feet and inches like 3′ 2″.');
      return;
    }
    const patch: RoomFeaturePatch = { wall, offsetIn, widthIn, ...(feature.kind === 'door' ? { swing, hinge } : {}) };
    if (await onSave(patch, confirmed ? 'confirmed' : 'assumed')) onCancel();
  };

  return (
    <form onSubmit={submit} className={cn(FORM, 'mt-2')} aria-label={`Adjust ${FEATURE_LABEL[feature.kind].toLowerCase()}`}>
      <div className="grid grid-cols-3 gap-2">
        <label htmlFor={`${id}-wall`} className={LABEL}>
          Wall
          <NativeSelect size="sm" id={`${id}-wall`} value={wall} onChange={(event) => setWall(event.target.value as Wall)}>
            {WALLS.map((option) => <option key={option} value={option}>{option}</option>)}
          </NativeSelect>
        </label>
        <label htmlFor={`${id}-offset`} className={LABEL}>
          From {cornerName(wall)} corner
          <Input size="sm" id={`${id}-offset`} value={offset} onChange={(event) => setOffset(event.target.value)} className="min-w-0 tabular-nums" />
        </label>
        <label htmlFor={`${id}-width`} className={LABEL}>
          Width
          <Input size="sm" id={`${id}-width`} value={width} onChange={(event) => setWidth(event.target.value)} className="min-w-0 tabular-nums" />
        </label>
      </div>
      {feature.kind === 'door' ? (
        <div className="grid grid-cols-2 gap-2">
          <label htmlFor={`${id}-swing`} className={LABEL}>
            Swings
            <NativeSelect size="sm" id={`${id}-swing`} value={swing ?? 'in'} onChange={(event) => setSwing(event.target.value as 'in' | 'out')}>
              <option value="in">into the room</option>
              <option value="out">out of the room</option>
            </NativeSelect>
          </label>
          <label htmlFor={`${id}-hinge`} className={LABEL}>
            Hinges at
            <NativeSelect size="sm" id={`${id}-hinge`} value={hinge ?? 'start'} onChange={(event) => setHinge(event.target.value as 'start' | 'end')}>
              <option value="start">{cornerName(wall)} side</option>
              <option value="end">{cornerName(wall) === 'west' ? 'east' : 'south'} side</option>
            </NativeSelect>
          </label>
        </div>
      ) : null}
      <label className={CHECK}>
        <input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} />
        Confirmed by the client or measured
      </label>
      {error ? <p role="alert" className="text-xs text-destructive-strong">{error}</p> : null}
      <div className="flex gap-2">
        <Button type="submit" size="xs">Save</Button>
        <Button type="button" size="xs" variant="ghost" onClick={onCancel}>Cancel</Button>
      </div>
    </form>
  );
}

/** What the client said, what we assumed from it, and the questions that would settle it. */
export function RoomFactsPanel({ room, features, disabled, onUpdateRoom, onUpdateFeature }: RoomFactsPanelProps) {
  const [editing, setEditing] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const questions = clientQuestions(room, features);

  const copyQuestions = async () => {
    try {
      await navigator.clipboard.writeText(questions.map((question, index) => `${index + 1}. ${question}`).join('\n'));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section aria-label="What we know about the room" className="flex flex-col gap-4">
      {room.clientMessage ? (
        <figure className="flex flex-col gap-1.5">
          <blockquote className="border-l-2 border-primary/40 pl-3 font-serif text-base leading-relaxed text-foreground italic">“{room.clientMessage}”</blockquote>
          <figcaption className="pl-3.5 text-xs text-muted-foreground">The client’s message. Only the size and ceiling are stated; the rest is drawn from assumptions below.</figcaption>
        </figure>
      ) : null}

      <div className="flex flex-col gap-1.5 rounded-lg bg-muted/50 p-3">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-medium tabular-nums text-foreground">
            {formatFeetInches(room.lengthIn)} × {formatFeetInches(room.widthIn)}
            {room.ceilingIn ? ` · ${formatFeetInches(room.ceilingIn)} ceiling` : ''}
          </p>
          <MeasurementStatusBadge status={room.dimensionsStatus} />
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">{room.dimensionsStatus === 'confirmed' ? 'Tape-measured.' : room.note}</p>
        {editing === 'room' ? (
          <RoomSizeForm room={room} onSave={onUpdateRoom} onCancel={() => setEditing(null)} />
        ) : (
          <Button size="xs" variant="link" className="w-fit px-0" disabled={disabled} onClick={() => setEditing('room')}>
            <Pencil aria-hidden="true" /> Edit room size
          </Button>
        )}
      </div>

      <ul className="-mx-1.5 flex flex-col">
        {features.map((feature) => {
          const Icon = FEATURE_ICON[feature.kind];
          const open = expanded === feature.id || editing === feature.id;
          const panelId = `feature-${feature.id}`;
          return (
            <li key={feature.id}>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setExpanded(open ? null : feature.id)}
                className="flex w-full items-center justify-between gap-2 rounded-lg px-1.5 py-2 text-left outline-none transition-colors duration-(--duration-fast) hover:bg-foreground/[0.04] focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex min-w-0 items-center gap-2 text-sm text-foreground">
                  <Icon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span className="font-medium">{FEATURE_LABEL[feature.kind]}</span>
                  <span className="truncate text-muted-foreground">{feature.wall} wall, {formatInches(feature.widthIn)}</span>
                </span>
                <span className="flex shrink-0 items-center gap-1.5">
                  <MeasurementStatusBadge status={feature.status} />
                  <ChevronDown className={cn('size-3.5 text-muted-foreground transition-transform duration-(--duration-base) ease-(--ease-ui-out)', open && 'rotate-180')} aria-hidden="true" />
                </span>
              </button>
              <div id={panelId} className="collapse" data-open={open} inert={!open}>
                <div>
                  <div className="flex flex-col gap-1 px-1.5 pt-0.5 pb-3 pl-7.5">
                    {feature.clientSaid ? <p className="text-xs text-foreground">Client: “{feature.clientSaid}”</p> : null}
                    {feature.status !== 'confirmed' && feature.assumption ? (
                      <p className="text-xs leading-relaxed text-muted-foreground">{feature.assumption}</p>
                    ) : null}
                    {editing === feature.id ? (
                      <FeatureForm feature={feature} onSave={(patch, status) => onUpdateFeature(feature.id, patch, status)} onCancel={() => setEditing(null)} />
                    ) : (
                      <div className="flex flex-wrap gap-x-3">
                        <Button size="xs" variant="link" className="px-0" disabled={disabled} onClick={() => setEditing(feature.id)}>
                          <Pencil aria-hidden="true" /> Adjust
                        </Button>
                        {feature.status !== 'confirmed' ? (
                          <Button size="xs" variant="link" className="px-0" disabled={disabled} onClick={() => void onUpdateFeature(feature.id, {}, 'confirmed')}>
                            <Check aria-hidden="true" /> Client confirmed as drawn
                          </Button>
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {questions.length ? (
        <div className="flex flex-col gap-2 rounded-lg bg-muted/50 p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-medium text-foreground">Ask the client</p>
            <Button size="xs" variant="ghost" onClick={copyQuestions} aria-live="polite">
              {copied ? <Check className="pop" aria-hidden="true" /> : <Copy aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy'}
            </Button>
          </div>
          <ol className="flex list-decimal flex-col gap-1.5 pl-4 text-xs leading-relaxed text-muted-foreground marker:text-foreground">
            {questions.map((question) => <li key={question}>{question}</li>)}
          </ol>
        </div>
      ) : null}
    </section>
  );
}

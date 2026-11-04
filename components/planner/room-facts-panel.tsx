'use client';

import { Check, Copy, DoorOpen, Heater, PanelsTopLeft, Pencil, type LucideIcon } from 'lucide-react';
import { type FormEvent, useId, useState } from 'react';

import { MeasurementStatusBadge } from '@/components/room/measurement-status-badge';
import { Button } from '@/components/ui/button';
import type { MeasurementStatus, Room, RoomFeature, RoomFeaturePatch, Wall } from '@/lib/room-state';
import { WALLS } from '@/lib/room-state';
import { clientQuestions } from '@/lib/tape-out';
import { formatFeetInches, formatInches, parseLength } from '@/lib/units';

const FEATURE_ICON: Record<RoomFeature['kind'], LucideIcon> = { window: PanelsTopLeft, door: DoorOpen, radiator: Heater };
const FEATURE_LABEL: Record<RoomFeature['kind'], string> = { window: 'Window', door: 'Door', radiator: 'Radiator' };
const INPUT = 'h-8 min-w-0 rounded-md border border-input bg-white px-2 text-sm tabular-nums outline-none focus:border-ring focus:ring-2 focus:ring-ring/15';
const LABEL = 'flex min-w-0 flex-col gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground';

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
    <form onSubmit={submit} className="flex flex-col gap-2.5 rounded-lg border border-border bg-[#fbf9f6] p-3" aria-label="Room size">
      <div className="grid grid-cols-3 gap-2">
        {(['length', 'width', 'ceiling'] as const).map((field) => (
          <label key={field} htmlFor={`${id}-${field}`} className={LABEL}>
            {field === 'length' ? 'Long walls' : field === 'width' ? 'Short walls' : 'Ceiling'}
            <input id={`${id}-${field}`} value={values[field]} onChange={(event) => setValues((current) => ({ ...current, [field]: event.target.value }))} className={INPUT} />
          </label>
        ))}
      </div>
      <label className="flex items-center gap-2 text-xs text-foreground">
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
    <form onSubmit={submit} className="mt-2 flex flex-col gap-2.5 rounded-lg border border-border bg-[#fbf9f6] p-3" aria-label={`Adjust ${FEATURE_LABEL[feature.kind].toLowerCase()}`}>
      <div className="grid grid-cols-3 gap-2">
        <label htmlFor={`${id}-wall`} className={LABEL}>
          Wall
          <select id={`${id}-wall`} value={wall} onChange={(event) => setWall(event.target.value as Wall)} className={INPUT}>
            {WALLS.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>
        <label htmlFor={`${id}-offset`} className={LABEL}>
          From {cornerName(wall)} corner
          <input id={`${id}-offset`} value={offset} onChange={(event) => setOffset(event.target.value)} className={INPUT} />
        </label>
        <label htmlFor={`${id}-width`} className={LABEL}>
          Width
          <input id={`${id}-width`} value={width} onChange={(event) => setWidth(event.target.value)} className={INPUT} />
        </label>
      </div>
      {feature.kind === 'door' ? (
        <div className="grid grid-cols-2 gap-2">
          <label htmlFor={`${id}-swing`} className={LABEL}>
            Swings
            <select id={`${id}-swing`} value={swing ?? 'in'} onChange={(event) => setSwing(event.target.value as 'in' | 'out')} className={INPUT}>
              <option value="in">into the room</option>
              <option value="out">out of the room</option>
            </select>
          </label>
          <label htmlFor={`${id}-hinge`} className={LABEL}>
            Hinges at
            <select id={`${id}-hinge`} value={hinge ?? 'start'} onChange={(event) => setHinge(event.target.value as 'start' | 'end')} className={INPUT}>
              <option value="start">{cornerName(wall)} side</option>
              <option value="end">{cornerName(wall) === 'west' ? 'east' : 'south'} side</option>
            </select>
          </label>
        </div>
      ) : null}
      <label className="flex items-center gap-2 text-xs text-foreground">
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
    <section aria-labelledby="room-facts-title" className="flex flex-col gap-3">
      <h2 id="room-facts-title" className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#84776e]">What we know about the room</h2>

      {room.clientMessage ? (
        <blockquote className="border-l-2 border-primary/50 pl-3 text-sm italic leading-relaxed text-[#4a3e35]">“{room.clientMessage}”</blockquote>
      ) : null}

      <div className="rounded-lg border border-border bg-white p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-sm font-medium tabular-nums text-foreground">
              {formatFeetInches(room.lengthIn)} × {formatFeetInches(room.widthIn)}
              {room.ceilingIn ? ` · ${formatFeetInches(room.ceilingIn)} ceiling` : ''}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{room.dimensionsStatus === 'confirmed' ? 'Tape-measured.' : room.note}</p>
          </div>
          <MeasurementStatusBadge status={room.dimensionsStatus} />
        </div>
        {editing === 'room' ? (
          <div className="mt-2"><RoomSizeForm room={room} onSave={onUpdateRoom} onCancel={() => setEditing(null)} /></div>
        ) : (
          <Button size="xs" variant="link" className="mt-1 px-0" disabled={disabled} onClick={() => setEditing('room')}>
            <Pencil aria-hidden="true" /> Edit room size
          </Button>
        )}
      </div>

      <ul className="flex flex-col gap-2">
        {features.map((feature) => {
          const Icon = FEATURE_ICON[feature.kind];
          return (
            <li key={feature.id} className="rounded-lg border border-border bg-white p-3">
              <div className="flex items-start justify-between gap-2">
                <p className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
                  {FEATURE_LABEL[feature.kind]}
                  <span className="font-normal text-muted-foreground">
                    · {feature.wall} wall, {formatInches(feature.widthIn)}
                  </span>
                </p>
                <MeasurementStatusBadge status={feature.status} />
              </div>
              {feature.clientSaid ? <p className="mt-1.5 text-xs text-[#4a3e35]">Client: “{feature.clientSaid}”</p> : null}
              {feature.status !== 'confirmed' && feature.assumption ? (
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{feature.assumption}</p>
              ) : null}
              {editing === feature.id ? (
                <FeatureForm feature={feature} onSave={(patch, status) => onUpdateFeature(feature.id, patch, status)} onCancel={() => setEditing(null)} />
              ) : (
                <div className="mt-1.5 flex gap-3">
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
            </li>
          );
        })}
      </ul>

      {questions.length ? (
        <div className="rounded-lg bg-accent p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-semibold text-accent-foreground">Ask the client</p>
            <Button size="xs" variant="ghost" onClick={copyQuestions} aria-live="polite">
              {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy'}
            </Button>
          </div>
          <ol className="mt-2 flex list-decimal flex-col gap-1.5 pl-4 text-xs leading-relaxed text-accent-foreground">
            {questions.map((question) => <li key={question}>{question}</li>)}
          </ol>
        </div>
      ) : null}
    </section>
  );
}

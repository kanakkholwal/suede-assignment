'use client';

import { Check, ChevronDown, DoorOpen, Plus, Heater, PanelsTopLeft, Pencil, type IconComponent } from '@/components/icons';
import { type FormEvent, useId, useState } from 'react';

import { FEATURE_LABEL, FeatureDialog, RoomSizePopover, type SaveRoom } from '@/components/planner/room-editors';
import { MeasurementStatusBadge } from '@/components/room/measurement-status-badge';
import { CopyButton } from '@/components/shared/copy-button';
import { cn } from '@/lib/utils';
import type { MeasurementStatus, Room, RoomFeature, RoomFeaturePatch, Wall } from '@/lib/room-state';
import { WALLS } from '@/lib/room-state';
import { clientQuestions } from '@/lib/tape-out';
import { formatFeetInches, formatInches, parseLength } from '@/lib/units';

const FEATURE_ICON: Record<RoomFeature['kind'], IconComponent> = { window: PanelsTopLeft, door: DoorOpen, radiator: Heater };

interface RoomFactsPanelProps {
  room: Room;
  features: readonly RoomFeature[];
  disabled: boolean;
  onUpdateRoom: SaveRoom;
  onUpdateFeature: (featureId: string, patch: RoomFeaturePatch, status: MeasurementStatus) => Promise<boolean>;
  onAddFeature: (kind: RoomFeature['kind'], patch: Required<RoomFeaturePatch>, status: MeasurementStatus) => Promise<boolean>;
  onRemoveFeature: (featureId: string) => Promise<boolean>;
}

const FEATURE_KINDS = ['door', 'window', 'radiator'] as const;

// Common sizes to start from; the dialog shows each so the user corrects rather than invents.
const NEW_FEATURE: Record<RoomFeature['kind'], Omit<RoomFeature, 'id'>> = {
  door: { kind: 'door', wall: 'south', offsetIn: 6, widthIn: 32, depthIn: null, heightIn: 80, sillIn: null, hinge: 'start', swing: 'in', status: 'stated', clientSaid: '', assumption: '' },
  window: { kind: 'window', wall: 'north', offsetIn: 24, widthIn: 36, depthIn: null, heightIn: 48, sillIn: 30, hinge: null, swing: null, status: 'stated', clientSaid: '', assumption: '' },
  radiator: { kind: 'radiator', wall: 'north', offsetIn: 24, widthIn: 36, depthIn: 8, heightIn: 24, sillIn: null, hinge: null, swing: null, status: 'stated', clientSaid: '', assumption: '' },
};

function draftPatch({ wall, offsetIn, widthIn, depthIn, heightIn, sillIn, hinge, swing }: Omit<RoomFeature, 'id'>): Required<RoomFeaturePatch> {
  return { wall, offsetIn, widthIn, depthIn, heightIn, sillIn, hinge, swing };
}

const LINK = 'inline-flex h-6 w-fit items-center gap-1.5 rounded-sm text-xs font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 [&_svg]:size-3.5';

/** What the client said, what we assumed from it, and the questions that would settle it. */
export function RoomFactsPanel({ room, features, disabled, onUpdateRoom, onUpdateFeature, onAddFeature, onRemoveFeature }: RoomFactsPanelProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const questions = clientQuestions(room, features);

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
        <RoomSizePopover room={room} onSave={onUpdateRoom} disabled={disabled} triggerClassName={LINK}>
          <Pencil aria-hidden="true" /> Edit room size
        </RoomSizePopover>
      </div>

      <ul className="-mx-1.5 flex flex-col">
        {features.map((feature) => {
          const Icon = FEATURE_ICON[feature.kind];
          const open = expanded === feature.id;
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
              <div id={panelId} className="disclosure" data-open={open} inert={!open}>
                <div>
                  <div className="flex flex-col gap-1 px-1.5 pt-0.5 pb-3 pl-7.5">
                    {feature.clientSaid ? <p className="text-xs text-foreground">Client: “{feature.clientSaid}”</p> : null}
                    {feature.status !== 'confirmed' && feature.assumption ? (
                      <p className="text-xs leading-relaxed text-muted-foreground">{feature.assumption}</p>
                    ) : null}
                    <div className="flex flex-wrap gap-x-4">
                      <FeatureDialog feature={feature} onSave={(patch, status) => onUpdateFeature(feature.id, patch, status)} onRemove={() => onRemoveFeature(feature.id)} disabled={disabled} triggerClassName={LINK}>
                        <Pencil aria-hidden="true" /> Adjust
                      </FeatureDialog>
                      {feature.status !== 'confirmed' ? (
                        <button type="button" className={LINK} disabled={disabled} onClick={() => void onUpdateFeature(feature.id, {}, 'confirmed')}>
                          <Check aria-hidden="true" /> Client confirmed as drawn
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
        {FEATURE_KINDS.map((kind) => (
          <FeatureDialog
            key={kind}
            mode="add"
            feature={NEW_FEATURE[kind]}
            onSave={(patch, status) => onAddFeature(kind, { ...draftPatch(NEW_FEATURE[kind]), ...patch }, status)}
            disabled={disabled}
            triggerClassName={LINK}
          >
            <Plus aria-hidden="true" /> Add {FEATURE_LABEL[kind].toLowerCase()}
          </FeatureDialog>
        ))}
      </div>

      {questions.length ? (
        <div className="flex flex-col gap-2 rounded-lg bg-muted/50 p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-medium text-foreground">Ask the client</p>
            <CopyButton size="xs" label="Copy" text={questions.map((question, index) => `${index + 1}. ${question}`).join('\n')} />
          </div>
          <ol className="flex list-decimal flex-col gap-1.5 pl-4 text-xs leading-relaxed text-muted-foreground marker:text-foreground">
            {questions.map((question) => <li key={question}>{question}</li>)}
          </ol>
        </div>
      ) : null}
    </section>
  );
}

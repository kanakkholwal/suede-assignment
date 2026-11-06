'use client';

import { Check, ChevronDown, Plus } from '@/components/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useQueryState } from 'nuqs';
import { type ComponentProps, useState } from 'react';

import { NewRoomDialog } from '@/components/room/new-room-dialog';
import { useRoomStore } from '@/components/room/room-provider';
import { RoomThumb } from '@/components/room/room-thumb';
import { button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { isRoomPresetId, ROOM_PRESETS, roomPreset } from '@/data/room-presets';
import { openFactLabels } from '@/lib/room-certainty';
import { formatFeetInches } from '@/lib/units';
import { useRoomHref, useRoomKey, withRoom } from '@/lib/url-state';
import { useRooms } from '@/lib/use-rooms';
import { cn } from '@/lib/utils';

interface RowProps {
  room: ComponentProps<typeof RoomThumb>['room'] & { name: string };
  summary: string;
  selected: boolean;
  onChoose: () => void;
}

function RoomRow({ room, summary, selected, onChoose }: RowProps) {
  return (
    <li>
      <button
        type="button"
        aria-pressed={selected}
        onClick={onChoose}
        className={cn(
          'flex w-full items-center gap-3 rounded-lg p-2 text-left outline-none transition-[background-color,scale] duration-(--duration-fast) focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-row)',
          selected ? 'bg-primary/8' : 'hover:bg-foreground/4',
        )}
      >
        <span className="grid h-11 w-14 shrink-0 place-items-center rounded-md bg-muted/70 p-1.5">
          <RoomThumb room={room} className="max-h-full max-w-full" />
        </span>
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium text-foreground">{room.name}</span>
          <span className="truncate text-xs text-muted-foreground">
            <span className="tabular-nums">{formatFeetInches(room.lengthIn)} × {formatFeetInches(room.widthIn)}</span> · {summary}
          </span>
        </span>
        {selected ? <Check className="size-4 shrink-0 text-primary" aria-hidden="true" /> : null}
      </button>
    </li>
  );
}

/** The room being worked on, the switch to the others, and a way to start a new one. */
export function RoomMenu() {
  const { snapshot, loading } = useRoomStore();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [key, setKey] = useRoomKey();
  const [, setPiece] = useQueryState('piece');
  const roomHref = useRoomHref();
  const { rooms, refresh, create } = useRooms();
  const preset = isRoomPresetId(key) ? roomPreset(key).template : null;
  const live = snapshot && (snapshot.room.id === key || snapshot.room.preset === key) ? snapshot.room : null;
  const listed = rooms?.find((room) => room.id === key);
  const name = live?.name ?? preset?.name ?? listed?.name ?? 'Room';
  const lengthIn = live?.lengthIn ?? preset?.lengthIn ?? listed?.lengthIn;
  const widthIn = live?.widthIn ?? preset?.widthIn ?? listed?.widthIn;
  const toConfirm = snapshot ? openFactLabels(snapshot.room, snapshot.features) : [];

  const choose = (id: string) => {
    setOpen(false);
    if (id === key) return;
    void setPiece(null);
    void setKey(id, { history: 'push' });
  };

  return (
    <>
      <Popover
        open={open}
        onOpenChange={(next) => {
          if (next) void refresh();
          setOpen(next);
        }}
      >
        <PopoverTrigger
          aria-label={`Room: ${name}. Switch room`}
          className="inline-flex h-8 min-w-0 items-center gap-2 rounded-lg px-2 transition-colors duration-(--duration-fast) hover:bg-foreground/6 data-popup-open:bg-foreground/6"
        >
          <span key={key} className="pop truncate font-serif text-base font-medium tracking-tight text-foreground">{name}</span>
          {lengthIn && widthIn ? (
            <span className="hidden shrink-0 text-xs whitespace-nowrap tabular-nums text-muted-foreground 2xl:inline">
              {formatFeetInches(lengthIn)} × {formatFeetInches(widthIn)}
            </span>
          ) : null}
          {loading ? (
            <span className="spinner size-3.5 rounded-full border-2 border-muted-foreground/30 border-t-muted-foreground" aria-hidden="true" />
          ) : (
            <ChevronDown className="size-3.5 text-muted-foreground" aria-hidden="true" />
          )}
        </PopoverTrigger>
        <PopoverContent align="start" className="flex max-h-[min(36rem,80vh)] w-96 max-w-[calc(100vw-1.5rem)] flex-col gap-1 overflow-y-auto p-2">
          <p className="px-2 pt-1 pb-1.5 text-xs font-medium text-muted-foreground">Rooms</p>
          <ul aria-label="Rooms" className="flex flex-col gap-0.5">
            {ROOM_PRESETS.map((option) => (
              <RoomRow key={option.id} room={option.template} summary={option.summary} selected={option.id === key} onChoose={() => choose(option.id)} />
            ))}
            {(rooms ?? []).map((room) => (
              <RoomRow key={room.id} room={room} summary="Your room" selected={room.id === key} onChoose={() => choose(room.id)} />
            ))}
          </ul>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setCreating(true);
            }}
            className="flex items-center gap-3 rounded-lg p-2 text-left text-sm font-medium text-primary outline-none transition-colors duration-(--duration-fast) hover:bg-primary/8 focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="grid h-8 w-14 place-items-center"><Plus className="size-4" aria-hidden="true" /></span>
            New room
          </button>
          <div className="mt-1 flex items-center justify-between gap-3 rounded-lg bg-muted/50 py-2 pr-2 pl-3">
            <p className="text-xs text-muted-foreground">
              {snapshot ? (toConfirm.length ? `To confirm: ${toConfirm.join(', ')}` : 'Everything in this room is confirmed') : 'Loading room…'}
            </p>
            <Link href={roomHref('/room?view=plan&tab=room')} onClick={() => setOpen(false)} className={button({ variant: 'outline', size: 'xs' })}>
              Room facts
            </Link>
          </div>
        </PopoverContent>
      </Popover>
      <NewRoomDialog
        open={creating}
        onOpenChange={setCreating}
        onCreate={create}
        onCreated={(id) => {
          setCreating(false);
          // A queued nuqs update here would land after the push and pull the URL back; the new URL has no piece.
          router.push(withRoom('/room?view=plan&tab=room', id));
        }}
      />
    </>
  );
}

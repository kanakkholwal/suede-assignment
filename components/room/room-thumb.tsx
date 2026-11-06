import type { RoomFeature, Wall } from '@/lib/room-state';

const PAD = 10;

type Line = { x1: number; y1: number; x2: number; y2: number };

interface ThumbRoom {
  lengthIn: number;
  widthIn: number;
  features: readonly Omit<RoomFeature, 'id'>[];
}

function span(room: ThumbRoom, wall: Wall, start: number, end: number): Line {
  const at: Record<Wall, Line> = {
    north: { x1: start, y1: 0, x2: end, y2: 0 },
    south: { x1: start, y1: room.widthIn, x2: end, y2: room.widthIn },
    west: { x1: 0, y1: start, x2: 0, y2: end },
    east: { x1: room.lengthIn, y1: start, x2: room.lengthIn, y2: end },
  };
  return at[wall];
}

/** The room's outline at true proportions, with windows and doors marked; `highlight` picks out one wall. */
export function RoomThumb({ room, highlight, className }: { room: ThumbRoom; highlight?: Wall; className?: string }) {
  const wallSpan = (wall: Wall) => (wall === 'north' || wall === 'south' ? room.lengthIn : room.widthIn);
  return (
    <svg
      viewBox={`${-PAD} ${-PAD} ${room.lengthIn + PAD * 2} ${room.widthIn + PAD * 2}`}
      className={className}
      aria-hidden="true"
    >
      <rect x={0} y={0} width={room.lengthIn} height={room.widthIn} fill="var(--plan-floor)" stroke="var(--plan-wall)" strokeWidth={6} rx={2} />
      {room.features.map((feature, index) =>
        feature.kind === 'radiator' ? null : (
          <line
            key={index}
            {...span(room, feature.wall, feature.offsetIn, feature.offsetIn + feature.widthIn)}
            stroke={feature.kind === 'window' ? 'var(--plan-glass-line)' : 'var(--plan-label)'}
            strokeWidth={feature.kind === 'window' ? 7 : 9}
            strokeLinecap="butt"
          />
        ),
      )}
      {highlight ? <line {...span(room, highlight, 0, wallSpan(highlight))} stroke="var(--primary)" strokeWidth={14} strokeLinecap="round" /> : null}
    </svg>
  );
}

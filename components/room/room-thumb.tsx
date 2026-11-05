import type { RoomTemplate } from '@/data/client-room';
import type { RoomFeature, Wall } from '@/lib/room-state';

const PAD = 10;

/** A feature's span along its wall, as a line in plan inches. */
function featureLine(room: RoomTemplate, feature: Omit<RoomFeature, 'id'>): { x1: number; y1: number; x2: number; y2: number } {
  const start = feature.offsetIn;
  const end = feature.offsetIn + feature.widthIn;
  const at: Record<Wall, () => { x1: number; y1: number; x2: number; y2: number }> = {
    north: () => ({ x1: start, y1: 0, x2: end, y2: 0 }),
    south: () => ({ x1: start, y1: room.widthIn, x2: end, y2: room.widthIn }),
    west: () => ({ x1: 0, y1: start, x2: 0, y2: end }),
    east: () => ({ x1: room.lengthIn, y1: start, x2: room.lengthIn, y2: end }),
  };
  return at[feature.wall]();
}

/** The room's outline at true proportions, with windows and doors marked, for telling rooms apart at a glance. */
export function RoomThumb({ room, className }: { room: RoomTemplate; className?: string }) {
  return (
    <svg
      viewBox={`${-PAD} ${-PAD} ${room.lengthIn + PAD * 2} ${room.widthIn + PAD * 2}`}
      className={className}
      aria-hidden="true"
    >
      <rect x={0} y={0} width={room.lengthIn} height={room.widthIn} fill="var(--plan-floor)" stroke="var(--plan-wall)" strokeWidth={6} rx={2} />
      {room.features.map((feature, index) => {
        const line = featureLine(room, feature);
        if (feature.kind === 'radiator') return null;
        return (
          <line
            key={index}
            {...line}
            stroke={feature.kind === 'window' ? 'var(--plan-glass-line)' : 'var(--primary)'}
            strokeWidth={feature.kind === 'window' ? 7 : 9}
            strokeLinecap="butt"
          />
        );
      })}
    </svg>
  );
}

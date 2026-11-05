'use client';

import type { Rect } from '@/lib/geometry';
import { wallLength } from '@/lib/geometry';
import type { PlanPiece } from '@/lib/plan-model';
import type { Room, RoomFeature, Wall } from '@/lib/room-state';
import { formatFeetInches, formatInches } from '@/lib/units';

const PERSON_IN = 66;
const UNKNOWN_HEIGHT_IN = 30;
const PAD_IN = 18;
const DEFAULT_CEILING_IN = 96;

/** Where a plan rect lands on the wall, read left to right while facing that wall from inside. */
function along(room: Room, wall: Wall, rect: Rect): [number, number] {
  switch (wall) {
    case 'north':
      return [rect.x0, rect.x1];
    case 'south':
      return [room.lengthIn - rect.x1, room.lengthIn - rect.x0];
    case 'east':
      return [rect.y0, rect.y1];
    case 'west':
      return [room.widthIn - rect.y1, room.widthIn - rect.y0];
  }
}

function distanceFromWall(room: Room, wall: Wall, rect: Rect): number {
  return { north: rect.y0, south: room.widthIn - rect.y1, west: rect.x0, east: room.lengthIn - rect.x1 }[wall];
}

function featureSpan(room: Room, wall: Wall, feature: RoomFeature): [number, number] {
  const length = wallLength(room, wall);
  const mirrored = wall === 'south' || wall === 'west';
  const start = mirrored ? length - feature.offsetIn - feature.widthIn : feature.offsetIn;
  return [start, start + feature.widthIn];
}

/** A simple standing figure, feet at the floor, `PERSON_IN` tall. */
function Person({ x, floor }: { x: number; floor: number }) {
  const top = floor - PERSON_IN;
  return (
    <g aria-hidden="true" fill="#8a7a6c" opacity={0.85}>
      <circle cx={x} cy={top + 4.5} r={4.5} />
      <rect x={x - 6.5} y={top + 10} width={13} height={26} rx={5} />
      <rect x={x - 5.5} y={top + 33} width={4.6} height={33} rx={2.2} />
      <rect x={x + 0.9} y={top + 33} width={4.6} height={33} rx={2.2} />
      <text x={x} y={floor + 7} textAnchor="middle" fontSize={3.6} fill="#5b5048">5′ 6″ person</text>
    </g>
  );
}

interface ElevationViewProps {
  room: Room;
  features: readonly RoomFeature[];
  pieces: readonly PlanPiece[];
  wall: Wall;
  selectedId: string | null;
}

/** Looking at one wall from inside the room, at true scale against the ceiling and a person. */
export function ElevationView({ room, features, pieces, wall, selectedId }: ElevationViewProps) {
  const length = wallLength(room, wall);
  const ceiling = room.ceilingIn ?? DEFAULT_CEILING_IN;
  const floor = ceiling;
  const depth = wall === 'north' || wall === 'south' ? room.widthIn : room.lengthIn;
  const onWall = features.filter((feature) => feature.wall === wall);
  const ordered = [...pieces].sort((left, right) => distanceFromWall(room, wall, right.rect) - distanceFromWall(room, wall, left.rect));
  const personX = -PAD_IN + 9;

  return (
    <svg
      viewBox={`${-PAD_IN - 8} ${-PAD_IN} ${length + PAD_IN * 2 + 16} ${ceiling + PAD_IN * 2}`}
      role="img"
      aria-label={`${wall} wall seen from inside: ${formatFeetInches(length)} wide, ${formatFeetInches(ceiling)} ceiling, ${pieces.length} pieces shown against a 5 foot 6 person`}
      className="block h-auto w-full"
    >
      <rect x={0} y={0} width={length} height={ceiling} fill="#fffdfa" stroke="#2c241f" strokeWidth={0.8} strokeDasharray={room.dimensionsStatus === 'confirmed' ? undefined : '3 2'} />
      <line x1={-PAD_IN} y1={floor} x2={length + PAD_IN} y2={floor} stroke="#2c241f" strokeWidth={1.2} />

      <g aria-hidden="true" fontSize={3.2} fill="#8a7f76">
        {Array.from({ length: Math.floor(ceiling / 12) }, (_, index) => (index + 1) * 12).map((height) => (
          <g key={height}>
            <line x1={length} y1={floor - height} x2={length + 3} y2={floor - height} stroke="#8a7f76" strokeWidth={0.4} />
            <text x={length + 4.5} y={floor - height + 1.1}>{height / 12}′</text>
          </g>
        ))}
        <text x={length / 2} y={-5} textAnchor="middle" fontSize={3.8} fill="#5b5048">
          {formatFeetInches(ceiling)} ceiling{room.ceilingIn === null ? ' (not given; 8′ shown)' : room.dimensionsStatus === 'confirmed' ? '' : ' · client-stated'}
        </text>
        <text x={length / 2} y={floor + 8} textAnchor="middle" fontSize={3.8} fill="#5b5048">
          {wall[0].toUpperCase() + wall.slice(1)} wall · {formatFeetInches(length)}
        </text>
      </g>

      {onWall.map((feature) => {
        const [start, end] = featureSpan(room, wall, feature);
        const dashed = feature.status !== 'confirmed' ? '2 1.5' : undefined;
        if (feature.kind === 'window') {
          const sill = feature.sillIn ?? 30;
          const height = feature.heightIn ?? 48;
          return (
            <g key={feature.id} aria-hidden="true">
              <rect x={start} y={floor - sill - height} width={end - start} height={height} fill="#eef4f8" stroke="#7d93a3" strokeWidth={0.6} strokeDasharray={dashed} />
              <text x={(start + end) / 2} y={floor - sill + 4} textAnchor="middle" fontSize={2.8} fill="#5f7686">sill {formatInches(sill)}</text>
            </g>
          );
        }
        if (feature.kind === 'radiator') {
          const height = feature.heightIn ?? 24;
          return (
            <rect key={feature.id} x={start} y={floor - height} width={end - start} height={height} fill="#e9e3dc" stroke="#6d5f55" strokeWidth={0.5} strokeDasharray={dashed} aria-hidden="true" />
          );
        }
        const height = feature.heightIn ?? 80;
        return (
          <rect key={feature.id} x={start} y={floor - height} width={end - start} height={height} fill="#f3eee8" stroke="#6d5f55" strokeWidth={0.6} strokeDasharray={dashed} aria-hidden="true" />
        );
      })}

      {ordered.map((piece) => {
        const [start, end] = along(room, wall, piece.rect);
        const known = piece.heightIn !== null;
        const height = piece.heightIn ?? UNKNOWN_HEIGHT_IN;
        const distance = Math.max(0, distanceFromWall(room, wall, piece.rect));
        const nearness = 1 - Math.min(distance / depth, 1);
        const selected = piece.id === selectedId;
        const label = known ? `${piece.name} · ${formatInches(height)} tall` : `${piece.name} · height unknown`;
        if (piece.kind === 'rug') {
          return <rect key={piece.id} x={start} y={floor - 0.8} width={end - start} height={0.8} fill="#b9a68f" aria-hidden="true" />;
        }
        return (
          <g key={piece.id} aria-hidden="true" opacity={0.35 + nearness * 0.65}>
            <rect
              x={start}
              y={floor - height}
              width={end - start}
              height={height}
              rx={1.2}
              fill={selected ? '#d2bba3' : '#ddd0c1'}
              stroke={selected ? 'var(--primary)' : '#3a2f28'}
              strokeWidth={selected ? 1 : 0.5}
              strokeDasharray={known ? undefined : '2.5 1.5'}
            />
            <text
              x={(start + end) / 2}
              y={height >= 14 ? floor - height + 5 : floor - height - 2.2}
              textAnchor="middle"
              fontSize={Math.min(3.2, (end - start - 3) / (label.length * 0.56))}
              fill="#241c17"
              fontWeight={600}
            >
              {label}
            </text>
          </g>
        );
      })}

      <Person x={personX} floor={floor} />
    </svg>
  );
}

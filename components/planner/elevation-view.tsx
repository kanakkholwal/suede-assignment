'use client';

import { type CSSProperties, useRef } from 'react';

import { useLegibleText } from '@/components/planner/use-legible-text';

import type { Rect } from '@/lib/geometry';
import { wallLength } from '@/lib/geometry';
import type { PlanPiece } from '@/lib/plan-model';
import type { Room, RoomFeature, Wall } from '@/lib/room-state';
import { formatFeetInches, formatInches } from '@/lib/units';

const PERSON_IN = 66;
const UNKNOWN_HEIGHT_IN = 30;
const PAD_IN = 18;
const DEFAULT_CEILING_IN = 96;
const LABEL_SIZE = 3.2;
const CHAR_EM = 0.56;

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

function FixtureLabel({ x, y, size, children }: { x: number; y: number; size: number; children: string }) {
  return <text x={x} y={y + size - 2.8} textAnchor="middle" fontSize={size} fill="var(--plan-label)">{children}</text>;
}

interface LabelBox {
  x0: number;
  x1: number;
  y: number;
}

/** Lifts a label a line at a time until it clears the labels already drawn, then records it. */
function clearOf(placed: LabelBox[], x: number, width: number, y: number, size: number): number {
  let next = y;
  while (placed.some((box) => box.x0 < x + width / 2 && x - width / 2 < box.x1 && Math.abs(box.y - next) < size * 1.1)) next -= size * 1.25;
  placed.push({ x0: x - width / 2, x1: x + width / 2, y: next });
  return next;
}

/** A simple standing figure, feet at the floor, `PERSON_IN` tall. */
function Person({ x, floor, size }: { x: number; floor: number; size: number }) {
  const top = floor - PERSON_IN;
  return (
    <g aria-hidden="true">
      <g fill="var(--primary)" opacity={0.55}>
        <circle cx={x} cy={top + 4.5} r={4.5} />
        <rect x={x - 6.5} y={top + 10} width={13} height={26} rx={5} />
        <rect x={x - 5.5} y={top + 33} width={4.6} height={33} rx={2.2} />
        <rect x={x + 0.9} y={top + 33} width={4.6} height={33} rx={2.2} />
      </g>
      <text x={x} y={floor + 3.4 + size} textAnchor="middle" fontSize={size} fill="var(--plan-label)">5′ 6″ person</text>
    </g>
  );
}

interface ElevationViewProps {
  room: Room;
  features: readonly RoomFeature[];
  pieces: readonly PlanPiece[];
  wall: Wall;
  selectedId: string | null;
  /** Fills its container's height on large screens instead of keeping its own aspect ratio. */
  fill?: boolean;
}

/** Looking at one wall from inside the room, at true scale against the ceiling and a person. */
export function ElevationView({ room, features, pieces, wall, selectedId, fill = false }: ElevationViewProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const length = wallLength(room, wall);
  const ceiling = room.ceilingIn ?? DEFAULT_CEILING_IN;
  const floor = ceiling;
  const depth = wall === 'north' || wall === 'south' ? room.widthIn : room.lengthIn;
  const onWall = features.filter((feature) => feature.wall === wall);
  const ordered = [...pieces].sort((left, right) => distanceFromWall(room, wall, right.rect) - distanceFromWall(room, wall, left.rect));
  const personX = -PAD_IN + 9;
  const { legible } = useLegibleText(svgRef, length + PAD_IN * 2 + 16, ceiling + PAD_IN * 2);
  const labelSize = legible(LABEL_SIZE, 11);
  const placedLabels: LabelBox[] = [];

  return (
    <svg
      ref={svgRef}
      viewBox={`${-PAD_IN - 8} ${-PAD_IN} ${length + PAD_IN * 2 + 16} ${ceiling + PAD_IN * 2}`}
      role="img"
      aria-label={`${wall} wall seen from inside: ${formatFeetInches(length)} wide, ${formatFeetInches(ceiling)} ceiling, ${pieces.length} pieces shown against a 5 foot 6 person`}
      style={{ '--plan-ratio': `${length + PAD_IN * 2 + 16} / ${ceiling + PAD_IN * 2}` } as CSSProperties}
      className={`block aspect-(--plan-ratio) w-full ${fill ? 'lg:aspect-auto lg:h-full' : ''}`}
    >
      <rect x={0} y={0} width={length} height={ceiling} fill="var(--plan-floor)" stroke="var(--plan-wall)" strokeWidth={0.8} />
      <line x1={-PAD_IN} y1={floor} x2={length + PAD_IN} y2={floor} stroke="var(--plan-wall)" strokeWidth={1.2} />

      <g aria-hidden="true" fontSize={legible(3.2, 10)} fill="var(--plan-label)">
        {Array.from({ length: Math.floor(ceiling / 12) }, (_, index) => (index + 1) * 12).map((height) => (
          <g key={height}>
            <line x1={length} y1={floor - height} x2={length + 3} y2={floor - height} stroke="var(--plan-label)" strokeWidth={0.4} />
            <text x={length + 4.5} y={floor - height + 1.1}>{height / 12}′</text>
          </g>
        ))}
        <text x={length / 2} y={-5} textAnchor="middle" fontSize={legible(3.8, 11)} fill="var(--plan-label)">
          {formatFeetInches(ceiling)} ceiling{room.ceilingIn === null ? ' (not given; 8′ shown)' : room.dimensionsStatus === 'confirmed' ? '' : ' · client-stated'}
        </text>
        <text x={length / 2} y={floor + 4.2 + legible(3.8, 11)} textAnchor="middle" fontSize={legible(3.8, 11)} fill="var(--plan-label)">
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
              <rect x={start} y={floor - sill - height} width={end - start} height={height} fill="var(--plan-glass)" stroke="var(--plan-glass-line)" strokeWidth={0.6} strokeDasharray={dashed} />
              <text x={(start + end) / 2} y={floor - sill + 4} textAnchor="middle" fontSize={legible(2.8, 10)} fill="var(--plan-label)">sill {formatInches(sill)}</text>
            </g>
          );
        }
        if (feature.kind === 'radiator') {
          const height = feature.heightIn ?? 24;
          return (
            <g key={feature.id} aria-hidden="true">
              <rect x={start} y={floor - height} width={end - start} height={height} fill="var(--plan-fixture)" stroke="var(--plan-label)" strokeWidth={0.5} strokeDasharray={dashed} />
              <FixtureLabel x={(start + end) / 2} y={floor - height + 4.5} size={legible(2.8, 10)}>Radiator</FixtureLabel>
            </g>
          );
        }
        const height = feature.heightIn ?? 80;
        return (
          <g key={feature.id} aria-hidden="true">
            <rect x={start} y={floor - height} width={end - start} height={height} fill="var(--plan-fixture)" stroke="var(--plan-label)" strokeWidth={0.6} strokeDasharray={dashed} />
            <FixtureLabel x={(start + end) / 2} y={floor - height + 5} size={legible(2.8, 10)}>Door</FixtureLabel>
          </g>
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
          return <rect key={piece.id} x={start} y={floor - 0.8} width={end - start} height={0.8} fill="var(--piece-firm)" aria-hidden="true" />;
        }
        const inside = height >= labelSize + 10 && label.length * labelSize * CHAR_EM <= end - start - 3;
        const labelWidth = label.length * labelSize * CHAR_EM;
        const labelX = Math.min(Math.max((start + end) / 2, labelWidth / 2), length - labelWidth / 2);
        const labelY = inside ? floor - height + 5 : clearOf(placedLabels, labelX, labelWidth, floor - height - 2.2, labelSize);
        return (
          <g key={piece.id} aria-hidden="true">
            <rect
              x={start}
              y={floor - height}
              width={end - start}
              height={height}
              rx={1.2}
              fill={selected ? 'var(--piece-selected)' : 'var(--piece)'}
              fillOpacity={selected ? 1 : 0.35 + nearness * 0.65}
              stroke={selected ? 'var(--primary)' : 'var(--plan-ink)'}
              strokeWidth={selected ? 1 : 0.5}
              strokeDasharray={known ? undefined : '2.5 1.5'}
            />
            <text
              x={labelX}
              y={labelY}
              textAnchor="middle"
              fontSize={labelSize}
              fill="var(--foreground)"
              fontWeight={600}
              stroke={inside ? undefined : 'var(--plan-floor)'}
              strokeWidth={inside ? undefined : 1.2}
              paintOrder="stroke"
            >
              {label}
            </text>
          </g>
        );
      })}

      <Person x={personX} floor={floor} size={legible(3.6, 10)} />
    </svg>
  );
}

'use client';

import { type KeyboardEvent, type PointerEvent, useId, useRef } from 'react';

import type { FitSeverity, FitWarning } from '@/lib/fit-rules';
import { doorGeometry, frontSide, type Rect, wallDistances } from '@/lib/geometry';
import type { PieceKind } from '@/lib/piece-kind';
import { type Placement, type PlanPiece, rotateClockwise, snapPlacement } from '@/lib/plan-model';
import type { Room, RoomFeature, Wall } from '@/lib/room-state';
import { formatDimensionTriple, formatFeetInches, formatInches } from '@/lib/units';

const WALL_IN = 4.5;
const PAD_IN = 22;
const KEY_STEP_IN = 1;
const KEY_STEP_LARGE_IN = 6;

const KIND_FILL: Record<PieceKind, string> = {
  rug: '#efe5d8',
  sofa: '#d8c6b2',
  chair: '#e2d1bd',
  'coffee-table': '#c7b197',
  'side-table': '#cbb79f',
  storage: '#bca993',
  ottoman: '#e5d6c4',
  other: '#dcd0c2',
};

const SEVERITY_STROKE: Record<FitSeverity, string> = {
  conflict: 'var(--destructive)',
  tight: 'var(--warning)',
  tip: '#3a2f28',
};

interface PlanCanvasProps {
  room: Room;
  features: readonly RoomFeature[];
  pieces: readonly PlanPiece[];
  warnings: readonly FitWarning[];
  selectedId?: string | null;
  interactive?: boolean;
  onSelect?: (id: string | null) => void;
  onPreview?: (id: string, placement: Placement) => void;
  onCommit?: (id: string, placement: Placement) => void;
  onUnplace?: (id: string) => void;
  className?: string;
}

interface DragState {
  id: string;
  pointerId: number;
  offsetX: number;
  offsetY: number;
  placement: Placement;
  moved: boolean;
}

/** Thin strip occupied by an opening inside the wall thickness. */
function wallOpening(room: Room, feature: RoomFeature): Rect {
  const { offsetIn: start, widthIn: span } = feature;
  switch (feature.wall) {
    case 'north':
      return { x0: start, y0: -WALL_IN, x1: start + span, y1: 0 };
    case 'south':
      return { x0: start, y0: room.widthIn, x1: start + span, y1: room.widthIn + WALL_IN };
    case 'west':
      return { x0: -WALL_IN, y0: start, x1: 0, y1: start + span };
    case 'east':
      return { x0: room.lengthIn, y0: start, x1: room.lengthIn + WALL_IN, y1: start + span };
  }
}

const INWARD: Record<Wall, { x: number; y: number }> = {
  north: { x: 0, y: 1 },
  south: { x: 0, y: -1 },
  west: { x: 1, y: 0 },
  east: { x: -1, y: 0 },
};

function worstSeverity(warnings: readonly FitWarning[], pieceId: string): FitSeverity | null {
  const relevant = warnings.filter((warning) => warning.pieceIds.includes(pieceId) && warning.severity !== 'tip');
  if (relevant.some((warning) => warning.severity === 'conflict')) return 'conflict';
  return relevant.length ? 'tight' : null;
}

function Door({ room, door }: { room: Room; door: RoomFeature }) {
  const { hinge, closedLeafEnd } = doorGeometry(room, door);
  const normal = INWARD[door.wall];
  const direction = door.swing === 'out' ? -1 : 1;
  const open = { x: hinge.x + normal.x * door.widthIn * direction, y: hinge.y + normal.y * door.widthIn * direction };
  const cross = (open.x - hinge.x) * (closedLeafEnd.y - hinge.y) - (open.y - hinge.y) * (closedLeafEnd.x - hinge.x);
  const dashed = door.status !== 'confirmed';
  const opening = wallOpening(room, door);
  return (
    <g aria-hidden="true">
      <rect x={opening.x0} y={opening.y0} width={opening.x1 - opening.x0} height={opening.y1 - opening.y0} fill="var(--paper)" />
      {door.swing === 'in' ? (
        <path
          d={`M ${hinge.x} ${hinge.y} L ${open.x} ${open.y} A ${door.widthIn} ${door.widthIn} 0 0 ${cross > 0 ? 1 : 0} ${closedLeafEnd.x} ${closedLeafEnd.y} Z`}
          fill="rgb(164 71 58 / 0.06)"
          stroke="none"
        />
      ) : null}
      <line x1={hinge.x} y1={hinge.y} x2={open.x} y2={open.y} stroke="#3a2f28" strokeWidth={0.9} />
      <path
        d={`M ${open.x} ${open.y} A ${door.widthIn} ${door.widthIn} 0 0 ${cross > 0 ? 1 : 0} ${closedLeafEnd.x} ${closedLeafEnd.y}`}
        fill="none"
        stroke="#3a2f28"
        strokeWidth={0.5}
        strokeDasharray={dashed ? '2 1.5' : undefined}
      />
    </g>
  );
}

function Window({ room, feature }: { room: Room; feature: RoomFeature }) {
  const rect = wallOpening(room, feature);
  const horizontal = feature.wall === 'north' || feature.wall === 'south';
  const dashed = feature.status !== 'confirmed' ? '2 1.5' : undefined;
  const glass = [0.35, 0.65].map((fraction) =>
    horizontal
      ? { x1: rect.x0, x2: rect.x1, y1: rect.y0 + WALL_IN * fraction, y2: rect.y0 + WALL_IN * fraction }
      : { x1: rect.x0 + WALL_IN * fraction, x2: rect.x0 + WALL_IN * fraction, y1: rect.y0, y2: rect.y1 },
  );
  return (
    <g aria-hidden="true">
      <rect x={rect.x0} y={rect.y0} width={rect.x1 - rect.x0} height={rect.y1 - rect.y0} fill="#f4f8fb" stroke="#3a2f28" strokeWidth={0.5} strokeDasharray={dashed} />
      {glass.map((line, index) => (
        <line key={index} {...line} stroke="#7d93a3" strokeWidth={0.4} />
      ))}
    </g>
  );
}

function Radiator({ room, feature, hatchId }: { room: Room; feature: RoomFeature; hatchId: string }) {
  const depth = feature.depthIn ?? 6;
  const rect = {
    north: { x: feature.offsetIn, y: 0, w: feature.widthIn, h: depth },
    south: { x: feature.offsetIn, y: room.widthIn - depth, w: feature.widthIn, h: depth },
    west: { x: 0, y: feature.offsetIn, w: depth, h: feature.widthIn },
    east: { x: room.lengthIn - depth, y: feature.offsetIn, w: depth, h: feature.widthIn },
  }[feature.wall];
  return (
    <g aria-hidden="true">
      <rect x={rect.x} y={rect.y} width={rect.w} height={rect.h} fill={`url(#${hatchId})`} stroke="#6d5f55" strokeWidth={0.5} strokeDasharray={feature.status !== 'confirmed' ? '2 1.5' : undefined} />
      <text x={rect.x + rect.w / 2} y={rect.y + rect.h + 4} textAnchor="middle" fontSize={3} fill="#6d5f55">Radiator</text>
    </g>
  );
}

/** Lines from the selected piece to the nearest wall on each axis, with the clear distance. */
function Clearances({ room, rect }: { room: Room; rect: Rect }) {
  const distances = wallDistances(room, rect);
  const midX = (rect.x0 + rect.x1) / 2;
  const midY = (rect.y0 + rect.y1) / 2;
  const vertical = distances.north <= distances.south
    ? { x1: midX, y1: 0, x2: midX, y2: rect.y0, value: distances.north }
    : { x1: midX, y1: rect.y1, x2: midX, y2: room.widthIn, value: distances.south };
  const horizontal = distances.west <= distances.east
    ? { x1: 0, y1: midY, x2: rect.x0, y2: midY, value: distances.west }
    : { x1: rect.x1, y1: midY, x2: room.lengthIn, y2: midY, value: distances.east };
  return (
    <g aria-hidden="true" pointerEvents="none">
      {[vertical, horizontal].filter((line) => line.value > 0.25).map((line, index) => (
        <g key={index}>
          <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="var(--primary)" strokeWidth={0.5} strokeDasharray="1.5 1" />
          <text
            x={(line.x1 + line.x2) / 2 + (index === 0 ? 1.5 : 0)}
            y={(line.y1 + line.y2) / 2 - (index === 1 ? 1.5 : 0)}
            fontSize={3.4}
            fill="var(--primary)"
            fontWeight={600}
            textAnchor={index === 0 ? 'start' : 'middle'}
            paintOrder="stroke"
            stroke="white"
            strokeWidth={1.2}
          >
            {formatInches(line.value)}
          </text>
        </g>
      ))}
    </g>
  );
}

function FrontEdge({ rect, rotation }: { rect: Rect; rotation: PlanPiece['rotation'] }) {
  const side = frontSide(rotation);
  const inset = 1.2;
  const line = {
    north: { x1: rect.x0 + inset, y1: rect.y0 + inset, x2: rect.x1 - inset, y2: rect.y0 + inset },
    south: { x1: rect.x0 + inset, y1: rect.y1 - inset, x2: rect.x1 - inset, y2: rect.y1 - inset },
    west: { x1: rect.x0 + inset, y1: rect.y0 + inset, x2: rect.x0 + inset, y2: rect.y1 - inset },
    east: { x1: rect.x1 - inset, y1: rect.y0 + inset, x2: rect.x1 - inset, y2: rect.y1 - inset },
  }[side];
  return <line {...line} stroke="#3a2f28" strokeWidth={0.8} strokeLinecap="round" opacity={0.55} />;
}

/** True-scale plan in inches. Pieces drag 1:1 with the pointer and move by keyboard. */
export function PlanCanvas({
  room,
  features,
  pieces,
  warnings,
  selectedId = null,
  interactive = true,
  onSelect,
  onPreview,
  onCommit,
  onUnplace,
  className,
}: PlanCanvasProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const hatchId = `${useId().replace(/:/g, '')}-hatch`;
  const ordered = [...pieces].sort((left, right) => Number(right.kind === 'rug') - Number(left.kind === 'rug'));
  const selected = pieces.find((piece) => piece.id === selectedId);

  const toPlan = (event: PointerEvent) => {
    const svg = svgRef.current;
    const matrix = svg?.getScreenCTM();
    if (!svg || !matrix) return null;
    const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());
    return { x: point.x, y: point.y };
  };

  const placementOf = (piece: PlanPiece): Placement => ({
    xIn: (piece.rect.x0 + piece.rect.x1) / 2,
    yIn: (piece.rect.y0 + piece.rect.y1) / 2,
    rotationDeg: piece.rotation,
  });

  const startDrag = (event: PointerEvent<SVGGElement>, piece: PlanPiece) => {
    if (!interactive || event.button !== 0) return;
    const point = toPlan(event);
    if (!point) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    const placement = placementOf(piece);
    dragRef.current = {
      id: piece.id,
      pointerId: event.pointerId,
      offsetX: point.x - placement.xIn,
      offsetY: point.y - placement.yIn,
      placement,
      moved: false,
    };
    onSelect?.(piece.id);
  };

  const moveDrag = (event: PointerEvent<SVGGElement>, piece: PlanPiece) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const point = toPlan(event);
    if (!point) return;
    const next = snapPlacement(
      room,
      { xIn: point.x - drag.offsetX, yIn: point.y - drag.offsetY, rotationDeg: drag.placement.rotationDeg },
      piece.widthIn,
      piece.depthIn,
    );
    drag.placement = next;
    drag.moved = true;
    onPreview?.(piece.id, next);
  };

  const endDrag = (event: PointerEvent<SVGGElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    dragRef.current = null;
    if (drag.moved) onCommit?.(drag.id, drag.placement);
  };

  const onKeyDown = (event: KeyboardEvent<SVGGElement>, piece: PlanPiece) => {
    const step = event.shiftKey ? KEY_STEP_LARGE_IN : KEY_STEP_IN;
    const delta: Record<string, [number, number]> = {
      ArrowUp: [0, -step],
      ArrowDown: [0, step],
      ArrowLeft: [-step, 0],
      ArrowRight: [step, 0],
    };
    const current = placementOf(piece);
    if (delta[event.key]) {
      event.preventDefault();
      const [dx, dy] = delta[event.key];
      onCommit?.(piece.id, snapPlacement(room, { ...current, xIn: current.xIn + dx, yIn: current.yIn + dy }, piece.widthIn, piece.depthIn));
    } else if (event.key === 'r' || event.key === 'R') {
      event.preventDefault();
      onCommit?.(piece.id, snapPlacement(room, { ...current, rotationDeg: rotateClockwise(current.rotationDeg) }, piece.widthIn, piece.depthIn));
    } else if (event.key === 'Delete' || event.key === 'Backspace') {
      event.preventDefault();
      onUnplace?.(piece.id);
    } else if (event.key === 'Escape') {
      onSelect?.(null);
    }
  };

  const roomAssumed = room.dimensionsStatus !== 'confirmed';

  return (
    <svg
      ref={svgRef}
      viewBox={`${-PAD_IN} ${-PAD_IN} ${room.lengthIn + PAD_IN * 2} ${room.widthIn + PAD_IN * 2}`}
      role="group"
      aria-label={`Floor plan, ${formatFeetInches(room.lengthIn)} by ${formatFeetInches(room.widthIn)}. ${interactive ? 'Select a piece, then drag it or use arrow keys; R rotates, Delete takes it off the plan.' : ''}`}
      className={`block h-auto w-full touch-none select-none ${className ?? ''}`}
      onPointerDown={(event) => {
        if (event.target === event.currentTarget || (event.target as Element).getAttribute('data-floor') !== null) onSelect?.(null);
      }}
    >
      <defs>
        <pattern id={hatchId} width={3} height={3} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1={0} y1={0} x2={0} y2={3} stroke="#3a2f28" strokeWidth={0.5} opacity={0.35} />
        </pattern>
      </defs>

      <rect data-floor="" x={0} y={0} width={room.lengthIn} height={room.widthIn} fill="#fffdfa" />
      <g aria-hidden="true" stroke="#3a2f28" strokeWidth={0.2} opacity={0.12} pointerEvents="none">
        {Array.from({ length: Math.floor(room.lengthIn / 12) }, (_, index) => (index + 1) * 12).map((x) => (
          <line key={`x${x}`} x1={x} y1={0} x2={x} y2={room.widthIn} />
        ))}
        {Array.from({ length: Math.floor(room.widthIn / 12) }, (_, index) => (index + 1) * 12).map((y) => (
          <line key={`y${y}`} x1={0} y1={y} x2={room.lengthIn} y2={y} />
        ))}
      </g>

      <rect
        x={-WALL_IN / 2}
        y={-WALL_IN / 2}
        width={room.lengthIn + WALL_IN}
        height={room.widthIn + WALL_IN}
        fill="none"
        stroke="#2c241f"
        strokeWidth={WALL_IN}
        aria-hidden="true"
      />
      {features.map((feature) =>
        feature.kind === 'door' ? (
          <Door key={feature.id} room={room} door={feature} />
        ) : feature.kind === 'window' ? (
          <Window key={feature.id} room={room} feature={feature} />
        ) : (
          <Radiator key={feature.id} room={room} feature={feature} hatchId={hatchId} />
        ),
      )}

      <g aria-hidden="true" fontSize={4} fill="#5b5048" textAnchor="middle">
        <text x={room.lengthIn / 2} y={-WALL_IN - 5}>
          {formatFeetInches(room.lengthIn)}{roomAssumed ? ' · client-stated' : ''}
        </text>
        <text x={-WALL_IN - 5} y={room.widthIn / 2} transform={`rotate(-90 ${-WALL_IN - 5} ${room.widthIn / 2})`}>
          {formatFeetInches(room.widthIn)}{roomAssumed ? ' · client-stated' : ''}
        </text>
        <text x={room.lengthIn / 2} y={room.widthIn + WALL_IN + 9} fontSize={3} fill="#8a7f76">
          Grid squares are 1 ft · north is up
        </text>
      </g>

      {ordered.map((piece) => {
        const { rect } = piece;
        const width = rect.x1 - rect.x0;
        const height = rect.y1 - rect.y0;
        const severity = worstSeverity(warnings, piece.id);
        const isSelected = piece.id === selectedId;
        const estimated = piece.footprintSource === 'synthetic' || piece.footprintSource === 'listing';
        const fontSize = Math.min(3.6, Math.max(2.4, Math.min(width, height) / 6));
        return (
          <g
            key={piece.id}
            role={interactive ? 'button' : undefined}
            tabIndex={interactive ? 0 : undefined}
            aria-label={`${piece.name}, ${formatDimensionTriple(piece.widthIn, piece.depthIn, piece.heightIn)}, facing ${frontSide(piece.rotation)}${severity ? `, has ${severity === 'conflict' ? 'a conflict' : 'a tight fit'}` : ''}`}
            aria-pressed={interactive ? isSelected : undefined}
            className={interactive ? 'cursor-grab outline-none active:cursor-grabbing [&:focus-visible>rect:first-child]:stroke-[var(--ring)]' : undefined}
            onPointerDown={(event) => startDrag(event, piece)}
            onPointerMove={(event) => moveDrag(event, piece)}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onKeyDown={(event) => onKeyDown(event, piece)}
            onFocus={() => interactive && onSelect?.(piece.id)}
          >
            <rect
              x={rect.x0}
              y={rect.y0}
              width={width}
              height={height}
              rx={piece.kind === 'rug' ? 0.5 : 1.5}
              fill={KIND_FILL[piece.kind]}
              fillOpacity={piece.kind === 'rug' ? 0.85 : 1}
              stroke={severity ? SEVERITY_STROKE[severity] : isSelected ? 'var(--primary)' : '#3a2f28'}
              strokeWidth={isSelected || severity ? 1 : 0.5}
              strokeDasharray={estimated ? '2.5 1.5' : undefined}
            />
            {estimated ? <rect x={rect.x0} y={rect.y0} width={width} height={height} rx={1.5} fill={`url(#${hatchId})`} pointerEvents="none" /> : null}
            {piece.kind !== 'rug' ? <FrontEdge rect={rect} rotation={piece.rotation} /> : null}
            <text
              x={rect.x0 + width / 2}
              y={piece.kind === 'rug' ? rect.y0 + fontSize + 1.5 : rect.y0 + height / 2 - fontSize * 0.15}
              textAnchor="middle"
              fontSize={fontSize}
              fill="#241c17"
              fontWeight={600}
              pointerEvents="none"
            >
              {piece.name}
            </text>
            <text
              x={rect.x0 + width / 2}
              y={piece.kind === 'rug' ? rect.y0 + fontSize * 2 + 2 : rect.y0 + height / 2 + fontSize}
              textAnchor="middle"
              fontSize={fontSize * 0.85}
              fill="#5b5048"
              pointerEvents="none"
            >
              {formatInches(piece.widthIn)} × {formatInches(piece.depthIn)}
            </text>
          </g>
        );
      })}

      {selected && interactive ? <Clearances room={room} rect={selected.rect} /> : null}
    </svg>
  );
}

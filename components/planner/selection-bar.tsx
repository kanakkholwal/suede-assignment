'use client';

import { RotateCw, Undo2, X } from '@/components/icons';

import { SourceBadge } from '@/components/shared/source-badge';
import { Button } from '@/components/ui/button';
import type { FitWarning } from '@/lib/fit-rules';
import { frontSide, wallDistances } from '@/lib/geometry';
import { type PlanPiece, shortName } from '@/lib/plan-model';
import type { Room } from '@/lib/room-state';
import { WALLS } from '@/lib/room-state';
import { formatDimensionTriple, formatInches } from '@/lib/units';
import { cn } from '@/lib/utils';

interface SelectionBarProps {
  room: Room;
  piece: PlanPiece;
  warnings: readonly FitWarning[];
  onRotate: () => void;
  onUnplace: () => void;
  onClose: () => void;
}

const clearance = (inches: number): string => (inches < 0 ? 'through the wall' : inches < 0.5 ? 'against' : formatInches(inches));

/** Floating controls for the selected piece: its size, clearance to each wall, and actions. */
export function SelectionBar({ room, piece, warnings, onRotate, onUnplace, onClose }: SelectionBarProps) {
  const distances = wallDistances(room, piece.rect);
  const issue = warnings.find((warning) => warning.pieceIds.includes(piece.id) && warning.severity !== 'tip');

  return (
    <div role="region" aria-label="Selected piece" className="enter flex w-full flex-col gap-2 rounded-xl bg-muted/70 p-2.5">
      <div className="flex items-center gap-3">
        <p className="flex min-w-0 flex-1 flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
          <span className="truncate text-sm font-medium text-foreground">{shortName(piece.product)}</span>
          <span className="tabular-nums">{formatDimensionTriple(piece.widthIn, piece.depthIn, piece.heightIn)}</span>
          <SourceBadge source={piece.footprintSource} />
          <span>faces {frontSide(piece.rotation)}</span>
        </p>
        <div className="flex shrink-0 items-center gap-1">
          <Button size="xs" variant="outline" onClick={onRotate} title="Rotate 90° (R)">
            <RotateCw aria-hidden="true" /> Rotate
          </Button>
          <Button size="xs" variant="ghost" onClick={onUnplace}>
            <Undo2 aria-hidden="true" /> Take off
          </Button>
          <Button size="icon-xs" variant="ghost" aria-label="Deselect" onClick={onClose}>
            <X aria-hidden="true" />
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs">
        <span className="text-muted-foreground">Clear floor</span>
        <dl className="contents" aria-label="Clear floor to each wall">
          {WALLS.map((wall) => (
            <div key={wall} className="flex items-baseline gap-1">
              <dt className="text-muted-foreground capitalize">{wall}</dt>
              <dd className="font-medium tabular-nums text-foreground">{clearance(distances[wall])}</dd>
            </div>
          ))}
        </dl>
      </div>
      {issue ? (
        <p className={cn('text-xs', issue.severity === 'conflict' ? 'text-destructive-strong' : 'text-warning-strong')}>{issue.title}</p>
      ) : (
        <p className="text-xs text-muted-foreground">Drag or use arrow keys (Shift moves 6″). R rotates.</p>
      )}
    </div>
  );
}

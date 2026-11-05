'use client';

import { RotateCw, Undo2, X } from 'lucide-react';

import { SourceBadge } from '@/components/shared/source-badge';
import { Button } from '@/components/ui/button';
import { footprintConfidence } from '@/lib/dimensions';
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
          <SourceBadge source={footprintConfidence(piece.item.dimensions)} />
          <span>faces {frontSide(piece.rotation)}</span>
        </p>
        <Button size="icon-xs" variant="ghost" aria-label="Deselect" onClick={onClose}>
          <X aria-hidden="true" />
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        <dl className="flex flex-1 gap-1 text-xs" aria-label="Clear floor to each wall">
          {WALLS.map((wall) => (
            <div key={wall} className="flex min-w-0 flex-1 items-baseline justify-center gap-1 rounded-md bg-card px-1.5 py-1">
              <dt className="text-muted-foreground">{wall[0].toUpperCase()}</dt>
              <dd className="font-medium tabular-nums text-foreground">{distances[wall] < 0 ? 'through' : formatInches(distances[wall])}</dd>
            </div>
          ))}
        </dl>
        <Button size="xs" variant="outline" onClick={onRotate} title="Rotate 90° (R)">
          <RotateCw aria-hidden="true" /> Rotate
        </Button>
        <Button size="xs" variant="ghost" onClick={onUnplace}>
          <Undo2 aria-hidden="true" /> Take off
        </Button>
      </div>
      {issue ? (
        <p className={cn('text-xs', issue.severity === 'conflict' ? 'text-destructive-strong' : 'text-warning-strong')}>{issue.title}</p>
      ) : (
        <p className="text-xs text-muted-foreground">Drag or use arrow keys (Shift moves 6″). R rotates.</p>
      )}
    </div>
  );
}

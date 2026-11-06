import type { ComponentType, SVGProps } from 'react';

import { cn } from '@/lib/utils';
import { ICONS } from './generated';

export type IconProps = SVGProps<SVGSVGElement>;
export type IconComponent = ComponentType<IconProps>;

function createIcon(name: keyof typeof ICONS): IconComponent {
  const { viewBox, body } = ICONS[name];
  function Icon({ className, ...props }: IconProps) {
    const labelled = props['aria-label'] !== undefined || props['aria-labelledby'] !== undefined;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        width={24}
        height={24}
        fill="none"
        aria-hidden={labelled ? undefined : true}
        role={labelled ? 'img' : undefined}
        focusable="false"
        data-icon={name}
        className={cn('shrink-0', className)}
        // Bodies come from the vetted Solar set at build time, never from user input.
        dangerouslySetInnerHTML={{ __html: body }}
        {...props}
      />
    );
  }
  Icon.displayName = name;
  return Icon;
}

export const Armchair = createIcon('Armchair');
export const ArrowRight = createIcon('ArrowRight');
export const ArrowUp = createIcon('ArrowUp');
export const BadgeCheck = createIcon('BadgeCheck');
export const Bookmark = createIcon('Bookmark');
export const BookmarkMinus = createIcon('BookmarkMinus');
export const BookmarkSolid = createIcon('BookmarkSolid');
export const Check = createIcon('Check');
export const ChevronDown = createIcon('ChevronDown');
export const ChevronRight = createIcon('ChevronRight');
export const ChevronUp = createIcon('ChevronUp');
export const CircleAlert = createIcon('CircleAlert');
export const CircleCheck = createIcon('CircleCheck');
export const CircleDashed = createIcon('CircleDashed');
export const CircleHelp = createIcon('CircleHelp');
export const Columns3 = createIcon('Columns3');
export const Copy = createIcon('Copy');
export const Database = createIcon('Database');
export const DoorOpen = createIcon('DoorOpen');
export const ExternalLink = createIcon('ExternalLink');
export const FlaskConical = createIcon('FlaskConical');
export const FolderMinus = createIcon('FolderMinus');
export const FolderPlus = createIcon('FolderPlus');
export const Heart = createIcon('Heart');
export const HeartSolid = createIcon('HeartSolid');
export const Heater = createIcon('Heater');
export const Info = createIcon('Info');
export const LayoutGrid = createIcon('LayoutGrid');
export const Lightbulb = createIcon('Lightbulb');
export const MapIcon = createIcon('Map');
export const MessageSquareQuote = createIcon('MessageSquareQuote');
export const MoreHorizontal = createIcon('MoreHorizontal');
export const MoveDown = createIcon('MoveDown');
export const OctagonX = createIcon('OctagonX');
export const PanelsTopLeft = createIcon('PanelsTopLeft');
export const Pencil = createIcon('Pencil');
export const PencilRuler = createIcon('PencilRuler');
export const Plus = createIcon('Plus');
export const Printer = createIcon('Printer');
export const RotateCcw = createIcon('RotateCcw');
export const RotateCw = createIcon('RotateCw');
export const Rows3 = createIcon('Rows3');
export const Ruler = createIcon('Ruler');
export const Search = createIcon('Search');
export const SlidersHorizontal = createIcon('SlidersHorizontal');
export const Sparkles = createIcon('Sparkles');
export const Tag = createIcon('Tag');
export const Trash2 = createIcon('Trash2');
export const TriangleAlert = createIcon('TriangleAlert');
export const Undo2 = createIcon('Undo2');
export const X = createIcon('X');

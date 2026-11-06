'use client';

import { type RefObject, useCallback, useLayoutEffect, useState } from 'react';

/** `legible(size, minPx)`: an inch-based font size that never renders below `minPx` on screen. */
export function useLegibleText(ref: RefObject<SVGSVGElement | null>, viewWidth: number, viewHeight: number) {
  // Start at a desktop-like scale so the first paint matches the common case.
  const [pxPerUnit, setPxPerUnit] = useState(4);

  useLayoutEffect(() => {
    const svg = ref.current;
    if (!svg || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      // preserveAspectRatio "meet": the tighter axis sets the scale.
      if (width && height) setPxPerUnit(Math.min(width / viewWidth, height / viewHeight));
    });
    observer.observe(svg);
    return () => observer.disconnect();
  }, [ref, viewWidth, viewHeight]);

  const legible = useCallback((size: number, minPx: number) => Math.max(size, minPx / pxPerUnit), [pxPerUnit]);
  return { legible, pxPerUnit };
}

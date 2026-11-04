export const INCHES_PER_FOOT = 12;

const FRACTIONS: Record<number, string> = { 0.25: '¼', 0.5: '½', 0.75: '¾' };

function roundToQuarter(value: number): number {
  return Math.round(value * 4) / 4;
}

function inchPart(inches: number): string {
  const whole = Math.floor(inches);
  const fraction = FRACTIONS[inches - whole] ?? '';
  if (whole === 0 && fraction) return fraction;
  return `${whole}${fraction}`;
}

/** 86.5 → `86½″`. Rounds to the nearest quarter inch. */
export function formatInches(value: number): string {
  return `${inchPart(roundToQuarter(value))}″`;
}

/** 86.5 → `7′ 2½″`, 144 → `12′`. Rounds to the nearest quarter inch. */
export function formatFeetInches(value: number): string {
  const total = roundToQuarter(value);
  const feet = Math.floor(total / INCHES_PER_FOOT);
  const inches = total - feet * INCHES_PER_FOOT;
  if (feet === 0) return `${inchPart(inches)}″`;
  if (inches === 0) return `${feet}′`;
  return `${feet}′ ${inchPart(inches)}″`;
}

/** W × D × H in inches, with `?` for unknown fields: `86½ × 38¼ × ? in`. */
export function formatDimensionTriple(
  width: number | null,
  depth: number | null,
  height: number | null,
): string {
  const part = (value: number | null) => (value === null ? '?' : inchPart(roundToQuarter(value)));
  return `${part(width)} × ${part(depth)} × ${part(height)} in`;
}

/**
 * Parses designer input such as `86.5`, `86 1/2"`, `7' 2.5"`, `7ft 2in` into inches.
 * Returns null for anything ambiguous rather than guessing.
 */
export function parseLength(input: string): number | null {
  const text = input.trim().toLowerCase().replace(/[″”]/g, '"').replace(/[′’]/g, "'");
  if (!text) return null;

  const match = text.match(
    /^(?:(\d+(?:\.\d+)?)\s*(?:'|ft|feet)\s*)?(?:(\d+(?:\.\d+)?)(?:\s+(\d+)\/(\d+))?\s*(?:"|in|inches)?)?$/,
  );
  if (!match || (match[1] === undefined && match[2] === undefined)) return null;

  const feet = match[1] === undefined ? 0 : Number(match[1]);
  const whole = match[2] === undefined ? 0 : Number(match[2]);
  const fraction =
    match[3] === undefined ? 0 : Number(match[4]) === 0 ? Number.NaN : Number(match[3]) / Number(match[4]);
  const inches = feet * INCHES_PER_FOOT + whole + fraction;

  return Number.isFinite(inches) && inches > 0 ? inches : null;
}

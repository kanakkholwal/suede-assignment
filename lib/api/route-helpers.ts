import { NextResponse } from 'next/server';

import { RepositoryError } from '@/lib/db/repository-error';
import {
  resolveWorkspace,
  WORKSPACE_COOKIE_NAME,
  workspaceCookieOptions,
  type WorkspaceResolution,
} from '@/lib/db/workspace';

export const DATABASE_UNAVAILABLE_MESSAGE =
  'The local catalog database is unavailable. Run pnpm db:reset to restore it.';

export class RequestInputError extends Error {}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function hasExactKeys(value: Record<string, unknown>, keys: readonly string[]): boolean {
  const actual = Object.keys(value).sort();
  const expected = [...keys].sort();
  return actual.length === expected.length && actual.every((key, index) => key === expected[index]);
}

export function requireString(value: Record<string, unknown>, key: string): string {
  const field = value[key];
  if (typeof field !== 'string') throw new RequestInputError(`${key} must be a string.`);
  return field;
}

export function requireNullableString(value: Record<string, unknown>, key: string): string | null {
  return value[key] === null ? null : requireString(value, key);
}

/** Finite number within [min, max]; bounds keep plan maths away from absurd input. */
export function requireNumber(value: Record<string, unknown>, key: string, min: number, max: number): number {
  const field = value[key];
  if (typeof field !== 'number' || !Number.isFinite(field) || field < min || field > max) {
    throw new RequestInputError(`${key} must be a number between ${min} and ${max}.`);
  }
  return field;
}

export function requireNullableNumber(
  value: Record<string, unknown>,
  key: string,
  min: number,
  max: number,
): number | null {
  return value[key] === null ? null : requireNumber(value, key, min, max);
}

export function requireOneOf<T extends string | number>(
  value: Record<string, unknown>,
  key: string,
  options: readonly T[],
): T {
  const field = value[key];
  if (!options.includes(field as T)) {
    throw new RequestInputError(`${key} must be one of ${options.join(', ')}.`);
  }
  return field as T;
}

function errorResponse(error: unknown): NextResponse {
  if (error instanceof RequestInputError || error instanceof SyntaxError) {
    return NextResponse.json(
      { error: error instanceof SyntaxError ? 'The request body must be valid JSON.' : error.message },
      { status: 400 },
    );
  }
  if (error instanceof RepositoryError) {
    return NextResponse.json({ error: error.message }, { status: error.status });
  }
  return NextResponse.json({ error: DATABASE_UNAVAILABLE_MESSAGE }, { status: 503 });
}

function withWorkspaceCookie(response: NextResponse, workspace: WorkspaceResolution | undefined): NextResponse {
  if (workspace?.setCookie) {
    response.cookies.set(WORKSPACE_COOKIE_NAME, workspace.workspaceId, workspaceCookieOptions());
  }
  return response;
}

/** Resolves the anonymous workspace, runs `handler`, and maps errors to JSON responses. */
export async function respondForWorkspace<T>(handler: (workspaceId: string) => T): Promise<NextResponse> {
  let workspace: WorkspaceResolution | undefined;
  try {
    workspace = await resolveWorkspace();
    return withWorkspaceCookie(NextResponse.json(handler(workspace.workspaceId)), workspace);
  } catch (error) {
    return withWorkspaceCookie(errorResponse(error), workspace);
  }
}

/** Parses the JSON body with `parse` before touching the workspace; bad input never sets a cookie. */
export async function respondToMutation<M, T>(
  request: Request,
  parse: (body: unknown) => M,
  handler: (workspaceId: string, mutation: M) => T,
): Promise<NextResponse> {
  let mutation: M;
  try {
    mutation = parse(await request.json());
  } catch (error) {
    return errorResponse(error);
  }
  return respondForWorkspace((workspaceId) => handler(workspaceId, mutation));
}

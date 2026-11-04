import { randomUUID } from 'node:crypto';
import { cookies } from 'next/headers';

export const WORKSPACE_COOKIE_NAME = 'catalog_lab_interview_workspace';

export interface WorkspaceResolution {
  workspaceId: string;
  setCookie: boolean;
}

export async function resolveWorkspace(): Promise<WorkspaceResolution> {
  const cookieStore = await cookies();
  const workspaceId = cookieStore.get(WORKSPACE_COOKIE_NAME)?.value;

  if (workspaceId) return { workspaceId, setCookie: false };
  return { workspaceId: randomUUID(), setCookie: true };
}

/** The existing workspace, if any; read-only routes never create one. */
export async function readWorkspaceId(): Promise<string | null> {
  return (await cookies()).get(WORKSPACE_COOKIE_NAME)?.value ?? null;
}

export function workspaceCookieOptions() {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  };
}

'use client';

import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { authControllerStreamToken } from '@/lib/api/generated/auth/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api';

/**
 * Subscribes to the project's SSE stream and invalidates cached queries whenever
 * the backend pushes a change, so the dashboard updates live. Re-establishes the
 * connection when the short-lived stream token expires.
 */
export function useProjectStream(projectId: string | undefined): void {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!projectId) {
      return;
    }

    let source: EventSource | null = null;
    let cancelled = false;
    let reconnectTimer: ReturnType<typeof setTimeout> | null = null;

    const connect = async (): Promise<void> => {
      try {
        const { streamToken } = await authControllerStreamToken();
        if (cancelled) {
          return;
        }
        const url = `${API_URL}/projects/${projectId}/stream?token=${encodeURIComponent(streamToken)}`;
        source = new EventSource(url);

        const onChange = () => {
          void queryClient.invalidateQueries();
        };
        source.onmessage = onChange;
        source.addEventListener('UPDATE_CREATED', onChange);
        source.addEventListener('MILESTONE_CHANGED', onChange);
        source.addEventListener('DELIVERABLE_ADDED', onChange);
        source.addEventListener('FEEDBACK_CREATED', onChange);
        source.addEventListener('FEEDBACK_UPDATED', onChange);

        source.onerror = () => {
          source?.close();
          source = null;
          if (!cancelled) {
            // Token likely expired; reconnect with a fresh one.
            reconnectTimer = setTimeout(() => void connect(), 3000);
          }
        };
      } catch {
        if (!cancelled) {
          reconnectTimer = setTimeout(() => void connect(), 5000);
        }
      }
    };

    void connect();

    return () => {
      cancelled = true;
      if (reconnectTimer) {
        clearTimeout(reconnectTimer);
      }
      source?.close();
    };
  }, [projectId, queryClient]);
}

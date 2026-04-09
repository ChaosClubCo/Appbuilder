import { projectId, publicAnonKey } from '/utils/supabase/info';

const BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-8aff499e`;

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${publicAnonKey}`,
      ...options?.headers,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    console.error(`API error on ${path}:`, data);
    throw new Error(data.error || `Request failed with status ${res.status}`);
  }

  return data as T;
}

export const api = {
  // Contact form
  submitContact: (body: { firstName: string; lastName?: string; email: string; message: string }) =>
    request<{ success: boolean; id: string; message: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify(body),
    }),

  // Newsletter
  subscribeNewsletter: (email: string) =>
    request<{ success: boolean; message: string; alreadySubscribed?: boolean }>('/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }),

  getSubscriberCount: () =>
    request<{ count: number }>('/newsletter/count'),

  // AI Video Script
  generateVideoScript: (body: { prompt: string; style: string; duration: string; audio: string }) =>
    request<{ success: boolean; script: any; scriptId: string }>('/ai/video-script', {
      method: 'POST',
      body: JSON.stringify(body),
    }),

  // Analytics
  trackEvent: (event: string, data?: Record<string, any>) =>
    request<{ success: boolean }>('/analytics/event', {
      method: 'POST',
      body: JSON.stringify({ event, data }),
    }).catch(() => {}), // silently fail analytics
};

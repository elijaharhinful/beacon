import axios, { type AxiosError, type AxiosRequestConfig } from 'axios';
import { getSession } from 'next-auth/react';

// Generated paths already include the '/api' prefix, so the base URL is the origin only.
const API_ORIGIN = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api').replace(/\/api\/?$/, '');

interface SessionWithToken {
  accessToken?: string;
}

interface ApiEnvelope<T> {
  success?: boolean;
  message?: string;
  data?: T;
}

export const AXIOS_INSTANCE = axios.create({ baseURL: API_ORIGIN });

// Attach the Auth.js session bearer token on the client.
AXIOS_INSTANCE.interceptors.request.use(async (config) => {
  if (typeof window !== 'undefined') {
    const session = (await getSession()) as SessionWithToken | null;
    if (session?.accessToken) {
      config.headers.set('Authorization', `Bearer ${session.accessToken}`);
    }
  }
  return config;
});

/**
 * Orval mutator. Returns the payload from our { success, data } response envelope so
 * the generated hooks receive DTOs directly (matching the documented response types).
 */
export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({ ...config, cancelToken: source.token }).then((response) => {
    const body = response.data as ApiEnvelope<T> | T;
    if (body && typeof body === 'object' && 'data' in body) {
      return (body as ApiEnvelope<T>).data as T;
    }
    return body as T;
  });

  // Allow TanStack Query to cancel in-flight requests.
  (promise as Promise<T> & { cancel?: () => void }).cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

export type ErrorType<Error> = AxiosError<Error>;
export type BodyType<BodyData> = BodyData;

export default customInstance;

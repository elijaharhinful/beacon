/**
 * Mirrors the backend Role enum. Kept as a local const so client/server code and
 * middleware can reference roles without importing backend types.
 */
export const Role = {
  ADMIN: 'ADMIN',
  CLIENT: 'CLIENT',
} as const;

export type Role = (typeof Role)[keyof typeof Role];

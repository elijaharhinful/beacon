export const colors = {
  background: '#0a0d0f',
  foreground: '#f0f4f8',
  teal: '#00d4aa',
  tealDark: '#00a88a',
  cardBg: '#0d1117',
  border: 'rgba(255, 255, 255, 0.05)',
  textMuted: '#6b7280', // gray-500 equivalent
} as const;

export type Colors = typeof colors;

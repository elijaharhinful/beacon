import type { ReactNode } from 'react';

const fieldBase =
  'rounded-lg border border-white/10 bg-[#0a0d0f] px-3.5 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-[#00d4aa]/60';

export const adminField = `w-full ${fieldBase}`;

/** Inline control that must not stretch (e.g. a status select beside a title). */
export const adminFieldCompact = `shrink-0 cursor-pointer ${fieldBase}`;

export function AdminCard({
  title,
  children,
  action,
}: {
  title: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/5 bg-[#0d1117] p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

export function FieldLabel({ children }: { children: ReactNode }) {
  return <label className="mb-1.5 block text-sm font-medium text-gray-300">{children}</label>;
}

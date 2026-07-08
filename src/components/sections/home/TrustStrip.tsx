'use client';

import Reveal from '@/components/ui/Reveal';

const audiences = [
  {
    label: 'Enterprises',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M6 21V7l6-4 6 4v14" />
        <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Startups',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Institutions',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20h20M4 20V9l8-5 8 5v11M9 20v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Governments',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-card border-y border-border py-14">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase text-center mb-8">
          Built for businesses that want to scale
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
          {audiences.map((a, i) => (
            <Reveal
              key={a.label}
              delay={i * 80}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <span className="text-primary/70">{a.icon}</span>
              <span className="font-semibold text-base tracking-wide">{a.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

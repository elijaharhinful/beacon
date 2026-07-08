'use client';

import Reveal from '@/components/ui/Reveal';

const steps = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" strokeLinecap="round" />
      </svg>
    ),
    step: '01',
    title: 'Discover',
    desc: 'We take time to understand your business, processes, and challenges.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    step: '02',
    title: 'Design',
    desc: 'We architect a system tailored to your operational needs.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    step: '03',
    title: 'Build',
    desc: 'We develop, test, and deploy with precision and attention to detail.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    step: '04',
    title: 'Scale',
    desc: 'We support, optimize, and evolve your system as your business grows.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-background py-24 px-9 lg:px-[4.5rem]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-foreground">How It Works</h2>
        </Reveal>

        {/* Steps on a connector line */}
        <div className="relative">
          {/* Horizontal connector (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
            {steps.map((step, i) => {
              const active = i === steps.length - 1;
              return (
                <Reveal key={i} delay={i * 110} className="relative flex flex-col items-center text-center">
                  {/* Icon badge */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center border transition-colors duration-300 ${
                      active
                        ? 'bg-primary/10 border-primary/50 text-primary'
                        : 'bg-card border-border text-muted-foreground'
                    }`}
                  >
                    {step.icon}
                  </div>

                  <span
                    className={`mt-6 text-[0.7rem] font-semibold tracking-[0.2em] ${
                      active ? 'text-primary' : 'text-muted-foreground/60'
                    }`}
                  >
                    {step.step}
                  </span>
                  <h3 className={`mt-2 font-bold text-lg ${active ? 'text-primary' : 'text-foreground'}`}>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed max-w-[16rem]">
                    {step.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

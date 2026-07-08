'use client';

import { Button } from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="/videos/abstract_space.webm"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      {/* Darken video for legibility */}
      <div className="absolute inset-0 bg-[#0a0d0f]/60 pointer-events-none" />

      {/* Background gradient grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,170,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Soft radial glow, top-center emerging from darkness */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[1100px] h-[700px] bg-[#00d4aa]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-9 lg:px-[4.5rem] text-center">

        {/* Eyebrow */}
        <Reveal as="p" delay={100} className="text-primary/80 text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase mb-6">
          BEACON
        </Reveal>

        {/* Headline */}
        <Reveal as="h1" delay={200} className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
          Build{' '}
          <span className="relative">
            <span className="text-[#00d4aa]">Forward.</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 8"
              fill="none"
              preserveAspectRatio="none"
            >
              <path className="hero-underline" d="M0 6C50 2 100 0 150 2C200 4 250 6 300 4" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
        </Reveal>

        {/* Subtext */}
        <Reveal as="p" delay={320} className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          We design and build custom systems that transform how businesses operate - turning complexity into clarity, and ideas into scalable solutions.
        </Reveal>

        {/* CTAs */}
        <Reveal delay={440} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="default" className="w-full sm:w-auto">
            Get Started
          </Button>
          <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6.5 5.5L10.5 8L6.5 10.5V5.5Z" fill="currentColor"/>
            </svg>
            View Our Work
          </Button>
        </Reveal>
      </div>

      {/* Scroll indicator (section-anchored so it sits at the viewport bottom) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gray-500/40" />
      </div>
    </section>
  );
}

'use client';

import { Button } from '@/components/ui/Button';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0d0f]"
    >
      {/* Background gradient grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,170,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow emerging from the right */}
      <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-[1000px] h-[800px] bg-[#00d4aa]/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
          BEACON <br className="hidden sm:block" /> Build{' '}
          <span className="relative">
            <span className="text-[#00d4aa]">Forward.</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 8"
              fill="none"
              preserveAspectRatio="none"
            >
              <path d="M0 6C50 2 100 0 150 2C200 4 250 6 300 4" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
            </svg>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          We design and build custom systems that transform how businesses operate - turning complexity into clarity, and ideas into scalable solutions.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}

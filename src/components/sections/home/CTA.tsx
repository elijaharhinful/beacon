'use client';

import { Button } from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

export default function CTA() {
  return (
    <section className="relative bg-[#0d1117] py-28 px-9 lg:px-[4.5rem] overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,212,170,0.3) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <Reveal className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
          Ready to Build{' '}
          <span className="text-[#00d4aa]">Forward?</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Let&apos;s design a system that transforms your business and supports your growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="default" size="lg" className="w-full sm:w-auto">
            Start Your Project
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Book a Call
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

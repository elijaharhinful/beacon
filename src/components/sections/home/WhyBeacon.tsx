'use client';

import Reveal from '@/components/ui/Reveal';

const reasons = [
  { num: '01', title: 'Built specifically for your business needs' },
  { num: '02', title: 'Designed for scalability and long-term performance' },
  { num: '03', title: 'Engineered to eliminate inefficiencies' },
  { num: '04', title: 'Focused on delivering measurable results' },
];

export default function WhyBeacon() {
  return (
    <section className="bg-[#0d1117] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — reasons */}
          <Reveal direction="right">
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Why BEACON
            </h2>
            <div className="text-gray-400 text-base leading-relaxed mb-12 max-w-xl">
              <p className="mb-4">We don&apos;t just build software. We build systems that redefine how your business operates.</p>
              <p>Every solution is designed with precision - aligned with your structure, your goals, and your future.</p>
            </div>

            <div className="flex flex-col gap-10">
              {reasons.map((r, i) => (
                <Reveal key={i} delay={i * 90} className="flex gap-6 group">
                  {/* Number */}
                  <span className="text-[#00d4aa]/30 font-black text-3xl leading-none shrink-0 group-hover:text-[#00d4aa]/60 transition-colors duration-300 w-10">
                    {r.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-white font-bold text-base">{r.title}</h3>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Right — image */}
          <Reveal direction="left" delay={120} className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#141b22]">
              {/* Abstract tech pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-[#00d4aa]/10 animate-[spin_20s_linear_infinite]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00d4aa]" />
                  </div>
                  {/* Mid ring */}
                  <div className="absolute inset-8 rounded-full border border-[#00d4aa]/15 animate-[spin_15s_linear_infinite_reverse]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00d4aa]/60" />
                  </div>
                  {/* Inner ring */}
                  <div className="absolute inset-16 rounded-full border border-[#00d4aa]/20 animate-[spin_10s_linear_infinite]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00d4aa]/40" />
                  </div>
                  {/* Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/30 flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-[#00d4aa]/20 border border-[#00d4aa]/50 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#00d4aa]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

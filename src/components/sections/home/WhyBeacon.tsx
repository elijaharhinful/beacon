'use client';

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
          <div>
            <p className="text-[#00d4aa] text-xs font-semibold tracking-widest uppercase mb-4">
              Our Advantage
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Why BEACON
            </h2>
            <div className="text-gray-400 text-base leading-relaxed mb-12 max-w-xl">
              <p className="mb-4">We don't just build software. We build systems that redefine how your business operates.</p>
              <p>Every solution is designed with precision - aligned with your structure, your goals, and your future.</p>
            </div>

            <div className="flex flex-col gap-10">
              {reasons.map((r, i) => (
                <div key={i} className="flex gap-6 group">
                  {/* Number */}
                  <span className="text-[#00d4aa]/30 font-black text-3xl leading-none shrink-0 group-hover:text-[#00d4aa]/60 transition-colors duration-300 w-10">
                    {r.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-5 bg-[#00d4aa] rounded-full" />
                      <h3 className="text-white font-bold text-base">{r.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#141b22]">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4aa]/5 to-transparent z-10" />

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

              {/* Bottom overlay gradient */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d1117] to-transparent z-20" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#0a0d0f] border border-white/10 rounded-xl p-4 shadow-2xl z-30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/30 flex items-center justify-center">
                  <span className="text-[#00d4aa] font-black text-sm">98%</span>
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Client Satisfaction</p>
                  <p className="text-gray-500 text-xs">Across all projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

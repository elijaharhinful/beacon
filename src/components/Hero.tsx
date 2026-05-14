'use client';

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

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00d4aa]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#00d4aa]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse" />
          <span className="text-[#00d4aa] text-xs font-semibold tracking-wider uppercase">
            Available for New Projects
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
          Build{' '}
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
          From bold ideas to production-ready products. We design and engineer high-performance
          digital experiences that scale with your ambition.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#00d4aa] hover:bg-[#00b894] text-[#0a0d0f] font-bold text-sm px-8 py-3.5 rounded transition-all duration-200 hover:shadow-xl hover:shadow-[#00d4aa]/25 hover:-translate-y-0.5 w-full sm:w-auto">
            Start a Project
          </button>
          <button className="border border-white/15 hover:border-white/30 text-white font-medium text-sm px-8 py-3.5 rounded transition-all duration-200 hover:bg-white/5 w-full sm:w-auto flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6.5 5.5L10.5 8L6.5 10.5V5.5Z" fill="currentColor"/>
            </svg>
            View Our Work
          </button>
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

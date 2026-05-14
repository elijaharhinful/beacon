'use client';

export default function CTA() {
  return (
    <section className="relative bg-[#0d1117] py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00d4aa]/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,212,170,0.3) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-[#00d4aa] text-xs font-semibold tracking-widest uppercase mb-6">
          Let's Build Together
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
          Ready to Build{' '}
          <span className="text-[#00d4aa]">Forward?</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Tell us about your project and we'll get back to you within one business day with a clear
          path forward.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#00d4aa] hover:bg-[#00b894] text-[#0a0d0f] font-bold text-sm px-10 py-4 rounded transition-all duration-200 hover:shadow-2xl hover:shadow-[#00d4aa]/30 hover:-translate-y-0.5 w-full sm:w-auto">
            Start a Conversation
          </button>
          <button className="border border-white/15 hover:border-white/30 text-white font-medium text-sm px-10 py-4 rounded transition-all duration-200 hover:bg-white/5 w-full sm:w-auto">
            View Case Studies
          </button>
        </div>

        {/* Trust signals */}
        <div className="flex items-center justify-center gap-6 mt-12 text-gray-600 text-xs flex-wrap">
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3 3 7-7" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            No obligation
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3 3 7-7" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Response within 24h
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3 3 7-7" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            NDA available on request
          </div>
        </div>
      </div>
    </section>
  );
}

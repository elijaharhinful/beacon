'use client';

const steps = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    step: '02',
    title: 'Design',
    desc: 'We architect a system tailored to your operational needs.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    <section className="bg-[#0a0d0f] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00d4aa] text-xs font-semibold tracking-widest uppercase mb-4">
            Our Process
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white">How It Works</h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative rounded-xl p-8 border transition-all duration-300 group ${
                i === 3
                  ? 'bg-[#00d4aa]/10 border-[#00d4aa]/40 shadow-lg shadow-[#00d4aa]/5'
                  : 'bg-[#0d1117] border-white/5 hover:border-white/10 hover:bg-[#101419]'
              }`}
            >
              {/* Connector line (hidden on last) */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/10 z-10" />
              )}

              {/* Step number */}
              <span
                className={`text-xs font-bold tracking-widest mb-6 block ${
                  i === 3 ? 'text-[#00d4aa]' : 'text-gray-600'
                }`}
              >
                STEP {step.step}
              </span>

              {/* Icon */}
              <div
                className={`mb-5 transition-transform duration-200 group-hover:scale-110 ${
                  i === 3 ? 'text-[#00d4aa]' : 'text-gray-500'
                }`}
              >
                {step.icon}
              </div>

              <h3
                className={`font-bold text-lg mb-3 ${i === 3 ? 'text-[#00d4aa]' : 'text-white'}`}
              >
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

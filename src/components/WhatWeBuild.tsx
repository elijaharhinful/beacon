'use client';

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Enterprise',
    description:
      'Scalable platforms and infrastructure built for businesses that demand reliability and performance at scale.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Blur Plan',
    description:
      'Rapid MVP delivery with pixel-perfect design systems and clean code handoffs for early-stage products.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: 'Analytics',
    description:
      'Data pipelines, dashboards, and insight engines that transform raw data into decisions you can act on.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
    title: 'Integrations',
    description:
      'Seamless third-party connections, webhooks, and API bridges that keep your ecosystem in sync.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Demo',
    description:
      'Interactive product demos and proof-of-concept builds that win stakeholders before a single line ships.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'AI & Automation',
    description:
      'LLM-powered features, workflow automation, and AI integrations that give your product a serious edge.',
  },
];

export default function WhatWeBuild() {
  return (
    <section id="services" className="bg-[#0a0d0f] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-16">
          <div className="lg:w-1/2">
            <p className="text-[#00d4aa] text-xs font-semibold tracking-widest uppercase mb-4">
              Our Capabilities
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              What We Build
            </h2>
          </div>
          <div className="lg:w-1/2 flex items-end">
            <p className="text-gray-400 text-base leading-relaxed">
              We work across the full stack — from pixel-perfect interfaces to robust backend
              systems. Whatever you need shipped, we have the expertise to deliver it.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#0a0d0f] p-8 group hover:bg-[#0d1117] transition-all duration-300 relative"
            >
              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4aa]/0 to-transparent group-hover:via-[#00d4aa]/40 transition-all duration-500" />

              <div className="text-[#00d4aa] mb-4 group-hover:scale-110 transition-transform duration-200 w-fit">
                {service.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

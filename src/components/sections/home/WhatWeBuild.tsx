'use client';

import Reveal from '@/components/ui/Reveal';

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Enterprise Systems',
    description: 'Core systems that manage and streamline business operations at scale.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Workflow & Automation Systems',
    description: 'Automating processes to eliminate inefficiencies and improve productivity.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
    title: 'Industry Platforms',
    description: 'Custom-built systems tailored to the unique needs of specific industries.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Commerce Systems',
    description: 'Platforms that power transactions, payments, and revenue operations.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'Institutional Systems',
    description: 'Secure and scalable solutions for schools, organizations, and public institutions.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: 'Data & Intelligence Systems',
    description: 'Transforming data into actionable insights through advanced analytics and reporting.',
  },
];

export default function WhatWeBuild() {
  return (
    <section id="services" className="bg-[#0a0d0f] py-24 px-9 lg:px-[4.5rem]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            What We Build
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mt-5">
            We build systems that form the backbone of modern organizations - designed to improve efficiency, enhance decision-making, and support long-term growth.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden">
          {services.map((service, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 90}
              className="bg-[#0a0d0f] p-8 group hover:bg-[#0d1117] transition-all duration-300 relative"
            >
              <div className="text-[#00d4aa] mb-4 group-hover:scale-110 transition-transform duration-200 w-fit">
                {service.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

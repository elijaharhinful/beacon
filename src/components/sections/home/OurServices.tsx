'use client';

import { Card, CardContent } from '@/components/ui/Card';

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Web Development',
    desc: 'Modern, scalable web applications built for performance and reliability.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Mobile App Development',
    desc: 'High-performance mobile applications designed for seamless user experiences.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Custom Software Development',
    desc: 'Tailored software solutions built to meet your exact requirements.',
  },
];

export default function OurServices() {
  return (
    <section id="about" className="bg-[#0a0d0f] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00d4aa] text-xs font-semibold tracking-widest uppercase mb-4">
            Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">How We Build</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Our services provide the technical foundation that brings your systems to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card
              key={i}
              className="bg-[#0d1117] hover:border-[#00d4aa]/20 hover:-translate-y-0"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4aa]/0 to-[#00d4aa]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="relative z-10 p-8">
                <div className="text-gray-600 group-hover:text-[#00d4aa] transition-colors duration-300 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-white font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

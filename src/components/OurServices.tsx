'use client';

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'System Architecture',
    subtitle: 'Foundation-first thinking',
    desc: 'We design systems that won\'t crumble under load. Microservices, event-driven architectures, and database schema design that scales gracefully.',
    items: ['Cloud infrastructure', 'Database design', 'API architecture', 'Security review'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Full Stack',
    subtitle: 'Front to back, covered',
    desc: 'End-to-end product engineering. From the pixel details of your UI to the low-latency query patterns on your backend — we own all of it.',
    items: ['React / Next.js', 'Node / Python APIs', 'Mobile apps', 'Admin panels'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Deployment',
    subtitle: 'Ship with confidence',
    desc: 'CI/CD pipelines, container orchestration, and cloud infrastructure that gets your product to production safely and repeatably.',
    items: ['Docker / Kubernetes', 'CI/CD pipelines', 'Monitoring & alerts', 'Performance tuning'],
  },
];

export default function OurServices() {
  return (
    <section id="about" className="bg-[#0a0d0f] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00d4aa] text-xs font-semibold tracking-widest uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Our Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            A focused set of high-impact services, delivered by specialists who take pride in the craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative bg-[#0d1117] rounded-2xl p-8 border border-white/5 hover:border-[#00d4aa]/20 transition-all duration-300 group overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4aa]/0 to-[#00d4aa]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="text-gray-600 group-hover:text-[#00d4aa] transition-colors duration-300 mb-6">
                  {service.icon}
                </div>

                <span className="text-[#00d4aa]/60 text-xs font-semibold tracking-widest uppercase mb-2 block">
                  {service.subtitle}
                </span>
                <h3 className="text-white font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>

                <ul className="flex flex-col gap-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

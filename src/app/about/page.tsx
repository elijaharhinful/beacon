import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'About — BEACON',
  description: 'BEACON is a technology company focused on designing and building custom systems that power modern businesses.',
};

const approachPoints = [
  {
    num: '01',
    title: 'Understand deeply',
    desc: 'We begin by understanding how your business works - its structure, its challenges, and its goals. From there, we design systems that are not only functional, but aligned with how your organization operates.',
  },
  {
    num: '02',
    title: 'Design with purpose',
    desc: 'Every system we build is guided by a clear and deliberate approach. We focus on creating solutions that are impactful, improving efficiency, enhancing visibility, and enabling growth.',
  },
  {
    num: '03',
    title: 'Build with precision',
    desc: 'We build with precision, ensuring performance, reliability, and scalability at every stage. We do not rely on generic templates, we engineer systems specifically for your operational needs.',
  },
  {
    num: '04',
    title: 'Scale continuously',
    desc: 'As your business evolves, we continue to refine and support the systems we create, ensuring they adapt and scale to meet new challenges and expanded requirements.',
  },
];

const beliefs = [
  {
    title: 'Architecture First',
    desc: 'We believe that technology should simplify complexity, not add to it. A well-designed foundation is critical for any system to scale successfully.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 22h20L12 2z"/>
        <line x1="12" y1="2" x2="12" y2="22"/>
      </svg>
    ),
  },
  {
    title: 'Precision Over Speed',
    desc: 'We build systems that are not only effective today, but adaptable for tomorrow. We move methodically. A well-built system requires fewer fixes and scales naturally.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    title: 'Clarity Through Structure',
    desc: 'Complex problems demand simple, elegant, and modular solutions. We believe that every business is unique, and the systems that power it should reflect that.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    title: 'Uncompromising Security',
    desc: 'Security is not an add-on; it is woven into the foundational layer of every project we build, ensuring your data and operations remain protected.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0d0f]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
            About BEACON
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            BEACON is a technology company focused on designing and building custom systems that power modern businesses. We exist to help organizations move forward through intelligent, scalable, and efficient digital solutions. In a world where speed, structure, and data define success, we build the systems that make it possible.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#00d4aa]/10 to-[#0a0d0f] border border-white/5 p-10 lg:p-16 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 text-[#00d4aa] group-hover:scale-110 group-hover:opacity-40 transition-all duration-500">
               <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                 <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                 <line x1="4" y1="22" x2="4" y2="15"/>
               </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed text-lg relative z-10">
              To design and build systems that enable businesses to operate smarter, move faster, and grow with confidence.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#f59e0b]/10 to-[#0a0d0f] border border-white/5 p-10 lg:p-16 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 text-[#f59e0b] group-hover:scale-110 group-hover:opacity-40 transition-all duration-500">
               <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                 <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                 <circle cx="12" cy="12" r="3"/>
               </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed text-lg relative z-10">
              To become a leading force in system development - helping organizations across industries transform how they operate through technology.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do / What We Believe */}
      <section className="py-24 px-6 bg-[#0d1117] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-6">What We Do</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We design and develop systems across a wide range of industries and use cases - from enterprise platforms to specialized industry solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our work includes enterprise systems, workflow automation, commerce platforms, institutional systems, and data intelligence solutions - all built to improve efficiency, enhance decision-making, and support long-term growth.
            </p>
          </div>
          
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-white mb-8">What We Believe</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {beliefs.map((belief, i) => (
                <div key={i} className="bg-[#101419] p-8 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-4 text-[#00d4aa]">
                    {belief.icon}
                    <h3 className="text-white font-semibold text-lg">{belief.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{belief.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Approach</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Every system we build is guided by a clear and deliberate approach. We build with precision, ensuring performance, reliability, and scalability at every stage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachPoints.map((pt, i) => (
              <div key={i} className="bg-[#0d1117] p-8 rounded-xl border border-white/5 flex flex-col">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#00d4aa] text-sm font-bold tracking-widest mb-6">
                  {pt.num}
                </div>
                <h3 className="text-white font-bold text-xl mb-4">{pt.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 px-6 text-center bg-[#0d1117] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-8">
            "BEACON is not just about building software. It is about building systems that move businesses forward."
          </h2>
          <p className="text-[#00d4aa] font-bold tracking-widest uppercase">
            Build Forward.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

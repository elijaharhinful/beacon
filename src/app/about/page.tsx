import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Beacon | About',
  description: 'BEACON is a technology company focused on designing and building custom systems that power modern businesses.',
};

const approachPoints = [
  { num: '01', title: 'Understand deeply' },
  { num: '02', title: 'Design with purpose' },
  { num: '03', title: 'Build with precision' },
  { num: '04', title: 'Scale continuously' },
];

const beliefs = [
  'We believe that technology should simplify complexity, not add to it.',
  'We believe that every business is unique, and the systems that power it should reflect that.',
  'We believe in building solutions that are not only effective today, but adaptable for tomorrow.',
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0d0f]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-9 lg:px-[4.5rem] lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
            About BEACON
          </Reveal>
          <Reveal as="p" delay={120} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            BEACON is a technology company focused on designing and building custom systems that power modern businesses. We exist to help organizations move forward through intelligent, scalable, and efficient digital solutions. In a world where speed, structure, and data define success, we build the systems that make it possible.
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-9 lg:px-[4.5rem]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal direction="right" className="bg-[#0d1117] border border-white/5 p-10 lg:p-16 rounded-2xl relative overflow-hidden group">
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
          </Reveal>

          <Reveal direction="left" delay={120} className="bg-[#0d1117] border border-white/5 p-10 lg:p-16 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 text-[#00d4aa] group-hover:scale-110 group-hover:opacity-40 transition-all duration-500">
               <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                 <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                 <circle cx="12" cy="12" r="3"/>
               </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed text-lg relative z-10">
              To become a leading force in system development - helping organizations across industries transform how they operate through technology.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What We Do / What We Believe */}
      <section className="py-24 px-9 lg:px-[4.5rem] bg-[#0d1117] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <Reveal direction="right" className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-6">What We Do</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We design and develop systems across a wide range of industries and use cases - from enterprise platforms to specialized industry solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our work includes enterprise systems, workflow automation, commerce platforms, institutional systems, and data intelligence solutions - all built to improve efficiency, enhance decision-making, and support long-term growth.
            </p>
          </Reveal>

          <div className="lg:w-2/3">
            <Reveal as="h2" className="text-3xl font-bold text-white mb-8">What We Believe</Reveal>
            <div className="grid grid-cols-1 gap-4">
              {beliefs.map((belief, i) => (
                <Reveal
                  key={i}
                  delay={i * 90}
                  className="bg-[#101419] p-8 rounded-xl border border-white/5 hover:border-white/10 transition-colors flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/30 flex items-center justify-center text-[#00d4aa] shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="text-gray-400 leading-relaxed">{belief}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 px-9 lg:px-[4.5rem]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Approach</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Every system we build is guided by a clear and deliberate approach. We build with precision, ensuring performance, reliability, and scalability at every stage.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachPoints.map((pt, i) => (
              <Reveal key={i} delay={i * 90} className="bg-[#0d1117] p-8 rounded-xl border border-white/5 flex flex-col">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#00d4aa] text-sm font-bold tracking-widest mb-6">
                  {pt.num}
                </div>
                <h3 className="text-white font-bold text-xl">{pt.title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 px-9 lg:px-[4.5rem] text-center bg-[#0d1117] border-t border-white/5">
        <Reveal className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-8">
            &ldquo;BEACON is not just about building software. It is about building systems that move businesses forward.&rdquo;
          </h2>
          <p className="text-[#00d4aa] font-bold tracking-widest uppercase">
            Build Forward.
          </p>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}

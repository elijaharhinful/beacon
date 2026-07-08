import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Beacon | Projects',
  description: 'A selection of systems we\'ve designed and built - each solving real-world challenges.',
};

const projects = [
  {
    title: 'ERP System',
    desc: 'A comprehensive enterprise platform designed to manage operations, finance, inventory, and human resources within a unified system.',
    accent: '#00d4aa',
  },
  {
    title: 'POS System',
    desc: 'A modern point-of-sale system built for speed, accuracy, and seamless transaction management across multiple locations.',
    accent: '#6366f1',
  },
  {
    title: 'Conference Management Platform',
    desc: 'An end-to-end system for managing events, registrations, scheduling, and attendee engagement.',
    accent: '#f59e0b',
  },
  {
    title: 'Student Registration System',
    desc: 'A structured platform designed to manage enrollment, records, and administrative processes for institutions.',
    accent: '#ec4899',
  },
  {
    title: 'Tea Export Management System',
    desc: 'A specialized platform built to manage export operations, documentation, logistics, and compliance within the tea industry.',
    accent: '#10b981',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0d0f]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-9 lg:px-[4.5rem] lg:pt-40 lg:pb-24 border-b border-white/5 bg-[#0a0d0f]">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Projects
          </Reveal>
          <Reveal as="p" delay={120} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            A selection of systems we&apos;ve designed and built - each solving real-world challenges through thoughtful design and precise execution.
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-9 lg:px-[4.5rem] bg-[#0d1117]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <Reveal key={i} delay={(i % 2) * 90} className="h-full">
              <Card className="h-full bg-[#101419] border-white/5 hover:border-[#00d4aa]/30 transition-colors duration-300">
                {/* Project visual placeholder */}
                <div className="relative h-64 bg-[#0d1117] overflow-hidden border-b border-white/5">
                  {/* Grid overlay */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(${project.accent}15 1px, transparent 1px), linear-gradient(90deg, ${project.accent}15 1px, transparent 1px)`,
                      backgroundSize: '30px 30px',
                    }}
                  />
                  {/* Abstract system representation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full p-8 flex flex-col gap-2 opacity-50">
                      <div className="w-1/3 h-2 rounded bg-white/20" />
                      <div className="w-1/2 h-2 rounded bg-white/10" />
                      <div className="w-full h-full mt-4 rounded-xl border border-white/10 flex">
                         <div className="w-1/4 h-full border-r border-white/10" />
                         <div className="w-3/4 h-full p-4 flex flex-col gap-2">
                           <div className="w-full h-4 rounded bg-white/5" />
                           <div className="w-3/4 h-4 rounded bg-white/5" />
                         </div>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-white font-bold text-2xl mb-4">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{project.desc}</p>
                  
                  <Button variant="ghost" size="sm" className="!p-0 gap-1.5 hover:bg-transparent" style={{ color: project.accent }}>
                    VIEW CASE STUDY
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Button>
                </CardContent>
              </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 px-9 lg:px-[4.5rem] bg-[#0a0d0f]">
        <div className="max-w-7xl mx-auto">
          <Reveal as="h2" className="text-3xl font-bold text-white mb-12">Our Approach to Projects</Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Reveal delay={0}>
              <p className="text-gray-400 leading-relaxed">
                Each system we build is driven by a clear understanding of the client&apos;s needs and operational structure.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p className="text-gray-400 leading-relaxed">
                We focus on creating solutions that are not only functional, but impactful - improving efficiency, enhancing visibility, and enabling growth.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-gray-400 leading-relaxed">
                Every project represents a unique problem solved through a structured approach. From enterprise platforms to specialized industry systems, our work reflects our commitment to building solutions that are efficient, scalable, and aligned with business objectives.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="py-24 px-9 lg:px-[4.5rem] text-center border-t border-white/5 bg-[#0d1117]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
            Real systems. Real impact.
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00d4aa] leading-tight">
            Built to move businesses forward.
          </h2>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}

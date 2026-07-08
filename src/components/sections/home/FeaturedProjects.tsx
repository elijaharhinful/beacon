'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

const projects = [
  {
    title: 'ERP System',
    desc: 'A complete enterprise solution for managing operations, finance, and resources.',
  },
  {
    title: 'POS System',
    desc: 'A modern point-of-sale system designed for efficiency and scalability.',
  },
  {
    title: 'Conference Platform',
    desc: 'An end-to-end platform for managing events, registrations, and engagement.',
  },
  {
    title: 'Student Registration System',
    desc: 'A streamlined system for managing institutional enrollment and records.',
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-card py-24 px-9 lg:px-[4.5rem]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col items-center text-center gap-4 mb-14">
          <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-tight">
            Real Systems. Real Impact.
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl">
            A selection of systems we&apos;ve designed and built - each solving real-world challenges through thoughtful engineering.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <Reveal key={i} delay={(i % 2) * 100}>
              <Card>
              {/* Project visual - teal system motif */}
              <div className="relative h-52 bg-card overflow-hidden">
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0,212,170,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.12) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
                {/* Decorative shapes */}
                <div className="absolute top-8 right-8 w-20 h-20 rounded-xl opacity-20 rotate-12 border border-primary" />
                <div className="absolute bottom-4 left-6 w-12 h-12 rounded-lg opacity-15 -rotate-6 border border-primary" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full opacity-10 bg-primary" />
              </div>

              {/* Content */}
              <CardContent>
                <h3 className="text-foreground font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
              </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center mt-14">
          <Button>View All Projects</Button>
        </Reveal>
      </div>
    </section>
  );
}

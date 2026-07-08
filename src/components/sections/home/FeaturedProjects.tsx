'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const projects = [
  {
    title: 'ERP System',
    category: 'Enterprise',
    desc: 'A complete enterprise solution for managing operations, finance, and resources.',
    tags: ['Next.js', 'PostgreSQL', 'Node.js'],
  },
  {
    title: 'POS System',
    category: 'Commerce',
    desc: 'A modern point-of-sale system designed for efficiency and scalability.',
    tags: ['React', 'Electron', 'Stripe'],
  },
  {
    title: 'Conference Platform',
    category: 'Institutional',
    desc: 'An end-to-end platform for managing events, registrations, and engagement.',
    tags: ['Next.js', 'Supabase', 'WebSockets'],
  },
  {
    title: 'Student Registration System',
    category: 'Institutional',
    desc: 'A streamlined system for managing institutional enrollment and records.',
    tags: ['React', 'Python', 'AWS'],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-card py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
              Real Systems. Real Impact.
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl">
              A selection of systems we&apos;ve designed and built - each solving real-world challenges through thoughtful engineering.
            </p>
          </div>
          <Button variant="link" className="shrink-0 self-end">
            View All Projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Card key={i}>
              {/* Project visual - teal system motif */}
              <div className="relative h-52 bg-gradient-to-br from-primary/15 via-card to-card overflow-hidden">
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

                {/* Category badge */}
                <div className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm bg-primary/15 text-primary border border-primary/30">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <CardContent>
                <h3 className="text-foreground font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs text-muted-foreground bg-white/5 px-2.5 py-1 rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="!p-0 gap-1.5 hover:bg-transparent group-hover:text-primary">
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

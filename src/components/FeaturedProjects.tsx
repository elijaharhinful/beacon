'use client';

const projects = [
  {
    title: 'Nexus Dashboard',
    category: 'SaaS Platform',
    desc: 'A real-time operations dashboard for a logistics company handling 50,000+ daily transactions.',
    tags: ['Next.js', 'Supabase', 'D3.js'],
    gradient: 'from-[#00d4aa]/20 to-[#0d4a40]/30',
    accent: '#00d4aa',
  },
  {
    title: 'Vanta City',
    category: 'E-Commerce',
    desc: 'Full-stack commerce platform with AI-powered recommendations and sub-100ms page loads.',
    tags: ['React', 'Node.js', 'Stripe'],
    gradient: 'from-[#6366f1]/20 to-[#1e1b4b]/30',
    accent: '#6366f1',
  },
  {
    title: 'Pulse Analytics',
    category: 'Data Product',
    desc: 'Self-serve analytics tool that replaced a $200k/yr enterprise BI contract for a Series B startup.',
    tags: ['Python', 'FastAPI', 'Clickhouse'],
    gradient: 'from-[#f59e0b]/20 to-[#451a03]/30',
    accent: '#f59e0b',
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-[#0d1117] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-[#00d4aa] text-xs font-semibold tracking-widest uppercase mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Featured Projects
            </h2>
          </div>
          <button className="text-sm text-[#00d4aa] font-medium hover:underline underline-offset-4 flex items-center gap-1.5 shrink-0 self-end">
            View all projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-[#0a0d0f] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project visual */}
              <div className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(${project.accent}15 1px, transparent 1px), linear-gradient(90deg, ${project.accent}15 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                  }}
                />
                {/* Decorative shapes */}
                <div
                  className="absolute top-8 right-8 w-20 h-20 rounded-xl opacity-20 rotate-12 border"
                  style={{ borderColor: project.accent }}
                />
                <div
                  className="absolute bottom-4 left-6 w-12 h-12 rounded-lg opacity-15 -rotate-6 border"
                  style={{ borderColor: project.accent }}
                />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full opacity-10"
                  style={{ background: project.accent }}
                />

                {/* Category badge */}
                <div
                  className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm"
                  style={{
                    background: `${project.accent}20`,
                    color: project.accent,
                    border: `1px solid ${project.accent}30`,
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#00d4aa] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-white transition-colors group-hover:text-[#00d4aa]">
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

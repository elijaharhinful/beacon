import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Beacon | Solutions',
  description: 'We design and build systems that form the backbone of modern organizations - tailored to improve efficiency, enhance decision-making, and support long-term growth.',
};

const solutions = [
  {
    title: 'Enterprise Systems',
    copy: [
      'Enterprise systems are the core of your business operations.',
      'We design and build integrated platforms that manage key functions such as finance, human resources, inventory, procurement, and logistics - all within a unified system.',
      'Our enterprise solutions are built for reliability, scalability, and performance, ensuring your operations run smoothly as your business grows.',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'Workflow & Automation Systems',
    copy: [
      'Manual processes slow businesses down and create inefficiencies.',
      'We build workflow and automation systems that streamline operations by digitizing processes, reducing human error, and improving speed and consistency.',
      'From approvals to task management and internal operations, our systems help your team work smarter and more efficiently.',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Industry Platforms',
    copy: [
      'Every industry has its own unique challenges and requirements.',
      'We design custom platforms tailored to specific industries - including healthcare, logistics, education, exports, and more.',
      'These systems are built to align with industry standards, workflows, and regulations, ensuring relevance and effectiveness.',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: 'Commerce Systems',
    copy: [
      'Revenue operations require systems that are secure, fast, and reliable.',
      'We build commerce platforms that power transactions, payments, subscriptions, and sales operations - enabling businesses to manage revenue efficiently and scale with confidence.',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Institutional Systems',
    copy: [
      'Institutions require structured, secure, and scalable systems to manage their operations.',
      'We design solutions for schools, organizations, and public institutions - including student management systems, administrative platforms, and operational tools that support large-scale coordination.',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'Data & Intelligence Systems',
    copy: [
      'Data is one of the most valuable assets in any organization.',
      'We build systems that transform data into meaningful insights through dashboards, analytics, and intelligent reporting.',
      'Our solutions enable better decision-making, improved visibility, and a deeper understanding of your business performance.',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#0a0d0f]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-9 lg:px-[4.5rem] lg:pt-40 lg:pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Solutions
          </Reveal>
          <Reveal as="p" delay={120} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            We design and build systems that form the backbone of modern organizations.
          </Reveal>
          <Reveal as="p" delay={180} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Each solution is tailored to your business - built to improve efficiency, enhance decision-making, and support long-term growth.
          </Reveal>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-12 px-9 lg:px-[4.5rem]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {solutions.map((solution, i) => (
            <Reveal
              key={i}
              direction={i % 2 !== 0 ? 'left' : 'right'}
              className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-[#0d1117] rounded-2xl overflow-hidden border border-white/5`}
            >
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <div className="text-[#00d4aa] mb-6 bg-white/5 w-12 h-12 rounded-full flex items-center justify-center border border-white/10">
                  {solution.icon}
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">{solution.title}</h2>
                <div className="flex flex-col gap-4">
                  {solution.copy.map((para, j) => (
                    <p key={j} className="text-gray-400 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[auto] bg-[#0a0d0f]">
                {/* CSS Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  {/* Abstract system representation */}
                  <div className="w-full max-w-sm aspect-video border border-white/10 rounded-xl bg-[#0a0d0f]/80 backdrop-blur-md shadow-2xl p-6 flex flex-col gap-3 overflow-hidden">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#00d4aa]/60" />
                      <div className="w-1/3 h-2 rounded bg-white/15" />
                    </div>
                    <div className="flex gap-3 flex-1">
                      <div className="w-1/4 rounded-lg border border-white/10 flex flex-col gap-2 p-2">
                        <div className="h-1.5 rounded bg-white/10" />
                        <div className="h-1.5 rounded bg-white/10" />
                        <div className="h-1.5 rounded bg-[#00d4aa]/30" />
                      </div>
                      <div className="flex-1 rounded-lg border border-white/10 p-3 flex flex-col gap-2">
                        <div className="w-3/4 h-2 rounded bg-white/10" />
                        <div className="w-1/2 h-2 rounded bg-white/5" />
                        <div className="mt-auto flex gap-2 items-end h-10">
                          <div className="w-2 rounded-t-sm bg-white/10 h-5" />
                          <div className="w-2 rounded-t-sm bg-white/10 h-8" />
                          <div className="w-2 rounded-t-sm bg-[#00d4aa]/40 h-10" />
                          <div className="w-2 rounded-t-sm bg-white/10 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our Approach to Solutions */}
      <section className="py-24 px-9 lg:px-[4.5rem] bg-[#0d1117] border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal as="h2" className="text-3xl font-bold text-white mb-6">
            Our Approach to Solutions
          </Reveal>
          <Reveal as="p" delay={90} className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Every solution we build is designed with your business in mind. We do not rely on generic templates. Instead, we develop systems that align with your structure, adapt to your processes, and scale with your growth.
          </Reveal>
        </div>
      </section>

      {/* Closing Banner */}
      <section className="py-32 px-9 lg:px-[4.5rem] text-center border-t border-white/5">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-2">
            Systems built with purpose.
          </h2>
          <h2 className="text-4xl md:text-5xl font-black text-[#00d4aa] leading-tight mb-8">
            Solutions built for growth.
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

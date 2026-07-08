import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Beacon | Careers',
  description: 'We are building systems that power modern businesses - and we are always looking for people who want to build with purpose.',
};

const whyPoints = [
  'Work on real, impactful systems',
  'Collaborate with a focused and driven team',
  'Build solutions across industries',
  'Grow your skills through challenging projects',
];

const roles = [
  {
    title: 'Full-Stack Engineer',
    location: 'Remote',
    desc: 'Build and ship end-to-end features across enterprise systems, from database to interface.',
  },
  {
    title: 'Product Designer',
    location: 'Remote / Hybrid',
    desc: 'Design clear, functional interfaces for complex systems and turn requirements into experiences.',
  },
  {
    title: 'Systems Analyst',
    location: 'Remote',
    desc: 'Understand client operations, map requirements, and shape the architecture of new solutions.',
  },
  {
    title: 'Mobile Developer',
    location: 'Remote',
    desc: 'Craft high-performance iOS and Android applications with a focus on usability and scale.',
  },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#0a0d0f]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-9 lg:px-[4.5rem] lg:pt-40 lg:pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Careers at BEACON
          </Reveal>
          <Reveal as="p" delay={120} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            We are building systems that power modern businesses - and we are always looking for people who want to build with purpose.
          </Reveal>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 px-9 lg:px-[4.5rem]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <Reveal direction="right" className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-6">Why Work With Us</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              At BEACON, you will work on meaningful projects that solve real-world problems.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We focus on building systems that have impact - improving how businesses operate and helping organizations grow through technology.
            </p>
            <p className="text-gray-400 leading-relaxed">
              You will be part of a team that values precision, clarity, and continuous improvement.
            </p>
          </Reveal>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyPoints.map((pt, i) => (
              <Reveal
                key={i}
                delay={i * 90}
                className="bg-[#0d1117] border border-white/5 p-6 rounded-xl flex items-start gap-4 hover:border-white/10 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/30 flex items-center justify-center text-[#00d4aa] shrink-0">
                  <CheckIcon />
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">{pt}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Looking For */}
      <section className="py-24 px-9 lg:px-[4.5rem] bg-[#0d1117] border-y border-white/5">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Who We Are Looking For</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            We are looking for individuals who are passionate about technology, problem-solving, and building high-quality systems.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Whether you are a developer, designer, analyst, or strategist, we value people who think critically, work collaboratively, and are committed to delivering excellence.
          </p>
        </Reveal>
      </section>

      {/* Open Roles */}
      <section className="py-24 px-9 lg:px-[4.5rem]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Open Roles</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Explore available opportunities and find a role that aligns with your skills and interests.
            </p>
          </Reveal>

          <div className="flex flex-col gap-4">
            {roles.map((role, i) => (
              <Reveal
                key={i}
                delay={(i % 2) * 90}
                className="bg-[#0d1117] border border-white/5 rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-6 hover:border-[#00d4aa]/20 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <h3 className="text-xl font-bold text-white">{role.title}</h3>
                    <span className="text-xs text-[#00d4aa] border border-[#00d4aa]/30 rounded-full px-3 py-1 tracking-wide">
                      {role.location}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{role.desc}</p>
                </div>
                <a
                  href="/contact"
                  className="shrink-0 bg-white/5 hover:bg-[#00d4aa] hover:text-black text-white font-semibold py-3 px-6 rounded-lg border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Apply
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-24 px-9 lg:px-[4.5rem] bg-[#0d1117] border-y border-white/5">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">How to Apply</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            Submit your application through the available roles listed above.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            If there are no current openings that match your profile, you may still{' '}
            <a href="/contact" className="text-[#00d4aa] hover:underline cursor-pointer">reach out</a> and share your details for future opportunities.
          </p>
        </Reveal>
      </section>

      {/* Closing */}
      <section className="py-32 px-9 lg:px-[4.5rem] text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-2">
            Build systems that matter.
          </h2>
          <h2 className="text-4xl md:text-5xl font-black text-[#00d4aa] leading-tight mb-8">
            Build your future.
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

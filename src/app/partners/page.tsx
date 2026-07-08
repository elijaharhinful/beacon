import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Beacon | Partners',
  description:
    'We collaborate with forward-thinking organizations to deliver complete, high-quality solutions across technology, design, and digital experience.',
};

type Partner = {
  name: string;
  logo: string;
  invertLogo?: boolean;
  href?: string;
  displayUrl?: string;
  copy: string[];
};

const partners: Partner[] = [
  {
    name: 'SquareFix',
    logo: '/images/partners/squarefix.png',
    href: 'https://www.squarefixglobal.com',
    displayUrl: 'www.squarefixglobal.com',
    copy: [
      'SquareFix is a global technology and IT solutions provider focused on building modern digital infrastructure and scalable systems.',
      'Their expertise in software development, cloud services, and enterprise solutions complements our system-building capabilities, enabling us to deliver robust and future-ready platforms.',
    ],
  },
  {
    name: 'Doxa Sensations',
    logo: '/images/partners/doxa.png',
    invertLogo: true,
    href: 'https://doxasensations.com',
    displayUrl: 'www.doxasensations.com',
    copy: [
      'Doxa Sensations brings creative direction, branding, and visual storytelling into every project.',
      'Their ability to translate ideas into compelling visual experiences ensures that every system we build is not only functional, but also engaging and aligned with brand identity.',
    ],
  },
  {
    name: 'Vivid Studios',
    logo: '/images/partners/vivid.svg',
    href: 'https://vividstudiosglobal.com',
    displayUrl: 'www.vividstudiosglobal.com',
    copy: [
      'Vivid Studios specializes in multimedia production, design, and digital content creation.',
      'Their work enhances how products and systems are presented, helping clients communicate their solutions effectively through high-quality visuals and media.',
    ],
  },
];

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#0a0d0f]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-9 lg:px-[4.5rem] lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
            Our Partners
          </Reveal>
          <Reveal as="p" delay={80} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            We collaborate with forward-thinking organizations to deliver complete, high-quality solutions across technology, design, and digital experience.
          </Reveal>
          <Reveal as="p" delay={140} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Our partners play a key role in extending our capabilities - allowing us to combine technical excellence with creative execution and strategic delivery.
          </Reveal>
        </div>
      </section>

      {/* Partner list */}
      <section className="py-12 px-9 lg:px-[4.5rem]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {partners.map((partner, i) => (
            <Reveal
              key={partner.name}
              direction={i % 2 !== 0 ? 'left' : 'right'}
              className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-[#0d1117] rounded-2xl overflow-hidden border border-white/5 hover:border-[#00d4aa]/20 transition-colors`}
            >
              {/* Logo panel */}
              <div className="lg:w-2/5 relative min-h-[220px] bg-[#0a0d0f] flex items-center justify-center p-12">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="relative bg-white rounded-2xl w-full max-w-[240px] aspect-video flex items-center justify-center p-8 shadow-2xl">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={200}
                    height={100}
                    unoptimized
                    className={`max-h-full w-auto object-contain ${partner.invertLogo ? 'invert' : ''}`}
                  />
                </div>
              </div>

              {/* Copy */}
              <div className="lg:w-3/5 p-10 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-6">{partner.name}</h2>
                {partner.copy.map((para, p) => (
                  <p key={p} className="text-gray-400 leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
                {partner.href && (
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00d4aa] hover:text-white font-medium text-sm mt-6 w-fit transition-colors cursor-pointer"
                  >
                    {partner.displayUrl}
                    <ArrowIcon />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Working Together */}
      <section className="py-24 px-9 lg:px-[4.5rem] bg-[#0d1117] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal as="h2" className="text-3xl md:text-4xl font-bold text-white mb-8">
            Working Together
          </Reveal>
          <Reveal as="p" delay={100} className="text-gray-400 text-lg leading-relaxed mb-4">
            Through collaboration, we bring together technology, design, and execution to deliver complete solutions.
          </Reveal>
          <Reveal as="p" delay={160} className="text-gray-400 text-lg leading-relaxed">
            Each partner contributes a unique strength, allowing us to approach every project with a broader perspective and a higher standard of delivery.
          </Reveal>
        </div>
      </section>

      {/* Closing statement */}
      <section className="py-32 px-9 lg:px-[4.5rem] text-center">
        <Reveal className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
            Together, we build systems that are not only powerful,{' '}
            <span className="text-[#00d4aa]">but complete.</span>
          </h2>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}

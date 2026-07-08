import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Beacon | Services',
  description: 'Our services provide the technical foundation that brings your systems to life.',
};

const services = [
  {
    title: 'Web Development',
    desc: 'We design and build modern web applications that are fast, secure, and scalable. Our web solutions are tailored to your business needs - from internal systems to customer-facing platforms - ensuring performance, usability, and long-term reliability. Every system is built with clean architecture and a focus on efficiency, allowing your operations to run smoothly across all environments.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Mobile App Development',
    desc: 'We develop high-performance mobile applications for iOS and Android platforms. Our mobile solutions are designed for speed, usability, and seamless user experience - ensuring that your systems are accessible anytime, anywhere. From enterprise tools to customer applications, we create mobile experiences that are intuitive, responsive, and built to scale.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: 'Custom Software Development',
    desc: 'Every business has unique processes that require tailored solutions. We design and develop custom software built specifically around your workflows, operations, and goals. From complex enterprise systems to specialized platforms, our solutions are engineered to deliver efficiency, flexibility, and long-term value.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
];

const processPoints = [
  'Clear understanding of requirements',
  'Thoughtful system design',
  'Efficient development process',
  'Reliable deployment and support',
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0d0f]">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-9 lg:px-[4.5rem] lg:pt-40 lg:pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Services
          </Reveal>
          <Reveal as="p" delay={120} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            Our services provide the technical foundation that brings your systems to life.
          </Reveal>
          <Reveal as="p" delay={180} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            We combine design, engineering, and development to build solutions that are reliable, scalable, and aligned with your business goals.
          </Reveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 px-9 lg:px-[4.5rem]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {services.map((service, i) => (
            <Reveal key={i} direction={i % 2 !== 0 ? 'left' : 'right'} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-[#0d1117] rounded-2xl overflow-hidden border border-white/5`}>
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <div className="text-gray-300 mb-6 bg-white/5 w-12 h-12 rounded-full flex items-center justify-center border border-white/10">{service.icon}</div>
                <h2 className="text-3xl font-bold text-white mb-6">{service.title}</h2>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
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
                   {/* Abstract Placeholder Graphic */}
                   <div className="w-full max-w-sm aspect-video border border-white/10 rounded-xl bg-[#0a0d0f]/80 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="flex gap-3 items-end h-16">
                         <div className="w-3 bg-white/10 rounded-t-sm h-8" />
                         <div className="w-3 bg-white/10 rounded-t-sm h-12" />
                         <div className="w-3 bg-[#00d4aa]/40 rounded-t-sm h-16" />
                         <div className="w-3 bg-white/10 rounded-t-sm h-10" />
                         <div className="w-3 bg-white/10 rounded-t-sm h-14" />
                      </div>
                   </div>
                 </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How We Deliver */}
      <section className="py-24 px-9 lg:px-[4.5rem] bg-[#0a0d0f]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How We Deliver</h2>
            <p className="text-gray-500">A structured and disciplined development process.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processPoints.map((pt, i) => (
              <Reveal key={i} delay={i * 90} className="bg-[#0d1117] border border-white/5 p-8 rounded-xl text-center group hover:border-white/10 transition-colors">
                <div className="w-10 h-10 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-gray-500 font-bold tracking-wider mb-6 group-hover:border-[#00d4aa]/50 group-hover:text-[#00d4aa] transition-colors">
                  0{i + 1}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{pt}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="py-32 px-9 lg:px-[4.5rem] text-center border-t border-white/5 bg-[#0d1117]">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-2">
            Technology built with precision.
          </h2>
          <h2 className="text-4xl md:text-5xl font-black text-[#00d4aa] leading-tight">
            Systems built for performance.
          </h2>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}

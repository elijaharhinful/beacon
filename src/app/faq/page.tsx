import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Beacon | FAQs',
  description: 'Find answers to common questions about our services, process, and how we work.',
};

const faqs = [
  {
    q: 'How long does it take to build a system?',
    a: 'Timelines vary depending on the complexity and scope of the project. Smaller systems may take a few weeks, while larger, enterprise-level solutions can take several months. After reviewing your requirements, we provide a clear and realistic timeline.',
  },
  {
    q: 'Do you build custom solutions only?',
    a: 'Yes. Every system we build is tailored to your specific business needs. We do not rely on generic templates or one-size-fits-all solutions.',
  },
  {
    q: 'Can you improve or rebuild an existing system?',
    a: 'Yes. We can upgrade, optimize, or completely rebuild existing systems to improve performance, scalability, and usability.',
  },
  {
    q: 'Do you provide ongoing support after deployment?',
    a: 'Yes. We offer continuous support, maintenance, and updates to ensure your system remains reliable and aligned with your evolving needs.',
  },
  {
    q: 'How do we get started?',
    a: 'You can start by contacting us through any of the available options - scheduling a meeting, sending a message, or submitting a request form. We will review your requirements and guide you through the next steps.',
  },
  {
    q: 'Will I be able to track the progress of my project?',
    a: 'Yes. You will have access to our Work Progress system, where you can monitor updates, review milestones, and stay connected throughout the development process.',
  },
  {
    q: 'How is pricing determined?',
    a: 'Pricing is based on the scope, complexity, and specific requirements of your project. We provide transparent estimates after reviewing your needs in detail.',
  },
  {
    q: 'Do you work with businesses in different industries?',
    a: 'Yes. We build systems across multiple industries, tailoring each solution to the unique requirements and workflows of the business.',
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#0a0d0f]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-9 lg:px-[4.5rem] lg:pt-40 lg:pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Frequently Asked Questions
          </Reveal>
          <Reveal as="p" delay={120} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and how we work.
          </Reveal>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-24 px-9 lg:px-[4.5rem]">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={(i % 4) * 80}>
              <details className="group bg-[#0d1117] border border-white/5 rounded-xl open:border-[#00d4aa]/20 transition-colors">
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                  <span className="text-white font-semibold text-lg">{faq.q}</span>
                  <span className="text-[#00d4aa] shrink-0 transition-transform duration-300 group-open:rotate-45">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 -mt-1">
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="py-32 px-9 lg:px-[4.5rem] text-center border-t border-white/5 bg-[#0d1117]">
        <Reveal className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
            If you have additional questions, feel free to{' '}
            <a href="/contact" className="text-[#00d4aa] hover:underline cursor-pointer">reach out</a>. We are here to help.
          </h2>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}

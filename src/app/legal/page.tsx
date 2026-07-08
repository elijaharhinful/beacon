import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Beacon | Legal',
  description: 'We are committed to transparency, security, and the responsible handling of data.',
};

const sections = [
  {
    title: 'Privacy Policy',
    paras: [
      'We respect your privacy and are committed to protecting your personal information.',
      'Any data collected through our website or services is used solely for the purpose of communication, service delivery, and improving user experience.',
      'We do not sell, rent, or share your personal information with third parties without your consent, except where required by law.',
      'We implement appropriate security measures to protect your data from unauthorized access, disclosure, or misuse.',
    ],
  },
  {
    title: 'Terms of Service',
    paras: [
      'By using our website and services, you agree to the terms outlined in this section.',
      'Our services are provided based on agreed project scope, timelines, and deliverables. Any changes to scope may affect pricing and delivery timelines.',
      'We are committed to delivering high-quality systems; however, clients are responsible for providing accurate information and timely feedback throughout the development process.',
    ],
  },
  {
    title: 'Data Protection',
    paras: [
      'We take data protection seriously.',
      'All systems and communications are handled with appropriate security measures to ensure confidentiality and integrity.',
      'Access to sensitive data is restricted to authorized personnel only, and we continuously review our processes to maintain high standards of data security.',
    ],
  },
  {
    title: 'Intellectual Property',
    paras: [
      'All content, designs, and systems developed by BEACON remain the intellectual property of the client upon full project completion and settlement, unless otherwise agreed.',
      'We reserve the right to showcase completed work as part of our portfolio, unless restricted by a confidentiality agreement.',
    ],
  },
];

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#0a0d0f]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-9 lg:px-[4.5rem] lg:pt-40 lg:pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Legal
          </Reveal>
          <Reveal as="p" delay={120} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            We are committed to transparency, security, and the responsible handling of data.
          </Reveal>
          <Reveal as="p" delay={180} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            The following policies outline how we operate, how we protect your information, and the terms governing the use of our services.
          </Reveal>
        </div>
      </section>

      {/* Policy sections */}
      <section className="py-24 px-9 lg:px-[4.5rem]">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {sections.map((section, i) => (
            <Reveal key={i} delay={(i % 2) * 90} className="bg-[#0d1117] border border-white/5 rounded-2xl p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#00d4aa] text-sm font-bold tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              <div className="flex flex-col gap-4">
                {section.paras.map((para, p) => (
                  <p key={p} className="text-gray-400 leading-relaxed">{para}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 px-9 lg:px-[4.5rem] text-center border-t border-white/5 bg-[#0d1117]">
        <Reveal className="max-w-3xl mx-auto">
          <p className="text-gray-400 text-lg leading-relaxed">
            If you have any questions regarding our policies, please{' '}
            <a href="/contact" className="text-[#00d4aa] hover:underline cursor-pointer">contact us</a> for clarification.
          </p>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}

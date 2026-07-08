import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Beacon | Copyright Notice',
  description: 'Ownership, usage, and protection of content, materials, and systems associated with BEACON.',
};

const sections = [
  {
    title: 'Ownership of Content',
    paras: [
      'All content on this website, including but not limited to text, graphics, logos, icons, images, design elements, and digital assets, is the property of BEACON unless otherwise stated.',
      'This content is protected by applicable copyright and intellectual property laws.',
    ],
  },
  {
    title: 'Use of Website Content',
    paras: [
      'The content provided on this website is for informational purposes only.',
      'You may not reproduce, distribute, modify, display, or use any part of this content without prior written permission from BEACON.',
      'Unauthorized use of any materials may violate copyright, trademark, and other applicable laws.',
    ],
  },
  {
    title: 'Client Work and Deliverables',
    paras: [
      'All systems, software, and deliverables developed for clients become the property of the client upon full completion of the project and settlement of all agreed payments, unless otherwise specified in a written agreement.',
      'BEACON retains the right to showcase completed projects as part of its portfolio, unless restricted by a confidentiality or non-disclosure agreement.',
    ],
  },
  {
    title: 'Third-Party Content',
    paras: [
      'Any third-party materials, trademarks, or content displayed on this website remain the property of their respective owners.',
      'Their use does not imply ownership by BEACON and is subject to the rights and permissions of the respective parties.',
    ],
  },
  {
    title: 'Reporting Copyright Infringement',
    paras: [
      'If you believe that any content on this website infringes upon your copyright, please contact us with the relevant details so that we can review and address the matter promptly.',
    ],
  },
  {
    title: 'Changes to This Notice',
    paras: [
      'BEACON reserves the right to update or modify this Copyright Notice at any time.',
      'Any changes will be reflected on this page.',
    ],
  },
];

export default function CopyrightPage() {
  return (
    <main className="min-h-screen bg-[#0a0d0f]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-9 lg:px-[4.5rem] lg:pt-40 lg:pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Copyright Notice
          </Reveal>
          <Reveal as="p" delay={120} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            This page outlines the ownership, usage, and protection of content, materials, and systems associated with BEACON.
          </Reveal>
        </div>
      </section>

      {/* Sections */}
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
      <section className="py-32 px-9 lg:px-[4.5rem] text-center border-t border-white/5 bg-[#0d1117]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-2">
            All rights reserved.
          </h2>
          <p className="text-[#00d4aa] font-bold tracking-widest uppercase mt-4">
            © {new Date().getFullYear()} BEACON.
          </p>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}

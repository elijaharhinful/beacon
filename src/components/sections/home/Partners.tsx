'use client';

import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

const partners = [
  { name: 'SquareFix', logo: '/images/partners/squarefix.png' },
  { name: 'Doxa Sensations', logo: '/images/partners/doxa.png', invertLogo: true },
  { name: 'VizDen Studios', logo: '/images/partners/vizden.png', invertLogo: true },
];

export default function Partners() {
  return (
    <section id="partners" className="bg-[#0d1117] border-y border-white/5 py-24 px-9 lg:px-[4.5rem]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Our Partners
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            We collaborate with forward-thinking organizations to combine technical excellence with creative execution and strategic delivery.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-12">
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 100}>
              <div className="bg-white/90 rounded-xl h-24 flex items-center justify-center p-6 border border-white/5 hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={80}
                  unoptimized
                  className={`max-h-full w-auto object-contain ${partner.invertLogo ? 'invert' : ''}`}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center">
          <Button asChild>
            <Link href="/partners">See our partners</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

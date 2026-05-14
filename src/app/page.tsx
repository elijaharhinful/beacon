import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhatWeBuild from '@/components/WhatWeBuild';
import WhyBeacon from '@/components/WhyBeacon';
import HowItWorks from '@/components/HowItWorks';
import FeaturedProjects from '@/components/FeaturedProjects';
import OurServices from '@/components/OurServices';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Beacon — Build Forward',
  description:
    'Beacon is a software studio that designs and engineers high-performance digital products. From MVPs to enterprise platforms — we build forward.',
  keywords: ['software studio', 'web development', 'design', 'engineering', 'startup', 'SaaS'],
  openGraph: {
    title: 'Beacon — Build Forward',
    description: 'From bold ideas to production-ready products. We build forward.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0d0f]">
      <Navbar />
      <Hero />
      <Stats />
      <WhatWeBuild />
      <WhyBeacon />
      <HowItWorks />
      <FeaturedProjects />
      <OurServices />
      <CTA />
      <Footer />
    </main>
  );
}

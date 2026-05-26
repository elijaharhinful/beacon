import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/home/Hero';
import TrustStrip from '@/components/sections/home/TrustStrip';
import WhatWeBuild from '@/components/sections/home/WhatWeBuild';
import WhyBeacon from '@/components/sections/home/WhyBeacon';
import HowItWorks from '@/components/sections/home/HowItWorks';
import FeaturedProjects from '@/components/sections/home/FeaturedProjects';
import OurServices from '@/components/sections/home/OurServices';
import CTA from '@/components/sections/home/CTA';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Beacon — Build Forward',
  description:
    'We design and build custom systems that transform how businesses operate - turning complexity into clarity, and ideas into scalable solutions.',
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
      <TrustStrip />
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

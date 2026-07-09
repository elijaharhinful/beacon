import type { Metadata } from 'next';
import Link from 'next/link';
import { ListChecks, Activity, MessageSquare, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Beacon | Work Progress',
  description:
    'Stay connected to your project every step of the way - full visibility into development with transparency, clarity, and continuous collaboration.',
};

const trackPoints = [
  'View project milestones and timelines',
  'Track progress across development stages',
  'Review updates and deliverables',
  'Provide feedback directly to the team',
];

const pillars = [
  {
    icon: Activity,
    title: 'Real-Time Updates',
    body: 'We provide consistent updates as your project progresses. From initial design to final deployment, every stage is documented and shared - allowing you to stay aligned with the development process.',
  },
  {
    icon: MessageSquare,
    title: 'Collaboration',
    body: 'The best systems are built through collaboration. Our Work Progress platform lets you communicate with our team, share feedback, and make informed decisions throughout the lifecycle of your project.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Access',
    body: 'Your project data is protected through secure access controls. Only authorized users can view and interact with project details, ensuring confidentiality and data integrity at all times.',
  },
];

export default function WorkProgressPage() {
  return (
    <main className="min-h-screen bg-[#0a0d0f]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-9 lg:px-[4.5rem] lg:pt-40 lg:pb-24 border-b border-white/5 bg-[#0a0d0f]">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Work Progress
          </Reveal>
          <Reveal as="p" delay={120} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Stay connected to your project every step of the way. Our Work Progress system gives you full
            visibility into the development of your project - ensuring transparency, clarity, and continuous
            collaboration.
          </Reveal>
          <Reveal delay={220} className="flex items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/login">Client Login</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Track Your Project */}
      <section className="py-24 px-9 lg:px-[4.5rem] bg-[#0d1117]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal as="h2" direction="left" className="text-3xl lg:text-4xl font-black text-white mb-6">
              Track Your Project
            </Reveal>
            <Reveal as="p" direction="left" delay={90} className="text-gray-400 leading-relaxed mb-4">
              Clients are provided with secure access to a dedicated dashboard where they can monitor the
              progress of their system in real time.
            </Reveal>
            <Reveal as="p" direction="left" delay={150} className="text-gray-400 leading-relaxed">
              This ensures that you are always informed and involved throughout the development process.
            </Reveal>
          </div>
          <div className="grid gap-4">
            {trackPoints.map((point, i) => (
              <Reveal key={point} direction="right" delay={i * 90}>
                <Card className="bg-[#101419] border-white/5">
                  <CardContent className="flex items-center gap-4 p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/40 text-primary">
                      <ListChecks size={18} />
                    </span>
                    <span className="text-gray-200">{point}</span>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-9 lg:px-[4.5rem] bg-[#0a0d0f]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={i * 90} className="h-full">
                <Card className="h-full bg-[#0d1117] border-white/5 hover:border-[#00d4aa]/30 transition-colors duration-300">
                  <CardContent className="p-8">
                    <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/40 text-primary">
                      <Icon size={22} />
                    </span>
                    <h3 className="text-white font-bold text-xl mb-3">{pillar.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{pillar.body}</p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Closing banner */}
      <section className="py-32 px-9 lg:px-[4.5rem] text-center border-t border-white/5 bg-[#0d1117]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-2">
            Transparency in every step.
          </h2>
          <h2 className="text-3xl md:text-4xl font-black text-[#00d4aa] leading-tight mb-10">
            Confidence in every stage.
          </h2>
          <Button asChild size="lg">
            <Link href="/login">Access Your Dashboard</Link>
          </Button>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}

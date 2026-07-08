import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Beacon | Connect With Us',
  description: 'Stay connected with us across our social platforms.',
};

const channels = [
  {
    name: 'X (Twitter)',
    href: '#',
    copy: 'Follow us for updates, announcements, and insights into the systems we build.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    copy: 'Explore visual highlights, project showcases, and behind-the-scenes moments.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: '#',
    copy: 'Watch short-form content featuring our work, ideas, and creative process.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 2h-3.2v13.6a3 3 0 11-2.4-2.94V9.2a6 6 0 104.5 5.8V8.6a7.7 7.7 0 004.6 1.5V6.9a4.3 4.3 0 01-3.5-4.9z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    copy: 'Stay informed with updates, discussions, and community engagement.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z" />
      </svg>
    ),
  },
];

export default function ConnectPage() {
  return (
    <main className="min-h-screen bg-[#0a0d0f]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-9 lg:px-[4.5rem] lg:pt-40 lg:pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Connect with BEACON
          </Reveal>
          <Reveal as="p" delay={120} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            Stay connected with us across our social platforms.
          </Reveal>
          <Reveal as="p" delay={180} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Follow our journey, explore insights, and keep up with the systems we are building.
          </Reveal>
        </div>
      </section>

      {/* Channels */}
      <section className="py-24 px-9 lg:px-[4.5rem]">
        <div className="max-w-7xl mx-auto">
          <Reveal as="h2" className="text-3xl font-bold text-white mb-12 text-center">
            Our Channels
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {channels.map((channel, i) => (
              <Reveal
                key={channel.name}
                delay={(i % 2) * 90}
                className="bg-[#0d1117] border border-white/5 rounded-2xl p-8 flex items-start gap-6 hover:border-[#00d4aa]/20 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-gray-300 group-hover:text-[#00d4aa] group-hover:border-[#00d4aa]/30 transition-colors">
                  {channel.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">{channel.name}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{channel.copy}</p>
                  <a
                    href={channel.href}
                    className="inline-flex items-center gap-2 text-[#00d4aa] hover:text-white font-medium text-sm transition-colors cursor-pointer"
                  >
                    Follow
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="py-24 px-9 lg:px-[4.5rem] bg-[#0d1117] border-y border-white/5">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Be part of our growing network and stay informed about new projects, innovations, and opportunities.
          </p>
        </Reveal>
      </section>

      {/* Closing */}
      <section className="py-32 px-9 lg:px-[4.5rem] text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-2">
            Stay connected. Stay informed.
          </h2>
          <h2 className="text-4xl md:text-5xl font-black text-[#00d4aa] leading-tight mb-8">
            Build Forward.
          </h2>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}

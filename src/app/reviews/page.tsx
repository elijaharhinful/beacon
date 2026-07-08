import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Beacon | Client Reviews',
  description: 'Feedback from the businesses and organizations we have worked with.',
};

const reviews = [
  'BEACON delivered an exceptional system that completely transformed how we manage our operations. The level of detail, structure, and efficiency built into the platform exceeded our expectations.',
  'Working with BEACON was a seamless experience. They understood our requirements quickly and translated them into a system that improved our workflow significantly.',
  'The professionalism and technical expertise shown by BEACON throughout the project were outstanding. The final product was not only functional but also scalable for our future growth.',
  'We needed a custom solution for our operations, and BEACON delivered exactly what we envisioned. The system has made our processes faster and more efficient.',
  'From start to finish, the process with BEACON was clear and structured. We always knew what was happening, and the final system has had a measurable impact on our business.',
];

const Stars = () => (
  <div className="flex gap-1 text-[#00d4aa]" aria-label="5 out of 5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const QuoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#00d4aa]/20">
    <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6.83v-6.83H4.5A2.67 2.67 0 017.17 8.5V6zm10 0A5.17 5.17 0 0012 11.17V18h6.83v-6.83H14.5a2.67 2.67 0 012.67-2.67V6z" />
  </svg>
);

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#0a0d0f]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-9 lg:px-[4.5rem] lg:pt-40 lg:pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Client Reviews
          </Reveal>
          <Reveal as="p" delay={120} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            Feedback from the businesses and organizations we have worked with.
          </Reveal>
          <Reveal as="p" delay={180} className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Each review reflects real experiences, real systems, and real outcomes.
          </Reveal>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-24 px-9 lg:px-[4.5rem] bg-[#0d1117] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal as="h2" className="text-3xl font-bold text-white mb-12 text-center">
            What Our Clients Say
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <Reveal
                key={i}
                delay={(i % 3) * 90}
                className="bg-[#101419] border border-white/5 rounded-2xl p-8 flex flex-col gap-6 hover:border-[#00d4aa]/20 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <QuoteIcon />
                  <Stars />
                </div>
                <p className="text-gray-300 leading-relaxed">{review}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 px-9 lg:px-[4.5rem]">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            Every system we build is designed to deliver real value.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            We focus on understanding our clients&apos; needs, building with precision, and ensuring that the final solution performs reliably in real-world conditions.
          </p>
        </Reveal>
      </section>

      {/* Share Your Experience */}
      <section className="py-24 px-9 lg:px-[4.5rem] bg-[#0d1117] border-y border-white/5">
        <div className="max-w-2xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-6">Share Your Experience</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have worked with BEACON, we welcome your feedback. Your experience helps us continue to improve and deliver better solutions.
            </p>
          </Reveal>

          <Reveal delay={120} className="bg-[#101419] border border-white/5 rounded-2xl p-8 lg:p-10">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00d4aa] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400">Company</label>
                  <input
                    type="text"
                    placeholder="Organization Name"
                    className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00d4aa] transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400">Review Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your experience working with BEACON..."
                  className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00d4aa] transition-colors resize-none"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#00d4aa] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#00b390] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="py-32 px-9 lg:px-[4.5rem] text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-2">
            Built on trust.
          </h2>
          <h2 className="text-4xl md:text-5xl font-black text-[#00d4aa] leading-tight mb-8">
            Proven through results.
          </h2>
          <p className="text-[#00d4aa] font-bold tracking-widest uppercase">
            Build Forward.
          </p>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}

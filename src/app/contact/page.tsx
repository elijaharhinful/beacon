import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Beacon | Contact',
  description: 'Tell us about your project in the way that works best for you.',
};

const connectOptions = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Schedule a Meeting',
    desc: 'Book a one-on-one session with our team via Zoom or Microsoft Teams. This is ideal for discussing your project in detail.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
    title: 'Live Chat / WhatsApp',
    desc: 'Connect with us instantly through live chat or WhatsApp. Get quick responses and begin the conversation without delay.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    title: 'Send a Video (Loom)',
    desc: 'Record and share your idea using Loom. This allows you to clearly explain your requirements by walking us through your thoughts.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Submit a Request Form',
    desc: 'Provide detailed information about your project through our structured form. This helps us respond with a tailored solution.',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0d0f]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-9 lg:px-[4.5rem] lg:pt-40 lg:pb-24 border-b border-white/5 bg-[#0a0d0f]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
            GET IN <span className="text-[#00d4aa]">TOUCH</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Tell us about your project in the way that works best for you. We provide multiple ways for you to connect with us - so you can choose the approach that is most convenient and effective.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-9 lg:px-[4.5rem] bg-[#0d1117]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Connect Options */}
          <div className="lg:w-5/12 flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-white mb-2">Choose How to Connect</h2>
            
            <div className="flex flex-col gap-4">
              {connectOptions.map((opt, i) => (
                <div key={i} className="bg-[#101419] border border-white/5 p-6 rounded-xl hover:border-white/10 transition-colors flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-gray-400">
                    {opt.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{opt.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{opt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="lg:w-7/12">
            <div className="bg-[#101419] border border-white/5 rounded-2xl p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
                <span className="text-[#00d4aa] text-xs font-bold tracking-widest uppercase">Project Request Form</span>
              </div>
              
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
                    <label className="text-sm font-medium text-gray-400">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00d4aa] transition-colors" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-400">Company</label>
                    <input 
                      type="text" 
                      placeholder="Organization Name" 
                      className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00d4aa] transition-colors" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-400">Project Type</label>
                    <select className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#00d4aa] transition-colors appearance-none">
                      <option>System Architecture</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Custom Software</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400">Description</label>
                  <textarea 
                    rows={4}
                    placeholder="Provide a brief overview of your structural needs..." 
                    className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00d4aa] transition-colors resize-none" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-400">Estimated Budget</label>
                    <select className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#00d4aa] transition-colors appearance-none">
                      <option>$10k - $25k</option>
                      <option>$25k - $50k</option>
                      <option>$50k - $100k</option>
                      <option>$100k+</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-400">Timeline</label>
                    <select className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#00d4aa] transition-colors appearance-none">
                      <option>ASAP</option>
                      <option>Within 1 Month</option>
                      <option>1-3 Months</option>
                      <option>3+ Months</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="bg-[#00d4aa] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#00b390] transition-colors flex items-center gap-2">
                    Submit Request
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 px-9 lg:px-[4.5rem] border-t border-white/5 bg-[#0a0d0f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-widest">
            Our Commitment
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Every inquiry is reviewed with care and attention. We aim to understand your needs clearly and respond with thoughtful, practical solutions that align with your goals.
          </p>
          <p className="text-[#00d4aa] font-bold text-xl">
            Start the conversation. Build the system.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

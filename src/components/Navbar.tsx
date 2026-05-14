'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'Services', 'Projects', 'About'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0d0f]/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded bg-[#00d4aa] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 7L7 13L1 7L7 1Z" fill="#0a0d0f" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg tracking-widest uppercase">Beacon</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-[#00d4aa] hover:bg-[#00b894] text-[#0a0d0f] font-semibold text-sm px-5 py-2 rounded transition-all duration-200 hover:shadow-lg hover:shadow-[#00d4aa]/20">
              Get Started
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d1117]/98 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-400 hover:text-white text-sm font-medium py-1 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </Link>
          ))}
          <button className="bg-[#00d4aa] text-[#0a0d0f] font-semibold text-sm px-5 py-2.5 rounded w-full mt-2">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScroll } from '@/hooks/use-scroll';
import { Button } from '@/components/ui/Button';

export default function Navbar() {
  const scrolled = useScroll(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
  ];

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
            <Image 
              src="/images/beacon_landscape_no_bg.png" 
              alt="Beacon Logo" 
              width={140} 
              height={40} 
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors cursor-pointer"
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
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-white text-sm font-medium py-1 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" size="sm" className="w-full mt-2">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Partners', href: '/partners' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  'Web Development',
  'Mobile App Development',
  'Custom Software Development',
];

const companyLinks = [
  { label: 'Careers', href: '/careers' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Request a Quote', href: '/contact' },
  { label: 'Connect', href: '/connect' },
];

const socialLinks = [
  {
    label: 'X (Twitter)',
    href: '/connect',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '/connect',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: '/connect',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 2h-3.2v13.6a3 3 0 11-2.4-2.94V9.2a6 6 0 104.5 5.8V8.6a7.7 7.7 0 004.6 1.5V6.9a4.3 4.3 0 01-3.5-4.9z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '/connect',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="bg-[#070a0c] border-t border-white/5 pt-16 pb-8 px-9 lg:px-[4.5rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image 
                src="/images/beacon_landscape_no_bg.png" 
                alt="Beacon Logo" 
                width={140} 
                height={40} 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Build Forward.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded bg-white/5 hover:bg-[#00d4aa]/10 text-gray-500 hover:text-[#00d4aa] flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    aria-current={isActive(pathname, l.href) ? 'page' : undefined}
                    className={`text-sm transition-colors duration-200 ${
                      isActive(pathname, l.href)
                        ? 'text-[#00d4aa]'
                        : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Services</h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-gray-500 hover:text-white text-sm transition-colors duration-200 cursor-pointer">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    aria-current={isActive(pathname, l.href) ? 'page' : undefined}
                    className={`text-sm transition-colors duration-200 ${
                      isActive(pathname, l.href) ? 'text-[#00d4aa]' : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} BEACON. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-600">
            <Link href="/legal" className="hover:text-gray-400 transition-colors cursor-pointer">Privacy Policy</Link>
            <Link href="/legal" className="hover:text-gray-400 transition-colors cursor-pointer">Terms of Service</Link>
            <Link href="/copyright" className="hover:text-gray-400 transition-colors cursor-pointer">Copyright</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

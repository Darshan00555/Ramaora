'use client';

import Image from 'next/image';
import Link from 'next/link';

const COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'Website Development', href: '/services#web' },
      { label: 'E-Commerce Platforms', href: '/services#ecommerce' },
      { label: 'Performance Marketing', href: '/services#marketing' },
      { label: 'Business Consulting', href: '/services#consulting' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Our Work', href: '/#work' },
      { label: 'Blog', href: '/blog' },
    ],
  },
];

const SOCIAL = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ramaora.ai',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/ramaora-ai/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#0d0b08] pt-16 pb-10 text-orange-100/60 sm:pt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex w-fit items-center" aria-label="Ramaora home">
              <Image
                src="/logo.png"
                alt="Ramaora"
                width={128}
                height={72}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed">
              We bridge the gap between vision and execution — building websites, commerce and
              marketing systems with a human touch.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-orange-100/70 transition-all hover:border-[#f26b1d]/50 hover:text-white"
                >
                  <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold tracking-wider text-white uppercase">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-wider text-white uppercase">Get in touch</h4>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <a href="mailto:grow@ramaora.in" className="transition-colors hover:text-white">
                  grow@ramaora.in
                </a>
              </li>
              <li>
                <a href="tel:+918449625310" className="transition-colors hover:text-white">
                  +91 84496 25310
                </a>
              </li>
              <li>
                <a href="tel:+918750300077" className="transition-colors hover:text-white">
                  +91 87503 00077
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-[#171310] transition-transform hover:scale-105"
            >
              Start a project
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} Ramaora. All rights reserved.</p>
          <p className="text-orange-100/40">From vision to execution.</p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NAV_LINKS, TESTFLIGHT_URL } from '@/lib/site';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="section-shell flex h-14 items-center justify-between sm:h-16">
        <Link
          href="#hero"
          className="flex items-center gap-2.5 text-zinc-100 transition-opacity hover:opacity-90"
          onClick={closeMenu}
        >
          <Image src="/logo.png" alt="" width={28} height={28} className="rounded-md" aria-hidden />
          <span className="font-semibold tracking-tight">Aeria</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href={TESTFLIGHT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Download
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`mb-1 block h-0.5 w-6 bg-white transition-all ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`mb-1 block h-0.5 w-6 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 flex h-full w-[min(100vw-3rem,20rem)] flex-col border-l border-white/10 bg-zinc-950 shadow-2xl transition-transform duration-300 ease-out md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <span className="text-sm font-medium text-white">Menu</span>
          <button
            type="button"
            onClick={closeMenu}
            className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 p-5" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3 text-sm text-white transition-colors hover:bg-white/10"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href={TESTFLIGHT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            onClick={closeMenu}
          >
            Download on TestFlight
          </a>
        </nav>
      </div>
    </header>
  );
}

'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

/**
 * Forces the viewport to the top on every route change. GSAP's pinned hero can
 * leave the scroll position mid-page during client-side navigation, so we reset
 * it explicitly (skipping in-page hash links).
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 50, suffix: '+', label: 'Projects delivered' },
  { value: 12, suffix: '+', label: 'Brands actively scaled' },
  { value: 340, suffix: '%', label: 'Avg. campaign ROAS lift' },
  { value: 15, prefix: '', suffix: ' days', label: 'Fastest launch turnaround' },
];

function Counter({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          const duration = 1600;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(eased * value));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#171310] py-20 sm:py-24">
      {/* ambient glows */}
      <div
        className="pointer-events-none absolute top-0 -left-24 h-72 w-72 rounded-full bg-[#c2410c] opacity-40 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#f26b1d] opacity-20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Results that speak before we do.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-orange-100/60">
            We measure success the same way you do — in launches shipped, brands grown, and revenue
            engineered.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:mt-16 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mx-auto mt-3 h-px w-10 bg-gradient-to-r from-transparent via-[#f26b1d] to-transparent" />
              <p className="mt-3 text-sm font-medium text-orange-100/60 sm:text-base">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

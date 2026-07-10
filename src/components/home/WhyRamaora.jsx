'use client';

import Reveal from './Reveal';

const HeartIcon = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...p}
  >
    <path d="M12 20s-7-4.4-9.2-8.4A5 5 0 0 1 12 6a5 5 0 0 1 9.2 5.6C19 15.6 12 20 12 20Z" />
  </svg>
);
const SearchIcon = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...p}
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </svg>
);
const SparkIcon = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...p}
  >
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </svg>
);

const PILLARS = [
  {
    Icon: HeartIcon,
    title: 'The human touch',
    desc: 'In an industry driven by speed, automation and repetition, we choose depth, intention and involvement. Behind every project is a person who genuinely cares how it turns out.',
  },
  {
    Icon: SearchIcon,
    title: 'Obsessed with research',
    desc: 'Before we place a single pixel, we invest time understanding your brand, market, audience and long-term vision. Meaningful execution comes from meaningful understanding.',
  },
  {
    Icon: SparkIcon,
    title: 'We get startups',
    desc: "We're a startup ourselves. We resonate with the passion, uncertainty and excitement of building something new — and we treat founders like partners, not tickets.",
  },
];

export default function WhyRamaora() {
  return (
    <section id="about" className="relative bg-neutral-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: statement */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f26b1d]" />
              Why Ramaora
            </span>
            <h2 className="mt-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-[#171310] sm:text-5xl">
              We don&apos;t treat brands like projects on a timeline.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              We treat them like ideas with potential, ambition, and a story worth building
              carefully. Ramaora exists to bridge the gap between vision and execution — building
              with empathy, thinking with strategy, and creating with purpose.
            </p>
            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#171310] transition-colors hover:text-[#f26b1d]"
            >
              More about our story
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Reveal>

          {/* Right: pillars */}
          <div className="flex flex-col gap-5">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 90}>
                <div className="card-lift group flex gap-5 rounded-3xl border border-neutral-200 bg-white p-6 hover:border-[#f26b1d]/40 hover:shadow-[0_24px_60px_-24px_rgba(194,65,12,0.3)] sm:p-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f26b1d] to-[#c2410c] text-white shadow-[0_8px_20px_-6px_rgba(194,65,12,0.6)]">
                    <pillar.Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-[#171310]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

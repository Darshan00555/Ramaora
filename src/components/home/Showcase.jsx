'use client';

import Reveal from './Reveal';

const PROJECTS = [
  { name: 'Lifecraft', category: 'Lifestyle', url: 'https://www.lifecraft4u.com/' },
  { name: 'SpectrumKart', category: 'E-Commerce', url: 'https://spectrumkart.com/' },
  { name: 'DiamondOre', category: 'Jewellery', url: 'https://diamondore.in/' },
  { name: 'Bigwing Honda', category: 'Automotive', url: 'https://bigwinghonda.in/' },
  { name: 'Branboxx', category: 'Branding', url: 'https://branboxx.com/' },
  { name: 'AK CRM', category: 'SaaS Platform', url: 'https://akcrm.in/' },
  { name: 'Eventours India', category: 'Travel', url: 'https://eventoursindia.com/' },
  { name: 'The Pilates Room', category: 'Wellness', url: 'https://thepilatesroom.co.in/' },
  { name: 'Aranyud Architects', category: 'Architecture', url: 'https://aranyudarchitects.com/' },
];

function ProjectCard({ project, delay }) {
  const initials = project.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <Reveal delay={delay}>
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="card-lift group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors hover:border-[#f26b1d]/50 hover:bg-white/[0.06] sm:p-6"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f26b1d] to-[#f59e0b] text-sm font-black text-white shadow-[0_8px_20px_-6px_rgba(242,107,29,0.6)]">
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-bold tracking-tight text-white">{project.name}</h3>
          <p className="text-sm text-orange-100/50">{project.category}</p>
        </div>
        <svg
          className="h-5 w-5 shrink-0 text-orange-100/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#f26b1d]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M7 7h10v10" />
        </svg>
      </a>
    </Reveal>
  );
}

export default function Showcase() {
  return (
    <section id="work" className="relative overflow-hidden bg-[#171310] py-20 sm:py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(194,65,12,0.35),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-orange-100/60 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f26b1d]" />
              Selected work
            </span>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Brands we&apos;ve helped build.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-orange-100/60">
              Meaningful impact and compelling experiences — across e-commerce, wellness,
              automotive, SaaS and more.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={(i % 3) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

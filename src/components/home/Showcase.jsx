'use client';

import Reveal from './Reveal';

const PROJECTS = [
  {
    name: 'Lifecraft',
    category: 'Lifestyle',
    url: 'https://www.lifecraft4u.com/',
    slug: 'lifecraft',
  },
  {
    name: 'SpectrumKart',
    category: 'E-Commerce',
    url: 'https://spectrumkart.com/',
    slug: 'spectrumkart',
  },
  {
    name: 'Plastic Engineers & Fabricators',
    category: 'Manufacturing',
    url: 'https://plastengnr.in/',
    slug: 'plastengnr',
  },
  { name: 'Branboxx', category: 'Branding', url: 'https://branboxx.com/', slug: 'branboxx' },
  { name: 'AK CRM', category: 'SaaS Platform', url: 'https://akcrm.in/', slug: 'akcrm' },
  {
    name: 'The Pilates Room',
    category: 'Wellness',
    url: 'https://thepilatesroom.co.in/',
    slug: 'pilatesroom',
  },
  { name: 'Printer Point', category: 'E-Commerce', url: 'https://dev.etasi.org/', slug: 'etasi' },
  { name: 'Poolscape', category: 'Events', url: 'https://poolscape.in/', slug: 'poolscape' },
];

function domain(url) {
  return url
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/$/, '');
}

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

// Self-hosted live screenshots of each client's actual site (in /public/showcase).
// Fast, reliable and dependency-free; regenerate with the mShots download script.
function shot(slug) {
  return `/showcase/${slug}.jpg`;
}

function ProjectCard({ project, delay }) {
  return (
    <Reveal delay={delay}>
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="card-lift group block overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_20px_50px_-24px_rgba(0,0,0,0.7)] transition-colors hover:border-[#f26b1d]/60"
      >
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-3 py-2.5">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="ml-2 flex-1 truncate rounded-md bg-white px-3 py-1 text-center text-[11px] font-medium text-neutral-500">
            {domain(project.url)}
          </span>
        </div>

        {/* live preview */}
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
          {/* fallback shown if the screenshot can't load */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#f26b1d] to-[#c2410c]">
            <span className="text-3xl font-black text-white/90">{initials(project.name)}</span>
          </div>
          <img
            src={shot(project.slug)}
            alt={`Live preview of ${project.name}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* footer */}
        <div className="flex items-center justify-between gap-3 bg-white px-4 py-3.5">
          <div className="min-w-0">
            <h3 className="truncate text-[15px] font-bold tracking-tight text-[#171310]">
              {project.name}
            </h3>
            <p className="truncate text-xs text-neutral-500">{project.category}</p>
          </div>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors group-hover:bg-[#f26b1d] group-hover:text-white">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M7 7h10v10" />
            </svg>
          </span>
        </div>
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
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-orange-100/60 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f26b1d]" />
            Selected work
          </span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Brands we&apos;ve helped build.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-orange-100/60">
            Real, live websites — meaningful impact across e-commerce, wellness, automotive, SaaS
            and more. Tap any card to visit the live site.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={(i % 3) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

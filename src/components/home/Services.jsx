'use client';

import Reveal from './Reveal';

/* ---- inline icons (no external deps) ---- */
const iconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
};

const WebIcon = (p) => (
  <svg {...iconProps} {...p}>
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M3 9h18M7 14h5" />
    <circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);
const CartIcon = (p) => (
  <svg {...iconProps} {...p}>
    <path d="M3 4h2l2.4 12.4a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.8L21 8H6" />
    <circle cx="9" cy="20" r="1.2" />
    <circle cx="18" cy="20" r="1.2" />
  </svg>
);
const RocketIcon = (p) => (
  <svg {...iconProps} {...p}>
    <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.8-.8.8-2 0-2.8s-2-.8-3 .8Z" />
    <path d="M9 12a12 12 0 0 1 8-8 1 1 0 0 1 1 1 12 12 0 0 1-8 8Z" />
    <path d="M9 12l3 3M14.5 6.5l3 3" />
  </svg>
);
const CompassIcon = (p) => (
  <svg {...iconProps} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5 13 13l-4.5 2.5L11 11Z" />
  </svg>
);

const SERVICES = [
  {
    id: 'web',
    Icon: WebIcon,
    title: 'Website Development',
    tagline: 'Ambition, engineered.',
    desc: 'Hand-coded, blazing-fast websites — no templates. Custom UI/UX, advanced animation and conversion-focused architecture built to turn visitors into leads.',
    points: [
      'Launch · Growth · Authority tiers',
      'Fully responsive & SEO-ready',
      'Speed & performance optimized',
    ],
    feature: true,
  },
  {
    id: 'ecom',
    Icon: CartIcon,
    title: 'E-Commerce Platforms',
    tagline: 'Commerce that compounds.',
    desc: 'D2C, B2B, and multi-vendor marketplaces engineered around Discovery → Trust → Conversion → Retention → Community.',
    points: [
      'One-click, high-conversion checkout',
      'Razorpay · Shiprocket · GST ready',
      'Built-in growth & retention engine',
    ],
  },
  {
    id: 'marketing',
    Icon: RocketIcon,
    title: 'Performance Marketing',
    tagline: 'We engineer revenue systems.',
    desc: 'ROI-driven Meta, Google & YouTube campaigns with full-funnel strategy, retargeting and conversion tracking that produce predictable lead flow.',
    points: [
      'Starter · Scale · Dominance plans',
      'A/B testing & CRO',
      'Real-time performance dashboards',
    ],
  },
  {
    id: 'consulting',
    Icon: CompassIcon,
    title: 'Business Consulting',
    tagline: 'Systems that scale.',
    desc: 'Recruitment and HR services that build the team and structure behind your growth — strategy backed by research and human-centric leadership.',
    points: [
      'Recruitment & talent strategy',
      'HR systems & operations',
      'Founder-focused partnership',
    ],
  },
];

function Bullet() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-4 w-4 shrink-0 text-[#f26b1d]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ServiceCard({ service, delay }) {
  const { Icon, title, tagline, desc, points, feature } = service;
  return (
    <Reveal delay={delay} className={feature ? 'lg:col-span-3' : 'lg:col-span-1'}>
      <div className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(16,24,40,0.04)] hover:border-[#f26b1d]/40 hover:shadow-[0_24px_60px_-24px_rgba(194,65,12,0.35)] sm:p-8">
        {/* accent glow */}
        <div
          className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#f26b1d]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />

        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f26b1d] to-[#c2410c] text-white shadow-[0_8px_20px_-6px_rgba(194,65,12,0.6)]">
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="text-xl font-bold tracking-tight text-[#171310] sm:text-2xl">{title}</h3>
        <p className="mt-1 text-sm font-semibold text-[#f26b1d]">{tagline}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">{desc}</p>

        <ul className="mt-6 space-y-2.5">
          {points.map((pt) => (
            <li key={pt} className="flex items-start gap-2.5 text-sm text-neutral-700">
              <Bullet />
              <span>{pt}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#171310] transition-colors group-hover:text-[#f26b1d]">
          Explore service
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-neutral-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f26b1d]" />
            What we do
          </span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#171310] sm:text-5xl">
            One partner, <span className="text-brand-gradient">your whole growth stack.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            From the first pixel to profitable scale — we engineer the websites, commerce, campaigns
            and teams that move ambitious brands forward.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

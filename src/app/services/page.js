import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/home/ContactCTA';
import Reveal from '@/components/home/Reveal';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Services',
  description:
    'Websites, e-commerce platforms, performance marketing and business consulting — hand-crafted, conversion-focused and built to help ambitious brands scale.',
  path: '/services',
  keywords: [
    'website development',
    'ecommerce development',
    'performance marketing',
    'business consulting',
    'seo services',
  ],
});

/* ------------------------------------------------------------------ data */
const WEBSITE_TIERS = [
  {
    name: 'Launch',
    bestFor: 'Startups & small businesses launching their first website',
    includes: [
      'Up to 5 pages (Home, About, Services, Contact + 1 custom)',
      'Custom UI design',
      'Fully responsive website',
      'Hard-coded development — no templates',
      'Basic SEO setup',
      'Contact form integration',
      'Speed optimization',
      '2 revision rounds',
    ],
    timeline: '15 – 20 days',
    goal: 'Establish a professional online presence.',
  },
  {
    name: 'Growth',
    featured: true,
    bestFor: 'Businesses that want a strong brand website',
    includes: [
      'Up to 10 pages',
      'Custom UI/UX design',
      'Hard-coded high-performance build',
      'Advanced animations & interactions',
      'SEO-friendly structure',
      'Blog setup & lead-capture forms',
      'Analytics integration',
      '3 revision rounds',
    ],
    timeline: '3 – 4 weeks',
    goal: 'Convert visitors into leads.',
  },
  {
    name: 'Authority',
    bestFor: 'Premium brands & high-growth startups',
    includes: [
      'Unlimited pages',
      'Premium UI/UX strategy',
      'Fully custom hard-coded development',
      'Advanced animations & interactive sections',
      'Conversion-focused architecture',
      'Blog / resource hub + CRM & API integrations',
      'Advanced SEO & performance optimization',
      'Priority support + unlimited revisions (in scope)',
    ],
    timeline: '5 – 6 weeks',
    goal: 'Build a high-performing brand website that drives revenue.',
  },
];

const MARKETING_PLANS = [
  {
    name: 'Starter Growth',
    bestFor: 'Early-stage startups testing paid ads',
    includes: [
      '2 ad platforms (Meta + Google)',
      'Campaign strategy & setup',
      'Up to 5 campaigns',
      '5 ad-creative guidance',
      'Weekly optimization',
      'Audience targeting & testing',
      'Basic funnel tracking',
      'Monthly performance report',
    ],
    goal: 'Validate offers & start generating leads/sales.',
  },
  {
    name: 'Scale',
    featured: true,
    bestFor: 'Businesses ready to scale revenue',
    includes: [
      'Meta + Google + YouTube',
      'Full-funnel strategy',
      '15 campaigns managed',
      'Creative strategy + ad copy',
      'A/B testing & retargeting funnel',
      'Landing-page optimization guidance',
      'Conversion tracking setup',
      'Bi-weekly strategy calls + analytics dashboard',
    ],
    goal: 'Consistent lead flow & profitable ROAS.',
  },
  {
    name: 'Dominance',
    bestFor: 'Brands that want aggressive growth',
    includes: [
      'All ad platforms (Meta, Google, YouTube, LinkedIn)',
      'Advanced funnel architecture',
      'Unlimited campaign scaling',
      'Creative direction + script strategy',
      'High-level audience research + CRO',
      'Landing-page strategy',
      'Weekly strategy calls',
      'Competitor ad intelligence + real-time dashboard',
    ],
    goal: 'Aggressive scaling & category dominance.',
  },
];

const ECOM_MODELS = [
  { title: 'D2C Stores', desc: 'Brand-owned online stores for direct product sales.' },
  { title: 'B2C Platforms', desc: 'Consumer marketplaces similar to Amazon.' },
  { title: 'B2B Commerce', desc: 'Wholesale platforms for suppliers and distributors.' },
  { title: 'Multi-Vendor', desc: 'Marketplaces with multiple sellers, like Flipkart.' },
  { title: 'Social Commerce', desc: 'WhatsApp & Instagram integrated selling models.' },
  {
    title: 'Hybrid Ecosystem',
    desc: 'Marketplace + D2C — our recommended architecture for scale.',
  },
];

const ECOM_CAPS = [
  {
    title: 'Product discovery',
    desc: 'Smart search, advanced filters, AI recommendations, visual & voice search.',
  },
  {
    title: 'Converting product pages',
    desc: '360° views, UGC & reviews, comparisons, frequently-bought-together, stock urgency.',
  },
  {
    title: 'Checkout & payments',
    desc: 'One-click & guest checkout, UPI/cards/wallets/COD/EMI, coupon engine, address auto-fill.',
  },
  {
    title: 'Platform management',
    desc: 'Admin panel, seller dashboards, pricing & commission control, fraud monitoring, CMS.',
  },
  {
    title: 'Logistics & integrations',
    desc: 'Shiprocket, Delhivery, BlueDart, Razorpay, PayU, Stripe, GST invoicing, tracking APIs.',
  },
  {
    title: 'Built-in growth engine',
    desc: 'Referrals, loyalty, flash sales, abandoned-cart recovery, email & WhatsApp automation.',
  },
];

const ECOM_PHASES = [
  { n: '01', title: 'MVP launch', desc: 'Launch quickly and validate the business model.' },
  { n: '02', title: 'Growth', desc: 'Introduce engagement, retention and automation tools.' },
  { n: '03', title: 'Advanced', desc: 'Add AI, personalization and social commerce features.' },
  {
    n: '04',
    title: 'Scale',
    desc: 'Ecosystem-level advantages — creator commerce, hyperlocal delivery.',
  },
];

const CONSULTING = [
  {
    title: 'Recruitment',
    desc: 'We help you find and hire the right people — talent strategy, structured hiring processes and candidate assessment rooted in human-centric leadership.',
    points: [
      'Talent strategy & role mapping',
      'Structured hiring pipelines',
      'Assessment & onboarding',
    ],
  },
  {
    title: 'HR Services',
    desc: 'The systems and structure behind sustainable growth — operational structuring, employee engagement and management training that scales with you.',
    points: ['HR systems & operations', 'Employee engagement', 'Management training'],
  },
];

/* --------------------------------------------------------------- helpers */
function Check() {
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

function TierCard({ tier, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={`card-lift relative flex h-full flex-col rounded-3xl border p-7 sm:p-8 ${
          tier.featured
            ? 'border-[#f26b1d]/40 bg-white shadow-[0_30px_70px_-30px_rgba(194,65,12,0.45)]'
            : 'border-neutral-200 bg-white'
        }`}
      >
        {tier.featured ? (
          <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-[#f26b1d] to-[#c2410c] px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase">
            Most popular
          </span>
        ) : null}
        <h3 className="text-2xl font-extrabold tracking-tight text-[#171310]">{tier.name}</h3>
        <p className="mt-2 text-sm text-neutral-500">{tier.bestFor}</p>

        <ul className="mt-6 flex-1 space-y-2.5">
          {tier.includes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
              <Check />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 space-y-1 border-t border-neutral-100 pt-5 text-sm">
          {tier.timeline ? (
            <p className="text-neutral-500">
              Timeline: <span className="font-semibold text-[#171310]">{tier.timeline}</span>
            </p>
          ) : null}
          <p className="text-neutral-500">
            Goal: <span className="font-medium text-[#171310]">{tier.goal}</span>
          </p>
        </div>

        <a
          href="/contact"
          className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 ${
            tier.featured
              ? 'bg-gradient-to-r from-[#f26b1d] to-[#c2410c] text-white hover:from-[#f97316] hover:to-[#b03a0a]'
              : 'border border-neutral-200 text-[#171310] hover:border-[#f26b1d]/50 hover:text-[#f26b1d]'
          }`}
        >
          Request a quote
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
      </div>
    </Reveal>
  );
}

function SectionHead({ eyebrow, title, tagline, desc }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-[#f26b1d]" />
        {eyebrow}
      </span>
      <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#171310] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {tagline ? <p className="text-brand-gradient mt-3 text-lg font-semibold">{tagline}</p> : null}
      {desc ? <p className="mt-4 text-lg leading-relaxed text-neutral-600">{desc}</p> : null}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ page */
export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="One partner for your"
        highlight="whole growth stack."
        subtitle="From the first pixel to profitable scale — websites, commerce, campaigns and the teams behind them."
      />

      {/* Website Development */}
      <section id="web" className="scroll-mt-24 bg-neutral-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHead
            eyebrow="Website Development"
            title="Websites that turn visitors into leads."
            tagline="Ambition, engineered."
            desc="Hand-coded, blazing-fast and conversion-focused — no templates, ever."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3">
            {WEBSITE_TIERS.map((tier, i) => (
              <TierCard key={tier.name} tier={tier} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      {/* E-Commerce */}
      <section id="ecommerce" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHead
            eyebrow="E-Commerce Platforms"
            title="Commerce built to compound."
            tagline="Discovery → Trust → Conversion → Retention → Community"
            desc="We engineer the commerce model that fits your vision — and the growth engine that keeps customers coming back."
          />

          <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {ECOM_MODELS.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 80}>
                <div className="card-lift h-full rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                  <h3 className="text-lg font-bold tracking-tight text-[#171310]">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <h3 className="mt-16 text-center text-sm font-bold tracking-[0.2em] text-neutral-400 uppercase">
            Core platform capabilities
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ECOM_CAPS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f26b1d] to-[#c2410c] text-sm font-black text-white">
                    {i + 1}
                  </div>
                  <h4 className="text-base font-bold tracking-tight text-[#171310]">{c.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* phases */}
          <div className="mt-16 rounded-3xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
            <p className="text-center text-sm font-bold tracking-[0.2em] text-neutral-400 uppercase">
              Our development approach
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {ECOM_PHASES.map((p, i) => (
                <Reveal key={p.n} delay={i * 90}>
                  <div className="text-brand-gradient text-3xl font-black">{p.n}</div>
                  <h4 className="mt-3 text-lg font-bold tracking-tight text-[#171310]">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{p.desc}</p>
                </Reveal>
              ))}
            </div>
            <p className="mt-10 text-center text-lg font-semibold text-[#171310]">
              Winning platforms focus on{' '}
              <span className="text-brand-gradient">Community + Commerce + Retention.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Performance Marketing */}
      <section id="marketing" className="scroll-mt-24 bg-neutral-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHead
            eyebrow="Performance Marketing"
            title="We don’t just run ads."
            tagline="We engineer revenue systems."
            desc="ROI-driven campaigns with full-funnel strategy, testing and tracking that produce predictable growth."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3">
            {MARKETING_PLANS.map((plan, i) => (
              <TierCard key={plan.name} tier={plan} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Consulting */}
      <section id="consulting" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHead
            eyebrow="Business Consulting"
            title="The team & structure behind growth."
            tagline="Systems that scale."
            desc="Recruitment and HR services that build the people and processes your growth depends on."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2">
            {CONSULTING.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="card-lift h-full rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#171310]">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{c.desc}</p>
                  <ul className="mt-6 space-y-2.5">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-neutral-700">
                        <Check />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

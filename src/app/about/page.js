import CTABand from '@/components/CTABand';
import PageHeader from '@/components/PageHeader';
import Process from '@/components/home/Process';
import Reveal from '@/components/home/Reveal';
import Showcase from '@/components/home/Showcase';
import Stats from '@/components/home/Stats';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About Us',
  description:
    'Ramaora exists to bridge the gap between vision and execution. We build brands with empathy, strategy and purpose — with a human touch machines can’t replace.',
  path: '/about',
  keywords: [
    'about ramaora',
    'digital agency',
    'startup agency India',
    'marketing and tech agency',
  ],
});

const VALUES = [
  {
    title: 'Empathy first',
    desc: 'We treat brands like ideas with potential and a story worth building carefully — not projects on a timeline.',
  },
  {
    title: 'Strategy always',
    desc: 'Meaningful execution only comes from meaningful understanding. We think before we build.',
  },
  {
    title: 'Built with purpose',
    desc: 'Depth, intention and involvement in an industry obsessed with speed, automation and repetition.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Ramaora"
        title="We bridge the gap between"
        highlight="vision and execution."
        subtitle="We understand what it feels like to build something from the ground up — because we are a startup ourselves."
      />

      {/* Story */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <Reveal className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              That is why we do not treat brands like projects on a timeline — we treat them like
              ideas with potential, ambition, and a story worth building carefully. The world may
              not collapse without Ramaora, but something valuable would definitely be missing:{' '}
              <span className="font-semibold text-[#171310]">the human touch.</span>
            </p>
            <p>
              In an industry driven by speed, automation and repetition, we choose depth, intention
              and involvement. What truly sets us apart is our obsession with research. Before we
              initiate any project, we invest time in understanding the brand, the market, the
              audience, and the long-term vision behind it.
            </p>
            <p>
              We work especially closely with startups because we resonate with the passion,
              uncertainty and excitement that come with building something new. Behind every startup
              is a founder taking a risk — and we believe they deserve partners who are equally
              invested.
            </p>
            <p className="text-xl font-semibold text-[#171310]">
              Ramaora is not just a marketing and tech agency. We are a team that builds with
              empathy, thinks with strategy, and creates with purpose.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="card-lift h-full rounded-3xl border border-neutral-200 bg-white p-8">
                  <div className="text-brand-gradient text-3xl font-black">0{i + 1}</div>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-[#171310]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Stats />
      <Showcase />
      <CTABand
        title="Let’s build with intention."
        subtitle="If you’re building something ambitious, we’d love to be the partner that’s equally invested."
      />
    </>
  );
}

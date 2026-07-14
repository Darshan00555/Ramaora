import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/home/ContactCTA';
import Reveal from '@/components/home/Reveal';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact',
  description:
    'Start your project with Ramaora. Email grow@ramaora.in or call us — we typically respond within 24 hours.',
  path: '/contact',
  keywords: ['contact ramaora', 'hire web agency', 'get a quote', 'grow@ramaora.in'],
});

const STEPS = [
  {
    n: '01',
    title: 'You reach out',
    desc: 'Share a few details about your brand, goals and timeline through the form or a quick email.',
  },
  {
    n: '02',
    title: 'We dig in',
    desc: 'Within 24 hours we respond with questions and a first read on how we’d approach it — no obligation.',
  },
  {
    n: '03',
    title: 'We map a plan',
    desc: 'A clear scope, timeline and next steps so you know exactly what building together looks like.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s start"
        highlight="building together."
        subtitle="Tell us where you want to be — we’ll help you map how to get there. We typically reply within 24 hours."
      />

      <ContactCTA />

      {/* What happens next */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#171310] sm:text-4xl">
              What happens <span className="text-brand-gradient">next.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="text-brand-gradient text-4xl font-black">{s.n}</div>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-[#171310]">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

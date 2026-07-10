'use client';

import Reveal from './Reveal';

const STEPS = [
  {
    n: '01',
    title: 'Discovery',
    desc: 'We learn your brand, audience and goals before a single pixel is placed. Real research, not assumptions.',
  },
  {
    n: '02',
    title: 'Strategy',
    desc: 'A clear roadmap — design direction, tech stack, content plan and channel mix mapped to your growth targets.',
  },
  {
    n: '03',
    title: 'Execution',
    desc: 'We build fast, test everything and ship work that makes you proud to share it the day it goes live.',
  },
  {
    n: '04',
    title: 'Scale',
    desc: 'Ongoing optimisation and reporting that compounds your results — turning one launch into lasting momentum.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f26b1d]" />
            How we work
          </span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#171310] sm:text-5xl">
            A process built on{' '}
            <span className="text-brand-gradient">meaningful understanding.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            Meaningful execution only comes from meaningful understanding. Every engagement moves
            through four deliberate stages.
          </p>
        </Reveal>

        <div className="relative mt-14 sm:mt-16">
          {/* connecting line (desktop) */}
          <div
            className="absolute top-7 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 100} className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-lg font-black text-[#c2410c] shadow-[0_8px_24px_-12px_rgba(194,65,12,0.4)]">
                  {step.n}
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-[#171310]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

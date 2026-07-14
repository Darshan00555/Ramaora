import Reveal from '@/components/home/Reveal';

/** Compact dark call-to-action band for page endings. */
export default function CTABand({
  title = "Let's build something worth sharing.",
  subtitle = 'Tell us where you want to be and we’ll map how to get there — usually within 24 hours.',
  primaryLabel = 'Start your project',
  primaryHref = '/contact',
  secondaryLabel = 'Email us',
  secondaryHref = 'mailto:grow@ramaora.in',
}) {
  return (
    <section className="relative overflow-hidden bg-[#171310] py-20 sm:py-24">
      <div
        className="pointer-events-none absolute top-0 -left-24 h-72 w-72 rounded-full bg-[#c2410c] opacity-40 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#f26b1d] opacity-20 blur-[130px]"
        aria-hidden="true"
      />
      <Reveal className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-orange-100/60">
          {subtitle}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={primaryHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f26b1d] to-[#c2410c] px-7 py-3.5 text-base font-bold text-white shadow-[0_16px_40px_-12px_rgba(194,65,12,0.7)] transition-all duration-300 hover:from-[#f97316] hover:to-[#b03a0a] active:scale-[0.99] sm:w-auto"
          >
            {primaryLabel}
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href={secondaryHref}
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-[#f26b1d]/50 hover:bg-white/10 sm:w-auto"
          >
            {secondaryLabel}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

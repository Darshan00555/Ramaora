import Reveal from '@/components/home/Reveal';

/**
 * Shared inner-page header. Top padding clears the fixed navbar; light
 * background so the transparent-at-top navbar reads correctly.
 */
export default function PageHeader({ eyebrow, title, highlight, subtitle, children }) {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200/70 bg-neutral-50 pt-28 pb-16 sm:pt-36 sm:pb-20">
      {/* soft brand glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] max-w-[90vw] -translate-x-1/2 rounded-full bg-[#f26b1d]/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
        {eyebrow ? (
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f26b1d]" />
              {eyebrow}
            </span>
          </Reveal>
        ) : null}
        <Reveal delay={80}>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#171310] sm:text-5xl lg:text-6xl">
            {title} {highlight ? <span className="text-brand-gradient">{highlight}</span> : null}
          </h1>
        </Reveal>
        {subtitle ? (
          <Reveal delay={140}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
              {subtitle}
            </p>
          </Reveal>
        ) : null}
        {children ? (
          <Reveal delay={200}>
            <div className="mt-8">{children}</div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

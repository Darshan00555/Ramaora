'use client';

const CLIENTS = [
  'Lifecraft',
  'SpectrumKart',
  'DiamondOre',
  'Plastengnr',
  'SimplyGift',
  'Bigwing Honda',
  'Branboxx',
  'AK CRM',
  'Eventours India',
  'The Pilates Room',
  'Aranyud Architects',
  'Etasi',
];

function Row({ items, ariaHidden }) {
  return (
    <div
      className="marquee-track flex shrink-0 items-center gap-10 pr-10 sm:gap-16 sm:pr-16"
      aria-hidden={ariaHidden}
    >
      {items.map((name, i) => (
        <span
          key={`${name}-${i}`}
          className="text-lg font-semibold tracking-tight whitespace-nowrap text-neutral-400 transition-colors duration-300 hover:text-[#c2410c] sm:text-2xl"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export default function ClientsMarquee() {
  return (
    <section className="relative border-y border-neutral-200/70 bg-white py-10 sm:py-14">
      <div className="mx-auto mb-8 max-w-7xl px-6 text-center sm:px-8">
        <p className="text-xs font-bold tracking-[0.25em] text-neutral-400 uppercase sm:text-sm">
          Trusted by ambitious brands &amp; founders
        </p>
      </div>

      {/* Edge fade mask so the loop dissolves at both ends */}
      <div className="marquee-mask relative flex w-full overflow-hidden">
        <div className="marquee-move flex min-w-max">
          <Row items={CLIENTS} />
          <Row items={CLIENTS} ariaHidden />
        </div>
      </div>
    </section>
  );
}

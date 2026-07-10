'use client';

import { useState } from 'react';

import Reveal from './Reveal';

const SERVICES = [
  'Website Development',
  'E-Commerce Platform',
  'Performance Marketing',
  'Business Consulting',
  'Not sure yet — help me decide',
];

const CONTACTS = [
  {
    label: 'Email',
    value: 'grow@ramaora.in',
    href: 'mailto:grow@ramaora.in',
    Icon: (p) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...p}
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: 'Call / WhatsApp',
    value: '+91 84496 25310',
    href: 'tel:+918449625310',
    Icon: (p) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...p}
      >
        <path d="M4 5c0-1 1-2 2-2h2l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v2c0 1-1 2-2 2A16 16 0 0 1 4 5Z" />
      </svg>
    ),
  },
  {
    label: 'Alt. Phone',
    value: '+91 87503 00077',
    href: 'tel:+918750300077',
    Icon: (p) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...p}
      >
        <path d="M4 5c0-1 1-2 2-2h2l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v2c0 1-1 2-2 2A16 16 0 0 1 4 5Z" />
      </svg>
    ),
  },
];

export default function ContactCTA() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: SERVICES[0],
    message: '',
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry — ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nInterested in: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:grow@ramaora.in?subject=${subject}&body=${body}`;
  };

  const inputBase =
    'w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[15px] text-[#171310] placeholder:text-neutral-400 outline-none transition focus:border-[#f26b1d] focus:bg-white focus:ring-4 focus:ring-[#f26b1d]/10';

  return (
    <section id="contact" className="relative overflow-hidden bg-[#171310] py-20 sm:py-24 lg:py-32">
      <div
        className="pointer-events-none absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-[#c2410c] opacity-50 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#f26b1d] opacity-20 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_minmax(0,1.1fr)] lg:gap-16">
          {/* Left — pitch + contacts */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-orange-100/60 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f26b1d]" />
              Let&apos;s build together
            </span>
            <h2 className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tell us where you want to be.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-orange-100/60">
              From websites to marketing systems, we engineer growth for startups and ambitious
              brands. Share a few details and we&apos;ll get back within 24 hours.
            </p>

            <div className="mt-10 space-y-3">
              {CONTACTS.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-[#f26b1d]/50 hover:bg-white/[0.06]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-orange-100 transition-colors group-hover:text-[#f26b1d]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold tracking-wider text-orange-100/40 uppercase">
                      {label}
                    </span>
                    <span className="block text-[15px] font-semibold text-white">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right — lead form */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)] sm:p-8"
            >
              <h3 className="text-xl font-bold tracking-tight text-[#171310]">
                Start your project
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                No obligation. Just a conversation about what&apos;s possible.
              </p>

              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-semibold text-[#171310]"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Your name"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-[#171310]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@company.com"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-sm font-semibold text-[#171310]"
                  >
                    What do you need?
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update('service')}
                    className={inputBase}
                  >
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-[#171310]"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us about your brand, goals and timeline…"
                    className={`${inputBase} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f26b1d] to-[#c2410c] px-6 py-4 text-base font-bold text-white shadow-[0_16px_40px_-12px_rgba(194,65,12,0.7)] transition-all duration-300 hover:from-[#f97316] hover:to-[#b03a0a] hover:shadow-[0_20px_50px_-12px_rgba(194,65,12,0.9)] active:scale-[0.99]"
                >
                  Send enquiry
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
                <p className="text-center text-xs text-neutral-400">
                  Opens your email app with the details pre-filled.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

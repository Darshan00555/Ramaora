'use client';

import { useState } from 'react';

import Link from 'next/link';

import Reveal from '@/components/home/Reveal';

const CAT_GRADIENT = {
  Web: 'from-[#f26b1d] to-[#c2410c]',
  'E-Commerce': 'from-[#f59e0b] to-[#f26b1d]',
  Marketing: 'from-[#fb923c] to-[#ea580c]',
  SEO: 'from-[#f26b1d] to-[#b45309]',
  Design: 'from-[#fbbf24] to-[#f26b1d]',
  Consulting: 'from-[#f97316] to-[#c2410c]',
};

function Thumb({ category, title, className = '' }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${CAT_GRADIENT[category] || 'from-[#f26b1d] to-[#c2410c]'} ${className}`}
    >
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_30%_20%,#fff,transparent_45%)] opacity-20" />
      <span className="absolute right-4 bottom-4 rounded-full bg-black/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
        {category}
      </span>
      <span className="absolute top-4 left-4 max-w-[70%] text-sm font-black tracking-tight text-white/90 drop-shadow">
        {title.split(':')[0]}
      </span>
    </div>
  );
}

function Meta({ post }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
      <span>{formatDate(post.date)}</span>
      <span className="h-1 w-1 rounded-full bg-neutral-300" />
      <span>{post.readTime}</span>
    </div>
  );
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function BlogList({ posts, categories }) {
  const [active, setActive] = useState('All');

  const featured = posts[0];
  const rest = posts.slice(1);
  const visible = active === 'All' ? rest : rest.filter((p) => p.category === active);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* category filter */}
        <Reveal className="flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                active === cat
                  ? 'border-[#f26b1d] bg-[#f26b1d] text-white'
                  : 'border-neutral-200 bg-white text-neutral-600 hover:border-[#f26b1d]/50 hover:text-[#f26b1d]'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* featured */}
        {active === 'All' && featured ? (
          <Reveal className="mt-10">
            <Link
              href={`/blog/${featured.slug}`}
              className="card-lift group grid grid-cols-1 overflow-hidden rounded-3xl border border-neutral-200 bg-white lg:grid-cols-2"
            >
              <Thumb
                category={featured.category}
                title={featured.title}
                className="min-h-[220px] lg:min-h-full"
              />
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="text-xs font-bold tracking-[0.2em] text-[#f26b1d] uppercase">
                  Featured
                </span>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#171310] sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <Meta post={featured} />
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#171310] transition-colors group-hover:text-[#f26b1d]">
                    Read
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M13 6l6 6-6 6"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ) : null}

        {/* grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white"
              >
                <Thumb category={post.category} title={post.title} className="h-40" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg leading-snug font-bold tracking-tight text-[#171310] transition-colors group-hover:text-[#c2410c]">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-5">
                    <Meta post={post} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* newsletter */}
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-[#171310] p-8 sm:p-12">
            <div
              className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-[#f26b1d]/20 blur-[100px]"
              aria-hidden="true"
            />
            <div className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Growth notes, no fluff.
                </h3>
                <p className="mt-3 text-orange-100/60">
                  Occasional insights on building websites, commerce and campaigns that convert.
                </p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = new FormData(e.currentTarget).get('email');
                  window.location.href = `mailto:grow@ramaora.in?subject=${encodeURIComponent('Newsletter signup')}&body=${encodeURIComponent(`Please add me to the Ramaora newsletter: ${email}`)}`;
                }}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white transition outline-none placeholder:text-orange-100/40 focus:border-[#f26b1d] focus:ring-4 focus:ring-[#f26b1d]/20"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-xl bg-gradient-to-r from-[#f26b1d] to-[#c2410c] px-6 py-3 text-sm font-bold text-white transition-all hover:from-[#f97316] hover:to-[#b03a0a]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

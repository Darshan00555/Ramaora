import Link from 'next/link';
import { notFound } from 'next/navigation';

import CTABand from '@/components/CTABand';
import Reveal from '@/components/home/Reveal';
import { getAllSlugs, getPostBySlug, getRelatedPosts } from '@/content/blog';
import { pageMetadata } from '@/lib/seo';
import { ORG, SITE_URL } from '@/lib/site';

// Pre-render every post at build time (SSG) for speed + SEO.
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return pageMetadata({ title: 'Post not found', path: `/blog/${slug}` });

  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: 'article',
    keywords: post.keywords,
    publishedTime: new Date(post.date).toISOString(),
    modifiedTime: new Date(post.updated || post.date).toISOString(),
  });
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const url = `${SITE_URL}/blog/${post.slug}`;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: [`${SITE_URL}/logo.jpeg`],
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.updated || post.date).toISOString(),
    author: { '@type': 'Organization', name: ORG.name, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: ORG.name,
      logo: { '@type': 'ImageObject', url: ORG.logo },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: (post.keywords || []).join(', '),
    articleSection: post.category,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  const faqLd = post.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      ) : null}

      <article>
        {/* header */}
        <header className="relative overflow-hidden border-b border-neutral-200/70 bg-neutral-50 pt-28 pb-14 sm:pt-36 sm:pb-16">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] max-w-[90vw] -translate-x-1/2 rounded-full bg-[#f26b1d]/10 blur-[120px]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-6 sm:px-8">
            {/* breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-neutral-500"
            >
              <Link href="/" className="hover:text-[#c2410c]">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#c2410c]">
                Blog
              </Link>
              <span>/</span>
              <span className="truncate text-neutral-400">{post.category}</span>
            </nav>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f26b1d]" />
              {post.category}
            </span>

            <h1 className="mt-5 text-3xl leading-[1.12] font-extrabold tracking-tight text-[#171310] sm:text-4xl lg:text-[2.75rem]">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
              <span className="font-semibold text-[#171310]">Ramaora Team</span>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* body */}
        <div className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <div className="prose" dangerouslySetInnerHTML={{ __html: post.body }} />

            {/* FAQ */}
            {post.faq?.length ? (
              <section className="mt-14 border-t border-neutral-200 pt-10">
                <h2 className="text-2xl font-extrabold tracking-tight text-[#171310]">
                  Frequently asked questions
                </h2>
                <dl className="mt-6 space-y-6">
                  {post.faq.map((f) => (
                    <div
                      key={f.q}
                      className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
                    >
                      <dt className="font-bold text-[#171310]">{f.q}</dt>
                      <dd className="mt-2 text-[15px] leading-relaxed text-neutral-600">{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}

            {/* keywords / tags */}
            {post.keywords?.length ? (
              <div className="mt-12 flex flex-wrap gap-2">
                {post.keywords.map((k) => (
                  <span
                    key={k}
                    className="rounded-full bg-[#f26b1d]/10 px-3 py-1 text-xs font-medium text-[#c2410c]"
                  >
                    {k}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* related */}
        {related.length ? (
          <section className="border-t border-neutral-200 bg-neutral-50 py-16">
            <div className="mx-auto max-w-7xl px-6 sm:px-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-[#171310]">
                Keep reading
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r, i) => (
                  <Reveal key={r.slug} delay={i * 80}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="card-lift group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6"
                    >
                      <span className="text-xs font-bold tracking-[0.15em] text-[#f26b1d] uppercase">
                        {r.category}
                      </span>
                      <h3 className="mt-3 flex-1 text-lg leading-snug font-bold tracking-tight text-[#171310] transition-colors group-hover:text-[#c2410c]">
                        {r.title}
                      </h3>
                      <span className="mt-4 text-xs font-medium text-neutral-400">
                        {r.readTime}
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </article>

      <CTABand
        title="Ready to put this into practice?"
        subtitle="Whether it's a website, a store or a campaign — we can help you build it right."
        primaryLabel="Start your project"
      />
    </>
  );
}

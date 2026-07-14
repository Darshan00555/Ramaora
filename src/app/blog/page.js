import PageHeader from '@/components/PageHeader';
import BlogList from '@/components/blog/BlogList';
import { getAllPosts, getCategories } from '@/content/blog';
import { pageMetadata } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Blog',
  description:
    'Practical insights on building websites, e-commerce, performance marketing and SEO that help ambitious brands grow — from the Ramaora team.',
  path: '/blog',
  keywords: [
    'web development blog',
    'digital marketing blog',
    'seo tips',
    'ecommerce growth',
    'startup marketing',
  ],
});

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Ramaora Blog',
    url: `${SITE_URL}/blog`,
    description: metadata.description,
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date,
      dateModified: p.updated || p.date,
      author: { '@type': 'Organization', name: 'Ramaora' },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Blog"
        title="Ideas on building"
        highlight="things that grow."
        subtitle="Practical notes on websites, commerce, marketing and SEO — from the team that engineers them."
      />
      <BlogList posts={posts} categories={categories} />
    </>
  );
}

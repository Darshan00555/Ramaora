import { getAllPosts } from '@/content/blog';
import { SITE_URL } from '@/lib/site';

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/team', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  ].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const postRoutes = getAllPosts().map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updated || p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}

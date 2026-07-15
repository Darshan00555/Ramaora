import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from './site';

/**
 * Build a Next.js Metadata object with canonical + OpenGraph + Twitter tags.
 * Use in each route's `metadata` export or `generateMetadata`.
 */
export function pageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = '/',
  type = 'website',
  image = '/logo.png',
  keywords,
  publishedTime,
  modifiedTime,
} = {}) {
  const url = absoluteUrl(path);
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — From Vision to Execution`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type,
      images: [{ url: absoluteUrl(image), width: 640, height: 360, alt: SITE_NAME }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export { SITE_URL };

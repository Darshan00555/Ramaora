// Central site config used for SEO (metadata, sitemap, robots, JSON-LD).
// Change SITE_URL to your production domain once the custom domain is live.
export const SITE_URL = 'https://ramaora.in';

export const SITE_NAME = 'Ramaora';

export const SITE_DESCRIPTION =
  'Ramaora bridges the gap between vision and execution — hand-coded websites, e-commerce platforms, performance marketing and business consulting for startups and ambitious brands.';

export const ORG = {
  name: 'Ramaora',
  legalName: 'Ramaora',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpeg`,
  email: 'grow@ramaora.in',
  phones: ['+91-8449625310', '+91-8750300077'],
  sameAs: ['https://www.instagram.com/ramaora.ai', 'https://www.linkedin.com/company/ramaora-ai/'],
};

/** Absolute URL helper for canonicals / OG. */
export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

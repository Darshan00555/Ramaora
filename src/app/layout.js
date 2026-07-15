import '@fontsource-variable/geist';

import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/home/Footer';
import { ORG, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';

import './globals.css';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ramaora — From Vision to Execution',
    template: '%s | Ramaora',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'web development agency',
    'ecommerce development',
    'performance marketing',
    'seo agency',
    'digital agency India',
    'startup marketing',
    'lead generation',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: 'Ramaora — From Vision to Execution',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: 'en_IN',
    images: [{ url: '/logo.png', width: 640, height: 360, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramaora — From Vision to Execution',
    description: SITE_DESCRIPTION,
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: ORG.name,
  legalName: ORG.legalName,
  url: ORG.url,
  logo: ORG.logo,
  email: ORG.email,
  description: SITE_DESCRIPTION,
  sameAs: ORG.sameAs,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: ORG.phones[0],
      contactType: 'sales',
      email: ORG.email,
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ScrollToTop />
        <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import '@fontsource-variable/geist';

import './globals.css';

export const metadata = {
  title: 'Ramaora — From Vision to Execution',
  description:
    'Ramaora bridges the gap between vision and execution. We engineer websites, marketing systems, and digital ecosystems for startups and ambitious brands.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Ramaora — From Vision to Execution',
    description:
      'We engineer websites, marketing systems, and digital ecosystems for startups and ambitious brands.',
    siteName: 'Ramaora',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/provider/providers';
import { SiteNav } from '@/components/SiteNav';
import { JsonLd } from '@/components/JsonLd';
import { fontVariables } from '@/lib/fonts';
import { createOgMetadata, DEFAULT_OG } from '@/lib/og';
import { SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_OG.title,
    template: '%s · Piyush Kumar',
  },
  description: DEFAULT_OG.description,
  authors: [{ name: 'Piyush Kumar', url: SITE_URL }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/icon.svg',
  },
  manifest: '/site.webmanifest',
  ...createOgMetadata(),
};

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Software engineer at Dentsu building GenAI-backed services and backend systems.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE_URL,
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Dentsu',
    },
    sameAs: [
      'https://github.com/whitehawk0910',
      'https://www.linkedin.com/in/piyush-kumar-2886001aa/',
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <JsonLd data={structuredData} />
      </head>
      <body
        className={`${fontVariables} paper-grain font-sans antialiased bg-background text-foreground`}
      >
        <SiteNav />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

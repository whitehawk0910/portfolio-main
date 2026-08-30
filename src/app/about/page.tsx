import type { Metadata } from 'next';
import Link from 'next/link';
import { About } from '@/components/About';
import { SiteFooter } from '@/components/SiteFooter';
import { createOgMetadata } from '@/lib/og';

const description =
  'About Piyush Kumar, a software engineer working across artificial intelligence, quantitative research, GPU computing and backend systems.';

export const metadata: Metadata = {
  ...createOgMetadata({
    title: 'About Piyush Kumar',
    description,
    url: '/about',
  }),
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-6 pb-16 pt-24 md:pt-28">
        <header className="mb-12 border-b border-line pb-10">
          <p className="type-meta mb-3 text-accent">Profile</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            About Piyush Kumar
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Piyush Kumar is a software engineer working across artificial
            intelligence, quantitative research, GPU computing and backend
            systems.
          </p>
        </header>
        <About />
        <nav
          aria-label="Explore more"
          className="flex flex-wrap gap-4 border-t border-line pt-8 text-sm"
        >
          <Link href="/projects" className="underline underline-offset-4">
            Projects and experience
          </Link>
          <Link href="/research" className="underline underline-offset-4">
            Research
          </Link>
          <Link href="/articles" className="underline underline-offset-4">
            Articles
          </Link>
        </nav>
      </main>
      <SiteFooter />
    </div>
  );
}

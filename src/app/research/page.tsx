import type { Metadata } from 'next';
import Link from 'next/link';
import { researchEntries } from '@/data/research';
import { createOgMetadata } from '@/lib/og';

const description =
  'Research by Piyush Kumar across AI systems, quantitative research, GPU computing and mixed-precision deep learning.';

export const metadata: Metadata = {
  ...createOgMetadata({
    title: 'Research — Piyush Kumar',
    description,
    url: '/research',
  }),
  alternates: { canonical: '/research' },
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-6 pb-16 pt-24 md:pt-28">
        <header className="mb-12 border-b border-line pb-10">
          <p className="type-meta mb-3 text-accent">Research</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Research by Piyush Kumar
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Work and research notes spanning AI systems, quantitative research,
            GPU computing and mixed-precision deep learning.
          </p>
        </header>

        {researchEntries.length > 0 ? (
          <section aria-labelledby="research-list-heading">
            <h2 id="research-list-heading" className="sr-only">
              Research entries
            </h2>
            <div className="space-y-8">
              {researchEntries.map(entry => (
                <article key={entry.slug} className="border-b border-line pb-8">
                  <h2 className="font-display text-2xl font-semibold">
                    {entry.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    By {entry.author}
                  </p>
                  {entry.summary && (
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {entry.summary}
                    </p>
                  )}
                  <ul
                    className="mt-4 flex flex-wrap gap-2"
                    aria-label="Research areas"
                  >
                    {entry.researchAreas.map(area => (
                      <li
                        key={area}
                        className="rounded-md border border-line px-2 py-1 font-mono text-xs"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        ) : (
          <section
            aria-labelledby="research-status-heading"
            className="rounded-lg border border-line bg-canvas-muted/40 p-6"
          >
            <h2
              id="research-status-heading"
              className="font-display text-xl font-semibold"
            >
              Research index
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Verified papers and research notes will appear here. No
              publication status or venue is claimed until a source can be
              linked.
            </p>
          </section>
        )}

        <nav
          aria-label="Related pages"
          className="mt-12 flex gap-5 border-t border-line pt-8 text-sm"
        >
          <Link href="/projects" className="underline underline-offset-4">
            Projects
          </Link>
          <Link href="/articles" className="underline underline-offset-4">
            Articles
          </Link>
        </nav>
      </main>
    </div>
  );
}

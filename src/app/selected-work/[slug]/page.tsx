import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SelectedWorkVisual } from '@/components/SelectedWorkVisual';
import {
  getSelectedWorkBySlug,
  getSelectedWorkSlugs,
} from '@/data/selectedWork';
import { createOgMetadata } from '@/lib/og';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getSelectedWorkSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const work = getSelectedWorkBySlug(slug);

  if (!work) return { title: 'Selected work not found' };

  return {
    ...createOgMetadata({
      title: `${work.name} — Piyush Kumar`,
      description: work.summary,
      url: `/selected-work/${slug}`,
    }),
    alternates: { canonical: `/selected-work/${slug}` },
  };
}

export default async function SelectedWorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getSelectedWorkBySlug(slug);

  if (!work) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-4xl px-6 pb-20 pt-8 md:pt-12">
        <nav className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link
            href="/#projects"
            className="transition-colors hover:text-foreground"
          >
            Selected work
          </Link>
          <span aria-hidden>/</span>
          <span className="truncate text-foreground">{work.name}</span>
        </nav>

        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          Back to selected work
        </Link>

        <article>
          <header className="mb-8 max-w-3xl">
            <p className="type-meta text-muted-foreground">
              <span className="text-accent">{work.status}</span>
              {work.period && (
                <>
                  <span className="text-muted-foreground/50" aria-hidden>
                    {' '}
                    ·{' '}
                  </span>
                  <span className="tabular-nums">{work.period}</span>
                </>
              )}
            </p>
            <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-foreground text-balance md:text-6xl">
              {work.name}
            </h1>
            <p className="font-display mt-4 text-lg font-light italic text-accent text-balance md:text-2xl">
              {work.tagline}
            </p>
          </header>

          <div className="mb-10 overflow-hidden rounded-sm border border-foreground/10 shadow-[0_18px_45px_-25px_rgba(20,16,12,0.35)]">
            <SelectedWorkVisual visual={work.visual} />
          </div>

          <div className="grid gap-10 border-t border-line pt-9 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-14">
            <section aria-labelledby="overview-heading">
              <h2
                id="overview-heading"
                className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
              >
                Project overview
              </h2>
              <p className="mt-4 max-w-prose text-base leading-7 text-foreground/90">
                {work.summary}
              </p>
            </section>

            <aside>
              <dl className="space-y-6">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    Context
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-foreground">
                    {work.company}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    Stack
                  </dt>
                  <dd className="mt-2">
                    <ul className="flex list-none flex-wrap gap-1.5">
                      {work.stack.map(item => (
                        <li
                          key={item}
                          className="border border-line bg-card px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-foreground/85"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </article>
      </main>
    </div>
  );
}

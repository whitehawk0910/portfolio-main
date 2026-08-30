import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts } from '@/data/blogPosts';
import { createOgMetadata } from '@/lib/og';

const description =
  'Articles by Piyush Kumar on software engineering, AI systems and applied technology.';

export const metadata: Metadata = {
  ...createOgMetadata({
    title: 'Articles — Piyush Kumar',
    description,
    url: '/articles',
  }),
  alternates: { canonical: '/articles' },
};

export default function ArticlesPage() {
  const posts = getBlogPosts();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-6 pb-16 pt-24 md:pt-28">
        <header className="mb-12 border-b border-line pb-10">
          <p className="type-meta mb-3 text-accent">Writing</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Articles by Piyush Kumar
          </h1>
          <p className="mt-5 text-muted-foreground">
            Software engineering, AI systems and applied technology.
          </p>
        </header>
        <section aria-labelledby="article-list-heading">
          <h2 id="article-list-heading" className="sr-only">
            All articles
          </h2>
          <div className="space-y-6">
            {posts.map(post => (
              <article key={post.slug} className="border-b border-line pb-6">
                <h2 className="font-display text-xl font-semibold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <time
                  dateTime={post.date}
                  className="mt-2 block font-mono text-xs text-muted-foreground"
                >
                  {post.date}
                </time>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

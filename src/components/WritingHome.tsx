import { writings } from '@/data/writings';

export function WritingHome() {
  return (
    <section className="mb-16 md:mb-20" aria-labelledby="writing-heading">
      <div className="mb-10 flex items-baseline gap-4">
        <span className="type-numeral shrink-0 text-[1.6rem] text-accent">
          04
        </span>
        <div className="min-w-0">
          <h2
            id="writing-heading"
            className="font-display text-[1.875rem] font-bold tracking-tight text-foreground md:text-[2.5rem]"
            style={{ letterSpacing: '-0.03em' }}
          >
            Writing
          </h2>
          <p className="mt-3 max-w-prose text-sm text-muted-foreground">
            Notes on computing, machine learning, and engineering.
          </p>
        </div>
      </div>

      <ol className="list-none border-t border-line/80">
        {writings.map((article, index) => (
          <li key={article.href} className="border-b border-line/80">
            <a
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-5 py-7 transition-colors hover:bg-canvas-muted/35 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:items-start sm:px-3 md:py-9"
            >
              <span className="type-numeral text-lg text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="min-w-0">
                <span className="type-meta text-muted-foreground">
                  {article.publication}
                </span>
                <span className="font-display mt-2 block text-xl font-semibold tracking-tight text-foreground underline-offset-4 group-hover:underline sm:text-2xl">
                  {article.title}
                </span>
                <span className="mt-3 block max-w-prose text-sm leading-relaxed text-muted-foreground">
                  {article.summary}
                </span>
                <span className="mt-4 flex flex-wrap gap-1.5">
                  {article.topics.map(topic => (
                    <span
                      key={topic}
                      className="rounded-md border border-line/80 bg-card px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-foreground/80"
                    >
                      {topic}
                    </span>
                  ))}
                </span>
              </span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-accent">
                Read article ↗
              </span>
            </a>
          </li>
        ))}
      </ol>

      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/75">
        More writing will be added here.
      </p>
    </section>
  );
}

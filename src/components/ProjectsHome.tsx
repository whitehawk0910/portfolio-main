import Link from 'next/link';
import { SelectedWorkVisual } from '@/components/SelectedWorkVisual';
import { selectedWork } from '@/data/selectedWork';

export function ProjectsHome() {
  return (
    <section className="mb-16 md:mb-20" aria-labelledby="projects-heading">
      <div className="mb-10 flex items-baseline gap-4">
        <span className="type-numeral shrink-0 text-[1.6rem] text-accent">
          03
        </span>
        <div className="min-w-0">
          <h2
            id="projects-heading"
            className="font-display text-[1.875rem] font-bold tracking-tight text-foreground md:text-[2.5rem]"
            style={{ letterSpacing: '-0.03em' }}
          >
            Projects
          </h2>
          <p className="mt-3 max-w-prose text-sm text-muted-foreground">
            Selected work documented in my professional experience.
          </p>
        </div>
      </div>

      <ul className="list-none border-t border-line/80">
        {selectedWork.map((work, index) => (
          <li key={work.slug} className="border-b border-line/80 py-8 md:py-10">
            <Link
              href={`/selected-work/${work.slug}`}
              className="group block rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              aria-label={`View ${work.name} case study`}
            >
              <article className="grid gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center md:gap-10 lg:gap-12">
                <div
                  className={`overflow-hidden rounded-sm border border-foreground/10 shadow-[0_10px_30px_-18px_rgba(20,16,12,0.22)] transition-[transform,box-shadow] duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_38px_-20px_rgba(20,16,12,0.32)] ${index % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <SelectedWorkVisual visual={work.visual} />
                </div>

                <div className="min-w-0">
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
                  <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    {work.name}
                  </h3>
                  <p
                    className="font-display mt-1.5 text-base font-light italic text-accent md:text-lg"
                    style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 100" }}
                  >
                    {work.tagline}
                  </p>
                  <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                    {work.summary}
                  </p>
                  <ul className="mt-5 flex list-none flex-wrap gap-1.5">
                    {work.stack.map(item => (
                      <li
                        key={item}
                        className="rounded-md border border-line/80 bg-card px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-foreground/85"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-foreground transition-colors group-hover:text-accent">
                    View case study
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

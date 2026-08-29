import Link from 'next/link';
import { selectedWork, type SelectedWork } from '@/data/selectedWork';

function OrchestrationVisual() {
  return (
    <div className="relative flex h-full min-h-[15rem] items-center justify-center overflow-hidden bg-[hsl(38_28%_94%)] p-7 md:min-h-[18rem]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-55"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground) / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative grid w-full max-w-[23rem] grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="space-y-2">
          {['Enterprise data', 'Identity context', 'Retrieval'].map(label => (
            <div
              key={label}
              className="border border-foreground/12 bg-background/90 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-foreground"
            >
              {label}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1 text-accent" aria-hidden>
          <span className="h-px w-4 bg-accent/60" />
          <span>→</span>
          <span className="h-px w-4 bg-accent/60" />
        </div>
        <div className="border border-foreground/15 bg-foreground p-4 text-background shadow-[0_12px_30px_-18px_rgba(47,52,55,0.45)]">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-background/60">
            AI orchestration
          </p>
          <p className="font-display mt-3 text-xl font-semibold tracking-tight">
            RAG + LLM
          </p>
          <div className="mt-4 space-y-1.5">
            <span className="block h-1 w-full bg-background/20" />
            <span className="block h-1 w-4/5 bg-background/20" />
            <span className="block h-1 w-2/3 bg-accent" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SimulationVisual() {
  return (
    <div className="relative h-full min-h-[15rem] overflow-hidden bg-[hsl(30_18%_91%)] md:min-h-[18rem]">
      <div className="absolute inset-x-[12%] bottom-0 top-[16%]">
        {[0, 1, 2, 3, 4].map(index => (
          <div
            key={index}
            className="absolute rounded-[50%] border border-foreground/10 bg-background/45 blur-[1px]"
            style={{
              width: `${42 + index * 9}%`,
              height: `${24 + index * 7}%`,
              left: `${28 - index * 5}%`,
              bottom: `${index * 12}%`,
              transform: `rotate(${index % 2 === 0 ? -8 : 11}deg)`,
              opacity: 0.9 - index * 0.11,
            }}
          />
        ))}
      </div>
      <div className="absolute left-5 top-5 border-l-2 border-accent pl-3">
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
          DL upsampling
        </p>
        <p className="font-display mt-1 text-lg font-semibold text-foreground">
          Low → high resolution
        </p>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-1.5">
        {['PyTorch', 'CUDA', 'GPU'].map(label => (
          <span
            key={label}
            className="border border-foreground/12 bg-background/85 px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-foreground"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkVisual({ visual }: Pick<SelectedWork, 'visual'>) {
  return visual === 'orchestration' ? (
    <OrchestrationVisual />
  ) : (
    <SimulationVisual />
  );
}

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
            <article className="grid gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center md:gap-10 lg:gap-12">
              <div
                className={`overflow-hidden rounded-sm border border-foreground/10 shadow-[0_10px_30px_-18px_rgba(20,16,12,0.22)] ${index % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <WorkVisual visual={work.visual} />
              </div>

              <div className="min-w-0">
                <p className="type-meta text-muted-foreground">
                  <span className="text-accent">{work.status}</span>
                  <span className="text-muted-foreground/50" aria-hidden>
                    {' '}
                    ·{' '}
                  </span>
                  <span className="tabular-nums">{work.period}</span>
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
                <Link
                  href={`/projects/${work.slug}`}
                  className="group mt-6 inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-foreground transition-colors hover:text-accent"
                >
                  {work.company} role details
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

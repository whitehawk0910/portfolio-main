export const Education = () => {
  return (
    <section className="mb-16 md:mb-20" aria-labelledby="education-heading">
      <div className="mb-10 flex items-baseline gap-4">
        <span className="type-numeral shrink-0 text-[1.6rem] text-accent">
          05
        </span>
        <h2
          id="education-heading"
          className="font-display flex items-baseline gap-3 text-[1.875rem] font-bold tracking-tight text-foreground md:text-[2.5rem]"
          style={{ letterSpacing: '-0.03em' }}
        >
          Education
          <span className="block h-px flex-1 self-center bg-foreground/15" />
        </h2>
      </div>

      <div className="border-t border-foreground/15">
        <div className="grid gap-3 border-b border-foreground/15 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8 sm:py-7">
          <div className="min-w-0">
            <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Ramaiah Institute of Technology, Bengaluru
            </h3>
            <p className="font-display mt-1 text-base italic font-light text-accent">
              Bachelor of Engineering · CGPA 8.6
            </p>
          </div>
          <time className="self-start whitespace-nowrap font-mono text-xs text-muted-foreground tabular-nums sm:self-baseline">
            2020 – 2024
          </time>
        </div>
      </div>
    </section>
  );
};

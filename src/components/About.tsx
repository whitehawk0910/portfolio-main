const ACHIEVEMENTS = [
  'Top 3 team at ACCS, hosted at IISc Bengaluru (2022).',
  'Led the college team to qualify among four teams for Formula Bharat (2022).',
  'Top 10% on LeetCode and Codeforces Specialist (2024).',
];

export const About = () => (
  <section
    className="mb-16 md:mb-20 section-rise"
    aria-labelledby="about-heading"
  >
    <div className="mb-10 flex items-baseline gap-4">
      <span className="type-numeral shrink-0 text-[1.6rem] text-accent">
        01
      </span>

      <h2
        id="about-heading"
        className="font-display flex items-baseline gap-3 text-[1.875rem] font-bold tracking-tight text-foreground md:text-[2.5rem]"
        style={{ letterSpacing: '-0.03em' }}
      >
        About
        <span className="block h-px flex-1 self-center bg-foreground/15" />
      </h2>
    </div>

    <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12 lg:gap-14">
      {/* About copy */}
      <div className="min-w-0 space-y-4 text-base leading-relaxed text-muted-foreground">
        <p className="text-pretty">
          I&apos;m a software engineer at{' '}
          <span className="font-medium text-foreground">Dentsu</span>, building
          production GenAI and backend systems. My earlier work includes
          GPU-based deep learning at Samsung, backend engineering at Effigo
          Global, and quantitative algorithm development for multiple clients
          across financial-market use cases.
        </p>

        <p className="text-pretty">
          My research focuses on{' '}
          <span className="font-medium text-foreground">
            AI systems and quantitative finance
          </span>{' '}
          — efficient inference, mixed-precision computing, GPU optimization,
          statistical modeling, market microstructure, and factor research.
        </p>

        <p className="text-pretty">
          I work at the intersection of{' '}
          <span className="font-medium text-foreground">
            research and engineering
          </span>
          , turning models and quantitative ideas into benchmarked,
          reproducible, production-ready systems.
        </p>
      </div>

      {/* Achievements */}
      <ul className="divide-y divide-line/80 border-y border-line/80">
        {ACHIEVEMENTS.map((achievement, index) => (
          <li
            key={achievement}
            className="flex gap-4 py-3.5 text-sm leading-relaxed text-muted-foreground"
          >
            <span className="type-numeral shrink-0 pt-[2px] text-[1.1rem] leading-none text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>

            <span className="min-w-0 text-pretty">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
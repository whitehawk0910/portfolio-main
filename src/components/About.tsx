const ACHIEVEMENTS = [
  'Top 3 team at ACCS by Advanced Communication & Computing, headquartered at IISc Bengaluru (2022).',
  'Led the college team to be among four teams qualifying for Formula Bharat (2022).',
  'Ranked in the top 6% of one million JEE Main candidates (2019).',
  'Top 10% on LeetCode and Specialist on Codeforces (2024).',
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
      <div className="min-w-0 space-y-4 text-base leading-relaxed text-muted-foreground">
        <p className="text-pretty">
          I&apos;m a software engineer at{' '}
          <span className="font-medium text-foreground">Dentsu</span>, building
          GenAI-backed services and backend systems with Java, Spring Boot, and
          Python.
        </p>
        <p className="text-pretty">
          My work spans RAG pipelines, LLM orchestration, enterprise data
          integration, REST APIs, and production automation. Previously, I
          worked on GPU-based deep learning at Samsung, backend delivery at
          Effigo Global, and predictive algorithms for Healthflex.
        </p>
      </div>

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

export const BookCall = () => (
  <section className="mb-16" aria-labelledby="contact-heading">
    <div className="mb-6 flex items-baseline gap-4">
      <span className="type-numeral shrink-0 text-[1.6rem] text-accent">
        05
      </span>
      <h2
        id="contact-heading"
        className="font-display flex items-baseline gap-3 text-[1.875rem] font-bold tracking-tight text-foreground md:text-[2.5rem]"
        style={{ letterSpacing: '-0.03em' }}
      >
        Contact
        <span className="block h-px flex-1 self-center bg-foreground/15" />
      </h2>
    </div>
    <div className="border-y border-line/80 py-8 md:py-10">
      <p className="type-meta text-muted-foreground/80">Get in touch</p>
      <p className="font-display mt-3 max-w-xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Let&apos;s talk about backend engineering, GenAI, or applied machine
        learning.
      </p>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs">
        <a
          href="mailto:piyushofficial09@gmail.com"
          className="text-foreground underline-offset-4 hover:underline"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/piyush-kumar-2886001aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline-offset-4 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/whitehawk0910"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline-offset-4 hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
);

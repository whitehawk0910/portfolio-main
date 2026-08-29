'use client';

import dynamic from 'next/dynamic';

const CobeGlobe = dynamic(() => import('@/components/CobeGlobe'), {
  ssr: false,
  loading: () => (
    <div
      className="aspect-square w-full animate-pulse rounded-full bg-canvas-muted/70"
      aria-hidden
    />
  ),
});

const markers = [
  {
    location: [12.9716, 77.5946] as [number, number],
    size: 0.09,
  },
];

const roles = [
  { company: 'Dentsu', code: 'DE', className: 'left-[2%] top-[12%]' },
  { company: 'Samsung', code: 'SA', className: 'right-[1%] top-[24%]' },
  { company: 'Effigo', code: 'EG', className: 'bottom-[18%] left-[1%]' },
  { company: 'Healthflex', code: 'HF', className: 'bottom-[8%] right-[3%]' },
];

export function ExperienceGlobe() {
  return (
    <div
      className="mb-12 grid items-center gap-8 md:mb-14 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-10 lg:gap-12"
      aria-label="Career overview across four engineering roles"
    >
      <div className="min-w-0 md:pr-4">
        <p
          className="font-display max-w-[18rem] text-[1.35rem] italic leading-[1.35] tracking-tight text-foreground/80 sm:text-[1.5rem] md:text-[1.625rem]"
          style={{ fontVariationSettings: "'opsz' 72, 'SOFT' 100" }}
        >
          From GPU research to production GenAI systems. Four roles, one
          engineering path.
        </p>
        <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">
          Bengaluru is the only location plotted. Company labels summarize the
          verified experience listed below.
        </p>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-[20rem] md:mx-0 md:max-w-[23rem] md:justify-self-end lg:max-w-[25rem]">
        <CobeGlobe markers={markers} initialPhi={-1.3} />
        {roles.map(role => (
          <div
            key={role.company}
            className={`absolute ${role.className} flex items-center gap-2 rounded-sm border border-line/90 bg-background/92 px-2.5 py-2 shadow-[0_8px_24px_-16px_rgba(47,52,55,0.3)] backdrop-blur-sm`}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-foreground font-mono text-[9px] font-semibold tracking-wide text-background">
              {role.code}
            </span>
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-foreground">
              {role.company}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

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
    location: [35.6762, 139.6503] as [number, number],
    size: 0.075,
    id: 'dentsu',
  },
  {
    location: [37.5665, 126.978] as [number, number],
    size: 0.07,
    id: 'samsung',
  },
  {
    location: [12.9716, 77.5946] as [number, number],
    size: 0.065,
    id: 'effigo',
  },
  {
    location: [37.7749, -122.4194] as [number, number],
    size: 0.065,
    id: 'healthflex',
  },
];

const origin = [12.9716, 77.5946] as [number, number];
const arcs = markers
  .filter(marker => marker.id !== 'effigo')
  .map(marker => ({
    from: origin,
    to: marker.location,
    id: `career-${marker.id}`,
  }));

const roles = [
  { id: 'dentsu', company: 'Dentsu', code: 'DE' },
  { id: 'samsung', company: 'Samsung', code: 'SA' },
  { id: 'effigo', company: 'Effigo', code: 'EG' },
  { id: 'healthflex', company: 'Freelance', code: 'HF' },
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
          Drag to rotate. The animated arcs form a visual career constellation;
          the verified roles and dates are listed below.
        </p>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-[20rem] md:mx-0 md:max-w-[23rem] md:justify-self-end lg:max-w-[25rem]">
        <CobeGlobe
          markers={markers}
          arcs={arcs}
          arcColor={[0.72, 0.32, 0.18]}
          initialPhi={-1.3}
        />
        {roles.map(role => (
          <div
            key={role.company}
            className="absolute flex items-center gap-2 rounded-sm border border-line/90 bg-background/92 px-2.5 py-2 shadow-[0_8px_24px_-16px_rgba(47,52,55,0.3)] backdrop-blur-sm transition-[opacity,filter,transform] duration-300"
            style={
              {
                positionAnchor: `--cobe-${role.id}`,
                bottom: 'anchor(top)',
                left: 'anchor(center)',
                opacity: `var(--cobe-visible-${role.id}, 0)`,
                filter: `blur(calc((1 - var(--cobe-visible-${role.id}, 0)) * 8px))`,
                transform: `translate(-50%, -0.5rem) scale(calc(0.88 + var(--cobe-visible-${role.id}, 0) * 0.12))`,
              } as React.CSSProperties
            }
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

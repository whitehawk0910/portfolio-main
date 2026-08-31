import type { SelectedWork } from '@/data/selectedWork';

const visualCopy: Record<
  SelectedWork['visual'],
  { eyebrow: string; title: string; nodes: string[] }
> = {
  genai: {
    eyebrow: 'Context pipeline',
    title: 'RAG + LLM',
    nodes: ['Enterprise data', 'Identity', 'Response'],
  },
  monitoring: {
    eyebrow: 'Live operations',
    title: '500+ flows',
    nodes: ['Healthy 482', 'Review 13', 'Alert 05'],
  },
  quant: {
    eyebrow: 'Research loop',
    title: 'Signal lab',
    nodes: ['Factors', 'Regimes', 'Backtest'],
  },
  saas: {
    eyebrow: 'Tenant workspace',
    title: 'Workflow OS',
    nodes: ['Trigger', 'Process', 'Notify'],
  },
  simulation: {
    eyebrow: 'DL upsampling',
    title: 'Low → high res',
    nodes: ['PyTorch', 'CUDA', 'GPU'],
  },
};

export function SelectedWorkVisual({ visual }: Pick<SelectedWork, 'visual'>) {
  const copy = visualCopy[visual];

  return (
    <div
      className="group/visual relative flex h-full min-h-[15rem] items-center justify-center overflow-hidden bg-[hsl(38_28%_94%)] p-7 md:min-h-[18rem]"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-55"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground) / 0.055) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.055) 1px, transparent 1px)',
          backgroundSize: visual === 'quant' ? '36px 36px' : '28px 28px',
        }}
      />

      {visual === 'simulation' && (
        <div className="absolute inset-x-[10%] bottom-[-8%] top-[28%]">
          {[0, 1, 2, 3].map(index => (
            <span
              key={index}
              className="absolute rounded-[50%] border border-foreground/10 bg-background/50 transition-transform duration-500 group-hover/visual:-translate-y-1"
              style={{
                inset: `${index * 11}% ${index * 8}%`,
                transform: `rotate(${index % 2 ? 8 : -7}deg)`,
              }}
            />
          ))}
        </div>
      )}

      {visual === 'quant' && (
        <svg
          className="absolute inset-0 h-full w-full opacity-35"
          viewBox="0 0 500 280"
        >
          <polyline
            points="0,210 70,188 120,202 175,145 225,158 280,92 340,115 395,62 500,78"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      )}

      <div className="relative w-full max-w-[23rem] border border-foreground/15 bg-background/90 p-4 shadow-[0_16px_35px_-24px_rgba(47,52,55,0.5)] transition-transform duration-300 group-hover/visual:-translate-y-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
              {copy.eyebrow}
            </p>
            <p className="font-display mt-2 text-xl font-semibold tracking-tight text-foreground">
              {copy.title}
            </p>
          </div>
          <span className="mt-1 h-2.5 w-2.5 bg-accent shadow-[0_0_0_5px_hsl(var(--accent)/0.12)]" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-1.5">
          {copy.nodes.map((node, index) => (
            <div
              key={node}
              className={`border border-foreground/10 px-2 py-2.5 font-mono text-[8px] uppercase tracking-[0.08em] ${visual === 'monitoring' && index === 2 ? 'bg-accent text-accent-foreground' : 'bg-card text-foreground/75'}`}
            >
              <span className="mb-2 block h-px bg-foreground/15" />
              {node}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

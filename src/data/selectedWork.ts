export type SelectedWork = {
  slug: string;
  company: string;
  name: string;
  tagline: string;
  summary: string;
  period?: string;
  status: string;
  stack: string[];
  visual: 'genai' | 'monitoring' | 'quant' | 'saas' | 'simulation';
};

export const selectedWork: SelectedWork[] = [
  {
    slug: 'dentsu-genai',
    company: 'Dentsu',
    name: 'Enterprise GenAI Orchestration',
    tagline: 'Context-aware AI services for production workflows',
    summary:
      'Backend services connecting LLMs, RAG pipelines, enterprise data sources, and microservices for summarization, contextual insights, and workflow automation.',
    period: '2026 — Present',
    status: 'Production work',
    stack: ['Python', 'Java', 'Spring Boot', 'RAG', 'REST APIs'],
    visual: 'genai',
  },

  {
    slug: 'dentsu-aep-automation',
    company: 'Dentsu',
    name: 'AEP Dataflow Monitoring Automation',
    tagline: 'Automated observability for 500+ enterprise dataflows',
    summary:
      'Designed an automated monitoring workflow across 500+ Adobe Experience Platform dataflows using Workfront Fusion, replacing repetitive daily checks with centralized health monitoring, exception detection, and email alerting. The system surfaces failed or degraded dataflows automatically and reduced manual operational effort by approximately 200 hours per month.',
    period: '2024-2025',
    status: 'Production automation',
    stack: [
      'Adobe Experience Platform',
      'Workfront Fusion',
      'AEP APIs',
      'Automation',
      'Monitoring',
    ],
    visual: 'monitoring',
  },

  {
    slug: 'quant-research-platform',
    company: 'Confidential US Client',
    name: 'AI-Assisted Quantitative Research Platform',
    tagline:
      'Systematic research across market data, ML signals, and portfolio models',
    summary:
      'Developed quantitative research infrastructure and proprietary strategy components for a US-based financial-markets client. The research combined factor modeling, statistical and time-series methods, machine learning, regime analysis, and historical simulation to evaluate systematic signals and portfolio behaviour. Designed the surrounding experimentation and backtesting workflow while keeping client-specific alpha logic, datasets, and execution rules confidential.',
    period: '2024',
    status: 'Confidential client work',
    stack: [
      'Python',
      'PyTorch',
      'XGBoost',
      'Factor Modeling',
      'Time-Series',
      'Backtesting',
      'Portfolio Research',
    ],
    visual: 'quant',
  },
  {
    slug: 'saas-workflow-platform',
    company: 'Independent Project',
    name: 'Multi-Tenant Workflow SaaS',
    tagline:
      'Production-grade SaaS architecture for automated business workflows',
    summary:
      'Built a multi-tenant B2B SaaS platform for configurable business workflows, combining role-based access control, tenant isolation, workflow execution, background processing, analytics, external API integrations, notifications, and subscription-aware product features. Designed the full stack from responsive web interfaces and service APIs to PostgreSQL data models, Redis-backed processing, containerized deployment, and cloud infrastructure.',
    status: 'Independent engineering project',
    stack: [
      'Next.js',
      'TypeScript',
      'Spring Boot',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Docker',
      'AWS',
    ],
    visual: 'saas',
  },
  {
    slug: 'samsung',
    company: 'Samsung',
    name: 'High-resolution Smoke Simulation',
    tagline: 'Deep-learning upsampling on GPU environments',
    summary:
      'Deep-learning models and optimized data pipelines for high-resolution smoke simulation, supported by large-scale GPU training experiments.',
    period: 'Dec 2022 — Aug 2023',
    status: 'R&D internship',
    stack: ['Python', 'PyTorch', 'CUDA', 'GPU Computing', 'Data Pipelines'],
    visual: 'simulation',
  },
];

export function getSelectedWorkBySlug(slug: string) {
  return selectedWork.find(work => work.slug === slug);
}

export function getSelectedWorkSlugs() {
  return selectedWork.map(work => work.slug);
}

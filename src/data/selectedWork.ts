export type SelectedWork = {
  slug: string;
  company: string;
  name: string;
  tagline: string;
  summary: string;
  period: string;
  status: string;
  stack: string[];
  visual: 'orchestration' | 'simulation';
};

export const selectedWork: SelectedWork[] = [
  {
    slug: 'dentsu',
    company: 'Dentsu',
    name: 'Enterprise GenAI Orchestration',
    tagline: 'Context-aware AI services for production workflows',
    summary:
      'Backend services that connect LLMs, RAG pipelines, enterprise data sources, and microservices for summarization, contextual insights, and workflow automation.',
    period: 'Sep 2024 — Present',
    status: 'Production work',
    stack: ['Python', 'Java', 'Spring Boot', 'RAG', 'REST APIs'],
    visual: 'orchestration',
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

export type ExperienceTech = { label: string; icon?: string };

export type ExperienceContribution = {
  title: string;
  description: string;
  bounty?: string;
  badge?: string;
  link?: string;
  pullRequests?: { title: string; link: string }[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description?: string;
  logo: string;
  link?: string;
  totalPRs?: string;
  totalBounties?: string;
  techStack: ExperienceTech[];
  contributions: ExperienceContribution[];
  badge?: string;
  highlights?: string[];
  isCurrent?: boolean;
  featured?: boolean;
  reposPrivate?: boolean;
  compensationDetailsImage?: string;
  mergedPRsRepo?: string;
  careerMergedPRs?: string;
  location?: string;
};

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export const experiences: Experience[] = [
  {
    company: 'Dentsu',
    role: 'Software Engineer',
    period: 'Sep 2024 — Present',
    description:
      'Building GenAI-backed services and scalable backend systems for enterprise workflows.',
    logo: 'DE',
    isCurrent: true,
    featured: true,
    techStack: [
      { label: 'Java', icon: `${DEVICON}/java/java-original.svg` },
      { label: 'Spring Boot', icon: `${DEVICON}/spring/spring-original.svg` },
      { label: 'Python', icon: `${DEVICON}/python/python-original.svg` },
      { label: 'GenAI' },
      { label: 'RAG' },
      { label: 'REST APIs' },
    ],
    highlights: [
      'Designed GenAI backend services for automated summarization, contextual insights, and enterprise workflow automation.',
      'Built AI orchestration workflows connecting LLM services, enterprise data sources, and backend microservices.',
      'Developed REST services in Python, Java, and Spring Boot for distributed enterprise systems.',
      'Designed schemas, retrieval logic, and identity-resolution workflows for LLM and analytics pipelines.',
    ],
    contributions: [],
    reposPrivate: true,
  },
  {
    company: 'Freelance',
    role: 'Algorithm & Backend Consultant',
    period: 'Aug 2024 — Sep 2024',
    description:
      'Designed machine-learning-driven predictive algorithms for backend decision support.',
    logo: 'HF',
    techStack: [{ label: 'Machine Learning' }, { label: 'Algorithms' }],
    highlights: [
      'Designed predictive algorithms to improve decision-making accuracy and backend intelligence.',
    ],
    contributions: [],
    reposPrivate: true,
  },
  {
    company: 'Effigo Global',
    role: 'Software Development Intern',
    period: 'Jan 2024 — Apr 2024',
    description:
      'Developed backend components, deployment automation, and containerized services.',
    logo: 'EG',
    techStack: [
      { label: 'Java', icon: `${DEVICON}/java/java-original.svg` },
      { label: 'Spring Boot', icon: `${DEVICON}/spring/spring-original.svg` },
      { label: 'React', icon: `${DEVICON}/react/react-original.svg` },
      {
        label: 'Kubernetes',
        icon: `${DEVICON}/kubernetes/kubernetes-plain.svg`,
      },
      { label: 'CI/CD' },
    ],
    highlights: [
      'Developed Spring Boot components supporting data pipelines and analytics dashboards.',
      'Implemented CI/CD automation and containerized microservices with Kubernetes.',
    ],
    contributions: [],
    reposPrivate: true,
  },
  {
    company: 'Samsung',
    role: 'Research & Development Intern',
    period: 'Dec 2022 — Aug 2023',
    description:
      'Worked on deep-learning models and GPU training pipelines for high-resolution smoke simulation.',
    logo: 'SA',
    techStack: [
      { label: 'Python', icon: `${DEVICON}/python/python-original.svg` },
      { label: 'PyTorch', icon: `${DEVICON}/pytorch/pytorch-original.svg` },
      { label: 'CUDA' },
      { label: 'GPU Computing' },
      { label: 'Data Pipelines' },
    ],
    highlights: [
      'Implemented deep-learning models for high-resolution smoke simulation and upsampling.',
      'Optimized data pipelines and ran large-scale training experiments in GPU environments.',
    ],
    contributions: [],
    reposPrivate: true,
  },
];

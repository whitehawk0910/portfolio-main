'use client';

import Image from 'next/image';
import {
  BarChart3,
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  Gauge,
  Layers3,
  MonitorSmartphone,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

type SkillIcon = string | LucideIcon;

type Skill = {
  name: string;
  icon?: SkillIcon;
};

type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
};

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    icon: Code2,
    skills: [
      { name: 'Python', icon: `${DEVICON}/python/python-original.svg` },
      { name: 'C/C++', icon: `${DEVICON}/cplusplus/cplusplus-original.svg` },
      { name: 'Java', icon: `${DEVICON}/java/java-original.svg` },
      {
        name: 'JavaScript',
        icon: `${DEVICON}/javascript/javascript-original.svg`,
      },
    ],
  },

  {
    title: 'AI / ML',
    icon: BrainCircuit,
    skills: [
      { name: 'PyTorch', icon: `${DEVICON}/pytorch/pytorch-original.svg` },
      { name: 'Hugging Face', icon: Sparkles },
      { name: 'Scikit-learn', icon: Bot },
      { name: 'RAG', icon: Workflow },
      { name: 'LangChain', icon: Layers3 },
    ],
  },

  {
    title: 'AI Systems / Research',
    icon: Terminal,
    skills: [
      { name: 'Mixed-Precision Inference', icon: Gauge },
      { name: 'Quantization', icon: Cpu },
      { name: 'TensorRT', icon: Sparkles },
      { name: 'ONNX Runtime', icon: Bot },
      { name: 'GPU Optimization', icon: Cpu },
      { name: 'torch.compile', icon: Code2 },
    ],
  },

  {
    title: 'Quant Research',
    icon: Database,
    skills: [
      { name: 'Factor Modeling', icon: BarChart3 },
      { name: 'Statistical Arbitrage', icon: Gauge },
      { name: 'Market Microstructure', icon: Database },
      { name: 'Time-Series Econometrics', icon: BarChart3 },
      { name: 'Portfolio Optimization', icon: ShieldCheck },
      { name: 'Alpha Research', icon: BrainCircuit },
    ],
  },

  {
    title: 'Backend / Data',
    icon: ServerCog,
    skills: [
      { name: 'Spring Boot', icon: `${DEVICON}/spring/spring-original.svg` },
      { name: 'FastAPI', icon: `${DEVICON}/fastapi/fastapi-original.svg` },
      { name: 'REST APIs', icon: ServerCog },
      {
        name: 'PostgreSQL',
        icon: `${DEVICON}/postgresql/postgresql-original.svg`,
      },
      { name: 'Redis', icon: `${DEVICON}/redis/redis-original.svg` },
    ],
  },

  {
    title: 'DevOps / Cloud',
    icon: Cloud,
    skills: [
      { name: 'Docker', icon: `${DEVICON}/docker/docker-original.svg` },
      {
        name: 'Kubernetes',
        icon: `${DEVICON}/kubernetes/kubernetes-plain.svg`,
      },
      { name: 'Azure', icon: Cloud },
      { name: 'Linux', icon: `${DEVICON}/linux/linux-original.svg` },
      { name: 'Jenkins', icon: `${DEVICON}/jenkins/jenkins-original.svg` },
    ],
  },

  {
    title: 'Enterprise / MarTech',
    icon: MonitorSmartphone,
    skills: [
      { name: 'Adobe Experience Platform', icon: MonitorSmartphone },
      { name: 'Adobe Journey Optimizer', icon: Sparkles },
      { name: 'Workfront Fusion', icon: Workflow },
    ],
  },
];

function SkillPill({ skill }: { skill: Skill }) {
  const Icon = typeof skill.icon === 'string' ? null : skill.icon ?? null;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-line/80 bg-card px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-foreground/85 transition-colors hover:border-foreground/30 hover:bg-canvas-muted">
      {skill.icon &&
        (typeof skill.icon === 'string' ? (
          <Image
            src={skill.icon}
            alt=""
            width={14}
            height={14}
            className="h-3.5 w-3.5"
            unoptimized
          />
        ) : Icon ? (
          <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
        ) : null)}

      {skill.name}
    </span>
  );
}

export const Skills = () => (
  <section className="mb-16 md:mb-20" aria-labelledby="skills-heading">
    <div className="mb-10 flex items-baseline gap-4">
      <span className="type-numeral shrink-0 text-[1.6rem] text-accent">
        06
      </span>

      <h2
        id="skills-heading"
        className="font-display flex items-baseline gap-3 text-[1.875rem] font-bold tracking-tight text-foreground md:text-[2.5rem]"
        style={{ letterSpacing: '-0.03em' }}
      >
        Stack
        <span className="block h-px flex-1 self-center bg-foreground/15" />
      </h2>
    </div>

    <div className="border-t border-foreground/15">
      {SKILL_CATEGORIES.map((category, index) => {
        const CategoryIcon = category.icon;

        return (
          <div
            key={category.title}
            className="grid gap-3 border-b border-foreground/15 py-6 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-8 sm:py-7"
          >
            <div className="flex items-center gap-3 text-foreground">
              <span className="type-numeral text-base text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>

              <CategoryIcon
                className="h-3.5 w-3.5 shrink-0 text-foreground/55"
                strokeWidth={1.5}
              />

              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em]">
                {category.title}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {category.skills.map(skill => (
                <SkillPill key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
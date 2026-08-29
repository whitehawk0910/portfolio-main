'use client';

import Image from 'next/image';
import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  MonitorSmartphone,
  ServerCog,
  Terminal,
  type LucideIcon,
} from 'lucide-react';

type Skill = { name: string; icon?: string };
type SkillCategory = { title: string; icon: LucideIcon; skills: Skill[] };

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    icon: Code2,
    skills: [
      { name: 'Java', icon: `${DEVICON}/java/java-original.svg` },
      {
        name: 'JavaScript',
        icon: `${DEVICON}/javascript/javascript-original.svg`,
      },
      { name: 'Python', icon: `${DEVICON}/python/python-original.svg` },
      { name: 'C/C++', icon: `${DEVICON}/cplusplus/cplusplus-original.svg` },
    ],
  },
  {
    title: 'Backend',
    icon: ServerCog,
    skills: [
      { name: 'Spring Boot', icon: `${DEVICON}/spring/spring-original.svg` },
      { name: 'NestJS', icon: `${DEVICON}/nestjs/nestjs-original.svg` },
      { name: 'Express.js', icon: `${DEVICON}/express/express-original.svg` },
      { name: 'REST APIs' },
    ],
  },
  {
    title: 'Frontend',
    icon: MonitorSmartphone,
    skills: [
      { name: 'React.js', icon: `${DEVICON}/react/react-original.svg` },
      { name: 'Next.js', icon: `${DEVICON}/nextjs/nextjs-original.svg` },
    ],
  },
  {
    title: 'AI / ML',
    icon: BrainCircuit,
    skills: [
      { name: 'PyTorch', icon: `${DEVICON}/pytorch/pytorch-original.svg` },
      {
        name: 'TensorFlow',
        icon: `${DEVICON}/tensorflow/tensorflow-original.svg`,
      },
      { name: 'Scikit-learn' },
      { name: 'Hugging Face' },
      { name: 'LangChain' },
      { name: 'RAG' },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      {
        name: 'PostgreSQL',
        icon: `${DEVICON}/postgresql/postgresql-original.svg`,
      },
      { name: 'MySQL', icon: `${DEVICON}/mysql/mysql-original.svg` },
      { name: 'MongoDB', icon: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: 'Redis', icon: `${DEVICON}/redis/redis-original.svg` },
    ],
  },
  {
    title: 'DevOps / MLOps',
    icon: Terminal,
    skills: [
      { name: 'Docker', icon: `${DEVICON}/docker/docker-original.svg` },
      {
        name: 'Kubernetes',
        icon: `${DEVICON}/kubernetes/kubernetes-plain.svg`,
      },
      { name: 'Jenkins', icon: `${DEVICON}/jenkins/jenkins-original.svg` },
    ],
  },
  {
    title: 'Cloud',
    icon: Cloud,
    skills: [{ name: 'AWS EC2' }, { name: 'AWS S3' }, { name: 'AWS Lambda' }],
  },
];

function SkillPill({ skill }: { skill: Skill }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-line/80 bg-card px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-foreground/85 transition-colors hover:border-foreground/30 hover:bg-canvas-muted">
      {skill.icon && (
        <Image
          src={skill.icon}
          alt=""
          width={14}
          height={14}
          className="h-3.5 w-3.5"
          unoptimized
        />
      )}
      {skill.name}
    </span>
  );
}

export const Skills = () => (
  <section className="mb-16 md:mb-20" aria-labelledby="skills-heading">
    <div className="mb-10 flex items-baseline gap-4">
      <span className="type-numeral shrink-0 text-[1.6rem] text-accent">
        05
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

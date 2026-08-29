import { experiences } from '@/data/experiences';

export const EXPERIENCE_STATS = {
  roleCount: '4',
} as const;

export type ExperienceEntry = (typeof experiences)[number];

export function isCurrentRole(exp: ExperienceEntry) {
  return 'isCurrent' in exp && exp.isCurrent === true;
}

export function isFeaturedRole(exp: ExperienceEntry) {
  return 'featured' in exp && exp.featured === true;
}

export function partitionExperiences() {
  const current = experiences.filter(isCurrentRole);
  const recent = experiences.filter(exp => !isCurrentRole(exp));
  const openSource: typeof experiences = [];

  return { current, recent, openSource };
}

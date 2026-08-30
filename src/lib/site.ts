export const profile = {
  name: 'Piyush Kumar',
  domain: 'https://piyush45.vercel.app',
  headline: 'Software Engineer | AI Systems | Quantitative Research',
  description:
    'Piyush Kumar is a software engineer working on AI systems, quantitative research, GPU computing and backend engineering. Explore his research, projects, publications and engineering work.',
  email: 'piyushofficial09@gmail.com',
  image: '/hero-cover.jpg',
  profiles: {
    github: 'https://github.com/whitehawk0910',
    linkedin: 'https://www.linkedin.com/in/piyush-kumar-2886001aa/',
    // Add verified URLs when available; never invent identity links.
    orcid: null,
    googleScholar: null,
    arxiv: null,
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Generative AI',
    'Large Language Models',
    'Retrieval-Augmented Generation',
    'Quantitative Research',
    'Quantitative Finance',
    'GPU Computing',
    'Mixed-Precision Deep Learning',
    'Machine Learning',
    'Backend Engineering',
    'Java',
    'Spring Boot',
    'Python',
  ],
} as const;

export const SITE_URL = profile.domain;
export const SITE_NAME = profile.name;
export const SITE_LAST_UPDATED = '2026-08-30';
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const profileSameAs: string[] = Object.values(profile.profiles).flatMap(
  url => (url ? [url] : [])
);

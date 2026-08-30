export type ResearchEntry = {
  slug: string;
  title: string;
  author: string;
  summary?: string;
  researchAreas: string[];
  technologies: string[];
  paperUrl?: string;
  arxivUrl?: string;
  githubUrl?: string;
  status?: string;
  publicationVenue?: string;
  relatedProjectSlugs?: string[];
  relatedArticleSlugs?: string[];
};

// Add only verified work. The structure supports entries such as
// “Compiler- and Constraint-Aware Mixed-Precision Inference Optimization on
// Consumer GPUs” without asserting a status, venue, or publication claim.
export const researchEntries: ResearchEntry[] = [];

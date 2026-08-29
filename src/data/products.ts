export type ProductStackItem = {
  label: string;
  icon?: string;
  /** Invert monochrome logos (e.g. Next.js, Vercel) on light backgrounds. */
  invert?: boolean;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  year: string;
  status: string;
  liveUrl: string;
  githubUrl: string;
  coverImage: string;
  stack: ProductStackItem[];
  problem: string;
  approach: string;
  outcomes: string[];
};

// The attached resume does not include standalone personal projects.
// Keep the section data-driven and empty until verified projects are supplied.
export const products: Product[] = [];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductSlugs(): string[] {
  return products.map(p => p.slug);
}

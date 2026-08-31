import type { MetadataRoute } from 'next';
import { getProductSlugs } from '@/data/products';
import { getSelectedWorkSlugs } from '@/data/selectedWork';
import { getExperienceSlugs } from '@/lib/experienceSlug';
import { SITE_LAST_UPDATED, SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const experienceSlugs = getExperienceSlugs();
  const productSlugs = getProductSlugs();
  const selectedWorkSlugs = getSelectedWorkSlugs();
  const siteLastModified = new Date(SITE_LAST_UPDATED);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: siteLastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...['about', 'research', 'articles', 'blog', 'resume'].map(path => ({
      url: `${SITE_URL}/${path}`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: path === 'about' || path === 'research' ? 0.8 : 0.7,
    })),
    {
      url: `${SITE_URL}/llms.txt`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  const experienceRoutes: MetadataRoute.Sitemap = experienceSlugs.map(slug => ({
    url: `${SITE_URL}/projects/${slug}`,
    lastModified: siteLastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const workRoutes: MetadataRoute.Sitemap = productSlugs.map(slug => ({
    url: `${SITE_URL}/work/${slug}`,
    lastModified: siteLastModified,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const selectedWorkRoutes: MetadataRoute.Sitemap = selectedWorkSlugs.map(
    slug => ({
      url: `${SITE_URL}/selected-work/${slug}`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    })
  );

  // Article detail routes are canonicalized under /blog until their URL model
  // is migrated; the /articles route is the semantic index.

  return [
    ...staticRoutes,
    ...experienceRoutes,
    ...workRoutes,
    ...selectedWorkRoutes,
  ];
}

import { getBlogPost } from '@/data/blogPosts';
import {
  generateOgImage,
  ogImageContentType,
  ogImageSize,
} from '@/lib/og-image';

export const runtime = 'nodejs';
export const size = ogImageSize;
export const contentType = ogImageContentType;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { getBlogPosts } = await import('@/data/blogPosts');
  return getBlogPosts().map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return {
    alt: post ? `${post.title} — Piyush Kumar` : 'Blog post — Piyush Kumar',
  };
}

export default async function BlogPostOpenGraphImage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return generateOgImage({
      eyebrow: 'Writing',
      title: 'Post',
      titleItalic: 'not found',
      subtitle: 'This article may have moved or been removed.',
      body: 'Browse the rest of the writing archive.',
      stats: [],
      showPortrait: false,
      footer: 'piyush45.vercel.app/blog',
    });
  }

  const excerpt =
    post.excerpt.length > 120
      ? `${post.excerpt.slice(0, 117)}...`
      : post.excerpt;

  return generateOgImage({
    eyebrow: 'Writing',
    title: post.title,
    titleItalic: '',
    subtitle: `${post.date} · ${post.readTime}`,
    body: excerpt,
    stats: post.tags.slice(0, 3).map(tag => ({ value: tag, label: 'Tag' })),
    showPortrait: false,
    footer: `piyush45.vercel.app/blog/${slug}`,
  });
}

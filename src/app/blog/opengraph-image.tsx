import {
  generateOgImage,
  ogImageContentType,
  ogImageSize,
} from '@/lib/og-image';

export const runtime = 'nodejs';
export const alt = 'Writing — Piyush Kumar';
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function BlogOpenGraphImage() {
  return generateOgImage({
    eyebrow: 'Writing',
    title: 'Thoughts',
    titleItalic: '& learnings',
    subtitle: 'Backend engineering, GenAI, and applied machine learning.',
    body: 'Technical writing by Piyush Kumar.',
    stats: [
      { value: 'Java', label: 'Backend' },
      { value: 'RAG', label: 'GenAI' },
      { value: 'AWS', label: 'Cloud' },
    ],
    showPortrait: false,
    footer: 'piyushos.vercel.app/blog',
  });
}

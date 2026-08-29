import {
  generateOgImage,
  ogImageContentType,
  ogImageSize,
} from '@/lib/og-image';

export const runtime = 'nodejs';
export const alt =
  'Piyush Kumar — Software Engineer at Dentsu working on backend systems and GenAI.';
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function TwitterImage() {
  return generateOgImage();
}

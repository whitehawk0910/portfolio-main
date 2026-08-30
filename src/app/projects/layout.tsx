import type { Metadata } from 'next';
import { Chatbot } from '@/components/Chatbot';
import { SHOW_FLOATING_CHROME } from '@/lib/featureFlags';
import { createOgMetadata } from '@/lib/og';

export const metadata: Metadata = {
  ...createOgMetadata({
    title: 'Projects & Engineering Experience — Piyush Kumar',
    description:
      'Projects and software engineering experience by Piyush Kumar across AI systems, backend engineering and GPU computing.',
    url: '/projects',
  }),
  title: 'Projects & Engineering Experience',
  description:
    'Projects and software engineering experience by Piyush Kumar across AI systems, backend engineering and GPU computing.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      {SHOW_FLOATING_CHROME && <Chatbot />}
    </>
  );
}

import type { Metadata } from 'next';
import { Chatbot } from '@/components/Chatbot';
import { SHOW_FLOATING_CHROME } from '@/lib/featureFlags';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Software engineering experience across Dentsu, Samsung, Effigo Global, and Healthflex.',
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

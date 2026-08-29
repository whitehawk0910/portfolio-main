import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Resume for Piyush Kumar — software engineer focused on backend systems and GenAI.',
  openGraph: {
    title: 'Resume · Piyush Kumar',
    description:
      'Software engineering experience at Dentsu, Samsung, Effigo Global, and Healthflex.',
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Piyush Kumar',
    default: 'Projects',
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

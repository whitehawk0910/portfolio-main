'use client';
import { Github, Mail, ExternalLink, FileText, Linkedin } from 'lucide-react';
import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const AnimatedSocialLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  type IconComponent = React.ComponentType<{ className?: string }>;
  const links: {
    icon: IconComponent;
    href: string;
    label: string;
  }[] = [
    {
      icon: Github as IconComponent,
      href: 'https://github.com/whitehawk0910',
      label: 'GitHub',
    },
    {
      icon: Linkedin as IconComponent,
      href: 'https://www.linkedin.com/in/piyush-kumar-2886001aa/',
      label: 'LinkedIn',
    },
    {
      icon: ExternalLink as IconComponent,
      href: 'https://piyushos.vercel.app/',
      label: 'Portfolio',
    },
    {
      icon: Mail as IconComponent,
      href: 'mailto:piyushofficial09@gmail.com',
      label: 'Email',
    },
    {
      icon: FileText as IconComponent,
      href: '/piyush-kumar-resume.pdf',
      label: 'Resume',
    },
  ];

  return (
    <TooltipProvider delayDuration={100}>
      <div className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 md:bottom-6 md:left-6 md:translate-x-0">
        <div className="relative rounded-full border border-line/90 bg-background/95 px-3 py-2 shadow-[0_4px_20px_rgba(47,52,55,0.08)] backdrop-blur-sm md:px-4 md:py-2.5">
          <div className="relative z-10 flex items-center gap-2">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={link.label === 'Resume' ? '' : undefined}
                      aria-label={link.label}
                      className={`rounded-full p-2.5 text-muted-foreground transition hover:bg-muted hover:text-foreground active:scale-95 ${
                        hoveredIndex === index ? 'bg-muted text-foreground' : ''
                      }`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    align="center"
                    className="px-2 py-1 font-mono text-[11px]"
                  >
                    {link.label}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

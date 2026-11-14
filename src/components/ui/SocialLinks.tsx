import { Github, Linkedin } from 'lucide-react';
import { profile } from '@/data/portfolio';

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export default function SocialLinks({ className = '', iconClassName = 'h-5 w-5' }: SocialLinksProps) {
  const links = [
    { label: 'GitHub profile', href: profile.github, icon: Github },
    { label: 'LinkedIn profile', href: profile.linkedin, icon: Linkedin },
  ];

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="glass flex h-11 w-11 items-center justify-center rounded-lg text-slate-300 transition-colors duration-200 hover:border-[#D2BBA9] hover:text-electric-500"
          >
            <Icon className={iconClassName} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

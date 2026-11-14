import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  icon?: LucideIcon;
  download?: boolean;
  external?: boolean;
  ariaLabel?: string;
  className?: string;
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-dm text-sm font-medium transition-colors duration-200 active:scale-[0.98] focus-visible:ring-offset-navy-950';

const variants: Record<Variant, string> = {
  primary:
    'bg-electric-500 text-[#FFFEFC] shadow-sm shadow-[#2C2420]/10 hover:bg-electric-600',
  secondary:
    'glass text-[#2C2420] hover:border-[#D2BBA9] hover:text-electric-500',
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon: Icon,
  download,
  external,
  ariaLabel,
  className = '',
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {Icon && <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />}
    </>
  );

  if (href) {
    const isExternal = external ?? href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        download={download || undefined}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  );
}

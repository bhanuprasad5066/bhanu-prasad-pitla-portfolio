interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500 font-mono text-sm font-semibold tracking-tight text-navy-950 shadow-md shadow-electric-500/10 ${className}`}
      aria-hidden="true"
    >
      BP
    </span>
  );
}

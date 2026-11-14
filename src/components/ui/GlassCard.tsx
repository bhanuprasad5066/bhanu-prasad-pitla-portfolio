import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`glass rounded-xl shadow-lg shadow-black/15 transition-all duration-200 ${className}`}
    >
      {children}
    </div>
  );
}

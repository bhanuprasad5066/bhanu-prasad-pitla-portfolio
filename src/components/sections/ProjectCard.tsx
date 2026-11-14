import { ArrowUpRight, Github } from 'lucide-react';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import TechBadge from '@/components/ui/TechBadge';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <GlassCard className="group flex h-full flex-col overflow-hidden rounded-xl hover:border-[#D2BBA9] hover:shadow-[0_8px_24px_rgba(120,69,47,0.1)]">
      <div className="flex items-center justify-between border-b border-[#E5DED6] bg-navy-900 px-6 py-3 font-mono text-xs text-slate-400">
        <span>PROJECT / {String(index + 1).padStart(2, '0')}</span>
        <ArrowUpRight className="h-4 w-4 text-slate-500 transition-colors group-hover:text-electric-500" aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-[#2C2420]">{project.title}</h3>
            <p className="mt-1 text-sm font-medium text-electric-500">{project.subtitle}</p>
          </div>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-slate-500 transition-colors duration-200 group-hover:text-electric-500"
            aria-hidden="true"
          />
        </div>

        <p className="mt-5 leading-relaxed text-slate-400">{project.description}</p>

        <ul className="mt-6 space-y-2.5">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm text-slate-300">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-electric-400" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          {project.github && (
            <Button href={project.github} variant="secondary" icon={Github} ariaLabel={`${project.title} on GitHub`} className="px-5 py-2.5">
              GitHub
            </Button>
          )}
          {project.demo && (
            <Button href={project.demo} ariaLabel={`${project.title} live demo`} icon={ArrowUpRight} className="px-5 py-2.5">
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

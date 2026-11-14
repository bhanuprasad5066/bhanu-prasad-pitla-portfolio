import { BrainCircuit, Cloud, Code2, Database, FlaskConical, LayoutTemplate, Server } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillGroups } from '@/data/portfolio';
import type { SkillGroup } from '@/types';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<SkillGroup['icon'], LucideIcon> = {
  code: Code2,
  brain: BrainCircuit,
  server: Server,
  layout: LayoutTemplate,
  database: Database,
  cloud: Cloud,
  test: FlaskConical,
};

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Skills" title="Technical toolkit" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.icon];
            return (
              <Reveal key={group.title} delay={(index % 3) * 0.08} className="h-full">
                <GlassCard className="h-full p-7 hover:border-[#D2BBA9]">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/15 text-electric-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold text-[#2C2420]">{group.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md border border-[#E5DED6] bg-navy-900 px-3 py-1.5 text-sm text-slate-200 transition-colors duration-200 hover:border-[#D2BBA9] hover:text-electric-500"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

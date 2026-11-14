import { Calendar, Building2 } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked and what I've built"
          />
        </Reveal>

        <ol className="relative mx-auto max-w-3xl border-l border-[#E5DED6] pl-8 sm:pl-12">
          {experience.map((item, index) => (
            <li key={`${item.company}-${item.period}`} className="relative pb-12 last:pb-0">
              <Reveal delay={index * 0.1}>
                <span
                  className="absolute -left-[37px] top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-navy-950 bg-electric-400 sm:-left-[53px]"
                  aria-hidden="true"
                />
                <GlassCard className="p-6 sm:p-8 hover:border-[#D2BBA9]">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-[#2C2420]">{item.role}</h3>
                      <p className="mt-1 flex items-center gap-2 text-sm font-medium text-cyan-300">
                        <Building2 className="h-4 w-4" aria-hidden="true" />
                        {item.company}
                      </p>
                    </div>
                    <p className="flex items-center gap-2 text-sm text-slate-400">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      {item.period}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {item.responsibilities.map((task) => (
                      <li key={task} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-400" aria-hidden="true" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { GraduationCap } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Academic background" />
        </Reveal>

        <div className="mx-auto max-w-3xl space-y-6">
          {education.map((item) => (
            <Reveal key={item.institution}>
              <GlassCard className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-electric-500 text-navy-950">
                  <GraduationCap className="h-7 w-7" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#2C2420]">{item.degree}</h3>
                  <p className="mt-1 font-medium text-cyan-300">{item.field}</p>
                  <p className="mt-3 text-slate-300">{item.institution}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.period}</p>
                </div>
                <p className="rounded-lg border border-[#E5DED6] bg-navy-900 px-4 py-2 text-sm font-medium text-slate-100">
                  {item.detail}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import GlassCard from '@/components/ui/GlassCard';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { aboutFacts, aboutParagraphs } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="About" title="Engineering intelligent, reliable software" />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <GlassCard className="h-full p-8 sm:p-10">
              <div className="space-y-5 leading-relaxed text-slate-300">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="h-full p-8">
              <h3 className="mb-6 text-lg font-semibold text-[#2C2420]">Quick Facts</h3>
              <dl className="space-y-5">
                {aboutFacts.map((fact) => (
                  <div key={fact.label} className="flex gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-slate-500">{fact.label}</dt>
                      <dd className="mt-1 text-sm font-medium text-slate-100">{fact.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

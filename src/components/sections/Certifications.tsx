import { Award } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Certifications" title="Credentials and training" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.name} delay={(index % 3) * 0.08} className="h-full">
              <div className="h-full">
                <GlassCard className="flex h-full flex-col p-7 hover:border-[#D2BBA9]">
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Award className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-[#2C2420]">{cert.name}</h3>
                  {cert.issuer && <p className="mt-2 text-sm text-slate-400">{cert.issuer}</p>}
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Github, Linkedin, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/components/sections/ContactForm';
import { profile } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.16em] text-cyan-400">Contact</p>
            <h2 className="text-3xl font-semibold leading-[1.2] text-[#2C2420] sm:text-4xl">
              Let's Build Something Amazing <span className="text-electric-400">Together.</span>
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              I'm actively looking for opportunities in AI Engineering, Python Development, and Software
              Engineering. Let's connect and discuss exciting opportunities.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <GlassCard className="flex h-full flex-col gap-8 p-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-2 flex items-center gap-3 break-all text-base font-medium text-slate-100 transition-colors hover:text-cyan-300"
                >
                  <Mail className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                  {profile.email}
                </a>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <Button href={profile.github} variant="secondary" icon={Github} className="w-full">
                  GitHub
                </Button>
                <Button href={profile.linkedin} variant="secondary" icon={Linkedin} className="w-full">
                  LinkedIn
                </Button>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="p-8 sm:p-10">
              <ContactForm />
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

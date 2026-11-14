import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import SocialLinks from '@/components/ui/SocialLinks';
import { profile } from '@/data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay, ease: 'easeOut' as const },
  }),
};

export default function Hero() {
  const nameParts = profile.name.split(' ');
  const familyName = nameParts.pop();

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.p
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-5 font-mono text-sm text-slate-400"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl font-medium leading-[1.08] tracking-tight text-[#2C2420] sm:text-6xl lg:text-7xl"
          >
            <span>{nameParts.join(' ')}</span>{' '}
            <span className="text-electric-400">{familyName}</span>
          </motion.h1>

          <motion.p
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-medium text-slate-300 sm:text-lg"
          >
            {profile.roles.map((role, index) => (
              <span key={role} className="flex items-center gap-3">
                {index > 0 && <span className="h-1 w-1 rounded-full bg-electric-400" aria-hidden="true" />}
                {role}
              </span>
            ))}
          </motion.p>

          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl space-y-4 leading-relaxed text-slate-400"
          >
            {profile.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#projects" icon={ArrowRight}>
              Explore Projects
            </Button>
            <Button href={profile.resumePath} download variant="secondary" icon={Download} external={false}>
              Download Resume
            </Button>
            <Button href="#contact" variant="secondary" icon={Mail}>
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            custom={0.6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8"
          >
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-sm"
        >
          <div className="relative">
            <div className="glass overflow-hidden rounded-2xl p-2 shadow-xl shadow-[#2C2420]/10">
              <div className="flex aspect-[4/5] items-center justify-center rounded-xl bg-navy-900">
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="h-full w-full rounded-xl object-cover"
                    width={480}
                    height={600}
                  />
                ) : (
                  <span className="text-gradient text-7xl font-semibold tracking-tight" aria-label={profile.name} role="img">
                    {profile.initials}
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

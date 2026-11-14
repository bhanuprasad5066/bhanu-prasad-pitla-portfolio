import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Featured work in AI, backend, and computer vision"
            description="A selection of full-stack and machine learning systems I have designed and built."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="h-full">
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

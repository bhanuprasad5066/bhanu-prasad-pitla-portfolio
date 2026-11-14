interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  const titleWords = title.split(' ');
  const accentWord = titleWords.pop();

  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.16em] text-electric-500">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-[1.2] text-[#2C2420] sm:text-4xl">
        {titleWords.join(' ')} <span className="text-electric-400">{accentWord}</span>
      </h2>
      {description && <p className="mt-4 leading-relaxed text-slate-400">{description}</p>}
    </div>
  );
}

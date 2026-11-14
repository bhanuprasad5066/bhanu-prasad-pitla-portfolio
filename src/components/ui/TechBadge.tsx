interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="rounded-md border border-[#E5DED6] bg-navy-900 px-2.5 py-1 font-mono text-[11px] text-slate-300">
      {label}
    </span>
  );
}

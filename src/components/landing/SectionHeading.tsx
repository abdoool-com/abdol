import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Reveal className="text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/70 px-4 py-1.5 text-[11px] font-bold tracking-widest text-primary backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-black text-primary sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <div className="hairline mx-auto mt-4 w-40" />
      <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{subtitle}</p>
    </Reveal>
  );
}

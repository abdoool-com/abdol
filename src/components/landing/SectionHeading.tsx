import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "right";
}) {
  const isCenter = align === "center";

  return (
    <Reveal className={isCenter ? "text-center" : "text-right"} dir="rtl">
      {/* Eyebrow badge */}
      <div className={`inline-flex items-center gap-2`}>
        <span className="eyebrow-badge">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-primary)" }} />
          {eyebrow}
        </span>
      </div>

      {/* Heading — fluid size */}
      <h2
        className="mt-3 font-bold sm:mt-4"
        style={{
          fontFamily: "IBM Plex Sans Arabic, Cairo, sans-serif",
          color: "var(--color-foreground)",
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
        }}
      >
        {title}
      </h2>

      {/* Green accent line */}
      <div
        className={`mt-3 h-0.5 w-10 rounded-full sm:mt-4 sm:w-12 ${isCenter ? "mx-auto" : ""}`}
        style={{ background: "#147414" }}
      />

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-3 max-w-xl text-sm leading-relaxed sm:mt-4 sm:text-base ${isCenter ? "mx-auto" : ""}`}
          style={{ color: "var(--color-muted-foreground)" }}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

import { useCountUp } from "@/hooks/use-reveal";
import { Reveal } from "./Reveal";

export function VisitorCounter() {
  const { ref, value } = useCountUp(48200);

  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl px-6 py-12 text-center"
            style={{ background: "var(--gradient-green)" }}
          >
            <span
              aria-hidden
              className="animate-glow-pulse absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gold/30 blur-3xl"
            />
            <p className="relative font-display text-sm font-bold tracking-widest text-primary-foreground/80">
              عدد زوار الموقع
            </p>
            <p className="relative mt-3 font-display text-5xl font-black text-primary-foreground sm:text-6xl">
              <span ref={ref}>{value.toLocaleString("en-US")}</span>
            </p>
            <p className="relative mt-3 text-sm text-primary-foreground/75">
              نمو مستمر في مراتب الظهور والوصول
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { useCountUp } from "@/hooks/use-reveal";
import { Reveal } from "./Reveal";

export function VisitorCounter() {
  const [target, setTarget] = useState(48200);
  const [liveCount, setLiveCount] = useState(48200);

  useEffect(() => {
    const baseDate = new Date("2024-01-01").getTime();
    const now = Date.now();
    const minutesElapsed = Math.floor((now - baseDate) / 60000);
    let dynamicCount = 48200 + Math.floor(minutesElapsed / 45);

    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      dynamicCount += 1;
      localStorage.setItem("hasVisited", "true");
    }
    
    setTarget(dynamicCount);
    setLiveCount(dynamicCount);

    // Simulate live visitors arriving while the user is on the page
    const interval = setInterval(() => {
      if (Math.random() > 0.4) {
        setLiveCount(prev => prev + 1);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const { ref, value } = useCountUp(target);

  // Use the animated value until it finishes, then switch to the live updating count
  const displayValue = value >= target ? liveCount : value;

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
              <span ref={ref}>{displayValue.toLocaleString("en-US")}</span>
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

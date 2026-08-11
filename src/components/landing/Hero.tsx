import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpeg.asset.json";
import { WHATSAPP_URL, TIKTOK_URL } from "./links";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="animate-glow-pulse pointer-events-none absolute -top-24 right-[-6rem] h-80 w-80 rounded-full bg-gold/30 blur-3xl"
        style={{ transform: `translateY(${offset * 0.12}px)` }}
      />
      <div
        aria-hidden
        className="animate-glow-pulse pointer-events-none absolute bottom-[-8rem] left-[-6rem] h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        style={{ transform: `translateY(${offset * -0.08}px)` }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center md:text-right">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-card/70 px-4 py-1.5 text-xs font-bold text-accent-foreground backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gold" />
            أحد فروع شركة مجتمع أخضر القابضة
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.25] font-black text-primary sm:text-5xl lg:text-6xl">
            حلول تسويقية <span className="gold-text">تصنع الفرق</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg md:mx-0">
            خدمات تسويقية متكاملة تساعد علامتك التجارية على النمو والوصول إلى عملائك بفعالية.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-full px-7 py-3.5 font-bold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-1"
              style={{ background: "var(--gradient-green)" }}
            >
              <span className="relative z-10">اطلب خدمتك الآن</span>
              <span
                aria-hidden
                className="animate-shine absolute inset-y-0 -left-1/2 w-1/2 bg-gold/25 blur-md"
              />
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-primary/25 bg-card px-7 py-3.5 font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[var(--shadow-gold)]"
            >
              نشر اعلانك مجاناً
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div
            aria-hidden
            className="absolute inset-8 rounded-full bg-gold/25 blur-3xl"
            style={{ transform: `translateY(${offset * 0.05}px)` }}
          />
          <img
            src={logo.url}
            alt="شعار اعلانات عبدول"
            className="animate-float-soft relative w-56 mix-blend-multiply sm:w-72 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
}

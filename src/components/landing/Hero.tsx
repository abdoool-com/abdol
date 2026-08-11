import { useEffect, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import logo from "@/assets/logo.jpeg.asset.json";
import { WHATSAPP_URL, TIKTOK_URL } from "./links";

const stats = [
  { value: "+6", label: "سنوات خبرة" },
  { value: "+120", label: "مشروع منجز" },
  { value: "24/7", label: "دعم ومتابعة" },
];

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
        className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
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
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            أحد فروع شركة مجتمع أخضر القابضة
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.25] font-black text-primary sm:text-5xl lg:text-6xl">
            حلول تسويقية <span className="shine-text">تصنع الفرق</span>
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
              className="ring-gold-hover rounded-full border border-primary/25 bg-card px-7 py-3.5 font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:border-gold"
            >
              نشر اعلانك مجاناً
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-3 md:mx-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl px-3 py-4 text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <dt className="font-display text-2xl font-black text-primary sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-[11px] font-bold text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex justify-center">
          <div
            aria-hidden
            className="absolute inset-8 rounded-full bg-gold/25 blur-3xl"
            style={{ transform: `translateY(${offset * 0.05}px)` }}
          />
          <div
            aria-hidden
            className="absolute inset-2 rounded-full border border-gold/25"
            style={{ transform: `rotate(${offset * 0.05}deg)` }}
          />
          <img
            src={logo.url}
            alt="شعار اعلانات عبدول"
            className="animate-float-soft relative w-56 mix-blend-multiply sm:w-72 lg:w-80"
          />
        </div>
      </div>

      <a
        href="#services"
        aria-label="انتقل إلى الخدمات"
        className="relative mx-auto mt-14 hidden h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold md:flex"
      >
        <ChevronDown className="animate-bob h-5 w-5" />
      </a>
    </section>
  );
}

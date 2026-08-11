import { useEffect, useState } from "react";
import { ChevronLeft, ArrowUpLeft } from "lucide-react";
import logo from "@/assets/لوجو اعلانات عبدول.jpeg";
import { WHATSAPP_URL, TIKTOK_URL } from "./links";
import { Reveal } from "./Reveal";

/* ─── Orbital Logo Composition ─── */
function HeroVisual() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: "clamp(280px, 40vw, 420px)", height: "clamp(280px, 40vw, 420px)" }}
    >
      {/* Glow */}
      <div aria-hidden className="absolute rounded-full"
        style={{ width: "75%", height: "75%", background: "radial-gradient(circle, rgba(20,116,20,0.10) 0%, transparent 70%)", animation: "pulse-soft 4s ease-in-out infinite" }} />

      {/* Outer dashed ring */}
      <div aria-hidden className="absolute rounded-full"
        style={{ width: "95%", height: "95%", border: "1.5px dashed #DFE9E0", animation: "spin-slow 40s linear infinite" }} />

      {/* Ring dots */}
      <div aria-hidden className="absolute rounded-full" style={{ width: 10, height: 10, background: "#147414", boxShadow: "0 0 8px rgba(20,116,20,0.5)", top: "2%", left: "50%", transform: "translateX(-50%)" }} />
      <div aria-hidden className="absolute rounded-full" style={{ width: 7, height: 7, background: "#D0A914", bottom: "3%", left: "50%", transform: "translateX(-50%)" }} />

      {/* Inner ring */}
      <div aria-hidden className="absolute rounded-full" style={{ width: "72%", height: "72%", border: "1px solid #DFE9E0" }} />

      {/* Logo circle */}
      <div className="relative flex flex-col items-center justify-center rounded-full bg-white"
        style={{ width: "54%", height: "54%", boxShadow: "0 20px 60px rgba(20,116,20,0.14), 0 0 0 1px #DFE9E0", animation: "float 5s ease-in-out infinite" }}>
        {!logoFailed ? (
          <img src={logo} alt="اعلانات عبدول" onError={() => setLogoFailed(true)} className="h-3/5 w-3/5 object-contain" />
        ) : (
          <div className="flex h-3/5 w-3/5 items-center justify-center rounded-full" style={{ background: "#EFF7F0" }}>
            <span className="text-4xl font-bold" style={{ color: "#147414" }}>ع</span>
          </div>
        )}
        <p className="mt-0.5 text-[10px] font-semibold sm:text-xs" style={{ color: "#142018", fontFamily: "IBM Plex Sans Arabic, sans-serif" }}>اعلانات عبدول</p>
      </div>

      {/* Floating card 1 — Projects */}
      <div className="absolute flex items-center gap-2 rounded-xl bg-white px-2.5 py-2 sm:gap-2.5 sm:rounded-2xl sm:px-4 sm:py-3"
        style={{ top: "12%", right: "-4%", boxShadow: "0 8px 30px rgba(20,116,20,0.12), 0 0 0 1px #DFE9E0", animation: "float 6s ease-in-out infinite 0.5s", minWidth: "clamp(90px, 12vw, 140px)" }}>
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg sm:h-8 sm:w-8 sm:rounded-xl" style={{ background: "#EFF7F0" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#147414" strokeWidth={2} className="h-3.5 w-3.5 sm:h-4 sm:w-4"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
        </div>
        <div>
          <p className="text-xs font-bold sm:text-sm" style={{ color: "#142018" }}>+120</p>
          <p className="text-[10px] sm:text-xs" style={{ color: "#68736B" }}>مشروع منجز</p>
        </div>
      </div>

      {/* Floating card 2 — Social */}
      <div className="absolute flex items-center gap-2 rounded-xl bg-white px-2.5 py-2 sm:gap-2.5 sm:rounded-2xl sm:px-4 sm:py-3"
        style={{ bottom: "18%", right: "-4%", boxShadow: "0 8px 30px rgba(20,116,20,0.12), 0 0 0 1px #DFE9E0", animation: "float 5.5s ease-in-out infinite 1s", minWidth: "clamp(100px, 14vw, 148px)" }}>
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg sm:h-8 sm:w-8 sm:rounded-xl" style={{ background: "#EFF7F0" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#147414" strokeWidth={2} className="h-3.5 w-3.5 sm:h-4 sm:w-4"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
        </div>
        <div>
          <p className="text-[10px] font-bold sm:text-xs" style={{ color: "#142018" }}>سوشيال ميديا</p>
          <p className="text-[10px] sm:text-xs" style={{ color: "#68736B" }}>إدارة محترفة</p>
        </div>
      </div>

      {/* Floating card 3 — Support */}
      <div className="absolute flex items-center gap-2 rounded-xl bg-white px-2.5 py-2 sm:gap-2.5 sm:rounded-2xl sm:px-4 sm:py-3"
        style={{ top: "14%", left: "-4%", boxShadow: "0 8px 30px rgba(20,116,20,0.12), 0 0 0 1px #DFE9E0", animation: "float 7s ease-in-out infinite 0.3s", minWidth: "clamp(80px, 11vw, 120px)" }}>
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg sm:h-8 sm:w-8 sm:rounded-xl" style={{ background: "#EFF7F0" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#147414" strokeWidth={2} className="h-3.5 w-3.5 sm:h-4 sm:w-4"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
        </div>
        <div>
          <p className="text-xs font-bold sm:text-sm" style={{ color: "#142018" }}>24/7</p>
          <p className="text-[10px] sm:text-xs" style={{ color: "#68736B" }}>دعم دائم</p>
        </div>
      </div>
    </div>
  );
}

const STATS = [
  { value: "+120", label: "مشروع منجز", icon: <svg viewBox="0 0 24 24" fill="none" stroke="#147414" strokeWidth={2} className="h-5 w-5 sm:h-6 sm:w-6"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg> },
  { value: "+6",   label: "سنوات خبرة",  icon: <svg viewBox="0 0 24 24" fill="none" stroke="#147414" strokeWidth={2} className="h-5 w-5 sm:h-6 sm:w-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
  { value: "24/7", label: "دعم ومتابعة", icon: <svg viewBox="0 0 24 24" fill="none" stroke="#147414" strokeWidth={2} className="h-5 w-5 sm:h-6 sm:w-6"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg> },
];

export function Hero() {
  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section id="top" className="relative overflow-hidden pb-12 pt-24 sm:pb-16 sm:pt-32 md:pt-36"
        style={{ background: "#FCFDFC" }}>
        {/* Top-right glow */}
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40"
          style={{ width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(20,116,20,0.06) 0%, transparent 65%)" }} />
        <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-30"
          style={{ maskImage: "radial-gradient(ellipse 70% 70% at 60% 50%, black, transparent)" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6" dir="rtl">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">

            {/* ── Text ── */}
            <Reveal className="w-full max-w-xl mx-auto md:mx-0">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium sm:px-4 sm:text-sm"
                style={{ borderColor: "#DFE9E0", background: "#FCFDFC", color: "#68736B" }}>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#147414" }} />
                حلول رقمية متكاملة لنمو علامتك التجارية
              </div>

              {/* H1 — scales from 2.5rem on mobile to 3.75rem on desktop */}
              <h1 className="mt-4 font-bold leading-[1.25] sm:mt-5"
                style={{
                  fontFamily: "IBM Plex Sans Arabic, Cairo, sans-serif",
                  color: "#142018",
                  fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
                }}>
                حلول تسويقية
                <br />
                <span style={{ color: "#147414" }}>تصنع الفرق</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-sm leading-loose sm:mt-5 sm:text-base sm:leading-loose lg:text-lg"
                style={{ color: "#68736B" }}>
                خدمات تسويقية متكاملة تساعد علامتك التجارية على النمو
                والوصول إلى عملائك بفعالية واحترافية.
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="btn-primary justify-center text-sm sm:justify-start">
                  اطلب خدمتك الآن
                  <ChevronLeft className="h-4 w-4" />
                </a>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer"
                  className="btn-outline justify-center text-sm sm:justify-start">
                  نشر إعلانك مجاناً
                  <ArrowUpLeft className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            {/* ── Logo Visual — tablet+ only ── */}
            <Reveal delay={150} className="hidden justify-center md:flex">
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════ STATS BAR ══════════════ */}
      <div className="border-y" style={{ borderColor: "#DFE9E0", background: "#ffffff" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6" dir="rtl">
          <div className="grid grid-cols-3">
            {STATS.map((s, i) => (
              <div key={s.value}
                className="flex flex-col items-center gap-1.5 py-6 text-center sm:gap-2 sm:py-10"
                style={{ borderRight: i > 0 ? "1px solid #DFE9E0" : "none", padding: undefined }}>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl sm:h-12 sm:w-12 sm:rounded-2xl"
                  style={{ background: "#EFF7F0" }}>
                  {s.icon}
                </div>
                <p className="text-xl font-bold sm:text-3xl md:text-4xl"
                  style={{ fontFamily: "IBM Plex Sans Arabic, Cairo, sans-serif", color: "#142018" }}>
                  {s.value}
                </p>
                <p className="text-[10px] font-medium sm:text-sm" style={{ color: "#68736B" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

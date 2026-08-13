import { useState } from "react";
import tiktok from "@/assets/نشر اعلانك على تيك توك مجانا.png";
import { Reveal } from "./Reveal";
import { TIKTOK_URL, WHATSAPP_URL } from "./links";
import { trackEvent } from "@/lib/analytics";

function TikTokImage() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="flex h-36 w-36 flex-col items-center justify-center rounded-3xl sm:h-48 sm:w-48"
        style={{ background: "rgba(208,169,20,0.12)", border: "1px solid rgba(208,169,20,0.25)" }}>
        <svg viewBox="0 0 24 24" fill="#D0A914" className="h-12 w-12 sm:h-16 sm:w-16">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.27 8.27 0 004.84 1.55V6.84a4.85 4.85 0 01-1.07-.15z" />
        </svg>
        <p className="mt-2 text-sm font-bold" style={{ color: "#9a6f00" }}>تيك توك</p>
      </div>
    );
  }
  return (
    <img src={tiktok} alt="نشر اعلانك على تيك توك مجاناً" loading="lazy" onError={() => setFailed(true)}
      className="animate-float object-contain"
      style={{ width: "clamp(120px, 20vw, 200px)", height: "clamp(120px, 20vw, 200px)" }} />
  );
}

export function TikTokBanner() {
  return (
    <section id="tiktok" className="py-14 sm:py-20 lg:py-24" style={{ background: "#FFF8DF" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div
            className="grid items-center gap-8 rounded-2xl p-6 sm:rounded-3xl sm:p-10 md:grid-cols-[auto_1fr] md:gap-12 md:p-12"
            style={{ background: "#ffffff", border: "1px solid rgba(208,169,20,0.3)", boxShadow: "0 8px 40px rgba(208,169,20,0.14)" }}
            dir="rtl"
          >
            {/* Visual */}
            <div className="flex justify-center">
              <TikTokImage />
            </div>

            {/* Text */}
            <div className="text-center md:text-right">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold sm:px-4 sm:text-sm"
                style={{ background: "#FFF8DF", color: "#9a6f00", border: "1px solid rgba(208,169,20,0.4)" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.27 8.27 0 004.84 1.55V6.84a4.85 4.85 0 01-1.07-.15z" />
                </svg>
                عرض حصري
              </span>

              <h2 className="mt-3 font-bold leading-snug sm:mt-4"
                style={{ color: "#142018", fontFamily: "IBM Plex Sans Arabic, Cairo, sans-serif", fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
                نشر إعلانك على{" "}
                <span style={{ color: "#D0A914" }}>تيك توك</span>{" "}
                مجاناً
              </h2>

              <p className="mt-3 text-sm leading-loose sm:mt-4 sm:text-base" style={{ color: "#68736B" }}>
                أرسل لنا تفاصيل إعلانك عبر واتساب وننشره على حسابنا في تيك توك بدون أي مقابل.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  onClick={() => trackEvent("click_whatsapp", { location: "tiktok_banner" })}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #b8940e 0%, #D0A914 100%)", boxShadow: "0 8px 24px rgba(208,169,20,0.35)" }}>
                  أرسل عبر واتساب
                </a>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer"
                  onClick={() => trackEvent("click_tiktok", { location: "tiktok_banner" })}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF8DF]"
                  style={{ borderColor: "rgba(208,169,20,0.4)", color: "#9a6f00" }}>
                  حسابنا على تيك توك
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

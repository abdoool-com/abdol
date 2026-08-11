import { useState } from "react";
import about from "@/assets/من نحن.png";
import { Reveal } from "./Reveal";

function AboutImage() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-52 w-52 items-center justify-center rounded-3xl sm:h-64 sm:w-64"
        style={{ background: "#EFF7F0" }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#147414" strokeWidth={1.5} className="h-16 w-16 sm:h-20 sm:w-20">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative inline-block">
      {/* Decorative offset background */}
      <div aria-hidden className="absolute rounded-3xl"
        style={{ inset: 0, transform: "translate(10px, 10px)", background: "#EFF7F0", borderRadius: 24, zIndex: 0 }} />
      <img
        src={about} alt="فريق اعلانات عبدول" loading="lazy" onError={() => setFailed(true)}
        className="relative rounded-3xl object-cover"
        style={{
          zIndex: 1,
          boxShadow: "0 16px 48px rgba(20,116,20,0.14)",
          width: "clamp(200px, 35vw, 320px)",
          height: "auto",
        }}
      />
    </div>
  );
}

const TRUST_BADGES = ["خبرة منذ 2020", "فرع من مجتمع أخضر القابضة", "حلول رقمية مبتكرة"];

export function About() {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-28" style={{ background: "#FCFDFC" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Stacks on mobile, 2-col on md+ */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16" dir="rtl">

          {/* Image */}
          <Reveal>
            <div className="flex justify-center">
              <AboutImage />
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={120}>
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold sm:px-4 sm:text-sm"
              style={{ borderColor: "#DFE9E0", color: "#147414" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#147414" }} />
              من نحن
            </span>

            {/* Heading */}
            <h2 className="mt-4 font-bold"
              style={{
                color: "#142018",
                fontFamily: "IBM Plex Sans Arabic, Cairo, sans-serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              }}>
              إعلانات عبدول
            </h2>

            {/* Green accent line */}
            <div className="mt-3 h-0.5 w-10 rounded-full" style={{ background: "#147414" }} />

            {/* Body */}
            <div className="mt-4 space-y-3 text-sm leading-loose sm:mt-5 sm:space-y-4 sm:text-base" style={{ color: "#68736B" }}>
              <p>
                اعلانات عبدول موقع إلكتروني متخصص في التسويق الإلكتروني، وتطوير المواقع والمتاجر
                الرقمية، وتقديم حلول الإعلان الرقمي التي تساعد العلامات التجارية على النمو والوصول
                إلى عملائها بفعالية.
              </p>
              <blockquote className="rounded-xl py-3 pr-4 text-xs leading-loose sm:text-sm"
                style={{ borderRight: "3px solid #147414", background: "#EFF7F0", color: "#142018", paddingLeft: "1rem" }}>
                نحن أحد فروع شركة مجتمع أخضر القابضة، ونمتلك خبرة ممتدة في هذا المجال منذ عام 2020،
                ونسعى لتقديم خدمات رقمية مبتكرة تواكب تطورات السوق.
              </blockquote>
            </div>

            {/* Trust badges */}
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-7">
              {TRUST_BADGES.map((badge) => (
                <span key={badge} className="rounded-full border px-3 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm"
                  style={{ borderColor: "#DFE9E0", background: "#ffffff", color: "#142018" }}>
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

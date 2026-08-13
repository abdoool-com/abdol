import { useState } from "react";
import { Monitor, Share2, Layers, Megaphone, ClipboardList, ShoppingBag } from "lucide-react";
import digital   from "@/assets/التسويق الرقمي.png";
import social    from "@/assets/إدارة السوشيال ميديا.png";
import materials from "@/assets/المواد الاعلانية.png";
import campaigns from "@/assets/الحملات التسويقية.png";
import plans     from "@/assets/الخطط التسويقية.png";
import stores    from "@/assets/إدارة المتاجر.png";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WHATSAPP_URL } from "./links";
import { trackEvent } from "@/lib/analytics";

const SERVICES = [
  { num: "01", title: "التسويق الرقمي",        description: "حملات رقمية مدروسة تستهدف جمهورك المثالي وتحقق أقصى عائد على الاستثمار.", img: digital,   Icon: Monitor,       featured: true  },
  { num: "02", title: "إدارة السوشيال ميديا",  description: "إدارة شاملة لحساباتك تشمل المحتوى والتفاعل اليومي وتحليل الأداء.",           img: social,    Icon: Share2,        featured: false },
  { num: "03", title: "المواد الإعلانية",       description: "تصاميم إعلانية احترافية تعكس هوية علامتك وتجذب الانتباه.",                    img: materials, Icon: Layers,        featured: false },
  { num: "04", title: "الحملات التسويقية",      description: "حملات ممولة على متعددة المنصات بأهداف قابلة للقياس ومتابعة دقيقة.",            img: campaigns, Icon: Megaphone,     featured: false },
  { num: "05", title: "الخطط التسويقية",        description: "خطط تسويقية مفصلة تحدد القنوات والميزانية والمؤشرات لكل مرحلة.",              img: plans,     Icon: ClipboardList, featured: false },
  { num: "06", title: "إدارة المتاجر",          description: "إدارة متكاملة لمتجرك الإلكتروني من المنتجات إلى الإعلانات والمبيعات.",         img: stores,    Icon: ShoppingBag,   featured: false },
];

const CARD_STYLE = {
  background: "#ffffff",
  border: "1px solid #DFE9E0",
  boxShadow: "0 4px 20px rgba(20,116,20,0.07)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
};

function hoverOn(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget as HTMLElement;
  el.style.transform = "translateY(-5px)";
  el.style.boxShadow = "0 14px 40px rgba(20,116,20,0.14)";
  el.style.borderColor = "rgba(20,116,20,0.25)";
}
function hoverOff(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget as HTMLElement;
  el.style.transform = "";
  el.style.boxShadow = "0 4px 20px rgba(20,116,20,0.07)";
  el.style.borderColor = "#DFE9E0";
}

function ServiceCard({ service, large }: { service: typeof SERVICES[0]; large: boolean }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article
      className={`group flex h-full flex-col gap-4 ${large ? "sm:flex-row sm:items-start sm:gap-6" : ""}`}
      style={{ ...CARD_STYLE, borderRadius: large ? 28 : 20, padding: large ? "1.5rem" : "1.25rem" }}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
    >
      {/* Image */}
      <div className="flex shrink-0 justify-center">
        {!imgFailed ? (
          <img
            src={service.img}
            alt={service.title}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            style={{ width: large ? "clamp(100px, 15vw, 160px)" : "clamp(70px, 12vw, 100px)", height: large ? "clamp(100px, 15vw, 160px)" : "clamp(70px, 12vw, 100px)" }}
          />
        ) : (
          <div className="flex items-center justify-center rounded-2xl"
            style={{ width: 96, height: 96, background: "#EFF7F0" }}>
            <service.Icon className="h-10 w-10" style={{ color: "#147414" }} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2" dir="rtl">
        <span className="text-2xl font-bold leading-none sm:text-3xl"
          style={{ fontFamily: "IBM Plex Sans Arabic, Cairo, sans-serif", color: "rgba(20,116,20,0.15)" }}>
          {service.num}
        </span>
        <h3 className={`font-bold ${large ? "text-xl sm:text-2xl" : "text-base sm:text-lg"}`}
          style={{ fontFamily: "IBM Plex Sans Arabic, Cairo, sans-serif", color: "#142018" }}>
          {service.title}
        </h3>
        <p className="flex-1 text-xs leading-relaxed sm:text-sm" style={{ color: "#68736B" }}>
          {service.description}
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          onClick={() => trackEvent("click_whatsapp", { location: "services", service: service.title })}
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
          style={{ color: "#147414" }}>
          اكتشف المزيد
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="py-14 sm:py-20 lg:py-28" style={{ background: "#FCFDFC" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="ما نقدمه" title="خدماتنا" subtitle="نقدم لك باقة متكاملة من الحلول التسويقية" />

        {/* ── Responsive Grid ── */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5
                        sm:grid-cols-2
                        lg:grid-cols-3">

          {/* 01 — Featured: full width on mobile/tablet, row-span-2 on desktop */}
          <Reveal delay={0} className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <ServiceCard service={SERVICES[0]} large={true} />
          </Reveal>

          {/* 02 */}
          <Reveal delay={80}>
            <ServiceCard service={SERVICES[1]} large={false} />
          </Reveal>

          {/* 03 */}
          <Reveal delay={160}>
            <ServiceCard service={SERVICES[2]} large={false} />
          </Reveal>

          {/* 04 */}
          <Reveal delay={240}>
            <ServiceCard service={SERVICES[3]} large={false} />
          </Reveal>

          {/* 05 — left of 04 on desktop */}
          <Reveal delay={320}>
            <ServiceCard service={SERVICES[4]} large={false} />
          </Reveal>

          {/* 06 — centered on desktop */}
          <Reveal delay={400} className="sm:col-span-2 lg:col-span-1 lg:col-start-2">
            <ServiceCard service={SERVICES[5]} large={false} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

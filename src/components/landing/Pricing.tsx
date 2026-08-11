import { Check, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WHATSAPP_URL } from "./links";

const PLANS = [
  {
    name: "بداية", price: "799", unit: "ريال / شهر",
    description: "مناسب للمشاريع الناشئة التي تبحث عن انطلاقة سريعة",
    features: ["إدارة حسابين على السوشيال ميديا", "8 منشورات تصميم شهرياً", "2 حملة إعلانية ممولة", "تقرير أداء أسبوعي", "دعم عبر واتساب"],
    highlighted: false,
  },
  {
    name: "احترافي", price: "1,499", unit: "ريال / شهر",
    description: "الباقة الأكثر طلباً للعلامات التجارية المتنامية",
    features: ["إدارة 4 حسابات على السوشيال ميديا", "16 منشور تصميم شهرياً", "4 حملات إعلانية ممولة", "خطة تسويقية شهرية", "تقرير أداء مفصل", "دعم ذو أولوية عبر واتساب"],
    highlighted: true,
  },
  {
    name: "متجر إلكتروني", price: "2,499", unit: "ريال / شهر",
    description: "حل متكامل لإدارة المتجر والتسويق والمبيعات",
    features: ["إدارة متجر إلكتروني كامل", "إضافة المنتجات والتحديثات", "إعلانات ممولة متعددة المنصات", "محتوى تيك توك وريلز", "تحليل المبيعات والجمهور", "استشارة استراتيجية أسبوعية"],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-14 sm:py-20 lg:py-28" style={{ background: "#FCFDFC" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="الباقات" title="باقات الأسعار" subtitle="اختر الباقة التي تناسب نشاطك وابدأ رحلتك التسويقية" />

        {/* 
          Mobile:  1-col stacked
          Tablet:  1-col with max-width centered (highlight stands out)
          Desktop: 3-col
        */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3" dir="rtl">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <article
                className="relative flex h-full flex-col"
                style={{
                  background:    plan.highlighted ? "#147414" : "#ffffff",
                  border:        plan.highlighted ? "none" : "1px solid #DFE9E0",
                  borderRadius:  24,
                  padding:       "1.5rem",
                  boxShadow:     plan.highlighted ? "0 20px 60px rgba(20,116,20,0.30)" : "0 4px 20px rgba(20,116,20,0.07)",
                  transition:    "transform 0.3s ease",
                  /* highlighted card pops on tablet when 2-col */
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}
              >
                {/* Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-bold whitespace-nowrap"
                      style={{ background: "#D0A914", color: "#ffffff" }}>
                      <Sparkles className="h-3.5 w-3.5" />
                      الأكثر طلباً
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <p className="text-sm font-semibold"
                  style={{ color: plan.highlighted ? "rgba(255,255,255,0.75)" : "#68736B" }}>
                  {plan.name}
                </p>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold sm:text-4xl"
                    style={{ fontFamily: "IBM Plex Sans Arabic, Cairo, sans-serif", color: plan.highlighted ? "#ffffff" : "#142018" }}>
                    {plan.price}
                  </span>
                  <span className="text-xs sm:text-sm"
                    style={{ color: plan.highlighted ? "rgba(255,255,255,0.65)" : "#68736B" }}>
                    {plan.unit}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-2 text-xs leading-relaxed sm:text-sm"
                  style={{ color: plan.highlighted ? "rgba(255,255,255,0.7)" : "#68736B" }}>
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="my-5 h-px" style={{ background: plan.highlighted ? "rgba(255,255,255,0.18)" : "#DFE9E0" }} />

                {/* Features */}
                <ul className="flex flex-1 flex-col gap-2.5 sm:gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs sm:text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: plan.highlighted ? "#fff" : "#147414" }} />
                      <span style={{ color: plan.highlighted ? "rgba(255,255,255,0.85)" : "#142018" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="mt-7 flex min-h-[44px] items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={
                    plan.highlighted
                      ? { background: "rgba(255,255,255,0.18)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.3)" }
                      : { background: "#EFF7F0", color: "#147414", border: "1px solid #DFE9E0" }
                  }
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                >
                  ابدأ الآن
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

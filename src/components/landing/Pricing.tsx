import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

import { WHATSAPP_URL } from "./links";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "بداية",
    price: "799",
    unit: "ريال / شهر",
    description: "مناسب للمشاريع الناشئة التي تبحث عن انطلاقة سريعة",
    features: [
      "إدارة حسابين على السوشيال ميديا",
      "8 منشورات تصميم شهرياً",
      "2 حملة إعلانية ممولة",
      "تقرير أداء أسبوعي",
      "دعم عبر واتساب",
    ],
    highlighted: false,
  },
  {
    name: "احترافي",
    price: "1,499",
    unit: "ريال / شهر",
    description: "الباقة الأكثر طلباً للعلامات التجارية المتنامية",
    features: [
      "إدارة 4 حسابات على السوشيال ميديا",
      "16 منشور تصميم شهرياً",
      "4 حملات إعلانية ممولة",
      "خطة تسويقية شهرية",
      "تقرير أداء مفصل",
      "دعم ذو أولوية عبر واتساب",
    ],
    highlighted: true,
  },
  {
    name: "متجر إلكتروني",
    price: "2,499",
    unit: "ريال / شهر",
    description: "حل متكامل لإدارة المتجر والتسويق والمبيعات",
    features: [
      "إدارة متجر إلكتروني كامل",
      "إضافة المنتجات والتحديثات",
      "إعلانات ممولة متعددة المنصات",
      "محتوى تيك توك وريلز",
      "تحليل المبيعات والجمهور",
      "استشارة استراتيجية أسبوعية",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="الباقات"
          title="باقات الأسعار"
          subtitle="اختر الباقة التي تناسب نشاطك وابدأ رحلتك التسويقية"
        />


        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 100}>
              <article
                className={`bento-card group flex h-full flex-col p-6 sm:p-8 ${
                  plan.highlighted
                    ? "border-gold/60 shadow-[var(--shadow-gold)]"
                    : ""
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold text-accent-foreground">
                    <Sparkles className="h-3.5 w-3.5" />
                    الأكثر طلباً
                  </span>
                )}

                <h3 className="mt-4 font-display text-xl font-bold text-primary">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-black text-primary">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.unit}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)]"
                      : "border border-gold/60 bg-secondary text-secondary-foreground hover:bg-gold hover:text-accent-foreground"
                  }`}
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

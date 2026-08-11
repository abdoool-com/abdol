import { MessageCircle, ClipboardList, Rocket, LineChart } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  { num: "01", Icon: MessageCircle, title: "استشارة مجانية",  description: "نبدأ بفهم نشاطك وأهدافك ونحدد معاً احتياجاتك التسويقية الفعلية.", filled: true  },
  { num: "02", Icon: ClipboardList, title: "خطة مخصصة",      description: "نضع خطة تسويقية واضحة تحدد القنوات والمحتوى والميزانية والجدول الزمني.", filled: false },
  { num: "03", Icon: Rocket,        title: "تنفيذ الحملة",    description: "ننفذ الخطة بدقة من تصميم المواد إلى إطلاق الإعلانات وإدارة الحسابات.", filled: true  },
  { num: "04", Icon: LineChart,     title: "متابعة وتطوير",   description: "نراقب الأداء باستمرار ونحسن الحملات لضمان أفضل نتيجة ممكنة.", filled: false },
];

export function Process() {
  return (
    <section id="process" className="py-14 sm:py-20 lg:py-28" style={{ background: "#EFF7F0" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="كيف نعمل" title="خطوات العمل" subtitle="رحلة واضحة من الاستشارة حتى النتائج" />

        <Reveal delay={100}>
          {/* Connecting line — desktop only */}
          <div className="relative mt-10 sm:mt-14" dir="rtl">
            <div className="absolute top-9 right-0 hidden h-px w-full md:block"
              style={{ background: "linear-gradient(90deg, transparent, #DFE9E0 10%, #DFE9E0 90%, transparent)" }} />

            {/* 
              Mobile:  2-col grid (2×2)
              Tablet:  2-col grid
              Desktop: 4-col grid
            */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4 lg:gap-8">
              {STEPS.map((step) => {
                const Icon = step.Icon;
                return (
                  <div key={step.num} className="flex flex-col items-center text-center">
                    {/* Icon + Number */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div
                        className="flex items-center justify-center rounded-xl transition-transform duration-300 hover:scale-105 sm:rounded-2xl"
                        style={{
                          width: 64,
                          height: 64,
                          background: step.filled ? "var(--gradient-green)" : "#ffffff",
                          border: "1px solid #DFE9E0",
                          boxShadow: "0 4px 20px rgba(20,116,20,0.12)",
                          color: step.filled ? "#ffffff" : "#147414",
                        }}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="mt-1.5 text-xs font-bold"
                        style={{ color: "rgba(20,116,20,0.5)", fontFamily: "IBM Plex Sans Arabic, sans-serif" }}>
                        {step.num}
                      </span>
                    </div>

                    <h3 className="mt-3 text-sm font-bold sm:text-base"
                      style={{ color: "#142018", fontFamily: "IBM Plex Sans Arabic, Cairo, sans-serif" }}>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed sm:text-sm" style={{ color: "#68736B" }}>
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

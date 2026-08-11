import { Reveal } from "./Reveal";
import { MessageCircle, ClipboardList, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "استشارة مجانية",
    description: "نبدأ بفهم نشاطك وأهدافك ونحدد معاً احتياجاتك التسويقية الفعلية.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "خطة مخصصة",
    description: "نضع خطة تسويقية واضحة تحدد القنوات والمحتوى والميزانية والجدول الزمني.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "تنفيذ الحملة",
    description: "ننفذ الخطة بدقة من تصميم المواد إلى إطلاق الإعلانات وإدارة الحسابات.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "متابعة وتطوير",
    description: "نراقب الأداء باستمرار ونحسن الحملات لضمان أفضل نتيجة ممكنة.",
    icon: LineChart,
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-black text-primary sm:text-4xl">خطوات العمل</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            رحلة واضحة من الاستشارة حتى النتائج
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={index * 100}>
                <div className="bento-card group relative flex h-full flex-col items-center p-6 text-center sm:p-8">
                  <span
                    aria-hidden
                    className="absolute top-4 right-4 font-display text-4xl font-black text-gold/20 transition-colors duration-300 group-hover:text-gold/40"
                  >
                    {step.number}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

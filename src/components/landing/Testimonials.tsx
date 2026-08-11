import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "عبدالرحمن العتيبي",
    role: "صاحب متجر إلكتروني",
    text: "تعامل احترافي من أول استشارة، الحملة حققت نتائج فوق التوقع والمتابعة كانت ممتازة.",
  },
  {
    name: "سارة القحطاني",
    role: "مديرة علامة تجارية",
    text: "المحتوى التسويقي كان متماسكاً وجذاباً، وإدارة حساباتنا على السوشيال ميديا أصبحت أسهل بكثير.",
  },
  {
    name: "فهد المالكي",
    role: "صاحب مشروع خدمي",
    text: "فريق اعلانات عبدول ساعدني في بناء هوية بصرية واضحة، والعملاء لاحظوا الفرق من أول إعلان.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="ثقة عملائنا"
          title="آراء العملاء"
          subtitle="شهادات من عملائنا عن تجربتهم مع خدماتنا"
        />


        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 100}>
              <article className="bento-card flex h-full flex-col p-6 sm:p-8">
                <Quote className="h-8 w-8 text-gold/70" />
                <p className="mt-5 flex-1 leading-loose text-muted-foreground">{item.text}</p>
                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < 5 ? "fill-gold text-gold" : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="font-display font-bold text-primary">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

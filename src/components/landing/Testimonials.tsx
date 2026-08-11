import { Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const TESTIMONIALS = [
  { name: "عبدالرحمن العتيبي", role: "صاحب متجر إلكتروني", initials: "ع", text: "تعامل احترافي من أول استشارة، الحملة حققت نتائج فوق التوقع والمتابعة كانت ممتازة." },
  { name: "سارة القحطاني",      role: "مديرة علامة تجارية",  initials: "س", text: "المحتوى التسويقي كان متماسكاً وجذاباً، وإدارة حساباتنا على السوشيال ميديا أصبحت أسهل بكثير." },
  { name: "فهد المالكي",         role: "صاحب مشروع خدمي",    initials: "ف", text: "فريق اعلانات عبدول ساعدني في بناء هوية بصرية واضحة، والعملاء لاحظوا الفرق من أول إعلان." },
];

const CARD_STYLE = {
  background: "#ffffff",
  border: "1px solid #DFE9E0",
  borderRadius: 20,
  boxShadow: "0 4px 20px rgba(20,116,20,0.07)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

export function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-20 lg:py-28" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="ثقة عملائنا" title="آراء العملاء" subtitle="شهادات من عملائنا عن تجربتهم مع خدماتنا" />

        {/* 1-col mobile, 2-col tablet, 3-col desktop */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3" dir="rtl">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <article
                className="flex h-full flex-col"
                style={{ ...CARD_STYLE, padding: "1.25rem" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 12px 36px rgba(20,116,20,0.12)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "";
                  el.style.boxShadow = "0 4px 20px rgba(20,116,20,0.07)";
                }}
              >
                {/* Quote */}
                <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" style={{ color: "#DFE9E0" }}>
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" />
                </svg>

                <p className="mt-3 flex-1 text-xs leading-loose sm:text-sm" style={{ color: "#68736B" }}>
                  {item.text}
                </p>

                {/* Stars */}
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="#D0A914" stroke="none" />
                  ))}
                </div>

                <div className="my-3 h-px sm:my-4" style={{ background: "#DFE9E0" }} />

                {/* Author */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: "var(--gradient-green)" }}>
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold sm:text-sm"
                      style={{ color: "#142018", fontFamily: "IBM Plex Sans Arabic, Cairo, sans-serif" }}>
                      {item.name}
                    </p>
                    <p className="text-[10px] sm:text-xs" style={{ color: "#68736B" }}>{item.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

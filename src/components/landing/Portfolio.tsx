import { Megaphone, Smartphone, Palette, TrendingUp, Video, FileText } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WHATSAPP_URL } from "./links";

const WORKS = [
  { title: "حملة إطلاق متجر إلكتروني",    category: "إدارة المتاجر",    Icon: TrendingUp, description: "إطلاق متجر متكامل مع إعلانات ممولة ومحتوى تسويقي حقق مبيعات من الأسبوع الأول.", featured: true  },
  { title: "إدارة حسابات سوشيال ميديا",   category: "سوشيال ميديا",     Icon: Smartphone, description: "إدارة شاملة لحسابات العلامة التجارية مع محتوى يومي وتفاعل حقيقي.",                featured: false },
  { title: "تصميم هوية بصرية",              category: "مواد إعلانية",     Icon: Palette,    description: "هوية متكاملة تشمل الشعار والألوان والقوالب الإعلانية لعلامة ناشئة.",            featured: false },
  { title: "إعلانات ممولة",                 category: "حملات تسويقية",    Icon: Megaphone,  description: "حملات مدروسة على فيسبوك وإنستغرام بأهداف واضحة ونتائج قابلة للقياس.",           featured: false },
  { title: "محتوى تيك توك",                 category: "تيك توك",          Icon: Video,      description: "فيديوهات جذابة تتناسب مع جمهور تيك توك وتزيد الوصول العضوي.",                   featured: false },
  { title: "خطة تسويقية شهرية",             category: "خطط تسويقية",      Icon: FileText,   description: "خطة مفصلة تحدد الأهداف والقنوات والميزانية لكل مرحلة.",                        featured: false },
];

const CAT_STYLE = (cat: string) =>
  cat === "تيك توك"
    ? { background: "#FFF8DF", color: "#9a6f00" }
    : { background: "#EFF7F0", color: "#147414" };

const CARD_BASE = {
  background: "#ffffff",
  border: "1px solid #DFE9E0",
  boxShadow: "0 4px 20px rgba(20,116,20,0.07)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
};

function hoverOn(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget as HTMLElement;
  el.style.transform = "translateY(-5px)";
  el.style.boxShadow = "0 16px 48px rgba(20,116,20,0.14)";
  el.style.borderColor = "rgba(20,116,20,0.2)";
}
function hoverOff(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget as HTMLElement;
  el.style.transform = "";
  el.style.boxShadow = "0 4px 20px rgba(20,116,20,0.07)";
  el.style.borderColor = "#DFE9E0";
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-14 sm:py-20 lg:py-28" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="معرض الأعمال" title="أعمالنا" subtitle="نماذج من المشاريع والحملات التي نفذناها لعملائنا" />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3" dir="rtl">

          {/* Featured large card — full-width mobile, 2-col tablet, 2-col desktop */}
          <Reveal delay={0} className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            {(() => {
              const w = WORKS[0];
              const Icon = w.Icon;
              const cat = CAT_STYLE(w.category);
              return (
                <article className="group flex h-full flex-col justify-between"
                  style={{ ...CARD_BASE, borderRadius: 28, padding: "1.5rem", minHeight: 240 }}
                  onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full px-3 py-1 text-xs font-semibold" style={cat}>{w.category}</span>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                      style={{ background: "#EFF7F0", color: "#147414" }}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-auto sm:pt-8">
                    <h3 className="text-xl font-bold sm:text-2xl"
                      style={{ color: "#142018", fontFamily: "IBM Plex Sans Arabic, Cairo, sans-serif" }}>
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed sm:mt-3" style={{ color: "#68736B" }}>{w.description}</p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-[#EFF7F0] sm:mt-5"
                      style={{ borderColor: "#DFE9E0", color: "#147414" }}>
                      اطلب مشابه
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                    </a>
                  </div>
                </article>
              );
            })()}
          </Reveal>

          {/* Smaller cards */}
          {WORKS.slice(1).map((w, i) => {
            const Icon = w.Icon;
            const cat = CAT_STYLE(w.category);
            return (
              <Reveal key={w.title} delay={(i + 1) * 80}>
                <article className="group flex h-full flex-col gap-3"
                  style={{ ...CARD_BASE, borderRadius: 20, padding: "1.25rem" }}
                  onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full px-3 py-1 text-xs font-semibold" style={cat}>{w.category}</span>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "#EFF7F0", color: "#147414" }}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="text-sm font-bold sm:text-base"
                      style={{ color: "#142018", fontFamily: "IBM Plex Sans Arabic, Cairo, sans-serif" }}>
                      {w.title}
                    </h3>
                    <p className="flex-1 text-xs leading-relaxed sm:text-sm" style={{ color: "#68736B" }}>{w.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

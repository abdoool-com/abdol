import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "./links";
import { Megaphone, Smartphone, Palette, TrendingUp, Video, FileText } from "lucide-react";

const works = [
  {
    title: "حملة إطلاق متجر إلكتروني",
    category: "إدارة المتاجر",
    icon: TrendingUp,
    span: "md:col-span-2 md:row-span-2",
    description: "إطلاق متجر متكامل مع إعلانات ممولة ومحتوى تسويقي حقق مبيعات من الأسبوع الأول.",
  },
  {
    title: "إدارة حسابات سوشيال ميديا",
    category: "سوشيال ميديا",
    icon: Smartphone,
    span: "md:col-span-2",
    description: "إدارة شاملة لحسابات العلامة التجارية مع جدولة محتوى وتفاعل يومي.",
  },
  {
    title: "تصميم هوية بصرية",
    category: "مواد إعلانية",
    icon: Palette,
    span: "md:col-span-2",
    description: "هوية متكاملة تشمل الشعار والألوان والقوالب الإعلانية.",
  },
  {
    title: "إعلانات ممولة",
    category: "حملات تسويقية",
    icon: Megaphone,
    span: "md:col-span-2",
    description: "حملات إعلانية مدروسة على فيسبوك وإنستغرام بأهداف واضحة ومتابعة دقيقة.",
  },
  {
    title: "محتوى تيك توك",
    category: "تيك توك",
    icon: Video,
    span: "md:col-span-2",
    description: "إنتاج محتوى فيديو جذاب يتناسب مع جمهور تيك توك ويزيد الوصول.",
  },
  {
    title: "خطة تسويقية شهرية",
    category: "خطط تسويقية",
    icon: FileText,
    span: "md:col-span-2",
    description: "خطة مفصلة تحدد الأهداف والقنوات والميزانية والمؤشرات لكل مرحلة.",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-black text-primary sm:text-4xl">أعمالنا</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            نماذج من المشاريع والحملات التي نفذناها لعملائنا
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {works.map((work, index) => {
            const Icon = work.icon;
            return (
              <Reveal key={work.title} delay={index * 90} className={work.span}>
                <article className="bento-card group flex h-full flex-col p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                      {work.category}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-primary sm:text-2xl">
                    {work.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {work.description}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-gold/60 bg-secondary px-5 py-2 text-sm font-bold text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-accent-foreground hover:shadow-[var(--shadow-gold)]"
                  >
                    اطلب مشابه
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

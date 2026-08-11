import digital from "@/assets/digital.png.asset.json";
import social from "@/assets/social.png.asset.json";
import materials from "@/assets/materials.png.asset.json";
import campaigns from "@/assets/campaigns.png.asset.json";
import plans from "@/assets/plans.png.asset.json";
import stores from "@/assets/stores.png.asset.json";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "./links";

const services = [
  { title: "التسويق الرقمي", img: digital.url, span: "md:col-span-2 md:row-span-2" },
  { title: "إدارة السوشيال ميديا", img: social.url, span: "md:col-span-2" },
  { title: "المواد الاعلانية", img: materials.url, span: "md:col-span-2" },
  { title: "الحملات التسويقية", img: campaigns.url, span: "md:col-span-2" },
  { title: "الخطط التسويقية", img: plans.url, span: "md:col-span-2" },
  { title: "إدارة المتاجر", img: stores.url, span: "md:col-span-2" },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-black text-primary sm:text-4xl">خدماتنا</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            نقدم لك باقة متكاملة من الحلول التسويقية
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 90} className={service.span}>
              <article className="bento-card group flex h-full flex-col items-center justify-center gap-4 p-6 text-center sm:p-8">
                <div className="relative flex items-center justify-center">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-gold/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    className={`relative transition-transform duration-500 group-hover:scale-110 ${
                      index === 0 ? "w-40 sm:w-52" : "w-24 sm:w-28"
                    }`}
                  />
                </div>

                <h3
                  className={`font-display font-bold text-primary ${
                    index === 0 ? "text-2xl sm:text-3xl" : "text-lg"
                  }`}
                >
                  {service.title}
                </h3>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-secondary px-5 py-2 text-sm font-bold text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-accent-foreground hover:shadow-[var(--shadow-gold)]"
                >
                  للطلب عبر واتساب
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

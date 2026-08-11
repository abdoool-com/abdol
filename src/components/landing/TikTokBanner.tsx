import tiktok from "@/assets/tiktok.png.asset.json";
import { Reveal } from "./Reveal";
import { TIKTOK_URL, WHATSAPP_URL } from "./links";

export function TikTokBanner() {
  return (
    <section id="tiktok" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="bento-card grid items-center gap-8 p-8 sm:p-12 md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative flex justify-center">
              <span
                aria-hidden
                className="animate-glow-pulse absolute inset-8 rounded-full bg-gold/25 blur-3xl"
              />
              <img
                src={tiktok.url}
                alt="نشر اعلانك على تيك توك مجاناً"
                loading="lazy"
                className="animate-float-soft relative w-64 mix-blend-multiply sm:w-80"
              />
            </div>

            <div className="text-center md:text-right">
              <h2 className="font-display text-3xl leading-snug font-black text-primary sm:text-4xl">
                نشر اعلانك على <span className="gold-text">تيك توك</span> مجاناً
              </h2>
              <p className="mt-4 leading-loose text-muted-foreground">
                أرسل لنا تفاصيل إعلانك عبر واتساب وننشره على حسابنا في تيك توك بدون أي مقابل.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-7 py-3.5 font-bold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-1"
                  style={{ background: "var(--gradient-green)" }}
                >
                  حسابنا على تيك توك
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-gold/60 bg-secondary px-7 py-3.5 font-bold text-secondary-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-accent-foreground"
                >
                  واتساب 966567079640
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

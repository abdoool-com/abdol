import about from "@/assets/about.png.asset.json";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <Reveal>
          <div className="relative flex justify-center">
            <span
              aria-hidden
              className="animate-glow-pulse absolute inset-10 rounded-full bg-gold/20 blur-3xl"
            />
            <img
              src={about.url}
              alt="فريق اعلانات عبدول"
              loading="lazy"
              className="animate-float-soft relative w-72 mix-blend-multiply sm:w-96"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="font-display text-3xl font-black text-primary sm:text-4xl">من نحن</h2>
          <div className="mt-5 space-y-4 text-base leading-loose text-muted-foreground">
            <p>
              اعلانات عبدول هو موقع إلكتروني متخصص في التسويق الإلكتروني، وتطوير المواقع والمتاجر
              الرقمية، وتقديم حلول الإعلان الرقمي التي تساعد العلامات التجارية على النمو والوصول إلى
              عملائها بفعالية.
            </p>
            <p>
              نحن أحد فروع شركة مجتمع أخضر القابضة، ونمتلك خبرة ممتدة في هذا المجال منذ عام 2020 م،
              ونسعى خلالها لتقديم خدمات رقمية مبتكرة تواكب تطورات السوق.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {["خبرة منذ 2020", "فرع من مجتمع أخضر القابضة", "حلول رقمية مبتكرة"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-primary shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

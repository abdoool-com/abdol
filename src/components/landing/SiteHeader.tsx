import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpeg.asset.json";
import { WHATSAPP_URL } from "./links";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/80 py-2 backdrop-blur-xl"
          : "border-b border-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="شعار اعلانات عبدول"
            className={`transition-all duration-500 ${scrolled ? "h-10" : "h-12"} w-auto`}
          />
          <span className="hidden font-display text-lg font-bold text-primary sm:block">
            اعلانات عبدول
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
          <a className="transition-colors hover:text-primary" href="#services">
            خدماتنا
          </a>
          <a className="transition-colors hover:text-primary" href="#portfolio">
            أعمالنا
          </a>
          <a className="transition-colors hover:text-primary" href="#process">
            خطوات العمل
          </a>
          <a className="transition-colors hover:text-primary" href="#pricing">
            الأسعار
          </a>
          <a className="transition-colors hover:text-primary" href="#testimonials">
            آراء العملاء
          </a>
          <a className="transition-colors hover:text-primary" href="#about">
            من نحن
          </a>
          <a className="transition-colors hover:text-primary" href="#tiktok">
            تيك توك مجاناً
          </a>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
        >
          تواصل معنا
        </a>
      </div>
    </header>
  );
}

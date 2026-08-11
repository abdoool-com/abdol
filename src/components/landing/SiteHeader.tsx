import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg.asset.json";
import { WHATSAPP_URL } from "./links";

const links = [
  { href: "#services", label: "خدماتنا" },
  { href: "#portfolio", label: "أعمالنا" },
  { href: "#process", label: "خطوات العمل" },
  { href: "#pricing", label: "الأسعار" },
  { href: "#testimonials", label: "آراء العملاء" },
  { href: "#about", label: "من نحن" },
  { href: "#tiktok", label: "تيك توك مجاناً" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-2 shadow-[var(--shadow-soft)]" : "border-b border-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="group flex items-center gap-3">
          <img
            src={logo.url}
            alt="شعار اعلانات عبدول"
            className={`mix-blend-multiply transition-all duration-500 group-hover:scale-105 ${
              scrolled ? "h-10" : "h-12"
            } w-auto`}
          />
          <span className="hidden font-display text-lg font-bold text-primary sm:block">
            اعلانات عبدول
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-active={active === link.href}
              className="nav-link data-[active=true]:text-primary hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] sm:inline-flex"
            style={{ background: "var(--gradient-green)" }}
          >
            تواصل معنا
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            className="glass inline-flex h-11 w-11 items-center justify-center rounded-full text-primary transition-transform duration-300 hover:scale-105 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden px-5 transition-all duration-500 lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="glass mx-auto mt-3 grid max-w-6xl gap-1 rounded-2xl p-3 text-sm font-bold text-primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 transition-colors hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 rounded-xl px-4 py-3 text-center text-primary-foreground"
            style={{ background: "var(--gradient-green)" }}
          >
            تواصل معنا
          </a>
        </nav>
      </div>
    </header>
  );
}

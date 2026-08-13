import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/لوجو اعلانات عبدول.jpeg";
import { WHATSAPP_URL } from "./links";
import { trackEvent } from "@/lib/analytics";

const NAV_LINKS = [
  { href: "#services",     label: "خدماتنا" },
  { href: "#about",        label: "من نحن" },
];

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const allLinks = [...NAV_LINKS, { href: "#tiktok", label: "" }];
    const sections = allLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.3] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Close drawer on resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: "#ffffff",
        boxShadow: scrolled
          ? "0 1px 0 #DFE9E0, 0 4px 20px rgba(20,116,20,0.06)"
          : "0 1px 0 #DFE9E0",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 sm:py-3" dir="rtl">

        {/* ── Brand ── */}
        <a href="#top" className="flex shrink-0 items-center gap-2 group">
          <img
            src={logo}
            alt="اعلانات عبدول"
            className="h-9 w-9 rounded-xl object-contain sm:h-11 sm:w-11"
            style={{ boxShadow: "0 2px 8px rgba(20,116,20,0.12)" }}
          />
          <div className="flex flex-col">
            <span
              className="text-sm font-bold leading-tight sm:text-base"
              style={{ color: "#142018", fontFamily: "IBM Plex Sans Arabic, Cairo, sans-serif" }}
            >
              اعلانات عبدول
            </span>
            <span className="hidden text-[11px] sm:block" style={{ color: "#68736B" }}>
              e.elads.com
            </span>
          </div>
        </a>

        {/* ── Desktop Nav ── */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => trackEvent("click_nav", { link: link.label })}
              data-active={active === link.href}
              className="nav-link text-sm"
            >
              {link.label}
            </a>
          ))}
          {/* TikTok promo */}
          <a
            href="#tiktok"
            onClick={() => trackEvent("click_tiktok", { location: "header_desktop" })}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "#FFF8DF", color: "#a07c00", border: "1px solid #e8d068" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.27 8.27 0 004.84 1.55V6.84a4.85 4.85 0 01-1.07-.15z" />
            </svg>
            تيك توك مجاناً
          </a>
        </nav>

        {/* ── CTA + Hamburger ── */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_whatsapp", { location: "header_desktop" })}
            className="hidden items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 sm:inline-flex"
            style={{ background: "var(--gradient-green)", boxShadow: "0 4px 16px rgba(20,116,20,0.28)" }}
          >
            {WA_ICON}
            تواصل معنا
          </a>

          {/* WA icon-only on mobile */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل معنا"
            onClick={() => trackEvent("click_whatsapp", { location: "header_mobile_icon" })}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-white sm:hidden"
            style={{ background: "var(--gradient-green)" }}
          >
            {WA_ICON}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-xl border lg:hidden"
            style={{ borderColor: "#DFE9E0", color: "#147414" }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile / Tablet Drawer ── */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-[32rem] pb-4 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "#ffffff", borderTop: "1px solid #DFE9E0" }}
      >
        <nav className="mx-auto grid max-w-7xl gap-0.5 px-4 pt-3 sm:px-6" dir="rtl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => { setOpen(false); trackEvent("click_nav", { link: link.label }); }}
              className="min-h-[44px] flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-[#EFF7F0]"
              style={{ color: "#142018" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#tiktok"
            onClick={() => { setOpen(false); trackEvent("click_tiktok", { location: "header_mobile" }); }}
            className="min-h-[44px] flex items-center rounded-xl px-4 py-3 text-sm font-semibold"
            style={{ color: "#a07c00", background: "#FFF8DF" }}
          >
            🎵 تيك توك مجاناً
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_whatsapp", { location: "header_drawer" })}
            className="mt-2 flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white"
            style={{ background: "var(--gradient-green)" }}
          >
            {WA_ICON}
            تواصل معنا
          </a>
        </nav>
      </div>
    </header>
  );
}

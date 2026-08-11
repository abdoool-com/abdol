import logo from "@/assets/لوجو اعلانات عبدول.jpeg";
import { TIKTOK_URL, WHATSAPP_URL } from "./links";

const NAV_COLS = [
  {
    title: "الخدمات",
    links: [
      { label: "التسويق الرقمي",         href: "#services" },
      { label: "إدارة السوشيال ميديا",   href: "#services" },
      { label: "المواد الإعلانية",        href: "#services" },
      { label: "الحملات التسويقية",       href: "#services" },
      { label: "الخطط التسويقية",         href: "#services" },
      { label: "إدارة المتاجر",           href: "#services" },
    ],
  },
  {
    title: "الموقع",
    links: [
      { label: "أعمالنا",       href: "#portfolio" },
      { label: "الأسعار",       href: "#pricing" },
      { label: "آراء العملاء",  href: "#testimonials" },
      { label: "من نحن",        href: "#about" },
      { label: "تيك توك مجاناً", href: "#tiktok" },
    ],
  },
  {
    title: "تواصل معنا",
    links: [
      { label: "واتساب",    href: WHATSAPP_URL, external: true },
      { label: "تيك توك",   href: TIKTOK_URL,   external: true },
      { label: "e.elads.com", href: "#top"                     },
    ],
  },
];

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 sm:h-5 sm:w-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function SiteFooter() {
  return (
    <footer style={{ background: "#0B4D16" }}>
      {/* ── Main footer content ── */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16" dir="rtl">
        {/*
          Mobile:   1-col stacked
          Tablet:   2-col (brand + links side by side, links in 2-col sub-grid)
          Desktop:  4-col [2fr 1fr 1fr 1fr]
        */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand column — full width on mobile, left on tablet */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo} alt="اعلانات عبدول"
                className="h-12 w-12 rounded-xl object-contain sm:h-14 sm:w-14"
                style={{ background: "#fff", padding: 4 }} />
              <div>
                <p className="text-sm font-bold text-white sm:text-base"
                  style={{ fontFamily: "IBM Plex Sans Arabic, Cairo, sans-serif" }}>
                  اعلانات عبدول
                </p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>e.elads.com</p>
              </div>
            </div>

            <p className="mt-4 text-xs leading-loose sm:mt-5 sm:text-sm"
              style={{ color: "rgba(255,255,255,0.65)", maxWidth: 280 }}>
              حلول تسويقية متكاملة تساعد علامتك التجارية على النمو والوصول إلى عملائها بفعالية واحترافية.
            </p>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "#147414", border: "1px solid rgba(255,255,255,0.15)" }}>
              {WA_ICON}
              تواصل معنا
            </a>
          </div>

          {/* Link columns — 2-col sub-grid on tablet (within the 2nd sm-col), 3 separate cols on desktop */}
          <div className="grid grid-cols-2 gap-8 sm:col-span-2 sm:grid-cols-3 lg:col-span-3 lg:grid-cols-3">
            {NAV_COLS.map((col) => (
              <div key={col.title}>
                <h3 className="mb-3 text-xs font-bold text-white sm:mb-4 sm:text-sm"
                  style={{ fontFamily: "IBM Plex Sans Arabic, Cairo, sans-serif" }}>
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-2 sm:gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={"external" in link && link.external ? "_blank" : undefined}
                        rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                        className="text-xs transition-colors duration-200 sm:text-sm"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                        onMouseEnter={e => ((e.target as HTMLElement).style.color = "#ffffff")}
                        onMouseLeave={e => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-1.5 px-4 py-3 text-center sm:flex-row sm:justify-between sm:px-6 sm:py-4"
          dir="rtl">
          <p className="text-[10px] sm:text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            جميع الحقوق محفوظة لموقع إعلانات عبدول 2026
          </p>
          <p className="text-[10px] sm:text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            فرع من شركة مجتمع أخضر القابضة
          </p>
        </div>
      </div>
    </footer>
  );
}

import logo from "@/assets/logo.jpeg.asset.json";
import { TIKTOK_URL, WHATSAPP_URL } from "./links";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <img src={logo.url} alt="شعار اعلانات عبدول" className="h-16 w-auto" />
        <div className="flex flex-wrap justify-center gap-5 text-sm font-bold text-primary">
          <a className="transition-colors hover:text-accent-foreground" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            واتساب
          </a>
          <a className="transition-colors hover:text-accent-foreground" href={TIKTOK_URL} target="_blank" rel="noopener noreferrer">
            تيك توك
          </a>
          <a className="transition-colors hover:text-accent-foreground" href="#services">
            خدماتنا
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          جميع الحقوق محفوظة لموقع اعلانات عبدول 2026
        </p>
      </div>
    </footer>
  );
}

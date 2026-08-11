import { WHATSAPP_URL } from "./links";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا على واتساب"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-110"
      style={{ background: "var(--gradient-green)" }}
    >
      <span aria-hidden className="animate-glow-pulse absolute inset-0 rounded-full bg-gold/40 blur-lg" />
      <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-7 w-7">
        <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.28 4.86L2 22l5.3-1.38a9.9 9.9 0 0 0 4.74 1.2c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.32-1.94 1.36-.54.04-1.02.24-3.44-.86s-3.9-3.7-4.02-3.88c-.12-.18-.86-1.22-.82-2.3.04-1.08.62-1.6.84-1.82.22-.22.48-.28.64-.28h.46c.16 0 .38-.06.58.46l.8 1.96c.06.16.1.34-.02.54-.12.2-.4.5-.5.62-.1.12-.2.26-.08.5.12.24.54.94 1.16 1.52.8.74 1.46 1 1.7 1.12.24.12.4.1.54-.06.14-.16.6-.72.76-.96.16-.24.32-.2.54-.12l1.86.9c.52.24.44.36.44.52 0 .16 0 .58-.24 1.26Z" />
      </svg>
    </a>
  );
}

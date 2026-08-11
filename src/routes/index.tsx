import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { VisitorCounter } from "@/components/landing/VisitorCounter";
import { About } from "@/components/landing/About";
import { TikTokBanner } from "@/components/landing/TikTokBanner";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

const title = "اعلانات عبدول | حلول تسويقية تصنع الفرق";
const description =
  "خدمات تسويقية متكاملة: تسويق رقمي، إدارة سوشيال ميديا، مواد إعلانية، حملات وخطط تسويقية وإدارة متاجر. تواصل معنا على واتساب.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <VisitorCounter />
        <About />
        <TikTokBanner />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}

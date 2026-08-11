import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(delay);
  return (
    <div ref={ref} data-visible={visible} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

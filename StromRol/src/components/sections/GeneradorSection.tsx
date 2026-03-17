import type { ReactNode } from "react";

type GeneradorSectionProps = {
  isActive: boolean;
  children: ReactNode;
};

export default function GeneradorSection({
  isActive,
  children,
}: GeneradorSectionProps) {
  if (!isActive) return null;
  return <>{children}</>;
}

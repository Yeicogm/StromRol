import type { ReactNode } from "react";

type CompendioSectionProps = {
  isActive: boolean;
  children: ReactNode;
};

export default function CompendioSection({
  isActive,
  children,
}: CompendioSectionProps) {
  if (!isActive) return null;
  return <>{children}</>;
}

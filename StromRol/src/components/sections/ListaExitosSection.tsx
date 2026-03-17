import type { ReactNode } from "react";

type ListaExitosSectionProps = {
  isActive: boolean;
  content: ReactNode;
  emptyMessage: string;
};

export default function ListaExitosSection({
  isActive,
  content,
  emptyMessage,
}: ListaExitosSectionProps) {
  if (!isActive) return null;

  if (content) {
    return <>{content}</>;
  }

  return <div className="ficha-tab-empty">{emptyMessage}</div>;
}

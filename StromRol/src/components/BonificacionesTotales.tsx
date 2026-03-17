import { extraerBonificacionHabilidad } from "../interfaces/Habilidades";
import type { Raza } from "../interfaces/RazasInterface";
import type { Clase } from "../interfaces/ClasesInterface";
import type { Origen } from "../interfaces/Origen";

type Props = {
  raza: Raza | null;
  clase: Clase | null;
  origen: Origen | null;
};

export default function BonificacionesTotales({ raza, clase, origen }: Props) {
  if (!raza && !clase && !origen) return null;

  const bonificacionesTotales: { [key: string]: number } = {};

  if (raza) {
    Object.entries(raza.bonificaciones).forEach(([habilidad, bonus]) => {
      if (typeof bonus === "number") {
        bonificacionesTotales[habilidad] =
          (bonificacionesTotales[habilidad] || 0) + bonus;
      } else if (typeof bonus === "string") {
        const valorNumerico = parseInt(bonus.replace(/[+-]/g, "")) || 0;
        const signo = bonus.startsWith("-") ? -1 : 1;
        bonificacionesTotales[habilidad] =
          (bonificacionesTotales[habilidad] || 0) + valorNumerico * signo;
      }
    });
  }

  if (clase && clase.variacion_habilidades) {
    clase.variacion_habilidades.forEach((habilidadTexto) => {
      const trimmed = habilidadTexto.trim();
      if (
        trimmed.includes("Regeneración de SM") ||
        trimmed.includes("al día") ||
        trimmed.includes("1D6") ||
        trimmed === ""
      )
        return;
      const bonificacion = extraerBonificacionHabilidad(trimmed);
      if (bonificacion) {
        bonificacionesTotales[bonificacion.habilidad] =
          (bonificacionesTotales[bonificacion.habilidad] || 0) +
          bonificacion.valor;
        return;
      }
      if (trimmed.includes("100%") || trimmed.includes("+100")) {
        const nombreHabilidad = trimmed
          .replace(/(\+100|100\s*%).*$/, "")
          .trim();
        if (nombreHabilidad) bonificacionesTotales[nombreHabilidad] = 100;
      }
    });
  }

  if (origen && origen.variacion_habilidades) {
    origen.variacion_habilidades.forEach((habilidadTexto) => {
      const trimmed = habilidadTexto.trim();
      if (
        trimmed.includes("Regeneración de SM") ||
        trimmed.includes("al día") ||
        trimmed.includes("1D6") ||
        trimmed === ""
      )
        return;
      const bonificacion = extraerBonificacionHabilidad(trimmed);
      if (bonificacion) {
        bonificacionesTotales[bonificacion.habilidad] =
          (bonificacionesTotales[bonificacion.habilidad] || 0) +
          bonificacion.valor;
        return;
      }
      if (trimmed.includes("100%") || trimmed.includes("+100")) {
        const nombreHabilidad = trimmed
          .replace(/(\+100|100\s*%).*$/, "")
          .trim();
        if (nombreHabilidad) bonificacionesTotales[nombreHabilidad] = 100;
      }
    });
  }

  if (Object.keys(bonificacionesTotales).length === 0) return null;

  return (
    <div className="ficha-resultado">
      <h3 className="ficha-resultado-title">
        Total de Bonificaciones (Raza + Clase + Origen):
      </h3>
      <ul className="ficha-resultado-list">
        {Object.entries(bonificacionesTotales).map(([habilidad, total]) => (
          <li key={habilidad} className="ficha-resultado-item">
            <b className="ficha-resultado-carac">{habilidad}:</b>{" "}
            <span className="raza-chip raza-chip-success bonificacion-chip">
              {total > 0 ? `+${total}` : total}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

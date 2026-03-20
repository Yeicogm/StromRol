import type { Clase } from "../interfaces/ClasesInterface";
import type { Origen } from "../interfaces/Origen";
import type { Raza } from "../interfaces/RazasInterface";
import BonificacionesTotales from "./BonificacionesTotales";

export type HabilidadesResultado = {
  bonusCC: string;
  bonusAA: string;
  conocimiento: number;
  percepcion: number;
  comunicacion: number;
  agilidad: number;
  manipulacion: number;
  discrecion: number;
  saludMental: number;
  puntosVida: number;
};

type Props = {
  resultado: HabilidadesResultado;
  origen: Origen | null;
  clase: Clase | null;
  raza: Raza | null;
};

type BonusCombateValor = string | number | undefined;

function sumarBonus(a: BonusCombateValor, b: BonusCombateValor): string {
  const numA =
    typeof a === "string" ? parseInt(a) : typeof a === "number" ? a : 0;
  const numB =
    typeof b === "string" ? parseInt(b) : typeof b === "number" ? b : 0;
  const total = numA + numB;
  if (
    (typeof a === "string" && a.includes("%")) ||
    (typeof b === "string" && b.includes("%"))
  ) {
    return `${total > 0 ? "+" : ""}${total}%`;
  }
  return `${total > 0 ? "+" : ""}${total}`;
}

export default function ResultadoHabilidades({
  resultado,
  origen,
  clase,
  raza,
}: Props) {
  return (
    <>
      <div className="raza-card">
        <div className="raza-content">
          <h4 className="raza-section-title">Resultados de habilidades</h4>
          <div className="raza-list">
            <div className="raza-list-item">
              <span className="raza-bonus-name">
                {resultado.bonusCC.split(":")[0]}:
              </span>
              <span className="raza-chip raza-chip-secondary">
                {resultado.bonusCC.split(":")[1]}
              </span>
            </div>
            <div className="raza-list-item">
              <span className="raza-bonus-name">
                {resultado.bonusAA.split(":")[0]}:
              </span>
              <span className="raza-chip raza-chip-secondary">
                {resultado.bonusAA.split(":")[1]}
              </span>
            </div>
            <div className="raza-list-item">
              <span className="raza-bonus-name">Puntos de vida:</span>
              <span className="raza-chip raza-chip-pv">
                {resultado.puntosVida}
              </span>
            </div>
            <div className="raza-list-item">
              <span className="raza-bonus-name">Conocimiento:</span>
              <span className="raza-chip raza-chip-success">
                {resultado.conocimiento}
              </span>
            </div>
            <div className="raza-list-item">
              <span className="raza-bonus-name">Percepción:</span>
              <span className="raza-chip raza-chip-success">
                {resultado.percepcion}
              </span>
            </div>
            <div className="raza-list-item">
              <span className="raza-bonus-name">Comunicación:</span>
              <span className="raza-chip raza-chip-success">
                {resultado.comunicacion}
              </span>
            </div>
            <div className="raza-list-item">
              <span className="raza-bonus-name">Agilidad:</span>
              <span className="raza-chip raza-chip-success">
                {resultado.agilidad}
              </span>
            </div>
            <div className="raza-list-item">
              <span className="raza-bonus-name">Manipulación:</span>
              <span className="raza-chip raza-chip-success">
                {resultado.manipulacion}
              </span>
            </div>
            <div className="raza-list-item">
              <span className="raza-bonus-name">Discreción:</span>
              <span className="raza-chip raza-chip-success">
                {resultado.discrecion}
              </span>
            </div>
            <div className="raza-list-item">
              <span className="raza-bonus-name">Salud Mental:</span>
              <span className="raza-chip raza-chip-mental">
                {resultado.saludMental}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bonus de combate */}
      {origen && (
        <div className="raza-card">
          <div className="raza-content">
            <h4 className="raza-section-title">Bonus de combate</h4>
            <div className="raza-list">
              {(() => {
                const bonusClase = clase?.Bonus_combate || {};
                const bonusOrigen = origen.variacion_bonus_combate || {};
                const ataque = sumarBonus(
                  bonusClase && "ataque" in bonusClase
                    ? (bonusClase.ataque as BonusCombateValor)
                    : undefined,
                  bonusOrigen && "ataque" in bonusOrigen
                    ? (bonusOrigen.ataque as BonusCombateValor)
                    : undefined,
                );
                const ataqueNumerico = parseInt(ataque, 10);
                const mostrarNotaAtaqueRaza =
                  !Number.isNaN(ataqueNumerico) && ataqueNumerico <= 10;
                const defensa = sumarBonus(
                  bonusClase && "defensa" in bonusClase
                    ? (bonusClase.defensa as BonusCombateValor)
                    : undefined,
                  bonusOrigen && "defensa" in bonusOrigen
                    ? (bonusOrigen.defensa as BonusCombateValor)
                    : undefined,
                );
                const armasArrojadizas = sumarBonus(
                  bonusClase && "armas_arrojadizas" in bonusClase
                    ? (bonusClase.armas_arrojadizas as BonusCombateValor)
                    : undefined,
                  bonusOrigen && "armas_arrojadizas" in bonusOrigen
                    ? (bonusOrigen.armas_arrojadizas as BonusCombateValor)
                    : undefined,
                );
                return (
                  <>
                    <div className="raza-list-item">
                      <span className="raza-bonus-name">Ataque:</span>
                      <span className="raza-chip raza-chip-secondary">
                        {ataque}
                      </span>
                    </div>
                    {mostrarNotaAtaqueRaza && (
                      <p className="raza-bonus-hint">
                        El bonus de combate se indican en la zona de Raza.
                      </p>
                    )}
                    <div className="raza-list-item">
                      <span className="raza-bonus-name">Defensa:</span>
                      <span className="raza-chip raza-chip-secondary">
                        {defensa}
                      </span>
                    </div>
                    <div className="raza-list-item">
                      <span className="raza-bonus-name">
                        Armas Arrojadizas:
                      </span>
                      <span className="raza-chip raza-chip-secondary">
                        {armasArrojadizas}
                      </span>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Total de bonificaciones */}
      <BonificacionesTotales raza={raza} clase={clase} origen={origen} />
    </>
  );
}

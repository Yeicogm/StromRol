import type { Origen } from "../interfaces/Origen";

type Props = { origen: Origen };

export default function OrigenInfo({ origen }: Props) {
  return (
    <div className="raza-card">
      <div className="raza-content">
        <h3 className="raza-title">Origen: {origen.nombre}</h3>
        {origen.info_Origen && origen.info_Origen.trim() !== "" && (
          <p className="raza-description">{origen.info_Origen}</p>
        )}
        <hr className="raza-divider" />
        {origen.variacion_habilidades &&
          origen.variacion_habilidades.length > 0 && (
            <div className="raza-section">
              <h4 className="raza-section-title">
                Bonificaciones de Habilidades
              </h4>
              <div className="raza-list">
                {origen.variacion_habilidades.map((habilidad, idx) => (
                  <div key={idx} className="raza-list-item">
                    <span className="raza-bonus-name">{habilidad}</span>
                    <span className="raza-chip raza-chip-secondary">
                      Habilidad
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        {origen.variacion_bonus_combate &&
          Object.keys(origen.variacion_bonus_combate).length > 0 && (
            <div className="raza-section">
              <h4 className="raza-section-title">Bonus de Combate</h4>
              <div className="raza-list">
                {Object.entries(origen.variacion_bonus_combate).map(
                  ([tipo, valor], idx) => (
                    <div key={idx} className="raza-list-item">
                      <span className="raza-bonus-name">{tipo}:</span>
                      <span className="raza-chip raza-chip-secondary">
                        {valor}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

import type { Clase } from "../interfaces/ClasesInterface";

type Props = { clase: Clase };

export default function ClaseInfo({ clase }: Props) {
  return (
    <div className="raza-card">
      <div className="raza-content">
        <h3 className="raza-title">{clase.nombre}</h3>
        <p className="raza-description">{clase.descripcion}</p>
        <hr className="raza-divider" />
        <div className="raza-info-grid">
          {clase.variacion_caracteristicas &&
            Array.isArray(clase.variacion_caracteristicas) &&
            clase.variacion_caracteristicas.length > 0 && (
              <div className="raza-section">
                <h4 className="raza-section-title">
                  Variaciones de Características
                </h4>
                <div className="raza-list">
                  {clase.variacion_caracteristicas.map((variacion, index) => (
                    <div key={index} className="raza-list-item">
                      <span className="raza-characteristic-name">
                        {variacion}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          {clase.variacion_caracMINMAX &&
            clase.variacion_caracMINMAX.length > 0 && (
              <div className="raza-section">
                <h4 className="raza-section-title">
                  Limitaciones de Características
                </h4>
                <div className="raza-list">
                  {clase.variacion_caracMINMAX.map((limitacion, index) => (
                    <div key={index} className="raza-list-item">
                      <span className="raza-characteristic-name">
                        {limitacion}
                      </span>
                      <span className="raza-chip raza-chip-warning">
                        Límite
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          {clase.variacion_habilidades &&
            clase.variacion_habilidades.length > 0 && (
              <div className="raza-section">
                <h4 className="raza-section-title">
                  Bonificaciones de Habilidades
                </h4>
                <div className="raza-list">
                  {clase.variacion_habilidades.map((habilidad, index) => (
                    <div key={index} className="raza-list-item">
                      <span className="raza-bonus-name">{habilidad}</span>
                      <span className="raza-chip raza-chip-secondary">
                        Habilidad
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
        {clase.Bonus_combate && (
          <>
            <hr className="raza-divider" />
            <div className="raza-section">
              <h4 className="raza-section-title">Bonus de Combate</h4>
              <div className="raza-list">
                <div className="raza-list-item">
                  <span className="raza-bonus-name">Ataque:</span>
                  <span className="raza-chip raza-chip-secondary">
                    {clase.Bonus_combate.ataque}
                  </span>
                </div>
                <div className="raza-list-item">
                  <span className="raza-bonus-name">Defensa:</span>
                  <span className="raza-chip raza-chip-secondary">
                    {clase.Bonus_combate.defensa}
                  </span>
                </div>
                {clase.Bonus_combate.armas_arrojadizas && (
                  <div className="raza-list-item">
                    <span className="raza-bonus-name">Armas Arrojadizas:</span>
                    <span className="raza-chip raza-chip-secondary">
                      {clase.Bonus_combate.armas_arrojadizas}
                    </span>
                  </div>
                )}
                {clase.Bonus_combate.montado_a_caballo && (
                  <div className="raza-list-item">
                    <span className="raza-bonus-name">Montado a Caballo:</span>
                    <span className="raza-chip raza-chip-secondary">
                      {clase.Bonus_combate.montado_a_caballo}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        <hr className="raza-divider" />
        <div className="raza-additional-info">
          <div className="raza-info-item">
            <span className="raza-info-label">Rango</span>
            <span className="raza-info-value">{clase.rango}</span>
          </div>
          <div className="raza-info-item">
            <span className="raza-info-label">Cualidades</span>
            <span className="raza-info-value">{clase.cualidades}</span>
          </div>
          {clase.equipo_especial && (
            <div className="raza-info-item">
              <span className="raza-info-label">Equipo Especial</span>
              <span className="raza-info-value">{clase.equipo_especial}</span>
            </div>
          )}
        </div>
        {clase.especial && (
          <>
            <hr className="raza-divider" />
            <h4 className="raza-section-title">Habilidades Especiales</h4>
            <div className="raza-notes">
              <p className="raza-notes-text">{clase.especial}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

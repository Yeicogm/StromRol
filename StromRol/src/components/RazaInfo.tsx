import type { Raza } from "../interfaces/RazasInterface";

type Props = { raza: Raza };

export default function RazaInfo({ raza }: Props) {
  return (
    <div className="raza-card">
      <div className="raza-content">
        <h3 className="raza-title">{raza.nombre}</h3>
        <p className="raza-description">{raza.descripcion}</p>
        <hr className="raza-divider" />
        <div className="raza-info-grid">
          <div className="raza-section">
            <h4 className="raza-section-title">Características</h4>
            <div className="raza-list">
              {Object.entries(raza.caracteristicas).map(([carac, valor]) => (
                <div key={carac} className="raza-list-item">
                  <span className="raza-characteristic-name">{carac}:</span>
                  <span className="raza-chip raza-chip-secondary">{valor}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="raza-section">
            <h4 className="raza-section-title">Bonificaciones</h4>
            <div className="raza-list">
              {Object.entries(raza.bonificaciones).map(([habilidad, bonus]) => (
                <div key={habilidad} className="raza-list-item">
                  <span className="raza-bonus-name">{habilidad}:</span>
                  <span className="raza-chip raza-chip-success">{bonus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="raza-divider" />
        <div className="raza-additional-info">
          <div className="raza-info-item">
            <span className="raza-info-label">Rango</span>
            <span className="raza-info-value">{raza.rango}</span>
          </div>
          {raza.armadura && (
            <div className="raza-info-item">
              <span className="raza-info-label">Armadura</span>
              <span className="raza-info-value">{raza.armadura}</span>
            </div>
          )}
          {raza.ataque && (
            <div className="raza-info-item">
              <span className="raza-info-label">Ataque</span>
              <span className="raza-info-value">{raza.ataque}</span>
            </div>
          )}
        </div>
        {raza.notas && (
          <>
            <hr className="raza-divider" />
            <h4 className="raza-section-title">Notas</h4>
            <div className="raza-notes">
              <p className="raza-notes-text">{raza.notas}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

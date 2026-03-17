import type { Nacionalidad } from "../interfaces/Nacionalidad";

type Props = { nacionalidad: Nacionalidad };

export default function NacionalidadInfo({ nacionalidad }: Props) {
  return (
    <div className="raza-card">
      <div className="raza-content">
        <h3 className="raza-title">Nacionalidad: {nacionalidad.nombre}</h3>
        <hr className="raza-divider" />
        {nacionalidad.variacion_caracteristicas &&
          nacionalidad.variacion_caracteristicas.length > 0 && (
            <div className="raza-section">
              <h4 className="raza-section-title">
                Variaciones de Características
              </h4>
              <div className="raza-list">
                {nacionalidad.variacion_caracteristicas.map(
                  (variacion, idx) => (
                    <div key={idx} className="raza-list-item">
                      <span className="raza-characteristic-name">
                        {variacion}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          )}
        {nacionalidad.origen_social && (
          <div className="raza-section">
            <h4 className="raza-section-title">Origen social</h4>
            <div className="raza-list">
              {Array.isArray(nacionalidad.origen_social) ? (
                nacionalidad.origen_social.map((origen, idx) => (
                  <div key={idx} className="raza-list-item">
                    <span className="raza-characteristic-name">{origen}</span>
                  </div>
                ))
              ) : (
                <div className="raza-list-item">
                  <span className="raza-characteristic-name">
                    {nacionalidad.origen_social}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import "./App.css";
import { calcularCaracteristicasFinales } from "./logic/logica";
import type { Raza } from "./interfaces/RazasInterface";
import type { Clase } from "./interfaces/ClasesInterface";

function App() {
  const [razas, setRazas] = useState<Raza[]>([]);
  const [clases, setClases] = useState<Clase[]>([]);
  const [razaSeleccionada, setRazaSeleccionada] = useState<Raza | null>(null);
  const [claseSeleccionada, setClaseSeleccionada] = useState<Clase | null>(
    null
  );
  const [resultado, setResultado] = useState<{ [key: string]: string } | null>(
    null
  );

  const renderRazaInfo = () => {
    if (!razaSeleccionada) return null;

    return (
      <div className="raza-card">
        <div className="raza-content">
          <h3 className="raza-title">
            {razaSeleccionada.nombre}
          </h3>
          
          <p className="raza-description">
            {razaSeleccionada.descripcion}
          </p>

          <hr className="raza-divider" />

          <div className="raza-info-grid">
            {/* Características */}
            <div className="raza-section">
              <h4 className="raza-section-title">
                Características
              </h4>
              <div className="raza-list">
                {Object.entries(razaSeleccionada.caracteristicas).map(([carac, valor]) => (
                  <div key={carac} className="raza-list-item">
                    <span className="raza-characteristic-name">
                      {carac}:
                    </span>
                    <span className="raza-chip raza-chip-secondary">
                      {valor}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bonificaciones */}
            <div className="raza-section">
              <h4 className="raza-section-title">
                Bonificaciones
              </h4>
              <div className="raza-list">
                {Object.entries(razaSeleccionada.bonificaciones).map(([habilidad, bonus]) => (
                  <div key={habilidad} className="raza-list-item">
                    <span className="raza-bonus-name">
                      {habilidad}:
                    </span>
                    <span className="raza-chip raza-chip-success">
                      {bonus}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <hr className="raza-divider" />
          <div className="raza-additional-info">
            <div className="raza-info-item">
              <span className="raza-info-label">Rango</span>
              <span className="raza-info-value">{razaSeleccionada.rango}</span>
            </div>
            {razaSeleccionada.armadura && (
              <div className="raza-info-item">
                <span className="raza-info-label">Armadura</span>
                <span className="raza-info-value">{razaSeleccionada.armadura}</span>
              </div>
            )}
            {razaSeleccionada.ataque && (
              <div className="raza-info-item">
                <span className="raza-info-label">Ataque</span>
                <span className="raza-info-value">{razaSeleccionada.ataque}</span>
              </div>
            )}
          </div>

          {razaSeleccionada.notas && (
            <>
              <hr className="raza-divider" />
              <h4 className="raza-section-title">Notas</h4>
              <div className="raza-notes">
                <p className="raza-notes-text">
                  {razaSeleccionada.notas}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  const renderClaseInfo = () => {
    if (!claseSeleccionada) return null;

    return (
      <div className="raza-card">
        <div className="raza-content">
          <h3 className="raza-title">
            {claseSeleccionada.nombre}
          </h3>
          
          <p className="raza-description">
            {claseSeleccionada.descripcion}
          </p>

          <hr className="raza-divider" />

          <div className="raza-info-grid">
            {/* Variaciones de Características */}
            {claseSeleccionada.variacion_caracteristicas && 
             Array.isArray(claseSeleccionada.variacion_caracteristicas) && 
             claseSeleccionada.variacion_caracteristicas.length > 0 && (
              <div className="raza-section">
                <h4 className="raza-section-title">
                  Variaciones de Características
                </h4>
                <div className="raza-list">
                  {claseSeleccionada.variacion_caracteristicas.map((variacion, index) => (
                    <div key={index} className="raza-list-item">
                      <span className="raza-characteristic-name">
                        {variacion}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bonificaciones de Habilidades */}
            {claseSeleccionada.variacion_habilidades && (
              <div className="raza-section">
                <h4 className="raza-section-title">
                  Bonificaciones de Habilidades
                </h4>
                <div className="raza-list">
                  <div className="raza-list-item">
                    <span className="raza-bonus-name">
                      {claseSeleccionada.variacion_habilidades}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bonus de Combate */}
          {claseSeleccionada.Bonus_combate && (
            <>
              <hr className="raza-divider" />
              <div className="raza-section">
                <h4 className="raza-section-title">Bonus de Combate</h4>
                <div className="raza-list">
                  <div className="raza-list-item">
                    <span className="raza-bonus-name">Ataque:</span>
                    <span className="raza-chip raza-chip-secondary">
                      {claseSeleccionada.Bonus_combate.ataque}
                    </span>
                  </div>
                  <div className="raza-list-item">
                    <span className="raza-bonus-name">Defensa:</span>
                    <span className="raza-chip raza-chip-secondary">
                      {claseSeleccionada.Bonus_combate.defensa}
                    </span>
                  </div>
                  {claseSeleccionada.Bonus_combate.armas_arrojadizas && (
                    <div className="raza-list-item">
                      <span className="raza-bonus-name">Armas Arrojadizas:</span>
                      <span className="raza-chip raza-chip-secondary">
                        {claseSeleccionada.Bonus_combate.armas_arrojadizas}
                      </span>
                    </div>
                  )}
                  {claseSeleccionada.Bonus_combate.montado_a_caballo && (
                    <div className="raza-list-item">
                      <span className="raza-bonus-name">Montado a Caballo:</span>
                      <span className="raza-chip raza-chip-secondary">
                        {claseSeleccionada.Bonus_combate.montado_a_caballo}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Información adicional */}
          <hr className="raza-divider" />
          <div className="raza-additional-info">
            <div className="raza-info-item">
              <span className="raza-info-label">Rango</span>
              <span className="raza-info-value">{claseSeleccionada.rango}</span>
            </div>
            <div className="raza-info-item">
              <span className="raza-info-label">Cualidades</span>
              <span className="raza-info-value">{claseSeleccionada.cualidades}</span>
            </div>
            {claseSeleccionada.equipo_especial && (
              <div className="raza-info-item">
                <span className="raza-info-label">Equipo Especial</span>
                <span className="raza-info-value">{claseSeleccionada.equipo_especial}</span>
              </div>
            )}
          </div>

          {claseSeleccionada.especial && (
            <>
              <hr className="raza-divider" />
              <h4 className="raza-section-title">Habilidades Especiales</h4>
              <div className="raza-notes">
                <p className="raza-notes-text">
                  {claseSeleccionada.especial}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  useEffect(() => {
    // Cargar razas
    fetch("/Razas.json")
      .then((res) => res.json())
      .then((data) => setRazas(data.razas as Raza[]));
    // Cargar clases
    fetch("/Clases.json")
      .then((res) => res.json())
      .then((data) => setClases(data.clases as Clase[]));
  }, []);

  useEffect(() => {
    if (razaSeleccionada && claseSeleccionada) {
      // Adaptar claseSeleccionada para asegurar que variacion_caracteristicas sea string[]
      const claseAdaptada = {
        ...claseSeleccionada,
        variacion_caracteristicas: Array.isArray(claseSeleccionada.variacion_caracteristicas)
          ? claseSeleccionada.variacion_caracteristicas
          : typeof claseSeleccionada.variacion_caracteristicas === "string"
          ? [claseSeleccionada.variacion_caracteristicas]
          : undefined,
      };
      setResultado(
        calcularCaracteristicasFinales(razaSeleccionada, claseAdaptada)
      );
    } else {
      setResultado(null);
    }
  }, [razaSeleccionada, claseSeleccionada]);

  return (
    <div className="ficha-container">
      <h2 className="ficha-title">Generador de Fichas</h2>
      <div className="ficha-select-group">
        <label htmlFor="raza-select" className="ficha-label">
          Raza:&nbsp;
        </label>
        <select
          id="raza-select"
          className="ficha-select"
          value={razaSeleccionada?.nombre || ""}
          onChange={(e) => {
            const r = razas.find((r) => r.nombre === e.target.value);
            setRazaSeleccionada(r || null);
          }}
        >
          <option value="">Elige una raza</option>
          {razas.map((r) => (
            <option key={r.nombre} value={r.nombre}>
              {r.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="ficha-select-group">
        <label htmlFor="clase-select" className="ficha-label">
          Clase:&nbsp;
        </label>
        <select
          id="clase-select"
          className="ficha-select"
          value={claseSeleccionada?.nombre || ""}
          onChange={(e) => {
            const c = clases.find((c) => c.nombre === e.target.value);
            setClaseSeleccionada(c || null);
          }}
        >
          <option value="">Elige una clase</option>
          {clases.map((c) => (
            <option key={c.nombre} value={c.nombre}>
              {c.nombre}
            </option>
          ))}
        </select>
      </div>
      
      {/* Dados para cada característica - Debajo de los combos */}
      {resultado && (
        <div className="ficha-resultado">
          <h3 className="ficha-resultado-title">
            Dados para cada característica:
          </h3>
          <ul className="ficha-resultado-list">
            {Object.entries(resultado).map(([car, dado]) => (
              <li key={car} className="ficha-resultado-item">
                <b className="ficha-resultado-carac">{car}:</b>{" "}
                <span className="ficha-resultado-dado">{dado as string}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Información de la raza seleccionada */}
      {renderRazaInfo()}
      
      {/* Información de la clase seleccionada */}
      {renderClaseInfo()}
    </div>
  );
}

export default App;

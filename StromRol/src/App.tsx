import { useState, useEffect } from "react";
import "./App.css";
import { calcularCaracteristicasFinales } from "./logic/logica";
import { extraerBonificacionHabilidad } from "./interfaces/Habilidades";
import type { Raza } from "./interfaces/RazasInterface";
import type { Clase } from "./interfaces/ClasesInterface";
import type { Caracteristicas } from "./interfaces/Caracteristicas";

function App() {
  // Estado para mostrar el resultado del cálculo de habilidades
  type HabilidadesResultado = {
    bonusCC: string;
    bonusAA: string;
    conocimiento: number;
    percepcion: number;
    comunicacion: number;
    agilidad: number;
    manipulacion: number;
    discrecion: number;
    saludMental: number;
  };
  const [resultadoHabilidades, setResultadoHabilidades] =
    useState<HabilidadesResultado | null>(null);
  const [razas, setRazas] = useState<Raza[]>([]);
  const [clases, setClases] = useState<Clase[]>([]);
  const [razaSeleccionada, setRazaSeleccionada] = useState<Raza | null>(null);
  const [claseSeleccionada, setClaseSeleccionada] = useState<Clase | null>(
    null
  );
  const [resultado, setResultado] = useState<Caracteristicas | null>(null);
  // Estado para los resultados de las tiradas
  const [tiradas, setTiradas] = useState<Record<string, string>>({});

  // Función para tirar dados aleatorios según el formato (ej: "2D6+3")
  function tirarDado(formula: string): number {
    // Ejemplo de fórmula: "2D6+3", "1D10", "3D4-2"
    const regex = /(\d+)D(\d+)([+-]\d+)?/i;
    const match = formula.match(regex);
    if (!match) return 0;
    const cantidad = parseInt(match[1], 10);
    const caras = parseInt(match[2], 10);
    const modificador = match[3] ? parseInt(match[3], 10) : 0;
    let total = 0;
    for (let i = 0; i < cantidad; i++) {
      total += Math.floor(Math.random() * caras) + 1;
    }
    return total + modificador;
  }

  // Genera tiradas aleatorias para cada característica
  const generarTiradasAleatorias = () => {
    if (!resultado) return;
    if (
      Object.values(tiradas).some((v) => v && v.trim() !== "") &&
      !window.confirm(
        "¿Seguro que quieres generar tiradas aleatorias? Se borrarán los valores que hayas insertado manualmente."
      )
    ) {
      return;
    }
    const nuevasTiradas: Record<string, string> = {};
    Object.entries(resultado).forEach(([car, dado]) => {
      if (typeof dado === "string") {
        nuevasTiradas[car] = tirarDado(dado).toString();
      }
    });
    setTiradas(nuevasTiradas);

    // Calcular habilidades automáticamente
    // --- Copia de la lógica del botón Calcular habilidades ---
    const fuerza = parseInt(nuevasTiradas["Fuerza"] || "0", 10);
    let bonusCC = "";
    if (fuerza >= 18 && fuerza <= 23) bonusCC = "+1";
    else if (fuerza >= 24 && fuerza <= 30) bonusCC = "+1D4";
    else if (fuerza >= 31 && fuerza <= 38) bonusCC = "+1D6";
    else if (fuerza >= 39 && fuerza <= 45) bonusCC = "+1D10";
    else if (fuerza >= 46) bonusCC = "+2D6";
    else bonusCC = "Sin bonus";

    const destreza = parseInt(nuevasTiradas["Destreza"] || "0", 10);
    const sumaAA = fuerza + destreza;
    let bonusAA = "Nada";
    if (sumaAA >= 0 && sumaAA <= 24) bonusAA = "Nada";
    else if (sumaAA >= 25 && sumaAA <= 40) bonusAA = "+1D4";
    else if (sumaAA >= 41 && sumaAA <= 52) bonusAA = "+2D4";
    else if (sumaAA >= 53) bonusAA = "2D4+1";

    const int = parseInt(nuevasTiradas["Inteligencia"] || "0", 10);
    const con = parseInt(nuevasTiradas["Constitución"] || "0", 10);
    const pod = parseInt(nuevasTiradas["Poder"] || "0", 10);
    const car = parseInt(nuevasTiradas["Carisma"] || "0", 10);
    const tam = parseInt(nuevasTiradas["Tamaño"] || "0", 10);

    let conocimiento = 0;
    if (int >= 1 && int <= 10) conocimiento = int;
    else if (int >= 11 && int <= 18) conocimiento = int + 20;
    else if (int >= 19) conocimiento = int + 30;

    const percepcion = int + destreza + 10;
    const comunicacion = Math.floor(con / 2) + int + pod + car - 5;
    const agilidad = destreza * 2 + int + pod - tam - 5;
    const manipulacion = int * 2 + destreza + car - 15;
    const discrecion = int + Math.floor(fuerza / 2) + pod + destreza - tam - 5;
    const saludMental = pod + car + int + 40 - con;

    setResultadoHabilidades({
      bonusCC: `Bonus de Fuerza CC: ${bonusCC}`,
      bonusAA: `Bonus de Fuerza AA: ${bonusAA}`,
      conocimiento,
      percepcion,
      comunicacion,
      agilidad,
      manipulacion,
      discrecion,
      saludMental,
    });
  };

  const renderRazaInfo = () => {
    if (!razaSeleccionada) return null;

    return (
      <div className="raza-card">
        <div className="raza-content">
          <h3 className="raza-title">{razaSeleccionada.nombre}</h3>

          <p className="raza-description">{razaSeleccionada.descripcion}</p>

          <hr className="raza-divider" />

          <div className="raza-info-grid">
            {/* Características */}
            <div className="raza-section">
              <h4 className="raza-section-title">Características</h4>
              <div className="raza-list">
                {Object.entries(razaSeleccionada.caracteristicas).map(
                  ([carac, valor]) => (
                    <div key={carac} className="raza-list-item">
                      <span className="raza-characteristic-name">{carac}:</span>
                      <span className="raza-chip raza-chip-secondary">
                        {valor}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Bonificaciones */}
            <div className="raza-section">
              <h4 className="raza-section-title">Bonificaciones</h4>
              <div className="raza-list">
                {Object.entries(razaSeleccionada.bonificaciones).map(
                  ([habilidad, bonus]) => (
                    <div key={habilidad} className="raza-list-item">
                      <span className="raza-bonus-name">{habilidad}:</span>
                      <span className="raza-chip raza-chip-success">
                        {bonus}
                      </span>
                    </div>
                  )
                )}
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
                <span className="raza-info-value">
                  {razaSeleccionada.armadura}
                </span>
              </div>
            )}
            {razaSeleccionada.ataque && (
              <div className="raza-info-item">
                <span className="raza-info-label">Ataque</span>
                <span className="raza-info-value">
                  {razaSeleccionada.ataque}
                </span>
              </div>
            )}
          </div>

          {razaSeleccionada.notas && (
            <>
              <hr className="raza-divider" />
              <h4 className="raza-section-title">Notas</h4>
              <div className="raza-notes">
                <p className="raza-notes-text">{razaSeleccionada.notas}</p>
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
          <h3 className="raza-title">{claseSeleccionada.nombre}</h3>

          <p className="raza-description">{claseSeleccionada.descripcion}</p>

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
                    {claseSeleccionada.variacion_caracteristicas.map(
                      (variacion, index) => (
                        <div key={index} className="raza-list-item">
                          <span className="raza-characteristic-name">
                            {variacion}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

            {/* Bonificaciones de Habilidades */}
            {claseSeleccionada.variacion_habilidades &&
              claseSeleccionada.variacion_habilidades.length > 0 && (
                <div className="raza-section">
                  <h4 className="raza-section-title">
                    Bonificaciones de Habilidades
                  </h4>
                  <div className="raza-list">
                    {claseSeleccionada.variacion_habilidades.map(
                      (habilidad, index) => (
                        <div key={index} className="raza-list-item">
                          <span className="raza-bonus-name">{habilidad}</span>
                        </div>
                      )
                    )}
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
                      <span className="raza-bonus-name">
                        Armas Arrojadizas:
                      </span>
                      <span className="raza-chip raza-chip-secondary">
                        {claseSeleccionada.Bonus_combate.armas_arrojadizas}
                      </span>
                    </div>
                  )}
                  {claseSeleccionada.Bonus_combate.montado_a_caballo && (
                    <div className="raza-list-item">
                      <span className="raza-bonus-name">
                        Montado a Caballo:
                      </span>
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
              <span className="raza-info-value">
                {claseSeleccionada.cualidades}
              </span>
            </div>
            {claseSeleccionada.equipo_especial && (
              <div className="raza-info-item">
                <span className="raza-info-label">Equipo Especial</span>
                <span className="raza-info-value">
                  {claseSeleccionada.equipo_especial}
                </span>
              </div>
            )}
          </div>

          {claseSeleccionada.especial && (
            <>
              <hr className="raza-divider" />
              <h4 className="raza-section-title">Habilidades Especiales</h4>
              <div className="raza-notes">
                <p className="raza-notes-text">{claseSeleccionada.especial}</p>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  const calcularBonificacionesTotales = () => {
    if (!razaSeleccionada && !claseSeleccionada) return null;

    const bonificacionesTotales: { [key: string]: number } = {};

    // Agregar bonificaciones de la raza
    if (razaSeleccionada) {
      Object.entries(razaSeleccionada.bonificaciones).forEach(
        ([habilidad, bonus]) => {
          if (typeof bonus === "number") {
            bonificacionesTotales[habilidad] =
              (bonificacionesTotales[habilidad] || 0) + bonus;
          } else if (typeof bonus === "string") {
            // Manejar casos donde bonus sea string (para compatibilidad)
            const valorNumerico = parseInt(bonus.replace(/[+-]/g, "")) || 0;
            const signo = bonus.startsWith("-") ? -1 : 1;
            bonificacionesTotales[habilidad] =
              (bonificacionesTotales[habilidad] || 0) + valorNumerico * signo;
          }
        }
      );
    }

    // Agregar bonificaciones de la clase (de variacion_habilidades)
    if (claseSeleccionada && claseSeleccionada.variacion_habilidades) {
      // Ahora variacion_habilidades es un array
      claseSeleccionada.variacion_habilidades.forEach((habilidadTexto) => {
        const trimmed = habilidadTexto.trim();

        // Ignorar habilidades descriptivas sin valores numéricos
        if (
          trimmed.includes("Regeneración de SM") ||
          trimmed.includes("al día") ||
          trimmed.includes("1D6") ||
          trimmed === ""
        ) {
          return;
        }

        // Usar la nueva función para extraer bonificaciones
        const bonificacion = extraerBonificacionHabilidad(trimmed);
        if (bonificacion) {
          bonificacionesTotales[bonificacion.habilidad] =
            (bonificacionesTotales[bonificacion.habilidad] || 0) +
            bonificacion.valor;
          return;
        }

        // Casos especiales de 100% (como "Primeros Auxilios +100")
        if (trimmed.includes("100%") || trimmed.includes("+100")) {
          // Extraer el nombre de la habilidad
          const nombreHabilidad = trimmed
            .replace(/(\+100|100\s*%).*$/, "")
            .trim();
          if (nombreHabilidad) {
            bonificacionesTotales[nombreHabilidad] = 100;
          }
        }
      });
    }

    return bonificacionesTotales;
  };

  const renderBonificacionesTotales = () => {
    const bonificaciones = calcularBonificacionesTotales();
    if (!bonificaciones || Object.keys(bonificaciones).length === 0)
      return null;

    return (
      <div className="ficha-resultado">
        <h3 className="ficha-resultado-title">
          Total de Bonificaciones (Raza + Clase):
        </h3>
        <ul className="ficha-resultado-list">
          {Object.entries(bonificaciones).map(([habilidad, total]) => (
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
    if (razaSeleccionada) {
      // Si la raza es SELOROK o DEMONIO, calcular solo con la raza
      if (
        ["SELOROK", "DEMONIOS"].includes(razaSeleccionada.nombre.toUpperCase())
      ) {
        setResultado(calcularCaracteristicasFinales(razaSeleccionada));
      } else if (claseSeleccionada) {
        // Adaptar claseSeleccionada para asegurar que variacion_caracteristicas sea string[]
        const claseAdaptada = {
          ...claseSeleccionada,
          variacion_caracteristicas: Array.isArray(
            claseSeleccionada.variacion_caracteristicas
          )
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
            if (r && ["SELOROK", "DEMONIO"].includes(r.nombre.toUpperCase())) {
              setClaseSeleccionada(null);
            }
          }}
        >
          <option value="">Elige una raza</option>
          {razas.map((r) => (
            <option key={r.nombre} value={r.nombre}>
              {r.nombre.toUpperCase()}
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
          disabled={Boolean(
            razaSeleccionada &&
              ["SELOROK", "DEMONIOS"].includes(
                razaSeleccionada.nombre.toUpperCase()
              )
          )}
        >
          <option value="">Elige una clase</option>
          {clases.map((c) => (
            <option key={c.nombre} value={c.nombre}>
              {c.nombre.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* Dados que debe tirar el jugador - Debajo de los combos */}
      {resultado && (
        <div className="ficha-resultado">
          <h3 className="ficha-resultado-title">
            Dados que debe tirar el jugador:
          </h3>
          <ul className="ficha-resultado-list">
            {Object.entries(resultado).map(([car, dado]) => (
              <li key={car} className="ficha-resultado-item">
                <b className="ficha-resultado-carac">{car}:</b>{" "}
                <span className="ficha-resultado-dado">{dado as string}</span>
                <input
                  type="number"
                  min="1"
                  className="ficha-resultado-input"
                  placeholder="Tirada"
                  value={tiradas[car] || ""}
                  onChange={(e) => {
                    setTiradas((prev) => ({ ...prev, [car]: e.target.value }));
                  }}
                  // ...estilos movidos a App.css...
                />
              </li>
            ))}
          </ul>
          {/* Botones juntos */}
          <div className="ficha-botones-group">
            <button
              className="ficha-calcular-btn"
              onClick={generarTiradasAleatorias}
              disabled={Object.keys(resultado || {}).length === 0}
            >
              Generar tiradas aleatorias
            </button>
            <button
              className="ficha-habilidades-btn"
              disabled={
                Object.keys(resultado || {}).length === 0 ||
                Object.entries(resultado || {}).some(([car]) => !tiradas[car])
              }
              onClick={() => {
                // Cálculo del bonus de fuerza CC
                const fuerza = parseInt(tiradas["Fuerza"] || "0", 10);
                let bonusCC = "";
                if (fuerza >= 18 && fuerza <= 23) bonusCC = "+1";
                else if (fuerza >= 24 && fuerza <= 30) bonusCC = "+1D4";
                else if (fuerza >= 31 && fuerza <= 38) bonusCC = "+1D6";
                else if (fuerza >= 39 && fuerza <= 45) bonusCC = "+1D10";
                else if (fuerza >= 46) bonusCC = "+2D6";
                else bonusCC = "Sin bonus";

                // Cálculo del bonus de fuerza AA (Fuerza + Destreza)
                const destreza = parseInt(tiradas["Destreza"] || "0", 10);
                const sumaAA = fuerza + destreza;
                let bonusAA = "Nada";
                if (sumaAA >= 0 && sumaAA <= 24) bonusAA = "Nada";
                else if (sumaAA >= 25 && sumaAA <= 40) bonusAA = "+1D4";
                else if (sumaAA >= 41 && sumaAA <= 52) bonusAA = "+2D4";
                else if (sumaAA >= 53) bonusAA = "2D4+1";

                // Obtener todas las características necesarias
                const int = parseInt(tiradas["Inteligencia"] || "0", 10);
                const con = parseInt(tiradas["Constitución"] || "0", 10);
                const pod = parseInt(tiradas["Poder"] || "0", 10);
                const car = parseInt(tiradas["Carisma"] || "0", 10);
                const tam = parseInt(tiradas["Tamaño"] || "0", 10);

                // CONOCIMIENTO
                let conocimiento = 0;
                if (int >= 1 && int <= 10) conocimiento = int;
                else if (int >= 11 && int <= 18) conocimiento = int + 20;
                else if (int >= 19) conocimiento = int + 30;

                // PERCEPCION
                const percepcion = int + destreza + 10;

                // COMUNICACIÓN
                const comunicacion = Math.floor(con / 2) + int + pod + car - 5;

                // AGILIDAD
                const agilidad = destreza * 2 + int + pod - tam - 5;

                // MANIPULACION
                const manipulacion = int * 2 + destreza + car - 15;

                // DISCRECION
                const discrecion =
                  int + Math.floor(fuerza / 2) + pod + destreza - tam - 5;

                // SALUD MENTAL
                const saludMental = pod + car + int + 40 - con;

                // Mostrar todos los resultados
                setResultadoHabilidades({
                  bonusCC: `Bonus de Fuerza CC: ${bonusCC}`,
                  bonusAA: `Bonus de Fuerza AA: ${bonusAA}`,
                  conocimiento,
                  percepcion,
                  comunicacion,
                  agilidad,
                  manipulacion,
                  discrecion,
                  saludMental,
                });
              }}
            >
              Calcular habilidades
            </button>
          </div>
          {/* Mostrar variacion_carac_info si existe en la clase seleccionada */}
          {claseSeleccionada?.variacion_carac_info && (
            <div className="ficha-resultado-info">
              <b>Info adicional de dados:</b>{" "}
              {claseSeleccionada.variacion_carac_info}
            </div>
          )}
        </div>
      )}

      {/* Sección de resultado de habilidades */}
      {resultadoHabilidades && (
        <div className="ficha-habilidades-resultado">
          <h4 className="ficha-habilidades-titulo">
            Resultados de habilidades
          </h4>
          <ul className="ficha-habilidades-list">
            <li>
              <b>{resultadoHabilidades.bonusCC}</b>
            </li>
            <li>
              <b>{resultadoHabilidades.bonusAA}</b>
            </li>
            <li>
              Conocimiento: <b>{resultadoHabilidades.conocimiento}</b>
            </li>
            <li>
              Percepción: <b>{resultadoHabilidades.percepcion}</b>
            </li>
            <li>
              Comunicación: <b>{resultadoHabilidades.comunicacion}</b>
            </li>
            <li>
              Agilidad: <b>{resultadoHabilidades.agilidad}</b>
            </li>
            <li>
              Manipulación: <b>{resultadoHabilidades.manipulacion}</b>
            </li>
            <li>
              Discreción: <b>{resultadoHabilidades.discrecion}</b>
            </li>
            <li>
              Salud Mental: <b>{resultadoHabilidades.saludMental}</b>
            </li>
          </ul>
        </div>
      )}

      {/* Total de bonificaciones */}
      {renderBonificacionesTotales()}

      {/* Información de la clase seleccionada */}
      {razaSeleccionada &&
      ["SELOROK", "DEMONIO", "SELOROKS", "DEMONIOS"].includes(
        razaSeleccionada.nombre.toUpperCase()
      )
        ? null
        : renderClaseInfo()}

      {/* Información de la raza seleccionada */}
      {renderRazaInfo()}
    </div>
  );
}

export default App;

// El logo se usará como URL pública: /logo.webp
import { useState, useEffect } from "react";
import "./App.css";
import {
  calcularCaracteristicasFinales,
  obtenerLimitacionesClase,
  validarLimitesCaracteristica,
  aplicarVariaciones,
  type LimitacionCaracteristica,
} from "./logic/logica";
import type { Nacionalidad } from "./interfaces/Nacionalidad";
import type { Origen } from "./interfaces/Origen";
import { extraerBonificacionHabilidad } from "./interfaces/Habilidades";
import type { Raza } from "./interfaces/RazasInterface";
import type { Clase } from "./interfaces/ClasesInterface";
import type {
  Caracteristicas,
  NombreCaracteristica,
} from "./interfaces/Caracteristicas";

function App() {
  // Renderiza la información de la nacionalidad seleccionada
  const renderNacionalidadInfo = () => {
    if (!nacionalidadSeleccionada) return null;
    return (
      <div className="raza-card">
        <div className="raza-content">
          <h3 className="raza-title">
            Nacionalidad: {nacionalidadSeleccionada.nombre}
          </h3>
          <hr className="raza-divider" />
          {nacionalidadSeleccionada.variacion_caracteristicas &&
            nacionalidadSeleccionada.variacion_caracteristicas.length > 0 && (
              <div className="raza-section">
                <h4 className="raza-section-title">
                  Variaciones de Características
                </h4>
                <div className="raza-list">
                  {nacionalidadSeleccionada.variacion_caracteristicas.map(
                    (variacion, idx) => (
                      <div key={idx} className="raza-list-item">
                        <span className="raza-characteristic-name">
                          {variacion}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          {/* Mostrar origen_social si existe */}
          {nacionalidadSeleccionada.origen_social && (
            <div className="raza-section">
              <h4 className="raza-section-title">Origen social</h4>
              <div className="raza-list">
                {Array.isArray(nacionalidadSeleccionada.origen_social) ? (
                  nacionalidadSeleccionada.origen_social.map((origen, idx) => (
                    <div key={idx} className="raza-list-item">
                      <span className="raza-characteristic-name">{origen}</span>
                    </div>
                  ))
                ) : (
                  <div className="raza-list-item">
                    <span className="raza-characteristic-name">
                      {nacionalidadSeleccionada.origen_social}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Renderiza la información del origen seleccionado
  const renderOrigenInfo = () => {
    if (!origenSeleccionado) return null;
    return (
      <div className="raza-card">
        <div className="raza-content">
          <h3 className="raza-title">Origen: {origenSeleccionado.nombre}</h3>
          {origenSeleccionado.info_Origen &&
            origenSeleccionado.info_Origen.trim() !== "" && (
              <p className="raza-description">
                {origenSeleccionado.info_Origen}
              </p>
            )}
          <hr className="raza-divider" />
          {origenSeleccionado.variacion_habilidades &&
            origenSeleccionado.variacion_habilidades.length > 0 && (
              <div className="raza-section">
                <h4 className="raza-section-title">
                  Bonificaciones de Habilidades
                </h4>
                <div className="raza-list">
                  {origenSeleccionado.variacion_habilidades.map(
                    (habilidad, idx) => (
                      <div key={idx} className="raza-list-item">
                        <span className="raza-bonus-name">{habilidad}</span>
                        <span className="raza-chip raza-chip-secondary">
                          Habilidad
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          {origenSeleccionado.variacion_bonus_combate &&
            Object.keys(origenSeleccionado.variacion_bonus_combate).length >
              0 && (
              <div className="raza-section">
                <h4 className="raza-section-title">Bonus de Combate</h4>
                <div className="raza-list">
                  {Object.entries(
                    origenSeleccionado.variacion_bonus_combate
                  ).map(([tipo, valor], idx) => (
                    <div key={idx} className="raza-list-item">
                      <span className="raza-bonus-name">{tipo}:</span>
                      <span className="raza-chip raza-chip-secondary">
                        {valor}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
    );
  };
  // Estado para mostrar/ocultar el logo
  const [mostrarLogo, setMostrarLogo] = useState(true);
  // Función para ocultar el logo al interactuar con cualquier combobox
  const handleComboChange = () => {
    if (mostrarLogo) setMostrarLogo(false);
  };
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
    puntosVida: number;
  };
  const [resultadoHabilidades, setResultadoHabilidades] =
    useState<HabilidadesResultado | null>(null);
  const [razas, setRazas] = useState<Raza[]>([]);
  const [clases, setClases] = useState<Clase[]>([]);
  const [nacionalidades, setNacionalidades] = useState<Nacionalidad[]>([]);
  const [origenes, setOrigenes] = useState<Origen[]>([]);
  // Estado para los orígenes filtrados según nacionalidad
  const [origenesFiltrados, setOrigenesFiltrados] = useState<Origen[]>([]);
  const [origenSeleccionado, setOrigenSeleccionado] = useState<Origen | null>(
    null
  );
  const [razaSeleccionada, setRazaSeleccionada] = useState<Raza | null>(null);
  const [claseSeleccionada, setClaseSeleccionada] = useState<Clase | null>(
    null
  );
  const [nacionalidadSeleccionada, setNacionalidadSeleccionada] =
    useState<Nacionalidad | null>(null);
  // Filtrar orígenes según la nacionalidad seleccionada
  useEffect(() => {
    if (!nacionalidadSeleccionada) {
      setOrigenesFiltrados(origenes);
      return;
    }
    // Extraer nombres de origen del campo origen_social
    let origenesPermitidos: string[] = [];
    if (Array.isArray(nacionalidadSeleccionada.origen_social)) {
      origenesPermitidos = nacionalidadSeleccionada.origen_social.map((o) => {
        // Ejemplo: "01-50: Noble" => "Noble"
        const partes = o.split(":");
        return partes.length > 1
          ? partes[1].trim().toUpperCase()
          : o.trim().toUpperCase();
      });
    } else if (typeof nacionalidadSeleccionada.origen_social === "string") {
      // Si es string, puede ser una tabla especial, mostrar todos
      setOrigenesFiltrados(origenes);
      return;
    }
    // Filtrar los orígenes que coincidan con los nombres permitidos
    const filtrados = origenes.filter((origen) =>
      origenesPermitidos.includes(origen.nombre.trim().toUpperCase())
    );
    setOrigenesFiltrados(filtrados);
  }, [nacionalidadSeleccionada, origenes]);
  const [resultado, setResultado] = useState<Caracteristicas | null>(null);
  // Estado para los resultados de las tiradas
  const [tiradas, setTiradas] = useState<Record<string, string>>({});
  // Estado para el checkbox "Dados min. 2"
  const [dadosMin2, setDadosMin2] = useState(true);
  // Estado para las limitaciones de la clase actual
  const [limitaciones, setLimitaciones] = useState<LimitacionCaracteristica[]>(
    []
  );

  // Función para manejar cambios en inputs con validación de límites
  const manejarCambioCaracteristica = (
    caracteristica: string,
    valor: string
  ) => {
    const valorNumerico = parseInt(valor, 10);

    // Si es un número válido, validar límites
    if (!isNaN(valorNumerico) && limitaciones.length > 0) {
      const validacion = validarLimitesCaracteristica(
        caracteristica as NombreCaracteristica,
        valorNumerico,
        limitaciones
      );
      if (!validacion.valido && validacion.valorCorregido !== undefined) {
        // Aplicar valor corregido automáticamente, sin mostrar alerta
        setTiradas((prev) => ({
          ...prev,
          [caracteristica]: validacion.valorCorregido!.toString(),
        }));
        return;
      }
    }
    // Si no hay problemas, aplicar el valor normalmente
    setTiradas((prev) => ({ ...prev, [caracteristica]: valor }));
  };

  // Función para tirar dados aleatorios según el formato (ej: "2D6+3")
  function tirarDado(formula: string): number {
    // Ejemplo de fórmula: "3D6+1D10+2", "2D6+3", "1D10", "3D4-2"
    let total = 0;
    // Buscar todas las expresiones de dados (ej: 3D6, 1D10)
    const dadoRegex = /([+-]?\d+)D(\d+)/gi;
    let match;
    while ((match = dadoRegex.exec(formula)) !== null) {
      const cantidad = parseInt(match[1], 10); // puede ser negativo
      const caras = parseInt(match[2], 10);
      const signo = Math.sign(cantidad);
      for (let i = 0; i < Math.abs(cantidad); i++) {
        let dado = Math.floor(Math.random() * caras) + 1;
        if (dadosMin2 && dado < 2) dado = 2;
        total += signo * dado;
      }
    }
    // Buscar modificadores numéricos (ej: +2, -1)
    const modRegex = /([+-]\d+)(?!D)/g;
    let modMatch;
    while ((modMatch = modRegex.exec(formula)) !== null) {
      total += parseInt(modMatch[1], 10);
    }
    return total;
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
        let valor = tirarDado(dado);
        // Validar límites si existen
        if (limitaciones.length > 0) {
          const validacion = validarLimitesCaracteristica(
            car as NombreCaracteristica,
            valor,
            limitaciones
          );
          if (!validacion.valido && validacion.valorCorregido !== undefined) {
            valor = validacion.valorCorregido;
          }
        }
        nuevasTiradas[car] = valor.toString();
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
    let bonusAA = "NO TIENE";
    const clasesAA = ["ARQUERO", "CASACA AZUL", "ILMIONARIO", "GUARDABOSQUES"];
    if (
      claseSeleccionada &&
      clasesAA.some(
        (c) => claseSeleccionada.nombre.toUpperCase() === c.toUpperCase()
      )
    ) {
      if (sumaAA >= 0 && sumaAA <= 24) bonusAA = "Nada";
      else if (sumaAA >= 25 && sumaAA <= 40) bonusAA = "+1D4";
      else if (sumaAA >= 41 && sumaAA <= 52) bonusAA = "+2D4";
      else if (sumaAA >= 53) bonusAA = "2D4+1";
    }

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
    const puntosVida = Math.max(1, con + tam - 12);
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
      puntosVida,
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

            {/* Limitaciones MIN/MAX de Características */}
            {claseSeleccionada.variacion_caracMINMAX &&
              claseSeleccionada.variacion_caracMINMAX.length > 0 && (
                <div className="raza-section">
                  <h4 className="raza-section-title">
                    Limitaciones de Características
                  </h4>
                  <div className="raza-list">
                    {claseSeleccionada.variacion_caracMINMAX.map(
                      (limitacion, index) => (
                        <div key={index} className="raza-list-item">
                          <span className="raza-characteristic-name">
                            {limitacion}
                          </span>
                          <span className="raza-chip raza-chip-warning">
                            Límite
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
                          <span className="raza-chip raza-chip-secondary">
                            Habilidad
                          </span>
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
    if (!razaSeleccionada && !claseSeleccionada && !origenSeleccionado)
      return null;

    const bonificacionesTotales: { [key: string]: number } = {};

    // Bonificaciones de raza
    if (razaSeleccionada) {
      Object.entries(razaSeleccionada.bonificaciones).forEach(
        ([habilidad, bonus]) => {
          if (typeof bonus === "number") {
            bonificacionesTotales[habilidad] =
              (bonificacionesTotales[habilidad] || 0) + bonus;
          } else if (typeof bonus === "string") {
            const valorNumerico = parseInt(bonus.replace(/[+-]/g, "")) || 0;
            const signo = bonus.startsWith("-") ? -1 : 1;
            bonificacionesTotales[habilidad] =
              (bonificacionesTotales[habilidad] || 0) + valorNumerico * signo;
          }
        }
      );
    }

    // Bonificaciones de clase
    if (claseSeleccionada && claseSeleccionada.variacion_habilidades) {
      claseSeleccionada.variacion_habilidades.forEach((habilidadTexto) => {
        const trimmed = habilidadTexto.trim();
        if (
          trimmed.includes("Regeneración de SM") ||
          trimmed.includes("al día") ||
          trimmed.includes("1D6") ||
          trimmed === ""
        ) {
          return;
        }
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
          if (nombreHabilidad) {
            bonificacionesTotales[nombreHabilidad] = 100;
          }
        }
      });
    }

    // Bonificaciones de origen
    if (origenSeleccionado && origenSeleccionado.variacion_habilidades) {
      origenSeleccionado.variacion_habilidades.forEach((habilidadTexto) => {
        const trimmed = habilidadTexto.trim();
        if (
          trimmed.includes("Regeneración de SM") ||
          trimmed.includes("al día") ||
          trimmed.includes("1D6") ||
          trimmed === ""
        ) {
          return;
        }
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
    fetch("/StromRol/Razas.json")
      .then((res) => res.json())
      .then((data) => setRazas(data.razas as Raza[]));
    // Cargar clases
    fetch("/StromRol/Clases.json")
      .then((res) => res.json())
      .then((data) => setClases(data.clases as Clase[]));
    //carga nacionalides
    fetch("/StromRol/Nacionalidad.json")
      .then((res) => res.json())
      .then((data) => setNacionalidades(data.nacionalidades as Nacionalidad[]));
    //carga origenes
    fetch("/StromRol/Origen.json")
      .then((res) => res.json())
      .then((data) => setOrigenes(data.origenes as Origen[]));
  }, []);

  useEffect(() => {
    // Limpiar tiradas al cambiar raza o clase
    setTiradas({});
    if (razaSeleccionada) {
      // Si la raza es SELOROK o DEMONIO, calcular solo con la raza, pero aplicar variaciones de nacionalidad si existen
      let resultadoBase = calcularCaracteristicasFinales(
        razaSeleccionada,
        claseSeleccionada
          ? {
              ...claseSeleccionada,
              variacion_caracteristicas: Array.isArray(
                claseSeleccionada.variacion_caracteristicas
              )
                ? claseSeleccionada.variacion_caracteristicas
                : typeof claseSeleccionada.variacion_caracteristicas ===
                  "string"
                ? [claseSeleccionada.variacion_caracteristicas]
                : undefined,
            }
          : undefined
      );
      if (
        nacionalidadSeleccionada &&
        nacionalidadSeleccionada.variacion_caracteristicas
      ) {
        resultadoBase = aplicarVariaciones(
          resultadoBase,
          nacionalidadSeleccionada.variacion_caracteristicas
        );
      }
      setResultado(resultadoBase);
    } else {
      setResultado(null);
    }
  }, [razaSeleccionada, claseSeleccionada, nacionalidadSeleccionada]);

  // useEffect para actualizar limitaciones cuando cambie la clase
  useEffect(() => {
    if (claseSeleccionada) {
      const nuevasLimitaciones = obtenerLimitacionesClase(claseSeleccionada);
      setLimitaciones(nuevasLimitaciones);
    } else {
      setLimitaciones([]);
    }
  }, [claseSeleccionada]);

  return (
    <div className="ficha-container">
      {mostrarLogo && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "2rem 0",
          }}
        >
          <img
            src={"/StromRol/logo.webp"}
            alt="Logo"
            style={{ maxWidth: "320px", width: "100%", height: "auto" }}
          />
        </div>
      )}
      <h2 className="ficha-title">Generador de Fichas</h2>
      <div className="ficha-select-group">
        <label htmlFor="raza-select" className="ficha-label">
          Raza:
        </label>
        <select
          id="raza-select"
          className="ficha-select"
          value={razaSeleccionada?.nombre || ""}
          onChange={(e) => {
            const r = razas.find((r) => r.nombre === e.target.value);
            setRazaSeleccionada(r || null);
            handleComboChange();
            setResultadoHabilidades(null); // Oculta resultados de habilidades
            setNacionalidadSeleccionada(null); // Deselecciona nacionalidad al cambiar raza
            if (
              r &&
              ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                r.nombre.toUpperCase()
              )
            ) {
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
          Clase:
        </label>
        <select
          id="clase-select"
          className="ficha-select"
          value={claseSeleccionada?.nombre || ""}
          onChange={(e) => {
            const c = clases.find((c) => c.nombre === e.target.value);
            setClaseSeleccionada(c || null);
            setTiradas({}); // Limpiar tiradas al cambiar la clase
            setResultadoHabilidades(null); // Oculta resultados de habilidades
            setNacionalidadSeleccionada(null); // Deselecciona nacionalidad
            setOrigenSeleccionado(null); // Limpia el origen seleccionado
            handleComboChange();
            // Si hay un origen seleccionado, recalcular automáticamente los valores de ese origen
            if (origenSeleccionado && c) {
              // Simular el cambio de origen para recalcular todo lo dependiente
              setOrigenSeleccionado(origenSeleccionado);
              // Opcional: puedes agregar aquí cualquier lógica adicional de cálculo si es necesario
            }
          }}
          disabled={Boolean(
            razaSeleccionada &&
              ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
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
      {/* Combo de Nacionalidad */}
      <div className="ficha-select-group">
        <label htmlFor="nacionalidad-select" className="ficha-label">
          Nacionalidad:
        </label>
        <div className="ficha-combo-col">
          <select
            id="nacionalidad-select"
            className="ficha-select"
            value={nacionalidadSeleccionada?.nombre || ""}
            onChange={(e) => {
              const n = nacionalidades.find((n) => n.nombre === e.target.value);
              setNacionalidadSeleccionada(n || null);
              setTiradas({}); // Limpiar tiradas al cambiar nacionalidad
              setResultadoHabilidades(null); // Oculta resultados de habilidades
              setOrigenSeleccionado(null); // Limpiar origen al cambiar nacionalidad
              handleComboChange();
            }}
            disabled={!razaSeleccionada}
          >
            <option value="">Elige una nacionalidad</option>
            {nacionalidades.map((n) => (
              <option key={n.nombre} value={n.nombre}>
                {n.nombre}
              </option>
            ))}
          </select>
          {/* Botón dado debajo del combo nacionalidad */}
          <button
            type="button"
            className="ficha-dado-btn"
            title="Tirar dado de nacionalidad"
            disabled={!razaSeleccionada}
            onClick={() => {
              alert("¡Dado de nacionalidad tirado!");
            }}
          >
            🎲
          </button>
        </div>
      </div>
      {/* Combo de Origen */}
      <div className="ficha-select-group">
        <label htmlFor="origen-select" className="ficha-label">
          Origen:
        </label>
        <div className="ficha-combo-col">
          <select
            id="origen-select"
            className="ficha-select"
            value={origenSeleccionado?.nombre || ""}
            onChange={(e) => {
              const o = origenesFiltrados.find(
                (o) => o.nombre === e.target.value
              );
              setOrigenSeleccionado(o || null);
              setTiradas({}); // Limpiar tiradas al cambiar origen
              setResultadoHabilidades(null); // Oculta resultados de habilidades
              handleComboChange();
            }}
            disabled={!nacionalidadSeleccionada}
          >
            <option value="">Elige un origen</option>
            {origenesFiltrados.map((o) => (
              <option key={o.nombre} value={o.nombre}>
                {o.nombre}
              </option>
            ))}
          </select>
          {/* Botón dado debajo del combo origen */}
          <button
            type="button"
            className="ficha-dado-btn"
            title="Tirar dado de origen"
            disabled={!nacionalidadSeleccionada}
            onClick={() => {
              alert("¡Dado de origen tirado!");
            }}
          >
            🎲
          </button>
        </div>
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
                <span className="ficha-resultado-dado">{dado}</span>
                <input
                  type="number"
                  min="1"
                  className="ficha-resultado-input"
                  placeholder="Tirada"
                  value={tiradas[car] || ""}
                  onChange={(e) => {
                    manejarCambioCaracteristica(car, e.target.value);
                  }}
                />
              </li>
            ))}
          </ul>
          {/* Checkbox justo encima de los botones */}
          <div className="ficha-dadosmin2-group">
            <label className="ficha-dadosmin-label">
              <input
                type="checkbox"
                checked={dadosMin2}
                onChange={(e) => setDadosMin2(e.target.checked)}
                className="ficha-dadosmin-checkbox"
              />
              Dados min. 2
            </label>
          </div>
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

                // Cálculo del bonus de fuerza AA (solo ciertas clases)
                const destreza = parseInt(tiradas["Destreza"] || "0", 10);
                const sumaAA = fuerza + destreza;
                let bonusAA = "NO TIENE";
                const clasesAA = [
                  "ARQUERO",
                  "CASACA AZUL",
                  "ILMIONARIO",
                  "GUARDABOSQUES",
                ];
                if (
                  claseSeleccionada &&
                  clasesAA.some(
                    (c) =>
                      claseSeleccionada.nombre.toUpperCase() === c.toUpperCase()
                  )
                ) {
                  if (sumaAA >= 0 && sumaAA <= 24) bonusAA = "Nada";
                  else if (sumaAA >= 25 && sumaAA <= 40) bonusAA = "+1D4";
                  else if (sumaAA >= 41 && sumaAA <= 52) bonusAA = "+2D4";
                  else if (sumaAA >= 53) bonusAA = "2D4+1";
                }

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
                  puntosVida: Math.max(1, con + tam - 12),
                });
              }}
            >
              Calcular habilidades
            </button>
          </div>
          {/* Mostrar variacion_carac_info si existe y tiene contenido útil (no vacío, no null, no undefined, no array vacío) */}
          {claseSeleccionada?.variacion_carac_info &&
            ((typeof claseSeleccionada.variacion_carac_info === "string" &&
              claseSeleccionada.variacion_carac_info.trim() !== "") ||
              (Array.isArray(claseSeleccionada.variacion_carac_info) &&
                claseSeleccionada.variacion_carac_info.length > 0) ||
              (typeof claseSeleccionada.variacion_carac_info === "number" &&
                !isNaN(claseSeleccionada.variacion_carac_info))) && (
              <div className="ficha-resultado-info">
                <b>Info adicional de dados:</b>{" "}
                {Array.isArray(claseSeleccionada.variacion_carac_info)
                  ? claseSeleccionada.variacion_carac_info.join(", ")
                  : claseSeleccionada.variacion_carac_info}
              </div>
            )}
        </div>
      )}

      {/* Sección de resultado de habilidades */}
      {resultadoHabilidades && (
        <>
          <div className="raza-card">
            <div className="raza-content">
              <h4 className="raza-section-title">Resultados de habilidades</h4>
              <div className="raza-list">
                <div className="raza-list-item">
                  <span className="raza-bonus-name">
                    {resultadoHabilidades.bonusCC.split(":")[0]}:
                  </span>
                  <span className="raza-chip raza-chip-secondary">
                    {resultadoHabilidades.bonusCC.split(":")[1]}
                  </span>
                </div>
                <div className="raza-list-item">
                  <span className="raza-bonus-name">
                    {resultadoHabilidades.bonusAA.split(":")[0]}:
                  </span>
                  <span className="raza-chip raza-chip-secondary">
                    {resultadoHabilidades.bonusAA.split(":")[1]}
                  </span>
                </div>
                <div className="raza-list-item">
                  <span className="raza-bonus-name">Puntos de vida:</span>
                  <span className="raza-chip raza-chip-pv">
                    {resultadoHabilidades.puntosVida}
                  </span>
                </div>
                <div className="raza-list-item">
                  <span className="raza-bonus-name">Conocimiento:</span>
                  <span className="raza-chip raza-chip-success">
                    {resultadoHabilidades.conocimiento}
                  </span>
                </div>
                <div className="raza-list-item">
                  <span className="raza-bonus-name">Percepción:</span>
                  <span className="raza-chip raza-chip-success">
                    {resultadoHabilidades.percepcion}
                  </span>
                </div>
                <div className="raza-list-item">
                  <span className="raza-bonus-name">Comunicación:</span>
                  <span className="raza-chip raza-chip-success">
                    {resultadoHabilidades.comunicacion}
                  </span>
                </div>
                <div className="raza-list-item">
                  <span className="raza-bonus-name">Agilidad:</span>
                  <span className="raza-chip raza-chip-success">
                    {resultadoHabilidades.agilidad}
                  </span>
                </div>
                <div className="raza-list-item">
                  <span className="raza-bonus-name">Manipulación:</span>
                  <span className="raza-chip raza-chip-success">
                    {resultadoHabilidades.manipulacion}
                  </span>
                </div>
                <div className="raza-list-item">
                  <span className="raza-bonus-name">Discreción:</span>
                  <span className="raza-chip raza-chip-success">
                    {resultadoHabilidades.discrecion}
                  </span>
                </div>
                <div className="raza-list-item">
                  <span className="raza-bonus-name">Salud Mental:</span>
                  <span className="raza-chip raza-chip-mental">
                    {resultadoHabilidades.saludMental}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Bonus de combate */}
          {origenSeleccionado && (
            <div className="raza-card">
              <div className="raza-content">
                <h4 className="raza-section-title">Bonus de combate</h4>
                <div className="raza-list">
                  {/* Calcular bonus sumando clase y origen, mostrar siempre */}
                  {(() => {
                    const bonusClase = claseSeleccionada?.Bonus_combate || {};
                    const bonusOrigen =
                      origenSeleccionado.variacion_bonus_combate || {};
                    type BonusCombateValor = string | number | undefined;
                    function sumarBonus(
                      a: BonusCombateValor,
                      b: BonusCombateValor
                    ): string {
                      const numA =
                        typeof a === "string"
                          ? parseInt(a)
                          : typeof a === "number"
                          ? a
                          : 0;
                      const numB =
                        typeof b === "string"
                          ? parseInt(b)
                          : typeof b === "number"
                          ? b
                          : 0;
                      const total = numA + numB;
                      if (
                        (typeof a === "string" && a.includes("%")) ||
                        (typeof b === "string" && b.includes("%"))
                      ) {
                        return `${total > 0 ? "+" : ""}${total}%`;
                      }
                      return `${total > 0 ? "+" : ""}${total}`;
                    }
                    const ataque = sumarBonus(
                      bonusClase && "ataque" in bonusClase
                        ? (bonusClase.ataque as BonusCombateValor)
                        : undefined,
                      bonusOrigen && "ataque" in bonusOrigen
                        ? (bonusOrigen.ataque as BonusCombateValor)
                        : undefined
                    );
                    const defensa = sumarBonus(
                      bonusClase && "defensa" in bonusClase
                        ? (bonusClase.defensa as BonusCombateValor)
                        : undefined,
                      bonusOrigen && "defensa" in bonusOrigen
                        ? (bonusOrigen.defensa as BonusCombateValor)
                        : undefined
                    );
                    const armasArrojadizas = sumarBonus(
                      bonusClase && "armas_arrojadizas" in bonusClase
                        ? (bonusClase.armas_arrojadizas as BonusCombateValor)
                        : undefined,
                      bonusOrigen && "armas_arrojadizas" in bonusOrigen
                        ? (bonusOrigen.armas_arrojadizas as BonusCombateValor)
                        : undefined
                    );
                    return (
                      <>
                        <div className="raza-list-item">
                          <span className="raza-bonus-name">Ataque:</span>
                          <span className="raza-chip raza-chip-secondary">
                            {ataque}
                          </span>
                        </div>
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
        </>
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

      {/* Información de la nacionalidad seleccionada */}
      {renderNacionalidadInfo()}

      {/* Información del origen seleccionado */}
      {renderOrigenInfo()}
    </div>
  );
}

export default App;

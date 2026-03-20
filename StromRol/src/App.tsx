// El logo se usará como URL pública: /logo.webp
import { useState, useEffect } from "react";
import "./App.css";
import GeneradorSection from "./components/sections/GeneradorSection";
import ListaExitosSection from "./components/sections/ListaExitosSection";
import CompendioSection from "./components/sections/CompendioSection";
import StromSection from "./components/sections/StromSection";
import RazaInfo from "./components/RazaInfo";
import ClaseInfo from "./components/ClaseInfo";
import NacionalidadInfo from "./components/NacionalidadInfo";
import OrigenInfo from "./components/OrigenInfo";
import ResultadoHabilidades, {
  type HabilidadesResultado,
} from "./components/ResultadoHabilidades";
import {
  calcularCaracteristicasFinales,
  obtenerLimitacionesClase,
  validarLimitesCaracteristica,
  aplicarVariaciones,
  construirDesgloseDados,
  construirDesgloseEstructurado,
  type LimitacionCaracteristica,
} from "./logic/logica";
import type { Nacionalidad } from "./interfaces/Nacionalidad";
import type { Origen } from "./interfaces/Origen";
import type { Raza } from "./interfaces/RazasInterface";
import type { Clase } from "./interfaces/ClasesInterface";
import type {
  Caracteristicas,
  NombreCaracteristica,
} from "./interfaces/Caracteristicas";

function App() {
  // Estado para los valores de los inputs numéricos de los combos
  const [inputRaza, setInputRaza] = useState<string>("");
  const [inputClase, setInputClase] = useState<string>("");
  const [inputNacionalidad, setInputNacionalidad] = useState<string>("");
  const [inputOrigen, setInputOrigen] = useState<string>("");
  // Estado para mostrar/ocultar el logo
  const [mostrarLogo, setMostrarLogo] = useState<boolean>(true);
  // Función para ocultar el logo al interactuar con cualquier combobox
  const handleComboChange = () => {
    if (mostrarLogo) setMostrarLogo(false);
  };
  type FichaTab = "generador" | "bonificaciones" | "detalles" | "strom";
  const [activeTab, setActiveTab] = useState<FichaTab>("generador");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const fichaTabs: Array<{ key: FichaTab; label: string }> = [
    { key: "generador", label: "GENERADOR" },
    { key: "bonificaciones", label: "LISTA DE EXITOS" },
    { key: "strom", label: "STROM" },
    { key: "detalles", label: "COMPENDIO" },
  ];

  const cambiarTab = (tab: FichaTab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const cerrarMenuEnPantallasGrandes = () => {
      if (window.innerWidth > 450) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", cerrarMenuEnPantallasGrandes);

    return () => {
      window.removeEventListener("resize", cerrarMenuEnPantallasGrandes);
    };
  }, []);
  // Estado para mostrar el resultado del cálculo de habilidades
  const [resultadoHabilidades, setResultadoHabilidades] =
    useState<HabilidadesResultado | null>(null);
  const [razas, setRazas] = useState<Raza[]>([]);
  const [clases, setClases] = useState<Clase[]>([]);
  const [nacionalidades, setNacionalidades] = useState<Nacionalidad[]>([]);
  const [origenes, setOrigenes] = useState<Origen[]>([]);
  // Estado para los orígenes filtrados según nacionalidad
  const [origenesFiltrados, setOrigenesFiltrados] = useState<Origen[]>([]);
  const [origenSeleccionado, setOrigenSeleccionado] = useState<Origen | null>(
    null,
  );
  const [razaSeleccionada, setRazaSeleccionada] = useState<Raza | null>(null);
  const [claseSeleccionada, setClaseSeleccionada] = useState<Clase | null>(
    null,
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
      origenesPermitidos.includes(origen.nombre.trim().toUpperCase()),
    );
    setOrigenesFiltrados(filtrados);
  }, [nacionalidadSeleccionada, origenes]);
  const [resultado, setResultado] = useState<Caracteristicas | null>(null);
  const [desgloseDados, setDesgloseDados] = useState<Record<string, string>>(
    {},
  );
  const [desgloseDadosEstructurado, setDesgloseDadosEstructurado] = useState<
    Record<
      string,
      { raza?: string; clase?: string; nacionalidad?: string; total?: string }
    >
  >({});
  // Estado para los resultados de las tiradas
  const [tiradas, setTiradas] = useState<Record<string, string>>({});
  // Estado para el checkbox "Dados min. 2"
  const [dadosMin2, setDadosMin2] = useState<boolean>(true);
  // Estado para las limitaciones de la clase actual
  const [limitaciones, setLimitaciones] = useState<LimitacionCaracteristica[]>(
    [],
  );

  // Función para manejar cambios en inputs con validación de límites
  const manejarCambioCaracteristica = (
    caracteristica: string,
    valor: string,
  ) => {
    const valorNumerico = parseInt(valor, 10);

    // Si es un número válido, validar límites
    if (!isNaN(valorNumerico) && limitaciones.length > 0) {
      const validacion = validarLimitesCaracteristica(
        caracteristica as NombreCaracteristica,
        valorNumerico,
        limitaciones,
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
  // Devuelve el resultado de la tirada de dados según la fórmula
  const tirarDado = (formula: string): number => {
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
    // Buscar modificadores numéricos (ej: +2, -1).
    const modRegex = /([+-]\d+)(?!D)/g;
    let modMatch;
    while ((modMatch = modRegex.exec(formula)) !== null) {
      total += parseInt(modMatch[1], 10);
    }
    return total;
  };

  const puedeTirarCaracteristica = (caracteristica: string): boolean =>
    Boolean(
      nacionalidadSeleccionada &&
      desgloseDadosEstructurado[caracteristica]?.total?.trim(),
    );

  // Genera tiradas aleatorias para cada característica
  const generarTiradasAleatorias = () => {
    if (!resultado) return;
    if (
      Object.values(tiradas).some((v) => v && v.trim() !== "") &&
      !window.confirm(
        "¿Seguro que quieres generar tiradas aleatorias? Se borrarán los valores que hayas insertado manualmente.",
      )
    ) {
      return;
    }
    const nuevasTiradas: Record<string, string> = {};
    Object.entries(resultado).forEach(([car, dado]) => {
      if (!puedeTirarCaracteristica(car)) {
        return;
      }

      // Preferir la expresión TOTAL del desglose estructurado si existe (limpiando el sufijo ℹ)
      let formulaToUse: string | undefined;
      if (typeof dado === "string") {
        formulaToUse = dado;
      } else if (
        desgloseDadosEstructurado[car] &&
        desgloseDadosEstructurado[car].total
      ) {
        formulaToUse = desgloseDadosEstructurado[car].total.replace(
          /\s*ℹ$/u,
          "",
        );
      } else if (desgloseDados[car]) {
        // Intentar extraer '(TOTAL: ...)' del texto de desglose como respaldo
        const m = (desgloseDados[car] as string).match(/\(TOTAL:\s*([^)]+)\)/i);
        if (m) formulaToUse = m[1];
      }

      if (formulaToUse) {
        let valor = tirarDado(formulaToUse);
        // Validar límites si existen
        if (limitaciones.length > 0) {
          const validacion = validarLimitesCaracteristica(
            car as NombreCaracteristica,
            valor,
            limitaciones,
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
        (c) => claseSeleccionada.nombre.toUpperCase() === c.toUpperCase(),
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

  useEffect(() => {
    // Carga inicial de catálogos estáticos desde /public.
    // Cargar razas
    fetch("/Razas.json")
      .then((res) => res.json())
      .then((data) => setRazas(data.razas as Raza[]));
    // Cargar clases
    fetch("/Clases.json")
      .then((res) => res.json())
      .then((data) => setClases(data.clases as Clase[]));
    //carga nacionalides
    fetch("/Nacionalidad.json")
      .then((res) => res.json())
      .then((data) => setNacionalidades(data.nacionalidades as Nacionalidad[]));
    //carga origenes
    fetch("/Origen.json")
      .then((res) => res.json())
      .then((data) => setOrigenes(data.origenes as Origen[]));
  }, []);

  useEffect(() => {
    // Recalcula fórmulas y desglose cada vez que cambia raza/clase/nacionalidad.
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
                claseSeleccionada.variacion_caracteristicas,
              )
                ? claseSeleccionada.variacion_caracteristicas
                : typeof claseSeleccionada.variacion_caracteristicas ===
                    "string"
                  ? [claseSeleccionada.variacion_caracteristicas]
                  : undefined,
            }
          : undefined,
      );
      if (
        nacionalidadSeleccionada &&
        nacionalidadSeleccionada.variacion_caracteristicas
      ) {
        resultadoBase = aplicarVariaciones(
          resultadoBase,
          nacionalidadSeleccionada.variacion_caracteristicas,
        );
      }
      setResultado(resultadoBase);
      // Construir desglose por origen (raza, clase, nacionalidad)
      const desglose = construirDesgloseDados(
        razaSeleccionada,
        claseSeleccionada
          ? {
              variacion_caracteristicas: Array.isArray(
                claseSeleccionada.variacion_caracteristicas,
              )
                ? claseSeleccionada.variacion_caracteristicas
                : typeof claseSeleccionada.variacion_caracteristicas ===
                    "string"
                  ? [claseSeleccionada.variacion_caracteristicas]
                  : undefined,
              variacion_caracMINMAX: Array.isArray(
                claseSeleccionada.variacion_caracMINMAX,
              )
                ? claseSeleccionada.variacion_caracMINMAX
                : undefined,
            }
          : undefined,
        nacionalidadSeleccionada || undefined,
      );
      setDesgloseDados(desglose);

      // Estructurado para render con colores
      const desgloseE = construirDesgloseEstructurado(
        razaSeleccionada,
        claseSeleccionada
          ? {
              variacion_caracteristicas: Array.isArray(
                claseSeleccionada.variacion_caracteristicas,
              )
                ? claseSeleccionada.variacion_caracteristicas
                : typeof claseSeleccionada.variacion_caracteristicas ===
                    "string"
                  ? [claseSeleccionada.variacion_caracteristicas]
                  : undefined,
              variacion_caracMINMAX: Array.isArray(
                claseSeleccionada.variacion_caracMINMAX,
              )
                ? claseSeleccionada.variacion_caracMINMAX
                : undefined,
            }
          : undefined,
        nacionalidadSeleccionada || undefined,
      );
      setDesgloseDadosEstructurado(desgloseE);
    } else {
      setResultado(null);
      setDesgloseDados({});
    }
  }, [razaSeleccionada, claseSeleccionada, nacionalidadSeleccionada]);

  // Actualiza límites MIN/MAX de características según la clase seleccionada.
  useEffect(() => {
    if (claseSeleccionada) {
      const nuevasLimitaciones = obtenerLimitacionesClase(claseSeleccionada);
      setLimitaciones(nuevasLimitaciones);
    } else {
      setLimitaciones([]);
    }
  }, [claseSeleccionada]);

  const tituloSeccion =
    activeTab === "generador"
      ? "Generador de Fichas"
      : activeTab === "bonificaciones"
        ? "Lista de Exitos"
        : activeTab === "strom"
          ? "STROM"
          : "Compendio";

  const fichaContainerClass =
    activeTab === "detalles"
      ? "ficha-container ficha-container--wide"
      : "ficha-container";

  const activeTabLabel =
    fichaTabs.find((tab) => tab.key === activeTab)?.label ?? "SECCIONES";

  return (
    <div className={fichaContainerClass}>
      <div className="ficha-tabs" aria-label="Secciones del generador">
        <div className="ficha-tabs-desktop">
          {fichaTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`ficha-tab-btn ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => cambiarTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="ficha-tabs-mobile">
          <button
            type="button"
            className={`ficha-hamburger-btn ${isMobileMenuOpen ? "is-open" : ""}`}
            aria-controls="ficha-mobile-menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span className="ficha-hamburger-label">{activeTabLabel}</span>
            <span className="ficha-hamburger-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <div
            id="ficha-mobile-menu"
            className={`ficha-mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`}
          >
            {fichaTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`ficha-tab-btn ficha-mobile-tab-btn ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => cambiarTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {mostrarLogo && (
        <div className="logo-container">
          <img
            src={activeTab === "strom" ? "/Foto1.JPG" : "/logo.webp"}
            alt="Logo"
            className={`logo-img${
              activeTab === "bonificaciones" || activeTab === "detalles"
                ? " logo-img--small"
                : ""
            }${activeTab === "strom" ? " logo-img--strom" : ""}`}
          />
        </div>
      )}
      {activeTab !== "detalles" && activeTab !== "strom" && (
        <h2 className="ficha-title">{tituloSeccion}</h2>
      )}

      <GeneradorSection isActive={activeTab === "generador"}>
        <div className="ficha-select-group">
          <div className="ficha-combo-row">
            <button
              type="button"
              className="ficha-dado-btn"
              title="Seleccionar raza aleatoria"
              aria-label="Seleccionar raza aleatoria"
              disabled={razas.length === 0}
              onClick={() => {
                if (razas.length === 0) return;
                const idx = Math.floor(Math.random() * razas.length);
                const r = razas[idx];
                setRazaSeleccionada(r);
                handleComboChange();
                setResultadoHabilidades(null);
                setNacionalidadSeleccionada(null);
                if (
                  r &&
                  ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                    r.nombre.toUpperCase(),
                  )
                ) {
                  setClaseSeleccionada(null);
                }
                alert(`Raza aleatoria: ${r.nombre}`);
              }}
            >
              🎲
            </button>
            <select
              id="raza-select"
              className={`ficha-select ${razaSeleccionada ? "seleccion-raza" : ""}`}
              title="Selecciona una raza"
              value={razaSeleccionada?.nombre || ""}
              onChange={(e) => {
                const r = razas.find((r) => r.nombre === e.target.value);
                setRazaSeleccionada(r || null);
                handleComboChange();
                setResultadoHabilidades(null); // Oculta resultados de habilidades
                setNacionalidadSeleccionada(null); // Deselecciona nacionalidad al cambiar raza
                setInputRaza(""); // Limpiar input asociado
                if (
                  r &&
                  ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                    r.nombre.toUpperCase(),
                  )
                ) {
                  setClaseSeleccionada(null);
                  setInputClase("");
                }
              }}
            >
              <option value="">Raza</option>
              {razas.map((r) => (
                <option key={r.nombre} value={r.nombre}>
                  {r.nombre.toUpperCase()}
                </option>
              ))}
            </select>
            <input
              type="number"
              maxLength={3}
              className="combo-mini-input"
              placeholder="###"
              value={inputRaza}
              onChange={(e) => setInputRaza(e.target.value)}
              disabled
            />
          </div>
        </div>
        <div className="ficha-select-group">
          <div className="ficha-combo-row">
            <button
              type="button"
              className="ficha-dado-btn"
              title="Seleccionar clase aleatoria"
              aria-label="Seleccionar clase aleatoria"
              disabled={
                clases.length === 0 ||
                (!!razaSeleccionada &&
                  ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                    razaSeleccionada.nombre.toUpperCase(),
                  ))
              }
              onClick={() => {
                if (
                  clases.length === 0 ||
                  (razaSeleccionada &&
                    ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                      razaSeleccionada.nombre.toUpperCase(),
                    ))
                )
                  return;
                const idx = Math.floor(Math.random() * clases.length);
                const c = clases[idx];
                setClaseSeleccionada(c);
                setTiradas({});
                setResultadoHabilidades(null);
                setNacionalidadSeleccionada(null);
                setOrigenSeleccionado(null);
                handleComboChange();
                alert(`Clase aleatoria: ${c.nombre}`);
              }}
            >
              🎲
            </button>
            <select
              id="clase-select"
              className={`ficha-select ${claseSeleccionada ? "seleccion-clase" : ""}`}
              title="Selecciona una clase"
              value={claseSeleccionada?.nombre || ""}
              onChange={(e) => {
                const c = clases.find((c) => c.nombre === e.target.value);
                setClaseSeleccionada(c || null);
                setTiradas({}); // Limpiar tiradas al cambiar la clase
                setResultadoHabilidades(null); // Oculta resultados de habilidades
                setNacionalidadSeleccionada(null); // Deselecciona nacionalidad
                setOrigenSeleccionado(null); // Limpia el origen seleccionado
                setInputClase(""); // Limpiar input asociado
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
                  razaSeleccionada.nombre.toUpperCase(),
                ),
              )}
            >
              <option value="">Clase</option>
              {clases.map((c) => (
                <option key={c.nombre} value={c.nombre}>
                  {c.nombre.toUpperCase()}
                </option>
              ))}
            </select>
            <input
              type="number"
              maxLength={3}
              className="combo-mini-input"
              placeholder="###"
              value={inputClase}
              onChange={(e) => setInputClase(e.target.value)}
              disabled
            />
          </div>
        </div>
        {/* Combo de Nacionalidad */}
        <div className="ficha-select-group">
          <div className="ficha-combo-row">
            <button
              type="button"
              className="ficha-dado-btn"
              title="Tirar dado de nacionalidad"
              aria-label="Tirar dado de nacionalidad"
              disabled={!razaSeleccionada}
              onClick={() => {
                // Lanzar número aleatorio entre 1 y 100
                const tirada = Math.floor(Math.random() * 100) + 1;
                // Buscar nacionalidad correspondiente
                let resultado = null;
                for (const n of nacionalidades) {
                  // Convención de tablas: "00" representa 100.
                  let min = parseInt(n.minimo, 10);
                  let max = parseInt(n.maximo, 10);
                  if (n.minimo === "00") min = 100;
                  if (n.maximo === "00") max = 100;
                  // Si el rango es invertido (ej: Org: 00-00)
                  if (min > max) {
                    [min, max] = [max, min];
                  }
                  if (tirada >= min && tirada <= max) {
                    resultado = n;
                    break;
                  }
                  // Para rangos que incluyen 100 como "00"
                  if (
                    tirada === 100 &&
                    (n.minimo === "00" || n.maximo === "00")
                  ) {
                    resultado = n;
                    break;
                  }
                }
                if (resultado) {
                  setNacionalidadSeleccionada(resultado);
                  setTiradas({});
                  setResultadoHabilidades(null);
                  setOrigenSeleccionado(null);
                  handleComboChange();
                  alert(
                    `Tirada: ${tirada} → Nacionalidad: ${resultado.nombre}`,
                  );
                } else {
                  alert(`Tirada: ${tirada} → No se encontró nacionalidad.`);
                }
              }}
            >
              🎲
            </button>
            <select
              id="nacionalidad-select"
              className={`ficha-select ${nacionalidadSeleccionada ? "seleccion-nacion" : ""}`}
              title="Selecciona una nacionalidad"
              value={nacionalidadSeleccionada?.nombre || ""}
              onChange={(e) => {
                const n = nacionalidades.find(
                  (n) => n.nombre === e.target.value,
                );
                setNacionalidadSeleccionada(n || null);
                setTiradas({}); // Limpiar tiradas al cambiar nacionalidad
                setResultadoHabilidades(null); // Oculta resultados de habilidades
                setOrigenSeleccionado(null); // Limpiar origen al cambiar nacionalidad
                setInputNacionalidad(""); // Limpiar input de nacionalidad siempre que cambie el combo
                setInputOrigen(""); // Limpiar input de origen también
                handleComboChange();
              }}
              disabled={!razaSeleccionada}
            >
              <option value="">Nacionalidad</option>
              {nacionalidades.map((n) => (
                <option key={n.nombre} value={n.nombre}>
                  {n.nombre}
                </option>
              ))}
            </select>
            <div className="tooltip-wrapper">
              <input
                type="number"
                maxLength={3}
                className="combo-mini-input"
                placeholder="###"
                value={inputNacionalidad}
                onChange={(e) => {
                  setInputNacionalidad(e.target.value);
                  const valor = parseInt(e.target.value, 10);
                  if (isNaN(valor)) return;
                  let resultado = null;
                  for (const n of nacionalidades) {
                    // Mismo criterio de lectura de rangos que en la tirada aleatoria.
                    let min = parseInt(n.minimo, 10);
                    let max = parseInt(n.maximo, 10);
                    if (n.minimo === "00") min = 100;
                    if (n.maximo === "00") max = 100;
                    if (min > max) [min, max] = [max, min];
                    if (valor >= min && valor <= max) {
                      resultado = n;
                      break;
                    }
                    if (
                      valor === 100 &&
                      (n.minimo === "00" || n.maximo === "00")
                    ) {
                      resultado = n;
                      break;
                    }
                  }
                  setNacionalidadSeleccionada(resultado || null);
                  setTiradas({});
                  setResultadoHabilidades(null);
                  setOrigenSeleccionado(null);
                  if (e.target.value === "") setInputNacionalidad("");
                  handleComboChange();
                }}
                disabled={!razaSeleccionada}
              />
              <span className="tooltip-text">
                Introduce un número entre 1 y 100 para seleccionar nacionalidad
              </span>
            </div>
          </div>
        </div>
        {/* Combo de Origen */}
        <div className="ficha-select-group">
          <div className="ficha-combo-row">
            <button
              type="button"
              className="ficha-dado-btn"
              title="Tirar dado de origen"
              aria-label="Tirar dado de origen"
              disabled={!nacionalidadSeleccionada}
              onClick={() => {
                if (!nacionalidadSeleccionada) return;
                const tirada = Math.floor(Math.random() * 100) + 1;
                const origenSocial = nacionalidadSeleccionada.origen_social;
                if (!Array.isArray(origenSocial)) {
                  alert(
                    "La nacionalidad seleccionada no tiene tabla de origen social válida.",
                  );
                  return;
                }
                let origenNombre = null;
                // Recorre entradas tipo "01-50: Noble" para resolver el origen por rango.
                for (const rango of origenSocial) {
                  // Ejemplo: "01-50: Noble"
                  const partes = rango.split(":");
                  if (partes.length < 2) continue;
                  const rangoStr = partes[0].trim();
                  const nombre = partes[1].trim();
                  let [minStr, maxStr] = rangoStr.split("-");
                  minStr = minStr.trim();
                  maxStr = maxStr.trim();
                  let min = parseInt(minStr, 10);
                  let max = parseInt(maxStr, 10);
                  if (minStr === "00") min = 100;
                  if (maxStr === "00") max = 100;
                  if (min > max) [min, max] = [max, min];
                  if (tirada >= min && tirada <= max) {
                    origenNombre = nombre.toUpperCase();
                    break;
                  }
                  if (tirada === 100 && (minStr === "00" || maxStr === "00")) {
                    origenNombre = nombre.toUpperCase();
                    break;
                  }
                }
                if (origenNombre) {
                  // Buscar el objeto origen en origenesFiltrados
                  const origenObj = origenesFiltrados.find(
                    (o) => o.nombre.trim().toUpperCase() === origenNombre,
                  );
                  if (origenObj) {
                    setOrigenSeleccionado(origenObj);
                    setTiradas({});
                    setResultadoHabilidades(null);
                    alert(`Tirada: ${tirada} → Origen: ${origenObj.nombre}`);
                  } else {
                    alert(
                      `Tirada: ${tirada} → Origen encontrado en tabla: ${origenNombre}, pero no existe en el combo.`,
                    );
                  }
                } else {
                  alert(`Tirada: ${tirada} → No se encontró origen.`);
                }
              }}
            >
              🎲
            </button>
            <select
              id="origen-select"
              className="ficha-select"
              title="Selecciona un origen"
              value={origenSeleccionado?.nombre || ""}
              onChange={(e) => {
                const o = origenesFiltrados.find(
                  (o) => o.nombre === e.target.value,
                );
                setOrigenSeleccionado(o || null);
                setTiradas({}); // Limpiar tiradas al cambiar origen
                setResultadoHabilidades(null); // Oculta resultados de habilidades
                setInputOrigen(""); // Limpiar input de origen siempre que cambie el combo
                handleComboChange();
              }}
              disabled={!nacionalidadSeleccionada}
            >
              <option value="">Origen</option>
              {origenesFiltrados.map((o) => (
                <option key={o.nombre} value={o.nombre}>
                  {o.nombre}
                </option>
              ))}
            </select>
            <div className="tooltip-wrapper">
              <input
                type="number"
                maxLength={3}
                className="combo-mini-input"
                placeholder="###"
                value={inputOrigen}
                onChange={(e) => {
                  setInputOrigen(e.target.value);
                  if (!nacionalidadSeleccionada) return;
                  const valor = parseInt(e.target.value, 10);
                  if (isNaN(valor)) return;
                  const origenSocial = nacionalidadSeleccionada.origen_social;
                  if (!Array.isArray(origenSocial)) return;
                  let origenNombre = null;
                  // Igual que la tirada automática, pero usando el valor introducido por el usuario.
                  for (const rango of origenSocial) {
                    const partes = rango.split(":");
                    if (partes.length < 2) continue;
                    const rangoStr = partes[0].trim();
                    const nombre = partes[1].trim();
                    let [minStr, maxStr] = rangoStr.split("-");
                    minStr = minStr.trim();
                    maxStr = maxStr.trim();
                    let min = parseInt(minStr, 10);
                    let max = parseInt(maxStr, 10);
                    if (minStr === "00") min = 100;
                    if (maxStr === "00") max = 100;
                    if (min > max) [min, max] = [max, min];
                    if (valor >= min && valor <= max) {
                      origenNombre = nombre.toUpperCase();
                      break;
                    }
                    if (valor === 100 && (minStr === "00" || maxStr === "00")) {
                      origenNombre = nombre.toUpperCase();
                      break;
                    }
                  }
                  if (origenNombre) {
                    const origenObj = origenesFiltrados.find(
                      (o) => o.nombre.trim().toUpperCase() === origenNombre,
                    );
                    setOrigenSeleccionado(origenObj || null);
                    setTiradas({});
                    setResultadoHabilidades(null);
                    if (e.target.value === "") setInputOrigen("");
                    handleComboChange();
                  }
                }}
                disabled={!nacionalidadSeleccionada}
              />
              <span className="tooltip-text">
                Introduce un número entre 1 y 100 para seleccionar origen
              </span>
            </div>
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
                  <span className="ficha-resultado-dado">
                    {desgloseDadosEstructurado[car] ? (
                      <>
                        {desgloseDadosEstructurado[car].raza && (
                          <span className="dado-raza">
                            {desgloseDadosEstructurado[car].raza}
                          </span>
                        )}
                        {desgloseDadosEstructurado[car].clase && (
                          <>
                            <span className="dado-sep"> + </span>
                            <span className="dado-clase">
                              {desgloseDadosEstructurado[car].clase}
                            </span>
                          </>
                        )}
                        {desgloseDadosEstructurado[car].nacionalidad && (
                          <>
                            <span className="dado-sep"> + </span>
                            <span className="dado-nacion">
                              {desgloseDadosEstructurado[car].nacionalidad}
                            </span>
                          </>
                        )}
                        {desgloseDadosEstructurado[car].total && (
                          <span className="dado-total">
                            {" "}
                            &nbsp;(TOTAL: {desgloseDadosEstructurado[car].total}
                            )
                          </span>
                        )}
                      </>
                    ) : (
                      desgloseDados[car] || dado
                    )}
                  </span>
                  <input
                    type="number"
                    min="1"
                    className="ficha-resultado-input ficha-resultado-input-grande"
                    placeholder="Tirada"
                    value={tiradas[car] || ""}
                    onChange={(e) => {
                      manejarCambioCaracteristica(car, e.target.value);
                    }}
                    aria-label={`Tirada para ${car}`}
                  />
                  <button
                    type="button"
                    className="ficha-dado-btn"
                    title={`Tirar ${car}`}
                    aria-label={`Tirar ${car}`}
                    disabled={!puedeTirarCaracteristica(car)}
                    onClick={() => {
                      if (!puedeTirarCaracteristica(car)) return;
                      // Determinar fórmula: preferir TOTAL del desglose estructurado si existe
                      const totalFromEstructurado =
                        desgloseDadosEstructurado[car] &&
                        desgloseDadosEstructurado[car].total
                          ? desgloseDadosEstructurado[car].total.replace(
                              /\s*ℹ$/u,
                              "",
                            )
                          : undefined;
                      const formula =
                        totalFromEstructurado ??
                        (typeof dado === "string"
                          ? dado
                          : desgloseDados[car] || "");

                      let valor = 0;
                      try {
                        valor = formula ? tirarDado(formula) : 0;
                      } catch {
                        valor = 0;
                      }
                      // Validar límites si existen
                      if (limitaciones.length > 0) {
                        const validacion = validarLimitesCaracteristica(
                          car as NombreCaracteristica,
                          valor,
                          limitaciones,
                        );
                        if (
                          !validacion.valido &&
                          validacion.valorCorregido !== undefined
                        ) {
                          valor = validacion.valorCorregido;
                        }
                      }
                      setTiradas((prev) => ({
                        ...prev,
                        [car]: valor.toString(),
                      }));
                    }}
                  >
                    🎲
                  </button>
                </li>
              ))}
            </ul>

            {/* Leyenda de colores para desglose de dados */}
            <div className="ficha-dados-legend">
              <b>Leyenda:</b>
              <div className="ficha-dados-legend-items">
                <span className="legend-item">
                  <span className="legend-dot dado-raza" aria-hidden></span>
                  Raza
                </span>
                <span className="legend-item">
                  <span className="legend-dot dado-clase" aria-hidden></span>
                  Clase
                </span>
                <span className="legend-item">
                  <span className="legend-dot dado-nacion" aria-hidden></span>
                  Nacionalidad
                </span>
                <span className="legend-item">
                  <span className="legend-dot dado-total" aria-hidden></span>
                  TOTAL
                </span>
              </div>
            </div>

            {/* Checkbox justo encima de los botones */}
            <div className="ficha-dadosmin2-group">
              <label className="ficha-dadosmin-label">
                <input
                  type="checkbox"
                  checked={dadosMin2}
                  onChange={(e) => setDadosMin2(e.target.checked)}
                  className="ficha-dadosmin-checkbox"
                  aria-label="Activar dados mínimo 2"
                />
                Dados min. 2
              </label>
            </div>
            {/* Botones juntos */}
            <div className="ficha-botones-group">
              <button
                className="ficha-calcular-btn"
                onClick={generarTiradasAleatorias}
                disabled={
                  !nacionalidadSeleccionada ||
                  Object.keys(resultado || {}).length === 0
                }
                aria-label="Generar tiradas aleatorias"
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
                  // Cálculo de habilidades a partir de las tiradas ingresadas
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
                        claseSeleccionada.nombre.toUpperCase() ===
                        c.toUpperCase(),
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
                  const comunicacion =
                    Math.floor(con / 2) + int + pod + car - 5;

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
                aria-label="Calcular habilidades"
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
          <ResultadoHabilidades
            resultado={resultadoHabilidades}
            origen={origenSeleccionado}
            clase={claseSeleccionada}
            raza={razaSeleccionada}
          />
        )}

        {/* Información de la clase seleccionada */}
        {razaSeleccionada &&
        ["SELOROK", "DEMONIO", "SELOROKS", "DEMONIOS"].includes(
          razaSeleccionada.nombre.toUpperCase(),
        )
          ? null
          : claseSeleccionada && <ClaseInfo clase={claseSeleccionada} />}

        {/* Información de la raza seleccionada */}
        {razaSeleccionada && <RazaInfo raza={razaSeleccionada} />}

        {/* Información de la nacionalidad seleccionada */}
        {nacionalidadSeleccionada && (
          <NacionalidadInfo nacionalidad={nacionalidadSeleccionada} />
        )}

        {/* Información del origen seleccionado */}
        {origenSeleccionado && <OrigenInfo origen={origenSeleccionado} />}
      </GeneradorSection>

      <StromSection isActive={activeTab === "strom"} />

      <ListaExitosSection
        isActive={activeTab === "bonificaciones"}
        emptyMessage="Aún no hay personajes en la lista de éxitos."
      />

      <CompendioSection isActive={activeTab === "detalles"} />
    </div>
  );
}

// Fecha de última actualización visible en la web
function FechaActualizacion() {
  return (
    <div className="fecha-actualizacion">
      <div>Última actualización: 17 de Marzo de 2026</div>
      <div className="github-link-wrapper">
        <a
          href="https://github.com/Yeicogm/StromRol"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub - Yeicogm/StromRol"
          className="github-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.553 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.81 1.102.81 2.222 0 1.605-.015 2.898-.015 3.293 0 .315.21.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function AppConFecha() {
  return (
    <>
      <App />
      <FechaActualizacion />
    </>
  );
}

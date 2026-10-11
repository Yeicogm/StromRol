/**
 * Tipos del dataset de hechizos AD&D 2ª Edición.
 *
 * La fuente de datos es `public/dnd_2e_spells_es.json`, cuya estructura
 * está segregada en dos secciones (`conjuros_de_hechicero` y
 * `conjuros_de_sacerdote`). Cada sección contiene:
 *
 *   - `resumen`: totales y desglose por nivel / escuela|esfera.
 *   - `conjuros_con_estadisticas_completas`: items con todos los campos
 *     de juego (alcance, componentes, duración, descripción, etc.).
 *   - `listado_completo_de_nombres`: nombres de todos los hechizos
 *     publicados, con su libro fuente pero sin descripción.
 *
 * Este módulo expone un modelo discriminado para que el frontend pueda
 * mezclar ambos tipos en una única lista y mostrar solo los campos que
 * cada hechizo tenga.
 */

/** Tipo de personaje que puede lanzar el hechizo. */
export type HechizoCaster = "mago" | "sacerdote";

/** Etiquetas UI para el tipo de lanzador. */
export const ETIQUETAS_CASTER: Record<HechizoCaster, string> = {
  mago: "Mago",
  sacerdote: "Sacerdote",
};

/** Estado de la traducción del nombre al español. */
export type HechizoFuenteTraduccion = "oficial/verificada" | "pendiente";

/**
 * Nivel del hechizo. En el JSON viene como número ("1"–"9" para mago,
 * "1"–"7" para sacerdote). Se mantiene como `string` para uniformidad
 * con el modelo anterior.
 */
export type HechizoLevel = string;

/** Fuente declarada en `listado_completo_de_nombres` para un hechizo. */
export interface HechizoCodigoFuente {
  /** Código corto (p. ej. "PHB", "ToM"). */
  codigo: string;
  /** Nombre legible. */
  nombre: string;
}

/**
 * Hechizo del listado completo de nombres (sin descripción ni stats).
 */
export interface HechizoSoloNombre {
  /** Nombre en español. */
  nombre: string;
  /** Nombre original en inglés. */
  nombre_original_en?: string;
  /** Estado de la traducción. */
  fuente_traduccion?: HechizoFuenteTraduccion;
  /** Nivel del hechizo. */
  nivel: HechizoLevel;
  /** Si el hechizo tiene forma reversa. */
  reversible: boolean;
  /** Códigos de fuente donde se publicó. */
  codigos_de_fuente: HechizoCodigoFuente[];
}

/**
 * Hechizo con estadísticas de juego completas.
 */
export interface HechizoStats {
  /** Nombre en español. */
  nombre: string;
  /** Nombre original en inglés. */
  nombre_original_en?: string;
  /** Estado de la traducción. */
  fuente_traduccion?: HechizoFuenteTraduccion;
  /** Nivel del hechizo. */
  nivel: HechizoLevel;
  /** Escuela de magia (en español). */
  escuela: string;
  /** Esfera de sacerdote (solo presente en conjuros de sacerdote). */
  esfera?: string;
  /** Componentes del hechizo, como cadena tipo "VSM", "VS", "V", "M". */
  componentes: string;
  /** Alcance del hechizo (texto libre, p.ej. "10 yds."). */
  alcance: string;
  /** Área de efecto (texto libre, p.ej. "10-ft. radius"). */
  area_de_efecto: string;
  /** Tiempo de lanzamiento (texto libre, p.ej. "1 rd."). */
  tiempo_de_lanzamiento: string;
  /** Duración del efecto (texto libre, p.ej. "5 rds.+1 rd./level"). */
  duracion: string;
  /** Tirada de salvación necesaria (texto libre, p.ej. "Ninguna", "Neg."). */
  tirada_de_salvacion: string;
  /** Descripción del hechizo. */
  descripcion: string;
  /** Idioma en que está la descripción (`"en"` en el dataset actual). */
  idioma_descripcion?: string;
  /**
   * Etiqueta de origen para el compendio Strom. Asignada por
   * `scripts/add_fuente_strom.mjs` a todos los hechizos con
   * estadísticas. Se muestra como "libro" en la ficha de detalle y
   * se puede usar como filtro.
   */
  fuente_strom?: string;
}

/** Unión de un hechizo con o sin estadísticas. */
export type HechizoCompleto = HechizoStats | HechizoSoloNombre;

/**
 * Discriminador: ¿el hechizo tiene estadísticas de juego completas?
 */
export function tieneStats(h: HechizoCompleto): h is HechizoStats {
  return "escuela" in h && "descripcion" in h;
}

/** Resumen con desglose por escuela (hechicero). */
export interface HechizoResumenEscuela {
  total_con_estadisticas_completas: number;
  total_de_nombres_en_compilacion: number;
  pendientes_de_traduccion_de_nombre: number;
  por_nivel: Record<string, number>;
  por_escuela_estadisticas_completas: Record<string, number>;
}

/** Resumen con desglose por esfera (sacerdote). */
export interface HechizoResumenEsfera {
  total_con_estadisticas_completas: number;
  total_de_nombres_en_compilacion: number;
  pendientes_de_traduccion_de_nombre: number;
  por_nivel: Record<string, number>;
  por_esfera_estadisticas_completas: Record<string, number>;
}

/** Resumen unión: depende del tipo de sección. */
export type HechizoResumen = HechizoResumenEscuela | HechizoResumenEsfera;

/**
 * Una sección del dataset (`conjuros_de_hechicero` o `conjuros_de_sacerdote`).
 */
export interface HechizosSeccion<R extends HechizoResumen = HechizoResumen> {
  resumen: R;
  conjuros_con_estadisticas_completas: HechizoStats[];
  listado_completo_de_nombres: HechizoSoloNombre[];
}

/** Tupla de hechizo con su caster, usada por el explorador. */
export interface HechizoConCaster {
  caster: HechizoCaster;
  hechizo: HechizoCompleto;
}

/** Forma completa del archivo `public/dnd_2e_spells_es.json`. */
export interface HechizosDataV2 {
  edicion: string;
  editorial: string;
  nota_de_copyright: string;
  notas: string[];
  /** Mapa de código de fuente → nombre legible. */
  leyenda_de_fuentes: Record<string, string>;
  conjuros_de_hechicero: HechizosSeccion<HechizoResumenEscuela>;
  conjuros_de_sacerdote: HechizosSeccion<HechizoResumenEsfera>;
}

/**
 * Código interno usado para representar los hechizos con
 * estadísticas en la leyenda de fuentes. El JSON fuente no incluye
 * este código; lo añadimos en tiempo de carga para homogeneizar
 * el tratamiento con `listado_completo_de_nombres.codigos_de_fuente`.
 */
export const CODIGO_LIBRO_STROM = "LJS";

/**
 * Etiqueta legible para el código `LJS`. Coincide con el valor
 * `fuente_strom` que asigna `scripts/add_fuente_strom.mjs`.
 */
export const ETIQUETA_LIBRO_STROM = "LIBRO JUGADOR STROM";

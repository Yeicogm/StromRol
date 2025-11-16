/**
 * Interfaz que define todas las habilidades disponibles en el juego
 * Estas habilidades pueden ser mejoradas por razas, clases y experiencia
 */
export interface Habilidades {
  // === HABILIDADES FÍSICAS ===
  /** Capacidad de mantener el equilibrio en situaciones difíciles */
  Equilibrio?: number;

  /** Agilidad y velocidad de movimiento */
  Agilidad?: number;

  /** Capacidad de saltar distancias y alturas */
  Saltar?: number;

  /** Habilidad para escalar superficies verticales */
  Trepar?: number;

  /** Capacidad de nadar en diferentes condiciones */
  Nadar?: number;

  /** Habilidad para montar y controlar monturas */
  Equitación?: number;

  // === HABILIDADES DE COMBATE Y SIGILO ===
  /** Capacidad de atacar por sorpresa desde una posición oculta */
  Emboscada?: number;

  /** Habilidad para evitar ataques y peligros */
  Evitar?: number;

  /** Habilidad para moverse sin ser detectado */
  Movimiento silencioso?: number;

  /** Capacidad de ocultarse de la vista */
  Esconderse?: number;

  /** Habilidad para hacerse pasar por otra persona o cosa */
  Disimular?: number;

  /** Combinación de Movimiento silencioso y esconderse */
  "Desli Y Esconderse"?: number;

  // === HABILIDADES DE PERCEPCIÓN ===
  /** Capacidad general de percibir el entorno */
  Percepción?: number;

  /** Habilidad visual para detectar detalles */
  Ver?: number;

  /** Capacidad de oír sonidos sutiles */
  Escuchar?: number;

  /** Habilidad para detectar olores */
  Olfatear?: number;

  /** Capacidad de identificar sabores y sustancias */
  Degustar?: number;

  /** Habilidad para encontrar objetos o pistas ocultas */
  Buscar?: number;

  // === HABILIDADES SOCIALES ===
  /** Capacidad de convencer e influir en otros */
  Persuadir?: number;

  /** Habilidades de comunicación general */
  Comunicación?: number;

  /** Habilidad musical y vocal */
  Cantar?: number;

  // === HABILIDADES DE CONOCIMIENTO ===
  /** Conocimiento sobre plantas medicinales y venenosas */
  "Conocimiento de plantas y venenos"?: number;

  /** Conocimiento de historias, canciones y tradiciones */
  "Música y Leyendas"?: number;

  /** Habilidad para crear y leer mapas */
  Cartografía?: number;

  // === HABILIDADES PRÁCTICAS ===
  /** Conocimientos médicos básicos */
  "Primeros Auxilios"?: number;

  /** Habilidad para evaluar el valor de objetos */
  "Evaluar un tesoro"?: number;

  /** Abreviación de "Evaluar Tesoro" */
  "Evaluar T."?: number;

  /** Habilidad para moverse silenciosamente */
  Discreción?: number;

  /** Habilidad para manipular objetos con destreza */
  Manipulación?: number;

  /** Habilidad para abrir cerraduras */
  "Forzar C."?: number;

  /** Habilidad para robar carteras y objetos pequeños */
  "Robar Bolsas"?: number;

  /** Habilidad para realizar trucos de manos */
  "Hacer V."?: number;

  // === HABILIDADES ESPECIALES ===
  /** Habilidades mágicas de regeneración */
  "Regeneración de SM"?: string; // Ej: "2 al día", "3 al día"

  /** Habilidades de encantamiento */
  "Encantamiento de objetos"?: boolean;

  /** Ataques mágicos a distancia */
  "Ataque a distancia con proyectiles mágicos"?: number;
}

/**
 * Interfaz simplificada para bonificaciones de habilidades
 * Permite representar tanto valores numéricos como strings (para compatibilidad)
 */
export interface BonificacionesHabilidades {
  [nombreHabilidad: string]: number | string;
}

/**
 * Lista de todas las habilidades válidas como union type
 * Útil para validaciones y autocompletado
 */
export type NombreHabilidad =
  // Físicas
  | "Equilibrio"
  | "Agilidad"
  | "Saltar"
  | "Trepar"
  | "Nadar"
  | "Equitación"
  // Combate y Sigilo
  | "Emboscada"
  | "Evitar"
  | "Movimiento silencioso"
  | "Esconderse"
  | "Disimular"
  | "Desli Y Esconderse"
  // Percepción
  | "Percepción"
  | "Ver"
  | "Escuchar"
  | "Olfatear"
  | "Degustar"
  | "Buscar"
  // Sociales
  | "Persuadir"
  | "Comunicación"
  | "Cantar"
  // Conocimiento
  | "Conocimiento de plantas y venenos"
  | "Música y Leyendas"
  | "Cartografía"
  // Prácticas
  | "Primeros Auxilios"
  | "Evaluar un tesoro"
  | "Evaluar T."
  | "Discreción"
  | "Manipulación"
  | "Forzar C."
  | "Robar Bolsas"
  | "Hacer V."
  // Especiales
  | "Regeneración de SM"
  | "Encantamiento de objetos"
  | "Ataque a distancia con proyectiles mágicos";

/**
 * Categorías de habilidades para organización
 */
export const CATEGORIAS_HABILIDADES = {
  FISICAS: [
    "Equilibrio",
    "Agilidad",
    "Saltar",
    "Trepar",
    "Nadar",
    "Equitación",
  ],
  COMBATE_SIGILO: [
    "Emboscada",
    "Evitar",
    "Movimiento silencioso",
    "Esconderse",
    "Disimular",
    "Desli Y Esconderse",
  ],
  PERCEPCION: [
    "Percepción",
    "Ver",
    "Escuchar",
    "Olfatear",
    "Degustar",
    "Buscar",
  ],
  SOCIALES: ["Persuadir", "Comunicación", "Cantar"],
  CONOCIMIENTO: [
    "Conocimiento de plantas y venenos",
    "Música y Leyendas",
    "Cartografía",
  ],
  PRACTICAS: [
    "Primeros Auxilios",
    "Evaluar un tesoro",
    "Evaluar T.",
    "Discreción",
    "Manipulación",
    "Forzar C.",
    "Robar Bolsas",
    "Hacer V.",
  ],
  ESPECIALES: [
    "Regeneración de SM",
    "Encantamiento de objetos",
    "Ataque a distancia con proyectiles mágicos",
  ],
} as const;

/**
 * Mapeo de nombres de habilidades para manejar variaciones y abreviaciones
 */
export const MAPEO_HABILIDADES: Record<string, NombreHabilidad> = {
  // Nombres completos
  Equilibrio: "Equilibrio",
  Agilidad: "Agilidad",
  Saltar: "Saltar",
  Trepar: "Trepar",
  Nadar: "Nadar",
  Equitación: "Equitación",
  Emboscada: "Emboscada",
  Evitar: "Evitar",
  Movimiento silencioso: "Movimiento silencioso",
  Esconderse: "Esconderse",
  Disimular: "Disimular",
  "Desli Y Esconderse": "Desli Y Esconderse",
  Percepción: "Percepción",
  Ver: "Ver",
  Escuchar: "Escuchar",
  Olfatear: "Olfatear",
  Degustar: "Degustar",
  Buscar: "Buscar",
  Persuadir: "Persuadir",
  Comunicación: "Comunicación",
  Cantar: "Cantar",
  "Conocimiento de plantas y venenos": "Conocimiento de plantas y venenos",
  "Música y Leyendas": "Música y Leyendas",
  Cartografía: "Cartografía",
  "Primeros Auxilios": "Primeros Auxilios",
  "Evaluar un tesoro": "Evaluar un tesoro",
  "Evaluar T.": "Evaluar T.",
  Discreción: "Discreción",
  Manipulación: "Manipulación",
  "Forzar C.": "Forzar C.",
  "Robar Bolsas": "Robar Bolsas",
  "Hacer V.": "Hacer V.",

  // Variaciones en minúsculas
  equilibrio: "Equilibrio",
  agilidad: "Agilidad",
  saltar: "Saltar",
  trepar: "Trepar",
  nadar: "Nadar",
  equitación: "Equitación",
  emboscada: "Emboscada",
  evitar: "Evitar",
  Movimiento silencioso: "Movimiento silencioso",
  esconderse: "Esconderse",
  disimular: "Disimular",
  percepción: "Percepción",
  ver: "Ver",
  escuchar: "Escuchar",
  olfatear: "Olfatear",
  degustar: "Degustar",
  buscar: "Buscar",
  persuadir: "Persuadir",
  comunicación: "Comunicación",
  cantar: "Cantar",
  discreción: "Discreción",
  manipulación: "Manipulación",

  // Abreviaciones comunes
  "plantas y venenos": "Conocimiento de plantas y venenos",
  "+50 plantas y venenos": "Conocimiento de plantas y venenos",
  "+10 Percepción": "Percepción",
  "+5 Percepción": "Percepción",
};

/**
 * Función utilitaria para normalizar nombres de habilidades
 * @param nombre Nombre de la habilidad en cualquier formato
 * @returns Nombre normalizado de la habilidad o undefined si no es válido
 */
export function normalizarNombreHabilidad(
  nombre: string
): NombreHabilidad | undefined {
  // Primero intentar mapeo directo
  const mapped = MAPEO_HABILIDADES[nombre.trim()];
  if (mapped) return mapped;

  // Intentar limpieza de prefijos/sufijos numéricos
  const cleaned = nombre
    .replace(/^[+-]?\d+\s*%?\s*/, "")
    .replace(/\s*[+-]?\d+\s*%?$/, "")
    .trim();
  return MAPEO_HABILIDADES[cleaned];
}

/**
 * Función para validar si un string es una habilidad válida
 * @param nombre Nombre a validar
 * @returns true si es una habilidad válida
 */
export function esHabilidadValida(nombre: string): boolean {
  return normalizarNombreHabilidad(nombre) !== undefined;
}

/**
 * Función para obtener la categoría de una habilidad
 * @param habilidad Nombre de la habilidad
 * @returns Categoría de la habilidad o undefined si no se encuentra
 */
export function obtenerCategoriaHabilidad(
  habilidad: NombreHabilidad
): keyof typeof CATEGORIAS_HABILIDADES | undefined {
  for (const [categoria, habilidades] of Object.entries(
    CATEGORIAS_HABILIDADES
  )) {
    if ((habilidades as readonly string[]).includes(habilidad)) {
      return categoria as keyof typeof CATEGORIAS_HABILIDADES;
    }
  }
  return undefined;
}

/**
 * Función para extraer valor numérico de una habilidad con formato "+10", "100%", etc.
 * @param texto Texto con bonificación (ej: "+10 Percepción", "Primeros Auxilios +100")
 * @returns Objeto con nombre de habilidad normalizado y valor numérico
 */
export function extraerBonificacionHabilidad(
  texto: string
): { habilidad: NombreHabilidad; valor: number } | null {
  const trimmed = texto.trim();

  // Patrón para "+10 Habilidad" o "Habilidad +10" o "Habilidad 100%"
  const patrones = [
    /^([+-]?\d+)\s*%?\s*(.+)$/, // "+10 Habilidad"
    /^(.+?)\s*([+-]?\d+)\s*%?$/, // "Habilidad +10"
  ];

  for (const patron of patrones) {
    const match = trimmed.match(patron);
    if (match) {
      let valor: number;
      let nombreHabilidad: string;

      if (patron === patrones[0]) {
        // Formato: "+10 Habilidad"
        valor = parseInt(match[1].replace(/[+]/g, ""));
        nombreHabilidad = match[2];
      } else {
        // Formato: "Habilidad +10"
        nombreHabilidad = match[1];
        valor = parseInt(match[2].replace(/[+]/g, ""));
      }

      const habilidadNormalizada = normalizarNombreHabilidad(nombreHabilidad);
      if (habilidadNormalizada && !isNaN(valor)) {
        return { habilidad: habilidadNormalizada, valor };
      }
    }
  }

  return null;
}

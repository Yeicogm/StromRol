/**
 * Tipo de personaje que puede lanzar el hechizo.
 * En el dataset: `mago` (Wizard) y `hechicero` (Sorcerer).
 */
export type HechizoCaster = "mago" | "hechicero";

/**
 * Nombre canónico del libro fuente del hechizo (2E).
 * Valores observados en `spells.json`:
 *  - "Player's Handbook"
 *  - "Tome of Magic"
 *  - "Spells and Magic"
 *  - "The Complete Book of Necromancers"
 *  - "The Complete Wizard's Handbook"
 *  - "Forgotten Realms Adventures"
 */
export type HechizoSource = string;

/**
 * Nivel del hechizo, almacenado como cadena ("1"–"9") en el JSON fuente.
 */
export type HechizoLevel = string;

/** Definición de un hechizo del compendio Strom (2E). */
export interface Hechizo {
  /** Identificador único global (autonumérico). */
  id: number;
  /** Nombre en español. */
  name: string;
  /** Nivel del hechizo ("1"–"9", string en el JSON). */
  level: HechizoLevel;
  /** Escuela de magia (en inglés: "Divination", "Evocation", …). */
  school: string;
  /** Tipo de lanzador: mago o hechicero. */
  caster: HechizoCaster;
  /** ¿Requiere componente verbal? */
  verbal: boolean;
  /** ¿Requiere componente somático? */
  somatic: boolean;
  /** ¿Requiere componente material? */
  material: boolean;
  /** Descripción de los materiales necesarios (puede estar vacío). */
  materials: string;
  /** Alcance del hechizo (texto libre, p.ej. "80 yds."). */
  range: string;
  /** Área de efecto (texto libre). */
  aoe: string;
  /** Tiempo de lanzamiento (texto libre, p.ej. "1 rd."). */
  casting_time: string;
  /** Duración del efecto (texto libre, p.ej. "5 rds.+1 rd./level"). */
  duration: string;
  /** Tirada de salvación necesaria (texto libre, p.ej. "None", "Negates"). */
  save: string;
  /** Daño infligido (texto libre; cadena vacía si no aplica). */
  damage: string;
  /** Descripción en español (puede contener `**negrita**` e `*cursiva*`). */
  description: string;
  /** Libro fuente del hechizo. */
  source: HechizoSource;
  /** Página dentro del libro fuente. */
  page: number;
  /** ¿El hechizo es reversible (versión clerical inversa)? */
  reversible: boolean;
}

/** Estructura del archivo `public/spells.json`. */
export interface HechizosData {
  info?: {
    author?: string;
    version?: string;
    books_included?: string;
    title?: string;
    version_date?: string;
    info?: string;
  };
  spells: Hechizo[];
}

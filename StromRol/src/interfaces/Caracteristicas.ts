/**
 * Interfaz que define todas las características principales del juego
 * Estas son las estadísticas básicas que definen a un personaje
 */
export interface Caracteristicas {
  /** Fuerza física del personaje - determina daño cuerpo a cuerpo y capacidad de carga */
  Fuerza: string;
  
  /** Resistencia física y salud del personaje - determina puntos de vida */
  Constitución: string;
  
  /** Tamaño físico del personaje - afecta al combate y movimiento */
  Tamaño: string;
  
  /** Capacidad intelectual y de razonamiento - afecta hechizos y habilidades mentales */
  Inteligencia: string;
  
  /** Fuerza mágica y espiritual - determina puntos de magia */
  Poder: string;
  
  /** Agilidad y coordinación - afecta iniciativa y habilidades físicas */
  Destreza: string;
  
  /** Presencia y atractivo personal - afecta interacciones sociales */
  Carisma: string;
}

/**
 * Interfaz para características con valores numéricos calculados
 * Útil cuando ya se han resuelto las tiradas de dados
 */
export interface CaracteristicasNumericas {
  Fuerza: number;
  Constitución: number;
  Tamaño: number;
  Inteligencia: number;
  Poder: number;
  Destreza: number;
  Carisma: number;
}

/**
 * Interfaz para modificadores de características
 * Permite representar tanto valores fijos como expresiones de dados
 */
export interface ModificadoresCaracteristicas {
  Fuerza?: string;
  Constitución?: string;
  Tamaño?: string;
  Inteligencia?: string;
  Poder?: string;
  Destreza?: string;
  Carisma?: string;
}

/**
 * Tipos de características válidas como union type
 * Útil para validaciones y funciones que trabajen con nombres de características
 */
export type NombreCaracteristica = 
  | 'Fuerza' 
  | 'Constitución' 
  | 'Tamaño' 
  | 'Inteligencia' 
  | 'Poder' 
  | 'Destreza' 
  | 'Carisma';

/**
 * Mapeo de nombres de características en diferentes formatos
 * Para manejar las variaciones en mayúsculas/minúsculas que aparecen en los JSONs
 */
export const MAPEO_CARACTERISTICAS: Record<string, NombreCaracteristica> = {
  // Formato normal (como aparece en las razas)
  'Fuerza': 'Fuerza',
  'Constitución': 'Constitución',
  'Tamaño': 'Tamaño',
  'Inteligencia': 'Inteligencia',
  'Poder': 'Poder',
  'Destreza': 'Destreza',
  'Carisma': 'Carisma',
  
  // Formato en mayúsculas (como aparece en las clases)
  'FUERZA': 'Fuerza',
  'CONSTITUCIÓN': 'Constitución',
  'TAMAÑO': 'Tamaño',
  'INTELIGENCIA': 'Inteligencia',
  'PODER': 'Poder',
  'DESTREZA': 'Destreza',
  'CARISMA': 'Carisma',
  
  // Formato en minúsculas
  'fuerza': 'Fuerza',
  'constitución': 'Constitución',
  'tamaño': 'Tamaño',
  'inteligencia': 'Inteligencia',
  'poder': 'Poder',
  'destreza': 'Destreza',
  'carisma': 'Carisma',
  
  // Abreviaciones comunes
  'FUE': 'Fuerza',
  'CON': 'Constitución',
  'TAM': 'Tamaño',
  'INT': 'Inteligencia',
  'POD': 'Poder',
  'DES': 'Destreza',
  'CAR': 'Carisma',
  'DESt': 'Destreza' // Variación encontrada en los JSONs
};

/**
 * Función utilitaria para normalizar nombres de características
 * @param nombre Nombre de la característica en cualquier formato
 * @returns Nombre normalizado de la característica o undefined si no es válido
 */
export function normalizarNombreCaracteristica(nombre: string): NombreCaracteristica | undefined {
  return MAPEO_CARACTERISTICAS[nombre.trim()];
}

/**
 * Función para validar si un string es una característica válida
 * @param nombre Nombre a validar
 * @returns true si es una característica válida
 */
export function esCaracteristicaValida(nombre: string): boolean {
  return normalizarNombreCaracteristica(nombre) !== undefined;
}

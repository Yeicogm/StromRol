import type { Caracteristicas } from './Caracteristicas';
import type { BonificacionesHabilidades } from './Habilidades';

export interface Raza {
  nombre: string;
  descripcion: string;
  caracteristicas: Caracteristicas;
  notas?: string;
  armadura?: string;
  ataque?: string;
  rango: string;
  bonificaciones: BonificacionesHabilidades;
}

export interface RazasData {
  razas: Raza[];
}

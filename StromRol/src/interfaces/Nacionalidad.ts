export interface Nacionalidad {
  nombre: string;
  minimo: string;
  maximo: string;
  variacion_caracteristicas: string[];
  origen_social: string[] | string;
  info_nacionalidad: string;
}

export interface NacionalidadesData {
  nacionalidades: Nacionalidad[];
}

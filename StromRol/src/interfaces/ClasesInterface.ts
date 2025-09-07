export interface BonusCombate {
  ataque: string;
  defensa: string;
  armas_arrojadizas?: string;
  montado_a_caballo?: string; // Campo opcional para casos específicos
}

export interface Clase {
  nombre: string;
  descripcion: string;
  rango: string;
  variacion_caracteristicas?: string[];
  variacion_carac_info?: string;
  variacion_habilidades?: string[];
  equipo_especial?: string;
  Bonus_combate?: BonusCombate;
  especial?: string;
  cualidades: string;
}

export interface ClasesData {
  clases: Clase[];
}

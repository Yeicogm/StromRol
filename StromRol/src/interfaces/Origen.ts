export interface Origen {
  nombre: string;
  minimo: number;
  maximo: number;
  variacion_habilidades: string[];
  variacion_caracteristicas: string[];
  variacion_bonus_combate: {
    ataque?: string;
    defensa?: string;
    armas_arrojadizas?: string;
    [key: string]: string | undefined;
  };
  info_Origen: string;
}

export interface OrigenesData {
  origenes: Origen[];
}

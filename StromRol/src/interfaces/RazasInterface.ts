export interface Raza {
  nombre: string;
  descripcion: string;
  caracteristicas: {
    Fuerza: string;
    Constitución: string;
    Tamaño: string;
    Inteligencia: string;
    Poder: string;
    Destreza: string;
    Carisma: string;
  };
  notas?: string;
  armadura?: string;
  ataque?: string;
  rango: string;
  bonificaciones: {
    [key: string]: string; // Permite bonificaciones dinámicas como "Olfatear", "Degustar", etc.
  };
}

export interface RazasData {
  razas: Raza[];
}

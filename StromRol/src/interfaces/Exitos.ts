export interface PersonajeExitoInput {
  jugador?: unknown;
  nombrePersonaje?: unknown;
  raza?: unknown;
  clases?: unknown;
  nivelGuerrero?: unknown;
  nivelSemi?: unknown;
  nivelPicaro?: unknown;
  nivelMago?: unknown;
}

export interface PersonajeExito {
  jugador: string;
  nombrePersonaje: string;
  raza: string;
  clases: string[];
  nivelGuerrero: number;
  nivelSemi: number;
  nivelPicaro: number;
  nivelMago: number;
  totalNiveles: number;
  totalPuntos: number;
}

export interface ExitosData {
  personajes?: unknown;
}

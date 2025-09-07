interface Caracteristicas {
  [key: string]: string; // Ejemplo: "Fuerza": "3D6"
}

interface Raza {
  nombre: string;
  caracteristicas: Caracteristicas;
}

interface Clase {
  nombre: string;
  variacion_caracteristicas?: string; // Ejemplo: "Int +1", "POD +1D"
}

export function parseDados(dado: string): number {
  const match = dado.match(/(\d+)D(\d+)([+-]\d+)?/i);
  if (!match) return 0;

  const cantidad = parseInt(match[1], 10);
  const caras = parseInt(match[2], 10);
  const modificador = match[3] ? parseInt(match[3], 10) : 0;

  // Simular la tirada de dados
  let total = 0;
  for (let i = 0; i < cantidad; i++) {
    total += Math.floor(Math.random() * caras) + 1;
  }
  return total + modificador;
}

export function aplicarVariaciones(
  caracteristicas: Caracteristicas,
  variaciones: string | undefined
): Caracteristicas {
  if (!variaciones) return caracteristicas;

  const nuevasCaracteristicas = { ...caracteristicas };
  const cambios = variaciones.split(" ");

  for (let i = 0; i < cambios.length; i += 2) {
    const atributo = cambios[i];
    const cambio = cambios[i + 1];

    if (cambio.includes("D")) {
      // Agregar dados (por ejemplo, "+1D6")
      nuevasCaracteristicas[
        atributo
      ] = `${nuevasCaracteristicas[atributo]} + ${cambio}`;
    } else {
      // Modificar valor base (por ejemplo, "+1")
      const valorActual = parseInt(nuevasCaracteristicas[atributo] || "0", 10);
      nuevasCaracteristicas[atributo] = (
        valorActual + parseInt(cambio, 10)
      ).toString();
    }
  }

  return nuevasCaracteristicas;
}

export function calcularCaracteristicasFinales(
  raza: Raza,
  clase: Clase
): Caracteristicas {
  const base = raza.caracteristicas;
  const variaciones = clase.variacion_caracteristicas;

  return aplicarVariaciones(base, variaciones);
}

/* // Ejemplo de uso:
export const razaSeleccionada: Raza = {
  nombre: "ELFOS",
  caracteristicas: {
    Fuerza: "3D8",
    Constitución: "4D6",
    Tamaño: "3D6",
    Inteligencia: "4D6",
    Poder: "2D8",
    Destreza: "4D6",
    Carisma: "1D8+2",
  },
};

export const claseSeleccionada: Clase = {
  nombre: "MAGO / HECHICERO",
  variacion_caracteristicas: "POD 5D8 INT +1D6 (MAX FUE18)",
};

export const caracteristicasFinales = calcularCaracteristicasFinales(
  razaSeleccionada,
  claseSeleccionada
);

console.log("Características finales:", caracteristicasFinales); */

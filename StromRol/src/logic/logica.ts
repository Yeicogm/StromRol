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
  variaciones: string[] | undefined
): Caracteristicas {
  if (!variaciones || variaciones.length === 0) return caracteristicas;

  const nuevasCaracteristicas = { ...caracteristicas };

  for (const variacion of variaciones) {
    // Ejemplo: "Inteligencia +1", "Destreza +1D", "PODER +2D6", etc.
    const match = variacion.match(
      /^(\w+)\s*([+-]?\d+D\d+|[+-]?\d+D|[+-]?\d+)$/i
    );
    if (!match) continue;
    const atributo = match[1];
    const cambio = match[2];

    // Buscar el atributo ignorando mayúsculas/minúsculas
    const claveReal = Object.keys(nuevasCaracteristicas).find(
      (k) => k.toLowerCase() === atributo.toLowerCase()
    );
    if (!claveReal) continue;

    const actual = nuevasCaracteristicas[claveReal] || "";
    // Si el valor actual es una tirada de dados (ej: "2D6", "2D6+1")
    const dadoMatch = actual.match(/^(\d+)D(\d+)([+-]\d+)?$/);
    // Si la variación NO contiene operador '+' ni '-', SIEMPRE reemplaza el valor
    if (!cambio.includes("+") && !cambio.includes("-")) {
      nuevasCaracteristicas[claveReal] = cambio;
      continue;
    }
    if (dadoMatch) {
      let dados = parseInt(dadoMatch[1], 10);
      let caras = parseInt(dadoMatch[2], 10);
      let mod = dadoMatch[3] ? parseInt(dadoMatch[3], 10) : 0;

      if (/^[+-]?\d+D$/.test(cambio)) {
        // Ejemplo: '+1D' => sumar un dado
        const dadosExtra = parseInt(cambio.replace("D", ""), 10);
        dados += dadosExtra;
        nuevasCaracteristicas[claveReal] = `${dados}D${caras}${
          mod !== 0 ? (mod > 0 ? "+" : "") + mod : ""
        }`;
      } else if (/^[+-]?\d+D\d+$/.test(cambio)) {
        // Ejemplo: '+2D6' => sumar dados y caras (no muy común, pero soportado)
        const extraMatch = cambio.match(/([+-]?\d+)D(\d+)/);
        if (extraMatch) {
          dados += parseInt(extraMatch[1], 10);
          caras = parseInt(extraMatch[2], 10); // se puede ajustar según reglas
        }
        nuevasCaracteristicas[claveReal] = `${dados}D${caras}${
          mod !== 0 ? (mod > 0 ? "+" : "") + mod : ""
        }`;
      } else if (/^[+-]?\d+$/.test(cambio)) {
        // Ejemplo: '+1' => sumar modificador
        mod += parseInt(cambio, 10);
        nuevasCaracteristicas[claveReal] = `${dados}D${caras}${
          mod !== 0 ? (mod > 0 ? "+" : "") + mod : ""
        }`;
      }
    } else {
      // Si no es una tirada de dados, sumar normalmente
      if (/^[+-]?\d+$/.test(cambio)) {
        const valorActual = parseInt(actual || "0", 10);
        nuevasCaracteristicas[claveReal] = (
          valorActual + parseInt(cambio, 10)
        ).toString();
      } else {
        nuevasCaracteristicas[claveReal] = cambio;
      }
    }
  }

  return nuevasCaracteristicas;
}

export function calcularCaracteristicasFinales(
  raza: Raza,
  clase: { variacion_caracteristicas?: string[] }
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

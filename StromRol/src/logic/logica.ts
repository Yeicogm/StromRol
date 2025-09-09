import type { Caracteristicas } from "../interfaces/Caracteristicas";
import { MAPEO_CARACTERISTICAS } from "../interfaces/Caracteristicas";
import type { Raza } from "../interfaces/RazasInterface";

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
    // Ejemplo: "Inteligencia +1", "Destreza +1D", "PODER +2D6", "-2 INTELIGENCIA", etc.
    // Permitir letras acentuadas y ñ en el nombre de la característica
    let match = variacion.match(
      /^([\wÁÉÍÓÚÜÑáéíóúüñ]+)\s*([+-]?\d+D\d+|[+-]?\d+D|[+-]?\d+)$/i
    );

    // Si no coincide con el primer patrón, intentar con el formato "-2 INTELIGENCIA" o "+2 FUERZA"
    if (!match) {
      match = variacion.match(
        /^([+-]?\d+D\d+|[+-]?\d+D|[+-]?\d+)\s+([\wÁÉÍÓÚÜÑáéíóúüñ]+)$/i
      );
      if (match) {
        // Intercambiar el orden: el cambio está primero, luego el atributo
        const temp = match[1];
        match[1] = match[2];
        match[2] = temp;
      }
    }

    if (!match) {
      console.log(`[Variación ignorada] No coincide:`, variacion);
      continue;
    }
    const atributo = match[1];
    const cambio = match[2];

    // Normalizar el nombre de la característica usando el mapeo
    const nombreNormalizado =
      MAPEO_CARACTERISTICAS[atributo.toUpperCase()] ||
      MAPEO_CARACTERISTICAS[atributo];
    if (!nombreNormalizado) {
      console.log(
        `[Atributo ignorado] No normalizado:`,
        atributo,
        "de variación",
        variacion
      );
      continue;
    }

    const actual = nuevasCaracteristicas[nombreNormalizado] || "";
    console.log(`[Aplicando variación]`, {
      atributo,
      nombreNormalizado,
      cambio,
      actual,
      variacion,
    });

    // Si el valor actual es una tirada de dados (ej: "2D6", "2D6+1")
    const dadoMatch = actual.match(/^(\d+)D(\d+)([+-]\d+)?$/);

    // Si la variación NO contiene operador '+' ni '-', SIEMPRE reemplaza el valor
    if (!cambio.includes("+") && !cambio.includes("-")) {
      nuevasCaracteristicas[nombreNormalizado] = cambio;
      console.log(`[Reemplazo directo]`, nombreNormalizado, "->", cambio);
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
        nuevasCaracteristicas[nombreNormalizado] = `${dados}D${caras}${
          mod !== 0 ? (mod > 0 ? "+" : "") + mod : ""
        }`;
        console.log(
          `[Suma dados]`,
          nombreNormalizado,
          "->",
          nuevasCaracteristicas[nombreNormalizado]
        );
      } else if (/^[+-]?\d+D\d+$/.test(cambio)) {
        // Ejemplo: '+2D6' => sumar dados y caras (no muy común, pero soportado)
        const extraMatch = cambio.match(/([+-]?\d+)D(\d+)/);
        if (extraMatch) {
          dados += parseInt(extraMatch[1], 10);
          caras = parseInt(extraMatch[2], 10); // se puede ajustar según reglas
        }
        nuevasCaracteristicas[nombreNormalizado] = `${dados}D${caras}${
          mod !== 0 ? (mod > 0 ? "+" : "") + mod : ""
        }`;
        console.log(
          `[Suma dados y caras]`,
          nombreNormalizado,
          "->",
          nuevasCaracteristicas[nombreNormalizado]
        );
      } else if (/^[+-]?\d+$/.test(cambio)) {
        // Ejemplo: '+1' => sumar modificador
        // Si el valor actual es tipo XdY+Z, suma al modificador
        mod += parseInt(cambio, 10);
        nuevasCaracteristicas[nombreNormalizado] = `${dados}D${caras}${
          mod !== 0 ? (mod > 0 ? "+" : "") + mod : ""
        }`;
        console.log(
          `[Suma modificador]`,
          nombreNormalizado,
          "->",
          nuevasCaracteristicas[nombreNormalizado]
        );
      }
    } else {
      // Si no es una tirada de dados, sumar normalmente
      if (/^[+-]?\d+$/.test(cambio)) {
        // Si el valor actual es tipo XdY+Z, sumar al modificador
        const dadoMatchSimple = actual.match(/^(\d+)D(\d+)([+-]\d+)?$/);
        if (dadoMatchSimple) {
          let dados = parseInt(dadoMatchSimple[1], 10);
          let caras = parseInt(dadoMatchSimple[2], 10);
          let mod = dadoMatchSimple[3] ? parseInt(dadoMatchSimple[3], 10) : 0;
          mod += parseInt(cambio, 10);
          nuevasCaracteristicas[nombreNormalizado] = `${dados}D${caras}${
            mod !== 0 ? (mod > 0 ? "+" : "") + mod : ""
          }`;
          console.log(
            `[Suma modificador simple]`,
            nombreNormalizado,
            "->",
            nuevasCaracteristicas[nombreNormalizado]
          );
        } else {
          // Si no es tipo XdY, sumar normalmente
          const valorActual = parseInt(actual || "0", 10);
          nuevasCaracteristicas[nombreNormalizado] = (
            valorActual + parseInt(cambio, 10)
          ).toString();
          console.log(
            `[Suma valor simple]`,
            nombreNormalizado,
            "->",
            nuevasCaracteristicas[nombreNormalizado]
          );
        }
      } else {
        nuevasCaracteristicas[nombreNormalizado] = cambio;
        console.log(`[Reemplazo no dado]`, nombreNormalizado, "->", cambio);
      }
    }
  }

  return nuevasCaracteristicas;
}

export function calcularCaracteristicasFinales(
  raza: Raza,
  clase?: { variacion_caracteristicas?: string[] }
): Caracteristicas {
  const base = raza.caracteristicas;
  const variaciones = clase?.variacion_caracteristicas;
  return aplicarVariaciones(base, variaciones);
}

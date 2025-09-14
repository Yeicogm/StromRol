import type {
  Caracteristicas,
  NombreCaracteristica,
} from "../interfaces/Caracteristicas";
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
    let match = variacion.match(
      /^([\wÁÉÍÓÚÜÑáéíóúüñ]+)\s*([+-]?\d+D\d+|[+-]?\d+D|[+-]?\d+)$/i
    );

    if (!match) {
      match = variacion.match(
        /^([+-]?\d+D\d+|[+-]?\d+D|[+-]?\d+)\s+([\wÁÉÍÓÚÜÑáéíóúüñ]+)$/i
      );
      if (match) {
        const temp = match[1];
        match[1] = match[2];
        match[2] = temp;
      }
    }

    if (!match) {
      continue;
    }
    const atributo = match[1];
    const cambio = match[2];

    const nombreNormalizado =
      MAPEO_CARACTERISTICAS[atributo.toUpperCase()] ||
      MAPEO_CARACTERISTICAS[atributo];
    if (!nombreNormalizado) {
      continue;
    }

    const actual = nuevasCaracteristicas[nombreNormalizado] || "";

    // Si la variación NO contiene operador '+' ni '-', reemplaza el valor
    if (!cambio.includes("+") && !cambio.includes("-")) {
      nuevasCaracteristicas[nombreNormalizado] = cambio;
      continue;
    }

    // Si ambos son expresiones de dados, combinar como suma de expresiones
    const actualDadosExp = actual.match(/^(\d+)D(\d+)([+-]\d+)?$/);
    const cambioDadosExp = cambio.match(/^[+-]?(\d+)D(\d+)([+-]\d+)?$/);

    if (actualDadosExp && cambioDadosExp) {
      // Si el tipo de dado es igual, sumar los dados
      const dadosActual = parseInt(actualDadosExp[1], 10);
      const carasActual = parseInt(actualDadosExp[2], 10);
      const modActual = actualDadosExp[3] ? parseInt(actualDadosExp[3], 10) : 0;
      const dadosCambio = parseInt(cambioDadosExp[1], 10);
      const carasCambio = parseInt(cambioDadosExp[2], 10);
      const modCambio = cambioDadosExp[3] ? parseInt(cambioDadosExp[3], 10) : 0;
      if (carasActual === carasCambio) {
        // Sumar dados y modificadores
        const totalDados = dadosActual + dadosCambio;
        const totalMod = modActual + modCambio;
        nuevasCaracteristicas[
          nombreNormalizado
        ] = `${totalDados}D${carasActual}${
          totalMod !== 0 ? (totalMod > 0 ? "+" : "") + totalMod : ""
        }`;
      } else {
        // Si el tipo de dado es diferente, concatenar la expresión
        const actualStr = actual.trim();
        const cambioStr = cambio.trim().replace(/^\+/, "");
        // Si ya contiene la expresión, no duplicar
        if (!actualStr.includes(cambioStr)) {
          nuevasCaracteristicas[
            nombreNormalizado
          ] = `${actualStr}+${cambioStr}`;
        }
      }
      continue;
    }

    // Si el valor actual es una tirada de dados y el cambio es tipo '+1D' (sin caras)
    if (actualDadosExp && /^[+-]?\d+D$/.test(cambio)) {
      const dados = parseInt(actualDadosExp[1], 10);
      const caras = parseInt(actualDadosExp[2], 10);
      const mod = actualDadosExp[3] ? parseInt(actualDadosExp[3], 10) : 0;
      const dadosExtra = parseInt(cambio.replace("D", ""), 10);
      nuevasCaracteristicas[nombreNormalizado] = `${
        dados + dadosExtra
      }D${caras}${mod !== 0 ? (mod > 0 ? "+" : "") + mod : ""}`;
      continue;
    }

    // Si el valor actual es una tirada de dados y el cambio es tipo '+1' (modificador)
    if (actualDadosExp && /^[+-]?\d+$/.test(cambio)) {
      const dados = parseInt(actualDadosExp[1], 10);
      const caras = parseInt(actualDadosExp[2], 10);
      let mod = actualDadosExp[3] ? parseInt(actualDadosExp[3], 10) : 0;
      mod += parseInt(cambio, 10);
      nuevasCaracteristicas[nombreNormalizado] = `${dados}D${caras}${
        mod !== 0 ? (mod > 0 ? "+" : "") + mod : ""
      }`;
      continue;
    }

    // Si no es una tirada de dados, sumar normalmente
    if (/^[+-]?\d+$/.test(cambio)) {
      const valorActual = parseInt(actual || "0", 10);
      nuevasCaracteristicas[nombreNormalizado] = (
        valorActual + parseInt(cambio, 10)
      ).toString();
      continue;
    }

    // Si no se puede sumar, reemplazar
    nuevasCaracteristicas[nombreNormalizado] = cambio;
  }

  return nuevasCaracteristicas;
}

export function calcularCaracteristicasFinales(
  raza: Raza,
  clase?: {
    variacion_caracteristicas?: string[];
    variacion_caracMINMAX?: string[];
  }
): Caracteristicas {
  const base = raza.caracteristicas;
  const variaciones = clase?.variacion_caracteristicas;
  let resultado = aplicarVariaciones(base, variaciones);

  // Aplicar limitaciones si existen
  if (clase?.variacion_caracMINMAX && clase.variacion_caracMINMAX.length > 0) {
    const limitaciones = parsearLimitaciones(clase.variacion_caracMINMAX);
    resultado = aplicarLimitaciones(resultado, limitaciones);
  }

  return resultado;
}

/**
 * Interfaz para representar limitaciones de características
 */
export interface LimitacionCaracteristica {
  caracteristica: NombreCaracteristica;
  tipo: "MIN" | "MAX";
  valor: number;
  dados?: number; // Solo para MIN, especifica cuántos dados mínimo
}

/**
 * Parsea el campo variacion_caracMINMAX para extraer limitaciones
 * Ejemplo: ["MIN PODER 5D", "MAX FUERZA 19"]
 */
export function parsearLimitaciones(
  variacionMINMAX: string[]
): LimitacionCaracteristica[] {
  const limitaciones: LimitacionCaracteristica[] = [];

  for (const limitacion of variacionMINMAX) {
    // Patrón para MIN PODER 5D
    const minMatch = limitacion.match(/^MIN\s+(\w+)\s+(\d+)D$/i);
    if (minMatch) {
      const caracteristicaNormalizada =
        MAPEO_CARACTERISTICAS[minMatch[1].toUpperCase()];
      if (caracteristicaNormalizada) {
        const dados = parseInt(minMatch[2], 10);
        limitaciones.push({
          caracteristica: caracteristicaNormalizada,
          tipo: "MIN",
          valor: 0, // Se calculará dinámicamente
          dados,
        });
      }
      continue;
    }

    // Patrón para MAX FUERZA 19
    const maxMatch = limitacion.match(/^MAX\s+(\w+)\s+(\d+)$/i);
    if (maxMatch) {
      const caracteristicaNormalizada =
        MAPEO_CARACTERISTICAS[maxMatch[1].toUpperCase()];
      if (caracteristicaNormalizada) {
        const valor = parseInt(maxMatch[2], 10);
        limitaciones.push({
          caracteristica: caracteristicaNormalizada,
          tipo: "MAX",
          valor,
        });
      }
    }
  }

  return limitaciones;
}

/**
 * Aplica limitaciones mínimas y máximas a las características
 */
export function aplicarLimitaciones(
  caracteristicas: Caracteristicas,
  limitaciones: LimitacionCaracteristica[]
): Caracteristicas {
  const nuevasCaracteristicas = { ...caracteristicas };

  for (const limitacion of limitaciones) {
    const valorActual = nuevasCaracteristicas[limitacion.caracteristica];
    if (!valorActual) continue;

    if (limitacion.tipo === "MIN" && limitacion.dados) {
      // Para limitaciones mínimas de dados (ej: MIN PODER 5D)
      // Si la característica actual es 3D6 y el mínimo es 5D, cambiar a 5D6
      const dadoMatch = valorActual.match(/^(\d+)D(\d+)([+-]\d+)?$/);
      if (dadoMatch) {
        const dadosActuales = parseInt(dadoMatch[1], 10);
        const caras = parseInt(dadoMatch[2], 10);
        const mod = dadoMatch[3] ? dadoMatch[3] : "";

        if (dadosActuales < limitacion.dados) {
          nuevasCaracteristicas[
            limitacion.caracteristica
          ] = `${limitacion.dados}D${caras}${mod}`;
          console.log(
            `[Aplicando límite MIN]`,
            limitacion.caracteristica,
            `${dadosActuales}D${caras}${mod} -> ${limitacion.dados}D${caras}${mod}`
          );
        }
      }
    }
  }

  return nuevasCaracteristicas;
}

/**
 * Valida que un valor numérico esté dentro de los límites establecidos
 */
export function validarLimitesCaracteristica(
  caracteristica: NombreCaracteristica,
  valor: number,
  limitaciones: LimitacionCaracteristica[]
): { valido: boolean; mensaje?: string; valorCorregido?: number } {
  for (const limitacion of limitaciones) {
    if (limitacion.caracteristica === caracteristica) {
      if (limitacion.tipo === "MAX" && valor > limitacion.valor) {
        return {
          valido: false,
          mensaje: `El valor máximo para ${caracteristica} es ${limitacion.valor}`,
          valorCorregido: limitacion.valor,
        };
      }
    }
  }

  return { valido: true };
}

/**
 * Obtiene las limitaciones de una clase específica
 */
export function obtenerLimitacionesClase(clase?: {
  variacion_caracMINMAX?: string[];
}): LimitacionCaracteristica[] {
  if (
    !clase?.variacion_caracMINMAX ||
    clase.variacion_caracMINMAX.length === 0
  ) {
    return [];
  }
  return parsearLimitaciones(clase.variacion_caracMINMAX);
}

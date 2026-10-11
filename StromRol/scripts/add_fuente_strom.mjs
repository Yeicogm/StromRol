#!/usr/bin/env node
/**
 * Enriquece `public/dnd_2e_spells_es.json` añadiendo un campo
 * `fuente_strom: "LIBRO JUGADOR STROM"` a todos los items de
 * `conjuros_con_estadisticas_completas` (486 en total: 312 de mago +
 * 174 de sacerdote).
 *
 * El JSON original no incluye fuente en estos items; el frontend
 * (HechizosExplorer) usa el campo nuevo para poder filtrar y mostrar
 * el origen también para los hechizos que tienen estadísticas
 * completas, no solo para los del `listado_completo_de_nombres`.
 *
 * Uso:
 *   node scripts/add_fuente_strom.mjs
 *
 * Crea un backup `public/dnd_2e_spells_es.json.bak` antes de
 * sobrescribir.
 *
 * Idempotente: si el campo ya existe y coincide, no lo toca. Si
 * existe con otro valor, lo reemplaza (con aviso por stderr).
 */

import { readFileSync, writeFileSync, copyFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TARGET = "LIBRO JUGADOR STROM";
const JSON_PATH = resolve(__dirname, "..", "public", "dnd_2e_spells_es.json");
const BAK_PATH = JSON_PATH + ".bak";

function main() {
  if (!existsSync(JSON_PATH)) {
    console.error(`ERROR: no se encuentra ${JSON_PATH}`);
    process.exit(1);
  }

  const raw = readFileSync(JSON_PATH, "utf8");
  const data = JSON.parse(raw);

  // Backup defensivo
  if (!existsSync(BAK_PATH)) {
    copyFileSync(JSON_PATH, BAK_PATH);
    console.log(`Backup creado: ${BAK_PATH}`);
  } else {
    console.log(`Backup ya existía: ${BAK_PATH} (no se sobrescribe)`);
  }

  let tocados = 0;
  let yaTenian = 0;

  for (const seccion of [data.conjuros_de_hechicero, data.conjuros_de_sacerdote]) {
    for (const h of seccion.conjuros_con_estadisticas_completas) {
      if (h.fuente_strom && h.fuente_strom === TARGET) {
        yaTenian += 1;
        continue;
      }
      if (h.fuente_strom && h.fuente_strom !== TARGET) {
        console.warn(
          `Aviso: ${h.nombre} (nivel ${h.nivel}) ya tenía fuente_strom="${h.fuente_strom}", se reemplaza por "${TARGET}"`,
        );
      }
      h.fuente_strom = TARGET;
      tocados += 1;
    }
  }

  writeFileSync(JSON_PATH, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log(
    `Hechizos modificados: ${tocados} | ya tenían el campo: ${yaTenian} | total: ${tocados + yaTenian}`,
  );
  console.log(`Archivo escrito: ${JSON_PATH}`);
}

main();

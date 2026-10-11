#!/usr/bin/env node
/**
 * Aplica un parche de traducciones (EN → ES) a las descripciones de
 * los hechizos de `public/dnd_2e_spells_es.json`.
 *
 * Pensado para el plan de traducción LJS (ver
 * `/memories/session/translate_ljs_plan.md`):
 *  - Solo modifica hechizos con `idioma_descripcion === "en"`.
 *  - Solo escribe `descripcion` e `idioma_descripcion`; nunca toca
 *    el resto de campos (incluido `fuente_strom`).
 *  - Es idempotente: re-ejecuciones seguras.
 *
 * Formato del parche:
 *   [
 *     { "caster": "mago",      "indice": 0,  "descripcion": "..." },
 *     { "caster": "sacerdote", "indice": 5,  "descripcion": "..." }
 *   ]
 *
 * Uso:
 *   node scripts/translate_ljs_descriptions.mjs ./parches/lote.json
 *   cat lote.json | node scripts/translate_ljs_descriptions.mjs
 *
 * Si no se pasa argumento, lee de stdin.
 */

import { readFileSync, writeFileSync, copyFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const JSON_PATH = resolve(__dirname, "..", "public", "dnd_2e_spells_es.json");
const BAK_PATH = JSON_PATH + ".bak";

/** Lee el contenido del parche: argv[2] si existe, si no stdin. */
async function readParche() {
  const arg = process.argv[2];
  if (arg) {
    const path = resolve(process.cwd(), arg);
    return readFileSync(path, "utf8");
  }
  // stdin
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return chunks.join("");
}

function main() {
  readParche()
    .then((raw) => {
      const parche = JSON.parse(raw);
      if (!Array.isArray(parche)) {
        throw new Error("El parche debe ser un array de objetos");
      }
      aplicar(parche);
    })
    .catch((err) => {
      console.error(`ERROR: ${err.message}`);
      process.exit(1);
    });
}

function aplicar(parche) {
  if (!existsSync(JSON_PATH)) {
    throw new Error(`No se encuentra ${JSON_PATH}`);
  }
  const data = JSON.parse(readFileSync(JSON_PATH, "utf8"));

  // Backup defensivo
  if (!existsSync(BAK_PATH)) {
    copyFileSync(JSON_PATH, BAK_PATH);
    console.log(`Backup creado: ${BAK_PATH}`);
  } else {
    console.log(`Backup ya existía: ${BAK_PATH} (no se sobrescribe)`);
  }

  let traducidos = 0;
  let saltados = 0;
  let noEncontrados = 0;

  for (const entrada of parche) {
    const { caster, indice, descripcion } = entrada;
    if (!caster || typeof indice !== "number" || typeof descripcion !== "string") {
      console.warn(`Aviso: entrada inválida, se ignora:`, entrada);
      continue;
    }
    const seccionKey =
      caster === "mago" ? "conjuros_de_hechicero" : caster === "sacerdote" ? "conjuros_de_sacerdote" : null;
    if (!seccionKey) {
      console.warn(`Aviso: caster desconocido "${caster}", se ignora`);
      continue;
    }
    const seccion = data[seccionKey];
    const hechizo = seccion?.conjuros_con_estadisticas_completas?.[indice];
    if (!hechizo) {
      console.warn(`Aviso: no se encontró ${caster}[${indice}], se ignora`);
      noEncontrados += 1;
      continue;
    }
    if (hechizo.idioma_descripcion !== "en") {
      console.log(
        `Saltado (ya en ${hechizo.idioma_descripcion ?? "?"}): ${caster}[${indice}] ${hechizo.nombre}`,
      );
      saltados += 1;
      continue;
    }
    hechizo.descripcion = descripcion;
    hechizo.idioma_descripcion = "es";
    traducidos += 1;
  }

  writeFileSync(JSON_PATH, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log(`\nResumen:`);
  console.log(`  traducidos:    ${traducidos}`);
  console.log(`  saltados:      ${saltados}`);
  console.log(`  no encontrados: ${noEncontrados}`);
  console.log(`  archivo:       ${JSON_PATH}`);
}

main();

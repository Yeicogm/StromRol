import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(
  readFileSync(resolve(__dirname, "..", "public", "dnd_2e_spells_es.json"), "utf8"),
);

const casterArg = process.argv[2] ?? "sacerdote";
const nivelArg = process.argv[3] ?? "1";

const seccionKey = casterArg === "mago" ? "conjuros_de_hechicero" : "conjuros_de_sacerdote";
const arr = data[seccionKey].conjuros_con_estadisticas_completas;

arr.forEach((h, i) => {
  if (h.nivel === Number(nivelArg) && h.idioma_descripcion === "en") {
    console.log(`=== INDICE ${i} | ${h.nombre} | ${h.escuela}${h.esfera ? " | Esfera: " + h.esfera : ""} ===`);
    console.log(h.descripcion);
    console.log();
  }
});

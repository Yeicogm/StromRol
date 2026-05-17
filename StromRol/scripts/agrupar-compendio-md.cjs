const fs = require("node:fs/promises");
const path = require("node:path");

const SECCIONES_DIR = path.join(__dirname, "..", "public", "compendio-texto", "secciones");
const AGRUPADO_DIR = path.join(__dirname, "..", "public", "compendio-texto", "agrupado");
const INDICE_PATH = path.join(__dirname, "..", "public", "compendio-texto", "INDICE.md");

const CATEGORY_DEFS = [
  {
    id: "razas-caracteristicas",
    titulo: "Razas y Caracteristicas",
    keywords: [
      "raza",
      "drow",
      "demonio",
      "caracteristicas",
      "fuerza",
      "destreza",
      "constitucion",
      "inteligencia",
      "poder",
      "tam",
      "carisma",
      "variacion caracteristicas",
      "calculo de caracteristicas",
    ],
  },
  {
    id: "clases-cualidades",
    titulo: "Clases y Cualidades",
    keywords: [
      "clases",
      "clase",
      "cualidades",
      "guerrero",
      "barbaro",
      "guardabosques",
      "luchador",
      "mentalista",
      "arcano",
      "ladron",
      "asesino",
      "maldito",
      "brujeria",
      "rango",
      "especial",
      "habilidades",
      "bonus ataque",
      "agilidad",
      "manipulacion",
    ],
  },
  {
    id: "magia-pociones",
    titulo: "Magia, Rituales y Pociones",
    keywords: [
      "hechizo",
      "magia",
      "ritual",
      "psionica",
      "curandero",
      "pocion",
      "antidoto",
      "veneno",
      "arcano",
      "mentalista",
      "luz",
    ],
  },
  {
    id: "equipo-armas-armaduras",
    titulo: "Equipo, Armas y Armaduras",
    keywords: [
      "equipo",
      "arma",
      "armadura",
      "espada",
      "arco",
      "daga",
      "yelmo",
      "botas",
      "caballo",
      "transportes",
      "bola y cadena",
      "heridas graves armas de punta",
    ],
  },
  {
    id: "combate-movimiento",
    titulo: "Combate, Movimiento y Heridas",
    keywords: [
      "heridas",
      "mov/com",
      "com/mov",
      "movimiento",
      "escalada",
      "ataque",
      "defensa",
      "saltar",
      "trepar",
      "heridas graves",
    ],
  },
  {
    id: "mundo-sociedad-economia",
    titulo: "Mundo, Sociedad y Economia",
    keywords: [
      "sociedad",
      "nobleza",
      "orden",
      "celestial",
      "caos",
      "palacio",
      "hijos",
      "nombre efectividad",
      "18000",
      "15000",
      "14000",
      "esclavo",
      "crueldad",
    ],
  },
  {
    id: "criaturas-y-entes",
    titulo: "Criaturas y Entes",
    keywords: ["elemental", "fuego", "errante", "pestilencia", "inmunidad"],
  },
];

function normalize(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function scoreCategory(category, haystack) {
  let score = 0;
  for (const kw of category.keywords) {
    if (haystack.includes(normalize(kw))) score += 1;
  }
  return score;
}

function parseTitleAndBody(mdContent, fallbackTitle) {
  const lines = mdContent.split("\n");
  let title = fallbackTitle;
  let bodyStart = 0;

  if (lines[0] && lines[0].startsWith("# ")) {
    title = lines[0].slice(2).trim() || fallbackTitle;
    bodyStart = 1;
  }

  const body = lines.slice(bodyStart).join("\n").trim();
  return { title, body };
}

async function main() {
  const entries = await fs.readdir(SECCIONES_DIR, { withFileTypes: true });
  const sectionFiles = entries
    .filter((e) => e.isFile() && e.name.endsWith(".md") && e.name !== "README.md")
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, "es"));

  const buckets = new Map();
  for (const def of CATEGORY_DEFS) buckets.set(def.id, []);
  buckets.set("otros", []);

  for (const fileName of sectionFiles) {
    const filePath = path.join(SECCIONES_DIR, fileName);
    const raw = await fs.readFile(filePath, "utf8");
    const fallbackTitle = fileName.replace(/^\d+-/, "").replace(/\.md$/i, "");
    const { title, body } = parseTitleAndBody(raw, fallbackTitle);

    const haystack = normalize(`${title}\n${body}`);
    let best = { id: "otros", score: 0 };

    for (const def of CATEGORY_DEFS) {
      const s = scoreCategory(def, haystack);
      if (s > best.score) best = { id: def.id, score: s };
    }

    const targetId = best.score > 0 ? best.id : "otros";
    buckets.get(targetId).push({ fileName, title, body });
  }

  await fs.mkdir(AGRUPADO_DIR, { recursive: true });

  const groupedFiles = [];
  const orderedIds = [...CATEGORY_DEFS.map((d) => d.id), "otros"];

  for (let i = 0; i < orderedIds.length; i += 1) {
    const id = orderedIds[i];
    const def = CATEGORY_DEFS.find((d) => d.id === id);
    const docs = buckets.get(id) || [];
    if (docs.length === 0) continue;

    const num = String(i + 1).padStart(2, "0");
    const titulo = def ? def.titulo : "Otros Fragmentos";
    const outName = `${num}-${id}.md`;

    const parts = [
      `# ${titulo}`,
      "",
      `Total de fragmentos agrupados: ${docs.length}`,
      "",
      "## Fragmentos incluidos",
      "",
      ...docs.map((d, idx) => `${idx + 1}. [${d.title}](../secciones/${d.fileName})`),
      "",
      "---",
      "",
    ];

    for (const d of docs) {
      parts.push(`## ${d.title}`);
      parts.push("");
      parts.push(d.body || "(Sin contenido)");
      parts.push("");
      parts.push("---");
      parts.push("");
    }

    const content = parts.join("\n");
    await fs.writeFile(path.join(AGRUPADO_DIR, outName), content, "utf8");
    groupedFiles.push({ outName, titulo, count: docs.length });
  }

  const indice = [
    "# Indice de Compendio Strom (Texto Extraido)",
    "",
    "Este indice organiza el contenido extraido del PDF en bloques tematicos.",
    "",
    "## Version agrupada",
    "",
    ...groupedFiles.map((g, i) => `${i + 1}. [${g.titulo}](./agrupado/${g.outName}) - ${g.count} fragmentos`),
    "",
    "## Version original por secciones",
    "",
    "1. [Indice completo de secciones](./secciones/README.md)",
    "",
  ].join("\n");

  await fs.writeFile(INDICE_PATH, indice, "utf8");

  console.log(`Archivos agrupados generados: ${groupedFiles.length}`);
  for (const g of groupedFiles) {
    console.log(`- ${g.outName}: ${g.count} fragmentos`);
  }
  console.log(`Indice creado: ${INDICE_PATH}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

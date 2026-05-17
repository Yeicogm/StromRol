const fs = require("node:fs/promises");
const path = require("node:path");
const { PDFParse } = require("pdf-parse");

const PDF_PATH = path.join(__dirname, "..", "public", "CompendioStrom.pdf");
const OUTPUT_DIR = path.join(__dirname, "..", "public", "compendio-texto", "secciones");

function slugify(input) {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

function normalizeText(text) {
  return text.replace(/\r/g, "").replace(/\u00a0/g, " ");
}

function isNoiseLine(line) {
  const t = line.trim();
  if (!t) return true;
  if (/^--\s*\d+\s+of\s+\d+\s*--$/i.test(t)) return true;
  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(t)) return true;
  if (/^\d{1,3}$/.test(t)) return true;
  return false;
}

function isLikelyHeading(line) {
  const t = line.trim();
  if (!t) return false;
  if (t.length < 3 || t.length > 70) return false;
  if (isNoiseLine(t)) return false;
  if (/^[\-•*]/.test(t)) return false;
  if (/\t/.test(t)) return false;
  if (/[.!?]$/.test(t)) return false;
  if (/\d\s+\d\s+\d/.test(t)) return false;

  const letters = (t.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/g) || []).length;
  const upperLetters = (t.match(/[A-ZÁÉÍÓÚÜÑ]/g) || []).length;
  const digitCount = (t.match(/[0-9]/g) || []).length;
  if (letters < 3) return false;
  if (digitCount > letters / 2) return false;

  const upperRatio = upperLetters / Math.max(letters, 1);
  const wordCount = t.split(/\s+/).length;

  const strongUpper = upperRatio > 0.8 && wordCount <= 10;
  const titleLike =
    /^[A-ZÁÉÍÓÚÜÑ][A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9 ]{2,}$/.test(t) && wordCount <= 7 && upperRatio > 0.35;

  return strongUpper || titleLike;
}

function isMajorSectionHeading(line) {
  const t = line.trim();
  if (!isLikelyHeading(t)) return false;

  const normalized = t
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();

  const majorPatterns = [
    /^INTRODUCCION(?:\s+GENERAL)?$/,
    /^RAZAS$/,
    /^CLASES$/,
    /^CUALIDADES\s+DE\s+GUERRERO(?:S)?$/,
    /^CUALIDADES\s+DE\s+MAGIA$/,
    /^CUALIDADES\s+DE\s+PICAROS$/,
    /^CUALIDADES\s+DEMONIOS$/,
    /^MULTICLASE(?:S)?$/,
    /^CALCULO\s+DE\s+CARACTERISTICAS$/,
    /^POCIONES\s+Y\s+ANTIDOTOS$/,
    /^GRIMORIOS$/,
    /^PROPIEDADES$/,
    /^PROTECCIONES$/,
    /^ARMADURAS$/,
    /^ARMAS\b/,
    /^SERVICIO\s+DE\s+CURACIONES\b/,
    /^HERIDAS\s+GRAVES\s+ARMAS\s+DE\s+PUNTA$/,
    /^COMPENDIO\s+STROM!?$/,
    /^DECRETOS(?:\s+-\s+NUEVAS\s+NORMATIVAS)?$/,
  ];

  return majorPatterns.some((re) => re.test(normalized));
}

function looksBadTitle(title) {
  const t = title.trim();
  if (!t) return true;
  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(t)) return true;
  if (/^\d{1,3}$/.test(t)) return true;
  if (/^--\s*\d+\s+of\s+\d+\s*--$/i.test(t)) return true;
  if ((t.match(/[0-9]/g) || []).length > 6) return true;
  return false;
}

function normalizeLine(line) {
  return line.replace(/\s+/g, " ").trim();
}

async function main() {
  const pdfBuffer = await fs.readFile(PDF_PATH);
  const parser = new PDFParse({ data: pdfBuffer });
  const data = await parser.getText();
  await parser.destroy();

  const pages = Array.isArray(data.pages) ? data.pages : [];
  const sections = [];

  let currentTitle = "RAZAS";
  let currentLines = [];

  const flushSection = () => {
    const content = currentLines.join("\n").trim();
    if (content.length === 0) return;
    if (looksBadTitle(currentTitle) && sections.length > 0) {
      sections[sections.length - 1].content += `\n\n${content}`;
      currentLines = [];
      return;
    }
    sections.push({ title: currentTitle, content });
    currentLines = [];
  };

  for (const page of pages) {
    const pageText = normalizeText(page?.text || "");
    const lines = pageText.split("\n");

    for (const rawLine of lines) {
      const line = normalizeLine(rawLine);
      if (isNoiseLine(line)) continue;

      if (isLikelyHeading(line)) {
        if (isMajorSectionHeading(line)) {
          const currentLen = currentLines.join("\n").trim().length;
          if (currentLen > 120) {
            flushSection();
            currentTitle = line;
            continue;
          }

          if (currentLen === 0) {
            currentTitle = line;
            continue;
          }
        }

        // Encabezados no mayores se conservan como subtítulo interno.
        if (currentLines.length > 0) {
          const lastLine = currentLines[currentLines.length - 1] || "";
          if (lastLine !== `## ${line}`) {
            currentLines.push(`## ${line}`);
          }
          continue;
        }

        const currentLen = currentLines.join("\n").trim().length;
        if (currentLen === 0 && isMajorSectionHeading(line)) {
          currentTitle = line;
          continue;
        }
      }

      currentLines.push(line);
    }

    if (currentLines.length > 0) {
      currentLines.push("");
    }
  }

  flushSection();

  const merged = [];
  for (const section of sections) {
    const cleanTitle = section.title.trim();
    if (merged.length > 0 && merged[merged.length - 1].title.toLowerCase() === cleanTitle.toLowerCase()) {
      merged[merged.length - 1].content += `\n\n${section.content}`;
    } else {
      merged.push({ title: cleanTitle, content: section.content });
    }
  }

  const finalSections = merged.filter((s) => !looksBadTitle(s.title) && s.content.trim().length > 80);

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const existing = await fs.readdir(OUTPUT_DIR);
  await Promise.all(
    existing.filter((name) => name.endsWith(".md")).map((name) => fs.unlink(path.join(OUTPUT_DIR, name))),
  );

  const sectionFiles = [];
  for (let i = 0; i < finalSections.length; i += 1) {
    const section = finalSections[i];
    const index = String(i + 1).padStart(2, "0");
    const slug = slugify(section.title) || `seccion-${index}`;
    const fileName = `${index}-${slug}.md`;
    const filePath = path.join(OUTPUT_DIR, fileName);

    const markdown = `# ${section.title}\n\n${section.content}\n`;
    await fs.writeFile(filePath, markdown, "utf8");

    sectionFiles.push({ fileName, title: section.title, size: markdown.length });
  }

  const indexContent = [
    "# Compendio Strom - Secciones extraidas",
    "",
    `Fuente: CompendioStrom.pdf`,
    `Total de secciones: ${sectionFiles.length}`,
    "",
    "## Indice",
    "",
    ...sectionFiles.map((f, idx) => `${idx + 1}. [${f.title}](./${f.fileName})`),
    "",
  ].join("\n");

  await fs.writeFile(path.join(OUTPUT_DIR, "README.md"), indexContent, "utf8");

  console.log(`Secciones generadas: ${sectionFiles.length}`);
  for (const f of sectionFiles) {
    console.log(`- ${f.fileName} (${f.size} chars)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DownloadIcon from "@mui/icons-material/Download";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import "../../App.css";
import HechizosExplorer from "./HechizosExplorer";

type CompendioSectionProps = {
  isActive: boolean;
};

type CompendioView = "pdf" | "hechizos";

/**
 * Visor del compendio PDF.
 *
 * Estructura robusta a prueba de visores bloqueados:
 *  1. <object> con el PDF (Chrome/Edge/Firefox/Safari lo manejan).
 *  2. Si el visor del navegador bloquea el <object>, el <iframe>
 *     interno se muestra con sus propias toolbar.
 *  3. Si también falla, el fallback final muestra un botón de
 *     descarga bien visible.
 */
function PdfViewer() {
  return (
    <div className="compendio-pdf-viewer">
      <object
        data="/CompendioStrom.pdf#toolbar=1&navpanes=1&scrollbar=1"
        type="application/pdf"
        className="compendio-pdf-object"
        aria-label="Visor del compendio Strom en PDF"
      >
        <iframe
          src="/CompendioStrom.pdf#toolbar=1&navpanes=1&scrollbar=1"
          title="Compendio StromRol"
          className="compendio-iframe"
        >
          <div className="compendio-fallback">
            <p>Tu navegador no puede mostrar el PDF incrustado.</p>
            <a href="/CompendioStrom.pdf" download className="compendio-fallback-btn">
              Descargar Compendio
            </a>
          </div>
        </iframe>
      </object>
    </div>
  );
}

export default function CompendioSection({ isActive }: CompendioSectionProps) {
  const [view, setView] = useState<CompendioView>("pdf");

  if (!isActive) return null;

  return (
    <div className="compendio-tab-panel">
      <Tabs
        value={view}
        onChange={(_, next: CompendioView) => setView(next)}
        className="compendio-tabs"
        variant="fullWidth"
      >
        <Tab value="pdf" icon={<PictureAsPdfIcon />} iconPosition="start" label="PDF — Compendio Strom" />
        <Tab value="hechizos" icon={<AutoStoriesIcon />} iconPosition="start" label="Hechizos por libro" />
      </Tabs>

      {view === "pdf" && (
        <Box className="compendio-pdf-bar">
          <span className="compendio-pdf-bar-title">Compendio Strom (PDF)</span>
          <Stack direction="row" spacing={1}>
            <Button
              component="a"
              href="/CompendioStrom.pdf"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              variant="outlined"
              color="primary"
              startIcon={<OpenInNewIcon />}
            >
              Abrir
            </Button>
            <Button
              component="a"
              href="/CompendioStrom.pdf"
              download
              size="small"
              variant="contained"
              color="primary"
              startIcon={<DownloadIcon />}
            >
              Descargar
            </Button>
          </Stack>
        </Box>
      )}

      <Box className="compendio-tab-content">{view === "pdf" ? <PdfViewer /> : <HechizosExplorer />}</Box>
    </div>
  );
}

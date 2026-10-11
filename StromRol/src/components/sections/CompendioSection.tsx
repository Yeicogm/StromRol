import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import "../../App.css";
import HechizosExplorer from "./HechizosExplorer";

type CompendioSectionProps = {
  isActive: boolean;
};

type CompendioView = "pdf" | "hechizos";

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
        <Tab
          value="pdf"
          icon={<PictureAsPdfIcon />}
          iconPosition="start"
          label="PDF — Compendio Strom"
        />
        <Tab
          value="hechizos"
          icon={<AutoStoriesIcon />}
          iconPosition="start"
          label="Hechizos por libro"
        />
      </Tabs>

      <Box className="compendio-tab-content">
        {view === "pdf" ? (
          <iframe
            src="/CompendioStrom.pdf"
            title="Compendio StromRol"
            className="compendio-iframe"
          >
            <div className="compendio-fallback">
              <p>Tu navegador no puede mostrar el PDF.</p>
              <a
                href="/CompendioStrom.pdf"
                download
                className="compendio-fallback-btn"
              >
                Descargar Compendio
              </a>
            </div>
          </iframe>
        ) : (
          <HechizosExplorer />
        )}
      </Box>
    </div>
  );
}

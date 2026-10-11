import { useState, type ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  title: string;
  children: ReactNode;
};

/**
 * Tarjeta de información unificada (raza / clase / nacionalidad / origen).
 * En móvil se muestra plegada para reducir el scroll; en escritorio
 * permanece siempre expandida.
 */
export default function InfoCard({ title, children }: Props) {
  const theme = useTheme();
  const esMovil = useMediaQuery(theme.breakpoints.down("md"));
  const [abierto, setAbierto] = useState(false);
  const visible = !esMovil || abierto;

  return (
    <div className="raza-card">
      <div className="raza-content">
        <div className="raza-card-header">
          <h3 className="raza-title">{title}</h3>
          {esMovil && (
            <IconButton
              className={`raza-card-toggle ${visible ? "is-open" : ""}`}
              size="small"
              aria-expanded={visible}
              aria-label={visible ? `Contraer ${title}` : `Expandir ${title}`}
              onClick={() => setAbierto((prev) => !prev)}
            >
              <ExpandMoreIcon />
            </IconButton>
          )}
        </div>
        <div className={`raza-card-body ${visible ? "" : "is-collapsed"}`}>{children}</div>
      </div>
    </div>
  );
}

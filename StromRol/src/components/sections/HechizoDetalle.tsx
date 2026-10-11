import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import type { Hechizo } from "../../interfaces/Hechizo";

type HechizoDetalleProps = {
  spell?: Hechizo;
};

type DetalleItem = {
  label: string;
  value: string;
};

function formatComponentes(spell: Hechizo): DetalleItem[] {
  const items: DetalleItem[] = [];
  if (spell.verbal) items.push({ label: "Verbal", value: "Sí" });
  if (spell.somatic) items.push({ label: "Somático", value: "Sí" });
  if (spell.material) items.push({ label: "Material", value: spell.materials || "Sí" });
  return items;
}

export default function HechizoDetalle({ spell }: HechizoDetalleProps) {
  if (!spell) {
    return (
      <Card variant="outlined" className="hechizo-detalle-card">
        <CardContent>
          <Typography variant="body1" className="hechizos-empty">
            Selecciona un hechizo de la lista para ver sus detalles.
          </Typography>
        </CardContent>
      </Card>
    );
  }

  const componentes = formatComponentes(spell);
  const campos: DetalleItem[] = [
    { label: "Alcance", value: spell.range },
    { label: "Área de efecto", value: spell.aoe },
    { label: "Tiempo de lanzamiento", value: spell.casting_time },
    { label: "Duración", value: spell.duration },
    { label: "Salvación", value: spell.save },
    { label: "Daño", value: spell.damage },
  ];

  return (
    <Card variant="outlined" className="hechizo-detalle-card">
      <CardContent>
        <Stack spacing={1.5}>
          <Box>
            <Typography variant="h5" component="h3">
              {spell.name}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
              <Chip label={`Nivel ${spell.level}`} size="small" color="primary" />
              <Chip label={spell.school} size="small" variant="outlined" />
              <Chip label={spell.caster === "mago" ? "Mago" : "Hechicero"} size="small" variant="outlined" />
              <Chip label={spell.source} size="small" variant="outlined" color="secondary" />
            </Stack>
          </Box>

          <Divider />

          <Box>
            <Typography variant="overline" color="text.secondary">
              Componentes
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 0.5 }}>
              {componentes.length === 0 ? (
                <Typography variant="body2" color="text.secondary">
                  Ninguno
                </Typography>
              ) : (
                componentes.map((c) => <Chip key={c.label} label={c.label} size="small" />)
              )}
            </Stack>
          </Box>

          <Divider />

          <Box className="hechizo-detalle-grid">
            {campos.map((c) => (
              <Box key={c.label} className="hechizo-detalle-row">
                <Typography variant="caption" color="text.secondary">
                  {c.label}
                </Typography>
                <Typography variant="body2">{c.value || "—"}</Typography>
              </Box>
            ))}
          </Box>

          <Divider />

          <Box>
            <Typography variant="overline" color="text.secondary">
              Descripción
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt: 0.5 }}>
              {spell.description}
            </Typography>
          </Box>

          <Typography variant="caption" color="text.secondary">
            Fuente: {spell.source} — pág. {spell.page}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

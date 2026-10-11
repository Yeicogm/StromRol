import { useEffect, useMemo, useState, useDeferredValue } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import type { Hechizo, HechizoCaster } from "../../interfaces/Hechizo";
import HechizoDetalle from "./HechizoDetalle";

type Status = "idle" | "loading" | "ready" | "error";

const NIVELES = ["1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;

const ETIQUETAS_CASTER: Record<HechizoCaster, string> = {
  mago: "Mago",
  hechicero: "Hechicero",
};

/** Quita acentos y pasa a minúsculas para comparar cadenas en español. */
function normalizar(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export default function HechizosExplorer() {
  const [spells, setSpells] = useState<Hechizo[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const [selectedSource, setSelectedSource] = useState<string>("");
  const [selectedCaster, setSelectedCaster] = useState<HechizoCaster | "">("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedSpellId, setSelectedSpellId] = useState<number | null>(null);

  const deferredSearch = useDeferredValue(searchTerm);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    fetch("/spells.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: { spells: Hechizo[] }) => {
        if (cancelled) return;
        setSpells(data.spells ?? []);
        setStatus("ready");
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Error desconocido");
        setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const availableSources = useMemo(() => {
    const set = new Set<string>();
    for (const s of spells) set.add(s.source);
    return Array.from(set).sort();
  }, [spells]);

  const filteredSpells = useMemo(() => {
    const termino = normalizar(deferredSearch);
    return spells.filter((s) => {
      if (selectedSource && s.source !== selectedSource) return false;
      if (selectedCaster && s.caster !== selectedCaster) return false;
      if (selectedLevel && s.level !== selectedLevel) return false;
      if (termino) {
        const enNombre = normalizar(s.name).includes(termino);
        const enDescripcion = normalizar(s.description).includes(termino);
        if (!enNombre && !enDescripcion) return false;
      }
      return true;
    });
  }, [spells, selectedSource, selectedCaster, selectedLevel, deferredSearch]);

  const selectedSpell = useMemo(
    () => filteredSpells.find((s) => s.id === selectedSpellId) ?? undefined,
    [filteredSpells, selectedSpellId],
  );

  const handleSourceChange = (v: string) => {
    setSelectedSource(v);
    setSelectedSpellId(null);
  };
  const handleCasterChange = (v: HechizoCaster | "") => {
    setSelectedCaster(v);
    setSelectedSpellId(null);
  };
  const handleLevelChange = (v: string) => {
    setSelectedLevel(v);
  };
  const handleSearchChange = (v: string) => {
    setSearchTerm(v);
    setSelectedSpellId(null);
  };

  if (status === "loading" || status === "idle") {
    return (
      <Box className="hechizos-explorer hechizos-empty">
        <CircularProgress size={28} />
        <Typography variant="body2" sx={{ mt: 1 }}>
          Cargando hechizos…
        </Typography>
      </Box>
    );
  }

  if (status === "error") {
    return (
      <Box className="hechizos-explorer">
        <Alert severity="error">No se pudo cargar el catálogo de hechizos: {error}</Alert>
      </Box>
    );
  }

  return (
    <Box className="hechizos-explorer">
      <Stack spacing={2}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} className="hechizos-filtros">
          <TextField
            select
            fullWidth
            label="Libro"
            value={selectedSource}
            onChange={(e) => handleSourceChange(e.target.value)}
          >
            <MenuItem value="">Todos los libros</MenuItem>
            {availableSources.map((src) => (
              <MenuItem key={src} value={src}>
                {src}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            fullWidth
            label="Tipo de personaje"
            value={selectedCaster}
            onChange={(e) => handleCasterChange(e.target.value as HechizoCaster | "")}
          >
            <MenuItem value="">Todos</MenuItem>
            {(Object.keys(ETIQUETAS_CASTER) as HechizoCaster[]).map((c) => (
              <MenuItem key={c} value={c}>
                {ETIQUETAS_CASTER[c]}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            fullWidth
            label="Nivel"
            value={selectedLevel}
            onChange={(e) => handleLevelChange(e.target.value)}
          >
            <MenuItem value="">Todos los niveles</MenuItem>
            {NIVELES.map((n) => (
              <MenuItem key={n} value={n}>
                Nivel {n}
              </MenuItem>
            ))}
          </TextField>
        </Stack>

        <TextField
          fullWidth
          label="Buscar"
          placeholder="Busca por nombre o descripción…"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
            endAdornment: searchTerm ? (
              <InputAdornment position="end">
                <IconButton aria-label="Limpiar búsqueda" size="small" onClick={() => handleSearchChange("")}>
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ) : null,
          }}
        />

        <Stack direction={{ xs: "column", md: "row" }} spacing={2} className="hechizos-master-detail">
          <Box className="hechizos-lista-wrapper">
            <List
              dense
              className="hechizos-lista"
              subheader={
                <ListSubheader component="div" className="hechizos-subheader">
                  {filteredSpells.length} hechizo
                  {filteredSpells.length === 1 ? "" : "s"} coincidentes
                </ListSubheader>
              }
            >
              {filteredSpells.length === 0 ? (
                <Box sx={{ p: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    {searchTerm
                      ? `No se encontraron hechizos que contengan “${searchTerm}”.`
                      : "No hay hechizos que coincidan con los filtros seleccionados."}
                  </Typography>
                </Box>
              ) : (
                filteredSpells.map((s) => (
                  <ListItemButton
                    key={s.id}
                    selected={s.id === selectedSpellId}
                    onClick={() => setSelectedSpellId(s.id)}
                  >
                    <ListItemText
                      primary={s.name}
                      secondary={`Nivel ${s.level} · ${s.school} · ${ETIQUETAS_CASTER[s.caster]}`}
                    />
                  </ListItemButton>
                ))
              )}
            </List>
          </Box>

          <Box className="hechizos-detalle-wrapper">
            <HechizoDetalle spell={selectedSpell} />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

import { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import {
  CODIGO_LIBRO_STROM,
  ETIQUETAS_CASTER,
  ETIQUETA_LIBRO_STROM,
  tieneStats,
  type HechizoCodigoFuente,
  type HechizoConCaster,
} from "../../interfaces/Hechizo";
import type { HechizoCaster, HechizosDataV2 } from "../../interfaces/Hechizo";
import "../../App.css";

type FiltroTipo = "todos" | HechizoCaster;

/**
 * Etiqueta corta para un código de fuente declarado en
 * `leyenda_de_fuentes`. Si el código no aparece en la leyenda, devuelve
 * el propio código.
 */
function nombreFuente(codigo: string, leyenda: Record<string, string>): string {
  return leyenda[codigo] ?? codigo;
}

/**
 * Normaliza un valor para búsqueda case-insensitive y tolerante a
 * acentos.
 */
function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

/**
 * Limpia el nombre de un hechizo para mostrarlo en la UI.
 *
 * El dataset `dnd_2e_spells_es.json` incluye en algunos nombres
 * (sobre todo los marcados con `PoSM` en el compendio original)
 * literal HTML como `<font size = 2>*</font>`, que se usa en el
 * material impreso para señalar los hechizos de la versión Wild
 * Magic de "Player's Option: Spells & Magic". Ese HTML se cuela como
 * texto en React y se ve feo en la UI, así que lo sustituimos por
 * un asterisco simple antes de renderizar.
 */
function limpiarNombre(texto: string): string {
  if (!texto) return texto;
  return texto
    .replace(/<font\s+size\s*=\s*2\s*>\s*\*\s*<\/font>/gi, "*")
    .replace(/<\/?font[^>]*>/gi, "")
    .replace(/&amp;/g, "&")
    .trim();
}

export default function HechizosExplorer() {
  const [data, setData] = useState<HechizosDataV2 | null>(null);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [filtroTexto, setFiltroTexto] = useState<string>("");
  const [filtroNivel, setFiltroNivel] = useState<string>("todos");
  const [filtroEscuela, setFiltroEscuela] = useState<string>("todas");
  // Por defecto, al entrar al explorador se muestran solo los
  // hechizos del LIBRO JUGADOR STROM (los 486 con estadísticas
  // completas). El usuario puede cambiar a "Todos" para ver el
  // compendio completo.
  const [filtroLibro, setFiltroLibro] = useState<string>(`${CODIGO_LIBRO_STROM} — ${ETIQUETA_LIBRO_STROM}`);
  const [filtroTipo, setFiltroTipo] = useState<FiltroTipo>("todos");

  const [seleccion, setSeleccion] = useState<HechizoConCaster | null>(null);

  useEffect(() => {
    let cancelado = false;
    setCargando(true);
    setError(null);
    fetch("/dnd_2e_spells_es.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((json: HechizosDataV2) => {
        if (cancelado) return;
        setData(json);
        setCargando(false);
      })
      .catch((err: unknown) => {
        if (cancelado) return;
        setError(err instanceof Error ? err.message : "Error desconocido");
        setCargando(false);
      });
    return () => {
      cancelado = true;
    };
  }, []);

  /**
   * Aplana las dos secciones en una sola lista de tuplas
   * `{ caster, hechizo }` apta para filtrar y ordenar.
   */
  const listaCompleta = useMemo<HechizoConCaster[]>(() => {
    if (!data) return [];
    const resultado: HechizoConCaster[] = [];
    for (const s of data.conjuros_de_hechicero.conjuros_con_estadisticas_completas) {
      resultado.push({ caster: "mago", hechizo: s });
    }
    for (const s of data.conjuros_de_sacerdote.conjuros_con_estadisticas_completas) {
      resultado.push({ caster: "sacerdote", hechizo: s });
    }
    for (const s of data.conjuros_de_hechicero.listado_completo_de_nombres) {
      resultado.push({ caster: "mago", hechizo: s });
    }
    for (const s of data.conjuros_de_sacerdote.listado_completo_de_nombres) {
      resultado.push({ caster: "sacerdote", hechizo: s });
    }
    return resultado;
  }, [data]);

  /**
   * Conjunto de escuelas disponibles en los datos cargados.
   * Se calcula a partir de los hechizos con stats.
   * Solo se listan escuelas simples (sin la barra `/` que indica
   * combinaciones del tipo "Abjuración / Evocación"). Las
   * combinaciones se siguen pudiendo buscar por texto y aparecen
   * en la ficha de detalle del hechizo, pero no inflan el
   * desplegable.
   */
  const escuelas = useMemo<string[]>(() => {
    const set = new Set<string>();
    for (const item of listaCompleta) {
      if (tieneStats(item.hechizo) && !item.hechizo.escuela.includes("/")) {
        set.add(item.hechizo.escuela);
      }
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b, "es"));
  }, [listaCompleta]);

  /**
   * Conjunto de libros disponibles, derivado de `leyenda_de_fuentes`
   * cruzado con los `codigos_de_fuente` que aparecen realmente en los
   * hechizos del listado completo de nombres. Incluye también el
   * código virtual `LJS` (Libro Jugador Strom) que el script
   * `scripts/add_fuente_strom.mjs` asigna a los 486 hechizos con
   * estadísticas.
   */
  const libros = useMemo<string[]>(() => {
    if (!data) return [];
    const usados = new Set<string>();
    for (const item of listaCompleta) {
      if (tieneStats(item.hechizo)) {
        // Los 486 con stats llevan `fuente_strom: "LIBRO JUGADOR STROM"`.
        // Se representan con el código virtual LJS para unificar el
        // tratamiento con `codigos_de_fuente`.
        if (item.hechizo.fuente_strom) {
          usados.add(CODIGO_LIBRO_STROM);
        }
      } else {
        for (const c of item.hechizo.codigos_de_fuente) {
          usados.add(c.codigo);
        }
      }
    }
    return Array.from(usados)
      .map((codigo) => {
        if (codigo === CODIGO_LIBRO_STROM) {
          return `${CODIGO_LIBRO_STROM} — ${ETIQUETA_LIBRO_STROM}`;
        }
        return `${codigo} — ${nombreFuente(codigo, data.leyenda_de_fuentes)}`;
      })
      .sort((a, b) => a.localeCompare(b, "es"));
  }, [data, listaCompleta]);

  /**
   * Conjunto de niveles disponibles, normalizados a string.
   */
  const niveles = useMemo<string[]>(() => {
    const set = new Set<string>();
    for (const item of listaCompleta) {
      set.add(String(item.hechizo.nivel));
    }
    return Array.from(set).sort((a, b) => Number(a) - Number(b));
  }, [listaCompleta]);

  /**
   * Lista filtrada y ordenada (caster → nivel numérico → nombre).
   */
  const listaFiltrada = useMemo<HechizoConCaster[]>(() => {
    const aguja = normalizar(filtroTexto);
    // Libro seleccionado: un hechizo con stats lo "tiene" si su
    // `fuente_strom` está presente; un hechizo sin stats lo tiene si
    // su `codigos_de_fuente` lo incluye.
    const codigoLibro = filtroLibro !== "todos" ? filtroLibro.split(" — ")[0] : null;
    return listaCompleta
      .filter((item) => {
        if (filtroTipo !== "todos" && item.caster !== filtroTipo) return false;
        if (codigoLibro !== null) {
          if (codigoLibro === CODIGO_LIBRO_STROM) {
            // LJS: solo hechizos con stats y `fuente_strom`.
            if (!tieneStats(item.hechizo)) return false;
            if (!item.hechizo.fuente_strom) return false;
          } else {
            // Cualquier otro libro: solo hechizos sin stats del
            // `listado_completo_de_nombres` con ese código.
            if (tieneStats(item.hechizo)) return false;
            const codigos = item.hechizo.codigos_de_fuente.map((c) => c.codigo);
            if (!codigos.includes(codigoLibro)) return false;
          }
        }
        if (filtroNivel !== "todos" && String(item.hechizo.nivel) !== filtroNivel) return false;
        if (filtroEscuela !== "todas") {
          if (!tieneStats(item.hechizo)) return false;
          if (item.hechizo.escuela !== filtroEscuela) return false;
        }
        if (aguja.length > 0) {
          const nombre = normalizar(limpiarNombre(item.hechizo.nombre));
          const original = item.hechizo.nombre_original_en
            ? normalizar(limpiarNombre(item.hechizo.nombre_original_en))
            : "";
          if (!nombre.includes(aguja) && !original.includes(aguja)) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (a.caster !== b.caster) {
          return a.caster === "mago" ? -1 : 1;
        }
        const na = Number(a.hechizo.nivel);
        const nb = Number(b.hechizo.nivel);
        if (na !== nb) return na - nb;
        return a.hechizo.nombre.localeCompare(b.hechizo.nombre, "es");
      });
  }, [listaCompleta, filtroTipo, filtroNivel, filtroEscuela, filtroLibro, filtroTexto]);

  /**
   * Agrupa la lista filtrada en subheaders por caster → nivel.
   */
  const grupos = useMemo<Array<{ caster: HechizoCaster; nivel: string; items: HechizoConCaster[] }>>(() => {
    const map = new Map<string, { caster: HechizoCaster; nivel: string; items: HechizoConCaster[] }>();
    for (const item of listaFiltrada) {
      const key = `${item.caster}-${item.hechizo.nivel}`;
      const existente = map.get(key);
      if (existente) {
        existente.items.push(item);
      } else {
        map.set(key, {
          caster: item.caster,
          nivel: String(item.hechizo.nivel),
          items: [item],
        });
      }
    }
    return Array.from(map.values()).sort((a, b) => {
      if (a.caster !== b.caster) {
        return a.caster === "mago" ? -1 : 1;
      }
      return Number(a.nivel) - Number(b.nivel);
    });
  }, [listaFiltrada]);

  // Resetear selección si el hechizo seleccionado desaparece al filtrar.
  useEffect(() => {
    if (!seleccion) return;
    const sigue = listaFiltrada.some(
      (i) =>
        i.caster === seleccion.caster &&
        i.hechizo.nombre === seleccion.hechizo.nombre &&
        i.hechizo.nivel === seleccion.hechizo.nivel,
    );
    if (!sigue) setSeleccion(null);
  }, [listaFiltrada, seleccion]);

  if (cargando) {
    return (
      <Box className="hechizos-empty" data-testid="hechizos-loading">
        <CircularProgress size={32} />
        <Typography variant="body2" sx={{ mt: 2 }}>
          Cargando compendio de hechizos…
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ m: 2 }}>
        No se pudo cargar el compendio de hechizos: {error}
      </Alert>
    );
  }

  if (!data) return null;

  return (
    <div className="hechizos-explorer">
      {/* === Filtros === */}
      <Box className="hechizos-filtros" sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
        <TextField
          label="Buscar por nombre"
          value={filtroTexto}
          onChange={(e) => setFiltroTexto(e.target.value)}
          size="small"
        />
        <TextField
          select
          label="Tipo"
          value={filtroTipo}
          onChange={(e) => setFiltroTipo(e.target.value as FiltroTipo)}
          size="small"
        >
          <MenuItem value="todos">Todos</MenuItem>
          {Object.entries(ETIQUETAS_CASTER).map(([k, v]) => (
            <MenuItem key={k} value={k}>
              {v}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Nivel"
          value={filtroNivel}
          onChange={(e) => setFiltroNivel(e.target.value)}
          size="small"
        >
          <MenuItem value="todos">Todos los niveles</MenuItem>
          {niveles.map((n) => (
            <MenuItem key={n} value={n}>
              {`Nivel ${n}`}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Escuela"
          value={filtroEscuela}
          onChange={(e) => setFiltroEscuela(e.target.value)}
          size="small"
        >
          <MenuItem value="todas">Todas</MenuItem>
          {escuelas.map((e) => (
            <MenuItem key={e} value={e}>
              {e}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Libro"
          value={filtroLibro}
          onChange={(e) => setFiltroLibro(e.target.value)}
          size="small"
        >
          <MenuItem value="todos">Todos</MenuItem>
          {libros.map((l) => (
            <MenuItem key={l} value={l}>
              {l}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* === Maestro-detalle === */}
      <Box className="hechizos-master-detail" sx={{ display: "flex", gap: 2 }}>
        {/* Lista */}
        <Box className="hechizos-lista-wrapper">
          <List className="hechizos-lista" dense subheader={<li />} sx={{ p: 0 }}>
            {grupos.length === 0 ? (
              <div className="hechizos-empty">
                <Typography variant="body2">No hay hechizos que coincidan con los filtros.</Typography>
              </div>
            ) : (
              grupos.map((grupo) => (
                <li key={`${grupo.caster}-${grupo.nivel}`}>
                  <ul style={{ padding: 0, margin: 0 }}>
                    <ListSubheader className="hechizos-subheader" sx={{ lineHeight: "32px" }}>
                      {ETIQUETAS_CASTER[grupo.caster]} · Nivel {grupo.nivel}
                      <Typography component="span" variant="caption" sx={{ ml: 1, color: "text.secondary" }}>
                        ({grupo.items.length})
                      </Typography>
                    </ListSubheader>
                    {grupo.items.map((item, idx) => {
                      const isSelected =
                        seleccion?.caster === item.caster &&
                        seleccion?.hechizo.nombre === item.hechizo.nombre &&
                        seleccion?.hechizo.nivel === item.hechizo.nivel;
                      const key = `${item.caster}-${item.hechizo.nivel}-${item.hechizo.nombre}-${idx}`;
                      return (
                        <ListItemButton key={key} selected={isSelected} onClick={() => setSeleccion(item)}>
                          <ListItemText
                            primary={limpiarNombre(item.hechizo.nombre)}
                            secondary={tieneStats(item.hechizo) ? item.hechizo.escuela : "Sin estadísticas"}
                            primaryTypographyProps={{ noWrap: true }}
                            secondaryTypographyProps={{ noWrap: true }}
                          />
                        </ListItemButton>
                      );
                    })}
                  </ul>
                </li>
              ))
            )}
          </List>
        </Box>

        {/* Detalle */}
        <Box className="hechizos-detalle-wrapper">
          {seleccion ? (
            <DetalleHechizo item={seleccion} leyendaFuentes={data.leyenda_de_fuentes} />
          ) : (
            <div className="hechizos-empty">
              <Typography variant="body2">
                Selecciona un hechizo de la lista para ver sus detalles.
              </Typography>
              <Typography variant="caption" sx={{ display: "block", mt: 1, color: "text.secondary" }}>
                {listaCompleta.length.toLocaleString("es-ES")} hechizos disponibles en el compendio.
              </Typography>
            </div>
          )}
        </Box>
      </Box>
    </div>
  );
}

/* ---------- Detalle ---------- */

interface DetalleHechizoProps {
  item: HechizoConCaster;
  leyendaFuentes: Record<string, string>;
}

function DetalleHechizo({ item, leyendaFuentes }: DetalleHechizoProps) {
  const { caster, hechizo } = item;
  const conStats = tieneStats(hechizo);
  const esIngles = conStats && hechizo.idioma_descripcion === "en";
  const verificacion = hechizo.fuente_traduccion;

  return (
    <Card className="hechizo-detalle-card" variant="outlined">
      <CardContent>
        {/* Cabecera */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 0.5 }}>
            {limpiarNombre(hechizo.nombre)}
            {esIngles && (
              <Chip
                label="EN"
                size="small"
                className="hechizo-chip hechizo-chip-en"
                sx={{ ml: 1, verticalAlign: "middle" }}
              />
            )}
          </Typography>
          {hechizo.nombre_original_en &&
            limpiarNombre(hechizo.nombre_original_en) !== limpiarNombre(hechizo.nombre) && (
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
                {limpiarNombre(hechizo.nombre_original_en)}
              </Typography>
            )}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
            <Chip
              label={ETIQUETAS_CASTER[caster]}
              size="small"
              className={`hechizo-chip hechizo-chip-${caster}`}
            />
            <Chip label={`Nivel ${hechizo.nivel}`} size="small" className="hechizo-chip" />
            {conStats && hechizo.escuela && (
              <Chip label={hechizo.escuela} size="small" className="hechizo-chip" />
            )}
            {conStats && hechizo.esfera && (
              <Chip
                label={`Esfera: ${hechizo.esfera}`}
                size="small"
                className="hechizo-chip hechizo-chip-esfera"
              />
            )}
            {verificacion === "oficial/verificada" && (
              <Chip label="Nombre verificado" size="small" className="hechizo-chip hechizo-chip-verificada" />
            )}
            {verificacion === "pendiente" && (
              <Chip
                label="Traducción pendiente"
                size="small"
                className="hechizo-chip hechizo-chip-pendiente"
              />
            )}
          </Box>
        </Box>

        {conStats ? (
          <>
            <Box className="hechizo-detalle-grid">
              <DetalleRow label="Alcance" valor={hechizo.alcance} />
              <DetalleRow label="Componentes" valor={hechizo.componentes} />
              <DetalleRow label="Tiempo de lanzamiento" valor={hechizo.tiempo_de_lanzamiento} />
              <DetalleRow label="Duración" valor={hechizo.duracion} />
              <DetalleRow label="Área de efecto" valor={hechizo.area_de_efecto} />
              <DetalleRow label="Tirada de salvación" valor={hechizo.tirada_de_salvacion} />
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="overline" sx={{ display: "block", color: "text.secondary" }}>
                Descripción
              </Typography>
              <Typography variant="body2" sx={{ whiteSpace: "pre-wrap", textAlign: "justify" }}>
                {hechizo.descripcion}
              </Typography>
            </Box>
          </>
        ) : (
          <FuentesList
            codigos={hechizo.codigos_de_fuente}
            reversible={hechizo.reversible}
            leyenda={leyendaFuentes}
          />
        )}

        {/* Si el hechizo tiene `fuente_strom`, se muestra como libro
            único en la sección "Libro", independientemente de si tiene
            `codigos_de_fuente` o no. */}
        {conStats && hechizo.fuente_strom && (
          <Box sx={{ mt: conStats ? 2 : 0 }}>
            <Typography variant="overline" sx={{ display: "block", color: "text.secondary" }}>
              Libro
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              <Chip label={hechizo.fuente_strom} size="small" className="hechizo-chip hechizo-chip-fuente" />
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

interface DetalleRowProps {
  label: string;
  valor: string | undefined;
}

function DetalleRow({ label, valor }: DetalleRowProps) {
  if (!valor || valor.trim() === "") return null;
  return (
    <div className="hechizo-detalle-row">
      <Typography variant="overline" sx={{ lineHeight: 1.2, color: "text.secondary" }}>
        {label}
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        {valor}
      </Typography>
    </div>
  );
}

interface FuentesListProps {
  codigos: HechizoCodigoFuente[];
  reversible: boolean;
  leyenda: Record<string, string>;
}

function FuentesList({ codigos, reversible, leyenda }: FuentesListProps) {
  if ((!codigos || codigos.length === 0) && !reversible) {
    return (
      <Typography variant="body2" color="text.secondary">
        No hay información adicional sobre las fuentes de este hechizo.
      </Typography>
    );
  }
  return (
    <Box>
      <Typography variant="overline" sx={{ display: "block", color: "text.secondary" }}>
        Libro
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {reversible && (
          <Chip label="Reversible" size="small" className="hechizo-chip hechizo-chip-reversible" />
        )}
        {codigos.map((c) => (
          <Chip
            key={c.codigo}
            label={`${c.codigo} — ${nombreFuente(c.codigo, leyenda)}`}
            size="small"
            className="hechizo-chip hechizo-chip-fuente"
          />
        ))}
      </Box>
    </Box>
  );
}

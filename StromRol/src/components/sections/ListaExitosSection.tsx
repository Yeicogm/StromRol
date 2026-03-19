import { useEffect, useState } from "react";
import type {
  ExitosData,
  PersonajeExito,
  PersonajeExitoInput,
} from "../../interfaces/Exitos";

type ListaExitosSectionProps = {
  isActive: boolean;
  emptyMessage?: string;
};

const PUNTOS_POR_NIVEL = {
  guerrero: 0.85,
  semi: 0.95,
  picaro: 0.9,
  mago: 1,
} as const;

const puntosFormatter = new Intl.NumberFormat("es-ES", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ETIQUETA_PUESTO: Record<number, string> = {
  1: "Campeon",
  2: "Subcampeon",
  3: "Tercer puesto",
};

const normalizarNivel = (valor: unknown): number => {
  const numero = Number(valor);

  if (!Number.isFinite(numero) || numero < 0) {
    return 0;
  }

  return Math.floor(numero);
};

const normalizarClases = (valor: unknown): string[] => {
  if (Array.isArray(valor)) {
    return valor
      .filter((clase): clase is string => typeof clase === "string")
      .map((clase) => clase.trim())
      .filter((clase) => clase.length > 0);
  }

  if (typeof valor === "string" && valor.trim().length > 0) {
    return valor
      .split(",")
      .map((clase) => clase.trim())
      .filter((clase) => clase.length > 0);
  }

  return [];
};

const construirPersonaje = (item: unknown, index: number): PersonajeExito => {
  const personaje = (item ?? {}) as PersonajeExitoInput;

  const nivelGuerrero = normalizarNivel(personaje.nivelGuerrero);
  const nivelSemi = normalizarNivel(personaje.nivelSemi);
  const nivelPicaro = normalizarNivel(personaje.nivelPicaro);
  const nivelMago = normalizarNivel(personaje.nivelMago);

  const totalNiveles = nivelGuerrero + nivelSemi + nivelPicaro + nivelMago;
  const totalPuntos =
    nivelGuerrero * PUNTOS_POR_NIVEL.guerrero +
    nivelSemi * PUNTOS_POR_NIVEL.semi +
    nivelPicaro * PUNTOS_POR_NIVEL.picaro +
    nivelMago * PUNTOS_POR_NIVEL.mago;

  return {
    jugador:
      typeof personaje.jugador === "string" &&
      personaje.jugador.trim().length > 0
        ? personaje.jugador.trim()
        : `Jugador ${index + 1}`,
    nombrePersonaje:
      typeof personaje.nombrePersonaje === "string" &&
      personaje.nombrePersonaje.trim().length > 0
        ? personaje.nombrePersonaje.trim()
        : `Personaje ${index + 1}`,
    raza:
      typeof personaje.raza === "string" && personaje.raza.trim().length > 0
        ? personaje.raza.trim()
        : "-",
    clases: normalizarClases(personaje.clases),
    nivelGuerrero,
    nivelSemi,
    nivelPicaro,
    nivelMago,
    totalNiveles,
    totalPuntos,
  };
};

export default function ListaExitosSection({
  isActive,
  emptyMessage,
}: ListaExitosSectionProps) {
  const [personajes, setPersonajes] = useState<PersonajeExito[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const cargarPersonajes = async () => {
      try {
        const response = await fetch("/Exitos.json");
        if (!response.ok) {
          throw new Error("No se pudo cargar el archivo Exitos.json");
        }

        const data = (await response.json()) as ExitosData;
        const personajesRaw = Array.isArray(data.personajes)
          ? data.personajes
          : [];

        const personajesNormalizados = personajesRaw
          .map((item, index) => construirPersonaje(item, index))
          .sort(
            (a, b) =>
              b.totalPuntos - a.totalPuntos ||
              b.totalNiveles - a.totalNiveles ||
              a.nombrePersonaje.localeCompare(b.nombrePersonaje, "es"),
          );

        if (!isMounted) {
          return;
        }

        setPersonajes(personajesNormalizados);
      } catch {
        if (isMounted) {
          setError("No se pudo cargar la lista de éxitos.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void cargarPersonajes();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!isActive) return null;

  if (isLoading) {
    return <div className="ficha-tab-empty">Cargando lista de éxitos...</div>;
  }

  if (error) {
    return <div className="ficha-tab-empty">{error}</div>;
  }

  if (personajes.length === 0) {
    return (
      <div className="ficha-tab-empty">
        {emptyMessage ?? "No hay personajes en la lista de éxitos."}
      </div>
    );
  }

  const podio = personajes.slice(0, 3);
  const medalEmojis = ["🥇", "🥈", "🥉"];

  return (
    <section className="lista-exitos" aria-label="Lista de éxitos">
      <div className="lista-exitos-podio" role="list">
        {podio.map((personaje, index) => {
          const puesto = index + 1;
          const etiquetaPuesto = ETIQUETA_PUESTO[puesto] ?? `Puesto ${puesto}`;
          const medalEmoji = medalEmojis[index];

          return (
            <article
              key={`${personaje.jugador}-${personaje.nombrePersonaje}-${puesto}`}
              className={`lista-exitos-podio-card puesto-${puesto}`}
              role="listitem"
            >
              <div className="lista-exitos-podio-medal">
                <span className="lista-exitos-podio-emoji">{medalEmoji}</span>
              </div>
              <p className="lista-exitos-podio-etiqueta">{etiquetaPuesto}</p>
              <h3 className="lista-exitos-podio-nombre">
                {personaje.nombrePersonaje}
              </h3>
              <p className="lista-exitos-podio-jugador">{personaje.jugador}</p>
              <div className="lista-exitos-podio-stats">
                <span className="lista-exitos-podio-stat">
                  <strong>
                    {puntosFormatter.format(personaje.totalPuntos)}
                  </strong>
                  <small>pts</small>
                </span>
                <span className="lista-exitos-podio-separator">•</span>
                <span className="lista-exitos-podio-stat">
                  <strong>{personaje.totalNiveles}</strong>
                  <small>lvl</small>
                </span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="lista-exitos-table-wrapper">
        <table className="lista-exitos-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Jug.</th>
              <th>Nombre</th>
              <th>Raza</th>
              <th>Clases</th>
              <th>T.puntos</th>
              <th>N.Guerrero</th>
              <th>N.Semi</th>
              <th>N.Pícaro</th>
              <th>N.Mago</th>
              <th>T.niveles</th>
            </tr>
          </thead>
          <tbody>
            {personajes.map((personaje, index) => (
              <tr
                key={`${personaje.jugador}-${personaje.nombrePersonaje}-${index}`}
              >
                <td>{index + 1}</td>
                <td>{personaje.jugador}</td>
                <td>{personaje.nombrePersonaje}</td>
                <td>{personaje.raza}</td>
                <td>{personaje.clases.join(" / ") || "-"}</td>
                <td>{puntosFormatter.format(personaje.totalPuntos)}</td>
                <td>{personaje.nivelGuerrero}</td>
                <td>{personaje.nivelSemi}</td>
                <td>{personaje.nivelPicaro}</td>
                <td>{personaje.nivelMago}</td>
                <td>{personaje.totalNiveles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

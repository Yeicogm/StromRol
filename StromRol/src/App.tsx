import { useState, useEffect } from "react";
import "./App.css";
import { calcularCaracteristicasFinales } from "./logic/logica";
import type { Raza } from "./interfaces/RazasInterface";
import type { Clase } from "./interfaces/ClasesInterface";

function App() {
  const [razas, setRazas] = useState<Raza[]>([]);
  const [clases, setClases] = useState<Clase[]>([]);
  const [razaSeleccionada, setRazaSeleccionada] = useState<Raza | null>(null);
  const [claseSeleccionada, setClaseSeleccionada] = useState<Clase | null>(
    null
  );
  const [resultado, setResultado] = useState<{ [key: string]: string } | null>(
    null
  );

  useEffect(() => {
    // Cargar razas
    fetch("/Razas.json")
      .then((res) => res.json())
      .then((data) => setRazas(data.razas as Raza[]));
    // Cargar clases
    fetch("/Clases.json")
      .then((res) => res.json())
      .then((data) => setClases(data.clases as Clase[]));
  }, []);

  useEffect(() => {
    if (razaSeleccionada && claseSeleccionada) {
      setResultado(
        calcularCaracteristicasFinales(razaSeleccionada, claseSeleccionada)
      );
    } else {
      setResultado(null);
    }
  }, [razaSeleccionada, claseSeleccionada]);

  return (
    <div className="ficha-container">
      <h2 className="ficha-title">Generador de Fichas</h2>
      <div className="ficha-select-group">
        <label htmlFor="raza-select" className="ficha-label">
          Raza:&nbsp;
        </label>
        <select
          id="raza-select"
          className="ficha-select"
          value={razaSeleccionada?.nombre || ""}
          onChange={(e) => {
            const r = razas.find((r) => r.nombre === e.target.value);
            setRazaSeleccionada(r || null);
          }}
        >
          <option value="">Elige una raza</option>
          {razas.map((r) => (
            <option key={r.nombre} value={r.nombre}>
              {r.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="ficha-select-group">
        <label htmlFor="clase-select" className="ficha-label">
          Clase:&nbsp;
        </label>
        <select
          id="clase-select"
          className="ficha-select"
          value={claseSeleccionada?.nombre || ""}
          onChange={(e) => {
            const c = clases.find((c) => c.nombre === e.target.value);
            setClaseSeleccionada(c || null);
          }}
        >
          <option value="">Elige una clase</option>
          {clases.map((c) => (
            <option key={c.nombre} value={c.nombre}>
              {c.nombre}
            </option>
          ))}
        </select>
      </div>
      {resultado && (
        <div className="ficha-resultado">
          <h3 className="ficha-resultado-title">
            Dados para cada característica:
          </h3>
          <ul className="ficha-resultado-list">
            {Object.entries(resultado).map(([car, dado]) => (
              <li key={car} className="ficha-resultado-item">
                <b className="ficha-resultado-carac">{car}:</b>{" "}
                <span className="ficha-resultado-dado">{dado as string}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

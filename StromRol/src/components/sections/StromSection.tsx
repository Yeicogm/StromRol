import "../../App.css";

type StromSectionProps = {
  isActive: boolean;
};

export default function StromSection({ isActive }: StromSectionProps) {
  if (!isActive) return null;

  return (
    <section className="strom-section">
      <div className="strom-grid">
        <div className="strom-info">
          <h3 className="strom-title">Qué es Strom</h3>
          <p className="strom-text">
            Strom es un juego de fantasía creado en 1996 por un grupo de
            chavales de Marbella. Está inspirado en juegos como Stormbringer,
            Elric, RuneQuest y D&D.
          </p>
          <p className="strom-text">
            Esta aplicación te ayuda a generar personajes y conectar con la
            ambientación del juego. Si quieres profundizar, puedes descargar el
            compendio o mirar el código fuente.
          </p>
          <div className="strom-actions">
            <a
              href="https://github.com/Yeicogm/StromRol"
              target="_blank"
              rel="noopener noreferrer"
              className="strom-button"
            >
              Ver en GitHub
            </a>
            <a
              href="/CompendioStrom.pdf"
              className="strom-button strom-button--secondary"
            >
              Descargar compendio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

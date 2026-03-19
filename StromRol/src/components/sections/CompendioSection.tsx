import "../../App.css";

type CompendioSectionProps = {
  isActive: boolean;
};

export default function CompendioSection({ isActive }: CompendioSectionProps) {
  if (!isActive) return null;
  return (
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
  );
}

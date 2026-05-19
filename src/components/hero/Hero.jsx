import "./Hero.css";

import backgroundImage from "../../assets/backgrounds/background-akiles-3d.png";

function Hero() {
  return (
    <section className="hero">
      <img
        src={backgroundImage}
        alt=""
        className="hero-background"
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-badge">
          Impresión 3D Profesional
        </span>

        <h1>
          FIGURAS 3D
          <br />
          DE OTRO NIVEL
        </h1>

        <p>
          Diseños exclusivos impresos en 3D con acabados
          premium para coleccionistas, decoración y
          proyectos totalmente personalizados.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Ver catálogo
          </button>

          <button className="btn-secondary">
            Encargar diseño
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
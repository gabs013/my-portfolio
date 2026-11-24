import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__portrait" aria-label="Espacio para tu foto profesional">
        <span>Tu foto profesional</span>
        <span className="hero__badge">React · JavaScript</span>
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Desarrolladora Front-End en formación</p>

        <h1 className="hero__title">
          Hola, soy Gabriela. Construyo interfaces claras y adaptables con React.
        </h1>

        <p className="hero__description">
          Me interesa transformar ideas en experiencias web fáciles de usar,
          cuidando cada detalle del código y el diseño.
        </p>

        <div className="hero__actions">
          <a className="hero__button hero__button--primary" href="#proyectos">
            Ver proyectos ↓
          </a>
          <a className="hero__button hero__button--secondary" href="#contacto">
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

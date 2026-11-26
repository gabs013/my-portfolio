import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__portrait">
        <img src="/images/gabriela.png" alt="Retrato de Gabriela Arroyo" />
        <span className="hero__badge">React · JavaScript</span>
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">#OpenToWork</p>

        <h1 className="hero__title">
          Hola mundo, soy Gabriela Arroyo.
        </h1>

        <p className="hero__description">
          Construyo interfaces claras y adaptables con React. Me interesa transformar ideas en experiencias web fáciles de usar, cuidando cada detalle del código y el diseño.
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

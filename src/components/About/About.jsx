import './About.css';

function About() {
  return (
    <section className="about" id="sobre-mi">
      <div className="about__heading">
        <p className="about__label">Acerca de mí</p>
        <h2 className="about__title">
          Desarrolladora Frontend Junior
        </h2>
      </div>

      <div className="about__card">
        <p className="about__description">
          Egresada del bootcamp de Tripleten en Desarrollo web. Disfruto transformar ideas en interfaces claras y adaptables, aplicando React, JavaScript, APIs y autenticación en mis proyectos. También he desarrollado y desplegado el backend de una aplicación con Node.js, Express, MongoDB y Mongoose. Me interesa continuar aprendiendo y cuidar tanto la experiencia de uso como la calidad del código.
        </p>

        <ul className="about__features">
          <li className="about__feature">
            <strong>Accesibilidad</strong>
            <span>Cuido etiquetas y formas claras de interactuar.</span>
          </li>

          <li className="about__feature">
            <strong>Diseño adaptable</strong>
            <span>Construyo interfaces que se ajustan a distintas pantallas.</span>
          </li>

          <li className="about__feature">
            <strong>Componentes reutilizables</strong>
            <span>Organizo la interfaz en piezas claras y mantenibles.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;

import './About.css';

function About() {
  return (
    <section className="about" id="sobre-mi">
      <div className="about__heading">
        <p className="about__label">Sobre mí</p>
        <h2 className="about__title">
          Código con propósito y una mirada humana.
        </h2>
      </div>

      <div className="about__card">
        <p className="about__description">
          Me estoy formando como desarrolladora Front-End y disfruto transformar
          ideas en interfaces claras y adaptables. En mis proyectos he trabajado
          con React, JavaScript, APIs y autenticación. Me interesa seguir
          aprendiendo y cuidar tanto la experiencia de uso como la calidad del
          código.
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

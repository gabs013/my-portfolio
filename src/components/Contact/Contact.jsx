import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="contact__intro">
        <p className="contact__label">Contacto</p>
        <h2 className="contact__title">Trabajemos juntos</h2>
        <p className="contact__description">
          Abierta a oportunidades como Desarrolladora Front-End Junior, proyectos freelance o colaboraciones. ¿Tienes una idea en mente? Escríbeme.
        </p>
      </div>

      <div className="contact__links">
        <a
          className="contact__link"
          href="https://github.com/gabs013"
          target="_blank"
          rel="noreferrer"
        >
          <strong>GitHub</strong>
          <span>Explora mis proyectos</span>
        </a>

        <a
          className="contact__link"
          href="https://www.linkedin.com/in/gabrielaarroyodev/"
          target="_blank"
          rel="noreferrer"
        >
          <strong>LinkedIn</strong>
          <span>Conectemos profesionalmente</span>
        </a>

        <a
          className="contact__link contact__link--email"
          href="mailto:gabrieladelrayo.arroyo@gmail.com"
        >
          <strong>Correo electrónico</strong>
          <span>Escríbeme</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;

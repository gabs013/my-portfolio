import './Header.css';

function Header() {
  return (
    <header className="header-site">
      <a className="header-site__brand" href="#inicio" aria-label="Ir al inicio">
        <span className="header-site__initials">GA</span>
        <span className="header-site__identity">
          <strong>Gabriela Arroyo</strong>
          <small>Desarrolladora Front-End</small>
        </span>
      </a>

      <nav className="header-site__nav" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#tecnologias">Tecnologías</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a className="header-site__contact" href="#contacto">
        Hablemos
      </a>
    </header>
  );
}

export default Header;

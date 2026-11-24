import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="#inicio" aria-label="Ir al inicio">
        <span className="site-header__initials">GA</span>
        <span className="site-header__identity">
          <strong>Gabriela Arroyo</strong>
          <small>Desarrolladora Front-End</small>
        </span>
      </a>

      <nav className="site-header__nav" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#tecnologias">Tecnologías</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a className="site-header__contact" href="#contacto">
        Hablemos
      </a>
    </header>
  );
}

export default Header;

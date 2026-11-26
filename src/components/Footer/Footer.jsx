import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>© {new Date().getFullYear()} Gabriela Arroyo · Desarrolladora Front-End</p>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}

export default Footer;

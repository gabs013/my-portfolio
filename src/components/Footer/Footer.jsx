import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Gabriela Arroyo · Desarrolladora Front-End</p>
      <a href="#inicio">Volver arriba ↑</a>
    </footer>
  );
}

export default Footer;

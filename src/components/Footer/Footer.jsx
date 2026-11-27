import './Footer.css';

function Footer() {
  return (
    <footer className="footer-site">
      <div className="footer-site__inner">
        <p>© {new Date().getFullYear()} Gabriela Arroyo · Desarrolladora Front-End</p>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}

export default Footer;

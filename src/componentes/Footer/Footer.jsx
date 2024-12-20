import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección Izquierda */}
        <div className="footer-section">
          <h2>Club Ateneo</h2>
          <p>Un espacio para crecer, competir y disfrutar juntos.</p>
        </div>

        {/* Sección Central - Links */}
        <div className="footer-section">
          <h3>Navegación</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Actividades</a></li>
            <li><a href="/">Nosotros</a></li>
            <li><a href="/">Contacto</a></li>
          </ul>
        </div>

        {/* Sección Derecha - Contacto */}
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@clubateneo.com</p>
          <p>Tel: +54 9 123 456 789</p>
        </div>
      </div>

      {/* Derechos Reservados */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Club Ateneo | Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

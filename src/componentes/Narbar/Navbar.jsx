// import React, { useState } from "react";
// import "./Navbar.css";
// import logo from '../../assets/imagenes/ateneo.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); // Estado para mostrar/ocultar menú

//   const toggleMenu = () => {
//     setIsOpen(!isOpen); // Cambia el estado al hacer clic en el botón
//   };

//   return (
//     <header className="header">
//       {/* Logo con imagen */}
//       <a href="/" className="logo">
//         <img src={logo} alt="Logo Ateneo" className="logo-img" />
//       </a>

//       {/* Botón Hamburguesa */}
//       <div className="hamburger" onClick={toggleMenu}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       {/* Menú de navegación */}
//       <nav className={`navbar ${isOpen ? "active" : ""}`}>
//         <a href="/">Inicio</a>
//         <a href="/">Actividades</a>
//         <a href="/">Nosotros</a>
//         <a href="/">Contacto</a>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/imagenes/ateneo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo Ateneo" className="logo-img" />
      </Link>

      {/* Botón Hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menú de navegación */}
      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <Link to="/">Inicio</Link>
        <Link to="/Actividades">Actividades</Link>
        <Link to="/">Nosotros</Link>
        <Link to="/">Contacto</Link>
      </nav>
    </header>
  );
};

export default Navbar;

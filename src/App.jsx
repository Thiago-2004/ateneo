// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import Navbar from "./componentes/Narbar/Navbar";
// import Footer from "./componentes/Footer/Footer";
// import Actividades from "./componentes/Actividades/Actividades";
// import "./App.css";

// const HeroSection = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1 className="hero-title">¡Bienvenidos al Club Ateneo!</h1>
//         <p className="hero-subtitle">
//           Un espacio para compartir y disfrutar actividades deportivas y recreativas.
//         </p>
//         <button
//           className="hero-button"
//           onClick={() => navigate("/actividades")}
//         >
//           Descubre más
//         </button>
//       </div>
//     </section>
//   );
// };

// const App = () => {
//   return (
//     <Router basename="/ateneo">
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HeroSection />} />
//           <Route path="/actividades" element={<Actividades />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Narbar/Navbar";
import Footer from "./componentes/Footer/Footer";
import Actividades from "./componentes/Actividades/Actividades";
import ActividadDetalle from "./componentes/Actividades/ActividadDetalle";
import "./App.css";

const App = () => {
  return (
    <Router basename="/ateneo">  {/* Base URL configurada aquí */}
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <section className="hero">
                <div className="hero-content">
                  <h1 className="hero-title">¡Bienvenidos al Club Ateneo!</h1>
                  <p className="hero-subtitle">
                    Un espacio para compartir y disfrutar actividades deportivas y recreativas.
                  </p>
                  <button
                    className="hero-button"
                    onClick={() => alert("¡Explora el club!")}
                  >
                    Descubre más
                  </button>
                </div>
              </section>
            }
          />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/actividades/:actividadId" element={<ActividadDetalle />} /> {/* Ruta para detalles */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;



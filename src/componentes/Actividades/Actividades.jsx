// import React from "react"; 
// import "./Actividades.css";
// import futbolImg from "../../assets/imagenes/futbol.png.jpg";
// import voleyImg from "../../assets/imagenes/voley.png.jpg";
// import padelImg from "../../assets/imagenes/padel.png.jpg";
// import tenisImg from "../../assets/imagenes/tenis.png.jpg";

// const Actividades = () => {
//   const actividades = [
//     { img: futbolImg, titulo: "Fútbol", descripcion: "Únete a nuestro equipo y disfruta del deporte más popular." },
//     { img: voleyImg, titulo: "Vóley", descripcion: "Participa en nuestras clases y torneos de vóley." },
//     { img: padelImg, titulo: "Pádel", descripcion: "Disfruta del pádel en nuestras instalaciones modernas." },
//     { img: tenisImg, titulo: "Tenis", descripcion: "Mejora tus habilidades en el tenis con nuestros entrenadores." },
//   ];

//   return (
//     <div className="actividades">
//       <h1 className="actividades-titulo">¡Explora Nuestras Actividades y Diviértete al Máximo!</h1>
//       <div className="actividades-grid">
//         {actividades.map((actividad, index) => (
//           <div className="actividad-card" key={index}>
//             <div className="actividad-img">
//               <img src={actividad.img} alt={actividad.titulo} />
//             </div>
//             <div className="actividad-info">
//               <h2>{actividad.titulo}</h2>
//               <p>{actividad.descripcion}</p>
//               <button className="actividad-btn">Ver más</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Sección adicional */}
//       <div className="actividades-info-adicional">
//         <h2>Más Información</h2>
//         <div className="info-section">
//           <div className="info-card">
//             <h3>Horarios</h3>
//             <p>Nuestras actividades se realizan de lunes a sábado, con horarios flexibles que se adaptan a tu rutina. ¡Consulta el cronograma en la recepción!</p>
//           </div>
//           <div className="info-card">
//             <h3>Beneficios</h3>
//             <p>Participar en nuestras actividades te permite disfrutar de instalaciones de primera calidad, entrenadores profesionales y eventos especiales durante todo el año.</p>
//           </div>
//           <div className="info-card">
//             <h3>¿Cómo unirte?</h3>
//             <p>Es fácil y rápido. Visita nuestra secretaria o contáctanos para inscribirte. ¡No te pierdas la diversión y la experiencia!</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Actividades;


import React from "react";
import { Link } from "react-router-dom";
import "./Actividades.css";
import futbolImg from "../../assets/imagenes/futbol.png.jpg";
import voleyImg from "../../assets/imagenes/voley.png.jpg";
import padelImg from "../../assets/imagenes/padel.png.jpg";
import tenisImg from "../../assets/imagenes/tenis.png.jpg";


const Actividades = () => {
  const actividades = [
    { id: "futbol", img: futbolImg, titulo: "Fútbol", descripcion: "Únete a nuestro equipo y disfruta del deporte más popular." },
    { id: "voley", img: voleyImg, titulo: "Vóley", descripcion: "Participa en nuestras clases y torneos de vóley." },
    { id: "padel", img: padelImg, titulo: "Pádel", descripcion: "Disfruta del pádel en nuestras instalaciones modernas." },
    { id: "tenis", img: tenisImg, titulo: "Tenis", descripcion: "Mejora tus habilidades en el tenis con nuestros entrenadores." },
  ];

  return (
    <div className="actividades">
      <h1 className="actividades-titulo">¡Explora Nuestras Actividades y Diviértete al Máximo!</h1>
      <div className="actividades-grid">
        {actividades.map((actividad) => (
          <div className="actividad-card" key={actividad.id}>
            <div className="actividad-img">
              <img src={actividad.img} alt={actividad.titulo} />
            </div>
            <div className="actividad-info">
              <h2>{actividad.titulo}</h2>
              <p>{actividad.descripcion}</p>
              <Link to={`/actividades/${actividad.id}`} className="actividad-btn">
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sección adicional */}
      <div className="actividades-info-adicional">
        <h2>Más Información</h2>
        <div className="info-section">
          <div className="info-card">
            <h3>Horarios</h3>
            <p>Nuestras actividades se realizan de lunes a sábado, con horarios flexibles que se adaptan a tu rutina. ¡Consulta el cronograma en la recepción!</p>
          </div>
          <div className="info-card">
            <h3>Beneficios</h3>
            <p>Participar en nuestras actividades te permite disfrutar de instalaciones de primera calidad, entrenadores profesionales y eventos especiales durante todo el año.</p>
          </div>
          <div className="info-card">
            <h3>¿Cómo unirte?</h3>
            <p>Es fácil y rápido. Visita nuestra secretaria o contáctanos para inscribirte. ¡No te pierdas la diversión y la experiencia!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actividades;

// import React from "react";
// import { useParams } from "react-router-dom";
// import futbolImg from "../../assets/imagenes/futbol.png.jpg";
// import voleyImg from "../../assets/imagenes/voley.png.jpg";
// import padelImg from "../../assets/imagenes/padel.png.jpg";
// import tenisImg from "../../assets/imagenes/tenis.png.jpg";
// import "./ActividadDetalle.css";

// const detallesActividades = {
//   futbol: {
//     img: futbolImg,
//     titulo: "Fútbol",
//     descripcion: "Disfruta del deporte rey con nuestras clases y torneos.",
//     detalles: "Contamos con entrenadores calificados, torneos mensuales y actividades recreativas para todas las edades.",
//   },
//   voley: {
//     img: voleyImg,
//     titulo: "Vóley",
//     descripcion: "Participa en emocionantes partidos y entrenamientos de vóley.",
//     detalles: "Tenemos ligas mixtas, cursos para principiantes y equipos competitivos para torneos regionales.",
//   },
//   padel: {
//     img: padelImg,
//     titulo: "Pádel",
//     descripcion: "Disfruta del pádel en nuestras instalaciones modernas.",
//     detalles: "Alquiler de canchas, clases privadas y torneos cada fin de semana.",
//   },
//   tenis: {
//     img: tenisImg,
//     titulo: "Tenis",
//     descripcion: "Mejora tus habilidades en el tenis con nuestros entrenadores.",
//     detalles: "Programas para niños y adultos, clínicas intensivas y torneos anuales.",
//   },
// };

// const ActividadDetalle = () => {
//   const { actividadId } = useParams();
//   const actividad = detallesActividades[actividadId];

//   if (!actividad) {
//     return (
//       <div className="actividad-detalle no-encontrada">
//         <h2>Actividad no encontrada</h2>
//         <p>Lo sentimos, no hemos podido encontrar la información de la actividad seleccionada.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="actividad-detalle moderno">
//       <div className="detalle-header">
//         <img src={actividad.img} alt={actividad.titulo} className="detalle-img" />
//         <div className="detalle-info">
//           <h1 className="detalle-titulo">{actividad.titulo}</h1>
//           <p className="detalle-descripcion">{actividad.descripcion}</p>
//         </div>
//       </div>
//       <div className="detalle-body">
//         <h2>Detalles</h2>
//         <p>{actividad.detalles}</p>
//       </div>
//     </div>
//   );
// };

// export default ActividadDetalle;


// import React from "react";
// import { useParams } from "react-router-dom";
// import futbolImg from "../../assets/imagenes/futbol.png.jpg";
// import voleyImg from "../../assets/imagenes/voley.png.jpg";
// import padelImg from "../../assets/imagenes/padel.png.jpg";
// import tenisImg from "../../assets/imagenes/tenis.png.jpg";
// import "./ActividadDetalle.css";

// const detallesActividades = {
//   futbol: {
//     img: futbolImg,
//     titulo: "Fútbol",
//     descripcion: "Disfruta del deporte rey con nuestras clases y torneos.",
//     detalles: "Contamos con entrenadores calificados, torneos mensuales y actividades recreativas para todas las edades.",
//     secciones: [
//       {
//         titulo: "Futsal",
//         descripcion: "Participa en emocionantes partidos de futsal en nuestras canchas techadas. Ideal para grupos de amigos y torneos rápidos.",
//       },
//       {
//         titulo: "Escuelita de Fútbol",
//         descripcion: "Dirigida a niños y niñas desde los 4 años, para aprender los fundamentos del fútbol mientras se divierten.",
//       },
//       {
//         titulo: "Fútbol 11",
//         descripcion: "Forma parte de equipos organizados y juega partidos en formato completo en nuestras canchas de césped.",
//       },
//       {
//         titulo: "Fútbol Competitivo",
//         descripcion: "Únete a ligas locales y participa en torneos representando al club con entrenadores especializados.",
//       },
//       {
//         titulo: "Fútbol Femenino",
//         descripcion: "Espacio exclusivo para mujeres que deseen aprender, entrenar y competir en fútbol.",
//       },
//     ],
//   },
//   voley: {
//     img: voleyImg,
//     titulo: "Vóley",
//     descripcion: "Participa en emocionantes partidos y entrenamientos de vóley.",
//     detalles: "Tenemos ligas mixtas, cursos para principiantes y equipos competitivos para torneos regionales.",
//   },
//   padel: {
//     img: padelImg,
//     titulo: "Pádel",
//     descripcion: "Disfruta del pádel en nuestras instalaciones modernas.",
//     detalles: "Alquiler de canchas, clases privadas y torneos cada fin de semana.",
//   },
//   tenis: {
//     img: tenisImg,
//     titulo: "Tenis",
//     descripcion: "Mejora tus habilidades en el tenis con nuestros entrenadores.",
//     detalles: "Programas para niños y adultos, clínicas intensivas y torneos anuales.",
//   },
// };

// const ActividadDetalle = () => {
//   const { actividadId } = useParams();
//   const actividad = detallesActividades[actividadId];

//   if (!actividad) {
//     return (
//       <div className="actividad-detalle no-encontrada">
//         <h2>Actividad no encontrada</h2>
//         <p>Lo sentimos, no hemos podido encontrar la información de la actividad seleccionada.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="actividad-detalle moderno">
//       <div className="detalle-header">
//         <img src={actividad.img} alt={actividad.titulo} className="detalle-img" />
//         <div className="detalle-info">
//           <h1 className="detalle-titulo">{actividad.titulo}</h1>
//           <p className="detalle-descripcion">{actividad.descripcion}</p>
//         </div>
//       </div>
//       <div className="detalle-body">
//         <h2>Detalles</h2>
//         <p>{actividad.detalles}</p>
//         {actividad.secciones && (
//           <div className="detalle-secciones">
//             {actividad.secciones.map((seccion, index) => (
//               <div key={index} className="seccion-card">
//                 <h3>{seccion.titulo}</h3>
//                 <p>{seccion.descripcion}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ActividadDetalle;



import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap"; // Importa el componente de carrusel de Bootstrap
import futbolImg from "../../assets/imagenes/futbol.png.jpg";
import voleyImg from "../../assets/imagenes/voley.png.jpg";
import padelImg from "../../assets/imagenes/padel.png.jpg";
import tenisImg from "../../assets/imagenes/tenis.png.jpg";

import "./ActividadDetalle.css";

const detallesActividades = {
  futbol: {
    // img: futbolImg,
    titulo: "Fútbol",
    descripcion: "Disfruta del deporte rey con nuestras clases y torneos.",
    detalles: "Contamos con entrenadores calificados, torneos mensuales y actividades recreativas para todas las edades.",
    secciones: [
      {
        titulo: "Futsal",
        descripcion: "Participa en emocionantes partidos de futsal en nuestras canchas techadas. Ideal para grupos de amigos y torneos rápidos.",
      },
      {
        titulo: "Escuelita de Fútbol",
        descripcion: "Dirigida a niños y niñas desde los 4 años, para aprender los fundamentos del fútbol mientras se divierten.",
      },
      {
        titulo: "Fútbol 11",
        descripcion: "Forma parte de equipos organizados y juega partidos en formato completo en nuestras canchas de césped.",
      },
      {
        titulo: "Fútbol Competitivo",
        descripcion: "Únete a ligas locales y participa en torneos representando al club con entrenadores especializados.",
      },
      {
        titulo: "Fútbol Femenino",
        descripcion: "Espacio exclusivo para mujeres que deseen aprender, entrenar y competir en fútbol.",
      },
    ],
    carrusel: [
      "../../assets/imagenes/futbol1.jpg",
      "../../assets/imagenes/futbol2.jpg",
      "../../assets/imagenes/futbol3.jpg",
    ], // Agrega las rutas de las imágenes que usarás
  },
  voley: {
    img: voleyImg,
    titulo: "Vóley",
    descripcion: "Participa en emocionantes partidos y entrenamientos de vóley.",
    detalles: "Tenemos ligas mixtas, cursos para principiantes y equipos competitivos para torneos regionales.",
  },
  padel: {
    img: padelImg,
    titulo: "Pádel",
    descripcion: "Disfruta del pádel en nuestras instalaciones modernas.",
    detalles: "Alquiler de canchas, clases privadas y torneos cada fin de semana.",
  },
  tenis: {
    img: tenisImg,
    titulo: "Tenis",
    descripcion: "Mejora tus habilidades en el tenis con nuestros entrenadores.",
    detalles: "Programas para niños y adultos, clínicas intensivas y torneos anuales.",
  },
};

const ActividadDetalle = () => {
  const { actividadId } = useParams();
  const actividad = detallesActividades[actividadId];

  if (!actividad) {
    return (
      <div className="actividad-detalle no-encontrada">
        <h2>Actividad no encontrada</h2>
        <p>Lo sentimos, no hemos podido encontrar la información de la actividad seleccionada.</p>
      </div>
    );
  }

  return (
    <div className="actividad-detalle moderno">
      <div className="detalle-header">
        <img src={actividad.img} alt={actividad.titulo} className="detalle-img" />
        <div className="detalle-info">
          <h1 className="detalle-titulo">{actividad.titulo}</h1>
          <p className="detalle-descripcion">{actividad.descripcion}</p>
        </div>
      </div>
      <div className="detalle-body">
        <h2>Detalles</h2>
        <p>{actividad.detalles}</p>

        {actividad.carrusel && (
          <div className="detalle-carrusel">
            <h2>Galería</h2>
            <Carousel>
              {actividad.carrusel.map((img, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={img} alt={`Slide ${index + 1}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}

        {actividad.secciones && (
          <div className="detalle-secciones">
            {actividad.secciones.map((seccion, index) => (
              <div key={index} className="seccion-card">
                <h3>{seccion.titulo}</h3>
                <p>{seccion.descripcion}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActividadDetalle;

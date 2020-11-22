import React from "react";
import Contenedor1 from "./Contenedor1/Contenedor1";
import Contenedor2 from "./Contenedor2/Contenedor2";
import Contenedor3 from "./Contenedor3/Contenedor3";
import imgGrafica from "./grafica.png";
import imgWork from "./work.JPG";
import ContenidosStyles from "./Contenido.module.scss";
//el path nuevo M 4 598 L 58 572 L 86 599 L 137 575 L 153 599 L 201 571 L 239 599 L 251 565 L 323 593 L 396 565 
//L 404 599 L 455 571 L 500 599 L 525 568 L 579 599 L 601 568 L 667 598 
//Old Path M 100 300 A 0 50 0 1 1 250 250 L 308 297 L 396 264 L 429 297 L 495 264 L 550 297 L 572 264 L 660 286

function Contenidos() {
    return (
      <div className={ContenidosStyles.contenidos}>
        <Contenedor1></Contenedor1>
        <Contenedor2 imgGrafica={imgGrafica}></Contenedor2>
        <Contenedor3 imgWork={imgWork}></Contenedor3>
      </div>
    );
  }
  
  export default Contenidos;
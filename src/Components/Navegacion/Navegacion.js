import React from "react";
import NavBotones from "./NavBotones/NavBotones";
import NavStyle from './Navegacion.module.scss';
import NavIcons from "./NavIcons/NavIcons";

function Navegacion() {
    return (
      <div className={NavStyle.onavegacion}>
        <NavIcons></NavIcons>
        <NavBotones></NavBotones>     
      </div>
    );
  }
  
  export default Navegacion;
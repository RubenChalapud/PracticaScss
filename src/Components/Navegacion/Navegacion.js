import React from "react";
import NavBotones from "./NavBotones/NavBotones";
import "./Navegacion.css"
import NavIcons from "./NavIcons/NavIcons";

function Navegacion() {
    return (
      <div className="o-navegacion">
        <NavIcons></NavIcons>
        <NavBotones></NavBotones>     
      </div>
    );
  }
  
  export default Navegacion;
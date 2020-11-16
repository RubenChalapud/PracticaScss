import React from "react";
import NavBoton from "./NavBoton/NavBoton";
import NavBotonMas from "./NavBotonMas/NavBotonMas";
import NavBotonSelected from "./NavBotonSelected/NavBotonSelected";

function NavBotones() {
    return (
    <div className="o-nav-botones">
        <NavBoton></NavBoton>
        <NavBotonSelected></NavBotonSelected>
        <NavBotonMas></NavBotonMas>
    </div>         
    );
  }
  
  export default NavBotones;
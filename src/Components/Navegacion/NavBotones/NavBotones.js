import React from "react";
import NavBoton from "./NavBoton/NavBoton";
import NavBotonMas from "./NavBotonMas/NavBotonMas";
import NavBotonSelected from "./NavBotonSelected/NavBotonSelected";
import NavBotonStyle from './NavBotones.module.scss';

function NavBotones() {
    return (
    <div className={NavBotonStyle.onavbotones}>
        <NavBoton text="▲"></NavBoton>
        <NavBotonSelected></NavBotonSelected>
        <NavBotonMas></NavBotonMas>
    </div>         
    );
  }
  
  export default NavBotones;
import React from "react";
import Opcion from "./Opcion/Opcion";
import OpcionSelected from "./OpcionSelected/OpcionSelected";

function Opciones() {
    return (
    <div className="o-perfil-nav-container">
        <OpcionSelected></OpcionSelected>
        <Opcion icon={"n"} text={"Clients"}></Opcion>
        <Opcion icon={"n"} text={"Invoices"}></Opcion>
        <Opcion icon={"n"} text={"Estimates"}></Opcion>
        <Opcion icon={"n"} text={"My team"}></Opcion>
      </div>
    );
  }
  
  export default Opciones;
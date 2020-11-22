import React from "react";
import Opciones from "./Opciones/Opciones";
import "./Perfil.css"
import imgPerfil from "./persona.png"
import Persona from "./Persona/Persona";
import Settings from "./Settings/Settings";
import PerfilStyles from "./Perfil.module.scss";

function Perfil() {
    return (
      <div className={PerfilStyles.operfil}>
        <Persona img={imgPerfil}></Persona>
        <Opciones></Opciones>
        <Settings></Settings>
      </div>
    );
  }
  
  export default Perfil;
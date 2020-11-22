import React from "react";
import Opciones from "./Opciones/Opciones";
import "./Perfil.css"
import imgPerfil from "./persona.png"
import Persona from "./Persona/Persona";
import Settings from "./Settings/Settings";
import PerfilStyles from "./Perfil.module.scss";
import SettingsLogo from "../../Svgs/settings.svg";
import Arrowlogo from "../../Svgs/arrow3.svg";

function Perfil() {
    return (
      <div className={PerfilStyles.operfil}>
        <Persona img={imgPerfil}></Persona>
        <Opciones></Opciones>
        <Settings svg ={SettingsLogo} svg2={Arrowlogo}></Settings>
      </div>
    );
  }
  
  export default Perfil;
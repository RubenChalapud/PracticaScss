import React from "react";
import PersonaStyles from "./Persona.module.scss";

function Persona({img}) {
    return (
    <div className={PersonaStyles.operfilcontainer}>
        <img src={img} className={PersonaStyles.oimgperfil} alt="Imagen de perfil"></img>
        <p className={PersonaStyles.owelcomeperfil}>Welcome back,</p>
        <p className={PersonaStyles.onameperfil}>Julie Bell</p>
    </div>
    );
  }
  
  export default Persona;
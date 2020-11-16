import React from "react";
import "./Perfil.css"
import imgPerfil from "./persona.png"

function Perfil() {
    return (
      <div className="o-perfil">
        <div className="o-perfil-container">
          <img src={imgPerfil} className="o-img-perfil" alt="Imagen de perfil"></img>
        </div>
        
      </div>
    );
  }
  
  export default Perfil;
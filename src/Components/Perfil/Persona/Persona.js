import React from "react";

function Persona({img}) {
    return (
    <div className="o-perfil-container">
        <img src={img} className="o-img-perfil" alt="Imagen de perfil"></img>
        <p className="o-welcome-perfil">Welcome back,</p>
        <p className="o-name-perfil">Julie Bell</p>
    </div>
    );
  }
  
  export default Persona;
import React from "react";
import "../PerfilButtons/PerfilButtons.css"

function PerfilButtons({textButton}) {
    return (
    <button className="o-buttonperfil">{textButton}</button>
    );
  }
  
  export default PerfilButtons;
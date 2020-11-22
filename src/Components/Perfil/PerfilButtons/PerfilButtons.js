import React from "react";
import "../PerfilButtons/PerfilButtons.css"
import PerfilButtonStyle from "./PerfilButtons.module.scss"

function PerfilButtons({textButton}) {
    return (
    <button className={PerfilButtonStyle.obuttonperfil}>{textButton}</button>
    );
  }
  
  export default PerfilButtons;
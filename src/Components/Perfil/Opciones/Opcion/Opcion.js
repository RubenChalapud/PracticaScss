import React from "react";
import OpcionStyle from "./Opcion.module.scss"

function Opcion({icon, text}) {
    return (
        <div className={OpcionStyle.ocontaineroption}>
            <img src={icon} className={OpcionStyle.oimg}></img>
            <p className={OpcionStyle.otext}>{text}</p>
        </div>
    );
  }
  
  export default Opcion;
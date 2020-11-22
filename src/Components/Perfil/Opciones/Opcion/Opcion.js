import React from "react";
import OpcionStyle from "./Opcion.module.scss"

function Opcion({icon, text}) {
    return (
        <div className={OpcionStyle.ocontaineroption}>
            <p>{icon}</p>
            <p>{text}</p>
        </div>
    );
  }
  
  export default Opcion;
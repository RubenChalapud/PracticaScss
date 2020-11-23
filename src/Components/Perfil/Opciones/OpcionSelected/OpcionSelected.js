import React from "react";
import OpcionSelectedStyle from "./OpcionSelected.module.scss"

function OpcionSelected({arrow,logodash}) {
    return (
    <div className={OpcionSelectedStyle.ocontaineroption}>
        <img src={arrow} className={OpcionSelectedStyle.oimg}></img>
        <img src={logodash} className={OpcionSelectedStyle.oimgrocket}></img>
        <p className={OpcionSelectedStyle.op}>Dashboard</p>
    </div>
    );
  }
  
  export default OpcionSelected;
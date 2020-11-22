import React from "react";
import OpcionSelectedStyle from "./OpcionSelected.module.scss"

function OpcionSelected() {
    return (
    <div className={OpcionSelectedStyle.ocontaineroption, OpcionSelectedStyle.ocontaineroptionselected}>
        <p>&gt;</p>
        <p>n</p>
        <p>Dashboard</p>
    </div>
    );
  }
  
  export default OpcionSelected;
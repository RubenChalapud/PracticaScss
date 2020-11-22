import React from "react";
import NavBotonStyle from './NavBotonSelect.module.scss';

function NavBotonSelected() {
    return (
        <div className={NavBotonStyle.onavcontainerbotonselect}>
            <svg width="4" height="30" className={NavBotonStyle.osvgboton}>
              <rect width="4" height="30" fill="#D1FFD5"/>
            </svg>
            <button className={NavBotonStyle.onavbotonselect}>∎</button>
        </div>   
    );
  }
  
  export default NavBotonSelected;
import React from "react";

function NavBotonSelected() {
    return (
        <div className="o-nav-container-boton-select">
            <svg width="4" height="30" className="o-svg-boton">
              <rect width="4" height="30" fill="#D1FFD5"/>
            </svg>
            <button className="o-nav-boton o-nav-boton-select">∎</button>
        </div>   
    );
  }
  
  export default NavBotonSelected;
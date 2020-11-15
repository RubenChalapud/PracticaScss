import React from "react";
import "./Navegacion.css"

function Navegacion() {
    return (
      <div className="o-navegacion">
        <svg width="60" height="20" className="o-nav-icons">
            <circle cx="5" cy="10" r="3" fill="#FFDD64" />
            <circle cx="25" cy="10" r="3" fill="#D1FFD5" />
            <circle cx="45" cy="10" r="3" fill="#FFFFFF" />
        </svg>
        <div className="o-nav-botones">
          <button className="o-nav-boton">▲</button>
          <div className="o-nav-container-boton-select">
            <svg width="4" height="30" className="o-svg-boton">
              <rect width="4" height="30" fill="#D1FFD5"/>
            </svg>
            <button className="o-nav-boton o-nav-boton-select">∎</button>
          </div>
          <button className="o-nav-boton o-nav-boton-mas">+</button>
        </div>       
      </div>
    );
  }
  
  export default Navegacion;
import React from "react";
import "./Navegacion.css"

function Navegacion() {
    return (
      <div className="o-navegacion">
        <div className="o-nav-icons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div className="o-nav-botones">
          <button>triangulo</button>
          <button>cuadrado</button>
        </div>       
      </div>
    );
  }
  
  export default Navegacion;
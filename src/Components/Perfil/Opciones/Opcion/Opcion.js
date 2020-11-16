import React from "react";

function Opcion({icon, text}) {
    return (
        <div className="o-container-option">
            <p>{icon}</p>
            <p>{text}</p>
        </div>
    );
  }
  
  export default Opcion;
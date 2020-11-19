import React from "react";

function Card({monto, fecha, logo, titulo}){
    return(
        <div className="o-card-expenses">
            <div>
                <h5>{monto}</h5>
                <p>l</p>
            </div>
            <p>{fecha}</p>
            <p>{logo}</p>
            <h3>{titulo}</h3>
            <svg viewBox="0 500 670 98">
                <path fill="white" fillOpacity= "1" d="M 4 598 L 58 572 L 86 599 L 137 575 L 153 599 L 201 571 L 239 599 L 251 565 L 323 593 L 396 565 L 404 599 L 455 571 L 500 599 L 525 568 L 579 599 L 601 568 L 667 598">
                </path>
            </svg>
        </div>
    );
}

export default Card;
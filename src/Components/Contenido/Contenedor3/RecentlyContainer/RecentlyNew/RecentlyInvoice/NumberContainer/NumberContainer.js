import React from "react";

function NumberContainer({number, title, date}){
    return(
          <div className="o-container-numbers">
            <div className="o-linea"></div>
            <div className="o-numbers-invoice">
                <p>{number}</p>
                <p>{title}</p>
                <p>{date}</p>
            </div>
          </div>
    );
}

export default NumberContainer;
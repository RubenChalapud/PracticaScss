import React from "react";
import NumberContainerStyles from "./NumberContainer.module.scss"

function NumberContainer({number, title, date}){
    return(
          <div className={NumberContainerStyles.ocontainernumbers}>
            <div className={NumberContainerStyles.olinea}></div>
            <div className={NumberContainerStyles.onumbersinvoice}>
                <p>{number}</p>
                <p>{title}</p>
                <p>{date}</p>
            </div>
          </div>
    );
}

export default NumberContainer;
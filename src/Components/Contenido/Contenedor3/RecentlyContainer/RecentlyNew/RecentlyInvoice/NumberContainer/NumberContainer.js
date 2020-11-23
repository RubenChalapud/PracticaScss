import React from "react";
import NumberContainerStyles from "./NumberContainer.module.scss"

function NumberContainer({number, title, date}){
    return(
          <div className={NumberContainerStyles.ocontainernumbers}>
            <div className={NumberContainerStyles.olinea}></div>
            <div className={NumberContainerStyles.onumbersinvoice}>
                <p className={NumberContainerStyles.op}>{number}</p>
                <p className={NumberContainerStyles.otitle}>{title}</p>
                <p className={NumberContainerStyles.op}>{date}</p>
            </div>
          </div>
    );
}

export default NumberContainer;
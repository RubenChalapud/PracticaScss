import React from "react";
import ProfitsTitleStyles from "./ProfitsTitle.module.scss"

function ProfitsTitle(){
    return(
        <div className={ProfitsTitleStyles.ocontainertitleprofits}>
              <h1>Total profit</h1>
              <p>September 2020</p>
              <p>L</p>
        </div>
    );
}

export default ProfitsTitle;
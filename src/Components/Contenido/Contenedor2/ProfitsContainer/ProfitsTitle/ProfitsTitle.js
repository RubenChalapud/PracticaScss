import React from "react";
import ProfitsTitleStyles from "./ProfitsTitle.module.scss"
import BarsCircle from "../../../../../Svgs/barsCircle.svg"

function ProfitsTitle(){
    return(
        <div className={ProfitsTitleStyles.ocontainertitleprofits}>
              <h1>Total profit</h1>
              <p>September 2020</p>
              <img src={BarsCircle} className={ProfitsTitleStyles.ologo}></img>
        </div>
    );
}

export default ProfitsTitle;
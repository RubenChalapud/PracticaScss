import React from "react";
import ProfitsGrafica from "./ProfitsGrafica/ProfitsGrafica";
import ProfitsTitle from "./ProfitsTitle/ProfitsTitle";
import ProfitContainerStyle from "./ProfitContainer.module.scss";

function ProfitsContainer({imgGrafica}){
    return(
        <div className={ProfitContainerStyle.ocontainerprofits}>
            <ProfitsTitle></ProfitsTitle>
            <ProfitsGrafica imgGrafica={imgGrafica}></ProfitsGrafica>
        </div>
    );
}

export default ProfitsContainer;
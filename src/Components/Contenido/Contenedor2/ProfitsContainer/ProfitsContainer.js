import React from "react";
import ProfitsGrafica from "./ProfitsGrafica/ProfitsGrafica";
import ProfitsTitle from "./ProfitsTitle/ProfitsTitle";

function ProfitsContainer({imgGrafica}){
    return(
        <div className="o-container-profits">
            <ProfitsTitle></ProfitsTitle>
            <ProfitsGrafica imgGrafica={imgGrafica}></ProfitsGrafica>
        </div>
    );
}

export default ProfitsContainer;
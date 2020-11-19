import React from "react";
import ExpensesContainer from "./ExpensesContainer/ExpensesContainer";
import ProfitsContainer from "./ProfitsContainer/ProfitsContainer";

function Contenedor2({imgGrafica}){
    return(
        <div className="o-container-second">
            <ProfitsContainer imgGrafica={imgGrafica}></ProfitsContainer>
            <ExpensesContainer></ExpensesContainer>
        </div>
    );
}

export default Contenedor2;
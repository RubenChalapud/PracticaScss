import React from "react";
import ExpensesContainer from "./ExpensesContainer/ExpensesContainer";
import ProfitsContainer from "./ProfitsContainer/ProfitsContainer";
import Contenedor2Styles from "./Contenedor2.module.scss";

function Contenedor2({imgGrafica}){
    return(
        <div className={Contenedor2Styles.ocontainersecond}>
            <ProfitsContainer imgGrafica={imgGrafica}></ProfitsContainer>
            <ExpensesContainer></ExpensesContainer>
        </div>
    );
}

export default Contenedor2;
import React from "react";
import ProfitsGraficaStyles from "./ProfitsGrafica.module.scss";

function ProfitsGrafica({imgGrafica}){
    return(
        <img className={ProfitsGraficaStyles.oimggrafica} src={imgGrafica} alt="Imagen de grafica"></img>
    );
}

export default ProfitsGrafica;
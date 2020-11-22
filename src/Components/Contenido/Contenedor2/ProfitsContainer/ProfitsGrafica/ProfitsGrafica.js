import React from "react";
import ProfitsGraficaStyles from "./ProfitsGrafica.modules.scss"

function ProfitsGrafica({imgGrafica}){
    return(
        <img src={imgGrafica} className={ProfitsGraficaStyles.oimggrafica} alt="Imagen de grafica"></img>
    );
}

export default ProfitsGrafica;
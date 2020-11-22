import React from "react";
import ImgWork from "./ImgWork/ImgWork";
import RecentlyContainer from "./RecentlyContainer/RecentlyContainer";
import Contenedor3Style from "./Contenedor3.module.scss"

function Contenedor3({imgWork}){
    return(
        <div className={Contenedor3Style.ocontainerthird}>
            <RecentlyContainer></RecentlyContainer>
            <ImgWork imgWork={imgWork}></ImgWork>
        </div>
    );
}

export default Contenedor3;
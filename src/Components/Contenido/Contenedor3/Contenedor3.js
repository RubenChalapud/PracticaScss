import React from "react";
import ImgWork from "./ImgWork/ImgWork";
import RecentlyContainer from "./RecentlyContainer/RecentlyContainer";

function Contenedor3({imgWork}){
    return(
        <div className="o-container-third">
            <RecentlyContainer></RecentlyContainer>
            <ImgWork imgWork={imgWork}></ImgWork>
        </div>
    );
}

export default Contenedor3;
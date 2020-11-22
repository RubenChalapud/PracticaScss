import React from "react";
import ImgWorkStyle from "./ImgWork.module.scss"

function ImgWork({imgWork}){
    return(
        <img src={imgWork} className={ImgWorkStyle.oimgwork} alt="Imagen de Work"></img>
    );
}

export default ImgWork;
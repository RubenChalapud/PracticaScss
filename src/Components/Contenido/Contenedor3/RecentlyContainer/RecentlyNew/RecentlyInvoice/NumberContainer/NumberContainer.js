import React from "react";
import NumberContainerStyles from "./NumberContainer.module.scss";
import ColorUnoStyles from "./ColorUno.module.scss";
import ColorDosStyles from "./ColorDos.module.scss";

const StyleBarra = {
  ColorUno: ColorUnoStyles.ocolor,
  ColorDos: ColorDosStyles.ocolor
};

function NumberContainer({color, number, title, date}){
    return(
          <div className={NumberContainerStyles.ocontainernumbers}>
            <div className={StyleBarra[color]}></div>
            <div className={NumberContainerStyles.onumbersinvoice}>
                <p className={NumberContainerStyles.op}>{number}</p>
                <p className={NumberContainerStyles.otitle}>{title}</p>
                <p className={NumberContainerStyles.op}>{date}</p>
            </div>
          </div>
    );
}

export default NumberContainer;
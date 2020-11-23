import React from "react";
import CardStyle from './Card.module.scss';
import Cardpurple from './Cardpurple.module.scss';
import Cardgreen from './Cardgreen.module.scss';
import Clip from "../../../../../../Svgs/clip.svg";

const StylesMap = {
    purple: Cardpurple.ocardexpenses,
    green: Cardgreen.ocardexpenses,
    blue: CardStyle.ocardexpenses,
};

const Styleslogo= {
    normal: CardStyle.ologo,
    manzana: CardStyle.olomanzana,
};

function Card({monto, fecha, logo, titulo,color,slogo}){
    return(
        <div className={StylesMap[color]}>
            <div className={CardStyle.ocardclipcontainer}>
                <h5 className={CardStyle.ocardmonto}>{monto}</h5>
                <img src={Clip} className={CardStyle.oclip}></img>
            </div>
            <p className={CardStyle.ocardfecha}>{fecha}</p>
            <img src={logo} className={Styleslogo[slogo]}></img>
            <h3 className={CardStyle.ocardtitulo}>{titulo}</h3>
            <svg viewBox="0 500 670 98">
                <path fill="white" fillOpacity= "1" d="M 4 598 L 58 572 L 86 599 L 137 575 L 153 599 L 201 571 L 239 599 L 251 565 L 323 593 L 396 565 L 404 599 L 455 571 L 500 599 L 525 568 L 579 599 L 601 568 L 667 598">
                </path>
            </svg>
        </div>
    );
}

export default Card;
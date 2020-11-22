import React from "react";
import Opcion from "./Opcion/Opcion";
import OpcionSelected from "./OpcionSelected/OpcionSelected";
import OpcionesStyles from "./Opciones.module.scss";
import Arrow2 from "../../../Svgs/arrow2.svg";
import Rocket from "../../../Svgs/rocket.svg";
import Client from "../../../Svgs/client.svg";
import Invoices from "../../../Svgs/invoices.svg";
import Estimates from "../../../Svgs/estimates.svg";
import Myteam from "../../../Svgs/team.svg";

function Opciones() {
    return (
    <div className={OpcionesStyles.operfilnavcontainer}>
        <OpcionSelected arrow ={Arrow2} logodash={Rocket}></OpcionSelected>
        <Opcion icon={Client} text={"Clients"}></Opcion>
        <Opcion icon={Invoices} text={"Invoices"}></Opcion>
        <Opcion icon={Estimates} text={"Estimates"}></Opcion>
        <Opcion icon={Myteam} text={"My team"}></Opcion>
      </div>
    );
  }
  
  export default Opciones;
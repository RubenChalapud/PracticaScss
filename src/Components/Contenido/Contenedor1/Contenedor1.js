import React from "react";
import Invoices from "./Invoices/Invoices";
import OutstandingContenedor from "./OutstandingContenedor/OutstandingContenedor";
import SearchIcon from "./SearchIcon/SearchIcon";
import Contenedor1Style from './Contenedor1.module.scss';

function Contenedor1() {
    return (
        <div className={Contenedor1Style.ocontainerfirst}>
            <Invoices></Invoices>
            <OutstandingContenedor></OutstandingContenedor>
            <SearchIcon></SearchIcon>
        </div>
    );
}
export default Contenedor1;
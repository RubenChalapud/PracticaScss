import React from "react";
import Invoices from "./Invoices/Invoices";
import OutstandingContenedor from "./OutstandingContenedor/OutstandingContenedor";
import SearchIcon from "./SearchIcon/SearchIcon";


function Contenedor1() {
    return (
        <div className="o-container-first">
            <Invoices></Invoices>
            <OutstandingContenedor></OutstandingContenedor>
            <SearchIcon></SearchIcon>
        </div>
    );
}
export default Contenedor1;
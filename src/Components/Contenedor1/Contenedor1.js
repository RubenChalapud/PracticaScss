import React from "react";
import "./Contenidos.css"
import Invoices from "/Invoices/Invoices.js"
function Contenedor1() {
    return (
        <div>
            <div className="o-container-first">
                <Invoices></Invoices>
                <div className="o-container-outstanding-title">
                    <h4 className="o-title-outstanding">Outstanding revenue</h4>
                    <div className="o-outstanding-container-bar">
                        <button></button>
                        <h5>$21.3k</h5>
                    </div>
                    <p>$12.095 overdue</p>
                </div>
                <div className="o-container-search-icon">
                    <p>L</p>
                </div>
            </div>
        </div>

    );
}
export default Contenedor1;
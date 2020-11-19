import React from "react";
import "./Contenidos.css"
import InvoicesTitle from "/Invoices-Title/InvoicesTitle.js"
import InvoicesContainer from "/InvoicesContainer/InvoicesContainer.js"

function Invoices() {
    return (
                <div className="o-container-invoices-title">
                    <InvoicesTitle></InvoicesTitle>
                    <InvoicesContainer></InvoicesContainer>
                </div>
    );
}
export default Invoices;
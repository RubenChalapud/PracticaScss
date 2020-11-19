import React from "react";
import InvoicesTitle from "./Invoices-Title/Inovices-Title";
import InvoicesContainer from "./InvoicesContainers/InvoicesContainer";

function Invoices() {
    return (
        <div className="o-container-invoices-title">
            <InvoicesTitle></InvoicesTitle>
            <InvoicesContainer></InvoicesContainer>
        </div>
    );
}
export default Invoices;
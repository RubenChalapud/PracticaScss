import React from "react";
import InvoicesTitle from "./Invoices-Title/Inovices-Title";
import InvoicesContainer from "./InvoicesContainers/InvoicesContainer";
import InvoicesStyle from './Invoices.module.scss';
function Invoices() {
    return (
        <div className={InvoicesStyle.ocontainerinvoicestitle}>
            <InvoicesTitle></InvoicesTitle>
            <InvoicesContainer></InvoicesContainer>
        </div>
    );
}
export default Invoices;
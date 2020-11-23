import React from "react";
import InvoicesContainerStyle from './InvoicesContainer.module.scss';

function OInvoices(props){
    return(
    <div className={InvoicesContainerStyle.oinvoice}>
        <h5 className={InvoicesContainerStyle.oinvoiceValor}>{props.valor}</h5>
        <p className={InvoicesContainerStyle.oinvoiceTitle}>{props.name}</p>
    </div>
    );
}

function InvoicesContainer() {
    return (
        <div className={InvoicesContainerStyle.ocontainerinvoices}>
            <OInvoices valor="$12,095" name="Overdue"></OInvoices>
            <OInvoices valor="$33,363" name="Total outstanding"></OInvoices>
            <OInvoices valor="$4,500" name="In draft"></OInvoices>
        </div>
    );
}
export default InvoicesContainer;

import React from "react";
import InvoicesContainerStyle from './InvoicesContainer.module.scss';
function OInvoices(props){
    return(
    <div className={InvoicesContainerStyle.oinvoice}>
        <h5>{props.valor}</h5>
        <p>{props.name}</p>
    </div>
    );
}

function InvoicesContainer() {
    return (
        <div className={InvoicesContainerStyle.ocontainerinvoices}>
            <OInvoices valor="$12.095" name="Overdue"></OInvoices>
            <OInvoices valor="$33.363" name="Total outstanding"></OInvoices>
            <OInvoices valor="$4.500" name="In draft"></OInvoices>
        </div>
    );
}
export default InvoicesContainer;

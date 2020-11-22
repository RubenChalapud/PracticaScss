import React from "react";
import TotalInvoiceStyle from "./TotalInvoice.module.scss"

function TotalInvoice({totalTitle, total}){
    return(
          <div className={TotalInvoiceStyle.ototalinvoice}>
            <p>{totalTitle}</p>
            <p>{total}</p>
          </div>
    );
}

export default TotalInvoice;
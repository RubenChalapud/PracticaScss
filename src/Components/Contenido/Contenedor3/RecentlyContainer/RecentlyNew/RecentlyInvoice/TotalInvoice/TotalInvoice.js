import React from "react";
import TotalInvoiceStyle from "./TotalInvoice.module.scss"

function TotalInvoice({totalTitle, total}){
    return(
          <div className={TotalInvoiceStyle.ototalinvoice}>
            <p className={TotalInvoiceStyle.otitle}>{totalTitle}</p>
            <p className={TotalInvoiceStyle.op}>{total}</p>
          </div>
    );
}

export default TotalInvoice;
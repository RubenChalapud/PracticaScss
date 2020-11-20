import React from "react";

function TotalInvoice({totalTitle, total}){
    return(
          <div className="o-total-invoice">
            <p>{totalTitle}</p>
            <p>{total}</p>
          </div>
    );
}

export default TotalInvoice;
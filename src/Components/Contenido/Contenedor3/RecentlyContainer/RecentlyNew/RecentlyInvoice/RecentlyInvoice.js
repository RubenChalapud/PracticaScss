import React from "react";
import NumberContainer from "./NumberContainer/NumberContainer";
import TotalInvoice from "./TotalInvoice/TotalInvoice";

function RecentlyInvoice({number, title, date, totalTitle, total}){
    return(
        <div className="o-recenly-invoice">
            <NumberContainer number={number} title={title} date={date}></NumberContainer>
            <div className="o-separador"></div>
            <TotalInvoice totalTitle={totalTitle} total={total}></TotalInvoice>
        </div>
    );
}

export default RecentlyInvoice;
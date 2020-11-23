import React from "react";
import NumberContainer from "./NumberContainer/NumberContainer";
import TotalInvoice from "./TotalInvoice/TotalInvoice";
import RecentlyInvoiceStyle from "./RecentlyInvoice.module.scss"

function RecentlyInvoice({color, number, title, date, totalTitle, total}){
    return(
        <div className={RecentlyInvoiceStyle.orecenlyinvoice}>
            <NumberContainer color={color} number={number} title={title} date={date}></NumberContainer>
            <div className={RecentlyInvoiceStyle.oseparador}></div>
            <TotalInvoice totalTitle={totalTitle} total={total}></TotalInvoice>
        </div>
    );
}

export default RecentlyInvoice;
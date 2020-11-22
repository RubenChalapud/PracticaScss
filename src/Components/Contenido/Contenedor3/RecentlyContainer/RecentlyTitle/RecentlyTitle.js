import React from "react";
import RecentlyTitleStyle from "./RecentlyTitle.module.scss"

function RecentlyTitle(){
    return(
        <div className={RecentlyTitleStyle.ocontainerrecenlytitle}>
            <h1>Invoices</h1>
            <p>recently created</p>
            <div className={RecentlyTitleStyle.orecentlylogos}>
                <p>L</p>
                <p>L</p>
            </div>
        </div>
    );
}

export default RecentlyTitle;
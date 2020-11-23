import React from "react";
import RecentlyTitleStyle from "./RecentlyTitle.module.scss";
import Arrow from "../../../../../Svgs/arrow.svg";
import BarsCircle from "../../../../../Svgs/barsCircle.svg"

function RecentlyTitle(){
    return(
        <div className={RecentlyTitleStyle.ocontainerrecenlytitle}>
            <h1 className={RecentlyTitleStyle.otitle}>Invoices</h1>
            <p className={RecentlyTitleStyle.op}>recently created</p>
            <div className={RecentlyTitleStyle.orecentlylogos}>
                <img src={BarsCircle} className={RecentlyTitleStyle.ologo}></img>
                <img src={Arrow} className={RecentlyTitleStyle.ologo}></img>
            </div>
        </div>
    );
}

export default RecentlyTitle;
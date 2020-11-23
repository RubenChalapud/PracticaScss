import React from "react";
import RecentlyInvoice from "./RecentlyInvoice/RecentlyInvoice";
import UploadRecently from "./UploadRecently/UploadRecently";
import RecentlyNewStyle from "./RecentlyNew.module.scss"

function RecentlyNew(){
    return(
        <div className={RecentlyNewStyle.ocontainernewrecenly}>
            <UploadRecently></UploadRecently>
            <RecentlyInvoice color={"ColorUno"} number={"#00106"} title={"Mindtickle"} date={"2 Sep, 2020"} totalTitle={"Viewed"} total={"$3,500"}></RecentlyInvoice>
            <RecentlyInvoice color={"ColorDos"} number={"#00105"} title={"Cleancloud"} date={"1 Sep, 2020"} totalTitle={"Sent"} total={"$2,000"}></RecentlyInvoice>
      </div>

    );
}

export default RecentlyNew;
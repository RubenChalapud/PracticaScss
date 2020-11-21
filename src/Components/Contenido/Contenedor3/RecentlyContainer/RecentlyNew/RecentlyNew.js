import React from "react";
import RecentlyInvoice from "./RecentlyInvoice/RecentlyInvoice";
import UploadRecently from "./UploadRecently/UploadRecently";

function RecentlyNew(){
    return(
        <div className="o-container-new-recenly">
            <UploadRecently></UploadRecently>
            <RecentlyInvoice number={"#00106"} title={"Mindtickle"} date={"2 Sep, 2020"} totalTitle={"Viewed"} total={"$3,500"}></RecentlyInvoice>
            <RecentlyInvoice number={"#00105"} title={"Cleancloud"} date={"1 Sep, 2020"} totalTitle={"Sent"} total={"$2,000"}></RecentlyInvoice>
      </div>

    );
}

export default RecentlyNew;
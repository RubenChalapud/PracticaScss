import React from "react";
import RecentlyNew from "./RecentlyNew/RecentlyNew";
import RecentlyTitle from "./RecentlyTitle/RecentlyTitle";
import RecentlyContainerStyle from "./RecentlyContainer.module.scss"

function RecentlyContainer(){
    return(
        <div className={RecentlyContainerStyle.ocontainerrecenly}>
            <RecentlyTitle></RecentlyTitle>
            <RecentlyNew></RecentlyNew>
          </div>
    );
}

export default RecentlyContainer;
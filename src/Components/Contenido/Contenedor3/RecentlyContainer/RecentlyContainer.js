import React from "react";
import RecentlyNew from "./RecentlyNew/RecentlyNew";
import RecentlyTitle from "./RecentlyTitle/RecentlyTitle";

function RecentlyContainer(){
    return(
        <div className="o-container-recenly">
            <RecentlyTitle></RecentlyTitle>
            <RecentlyNew></RecentlyNew>
          </div>
    );
}

export default RecentlyContainer;
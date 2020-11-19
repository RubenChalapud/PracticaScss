import React from "react";
import OutstandingBar from "./OutstandingBar/OutstandingBar";
import OutstandingOverdue from "./OutstandingOverdue/OutstandingOverdue";
import OutstandingTitle from "./OutstandingTitle/OutstandingTitle";

function OutstandingContenedor() {
    return (
            <div className="o-container-outstanding-title">
                <OutstandingTitle></OutstandingTitle>
                <OutstandingBar></OutstandingBar>
                <OutstandingOverdue></OutstandingOverdue>
            </div>
    );
}
export default OutstandingContenedor;
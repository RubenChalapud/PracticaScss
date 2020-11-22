import React from "react";
import OutstandingBar from "./OutstandingBar/OutstandingBar";
import OutstandingOverdue from "./OutstandingOverdue/OutstandingOverdue";
import OutstandingTitle from "./OutstandingTitle/OutstandingTitle";
import OutstandingContedorStyle from './OutstandingContenedor.module.scss';
function OutstandingContenedor() {
    return (
            <div className={OutstandingContedorStyle.ocontaineroutstandingtitle}>
                <OutstandingTitle></OutstandingTitle>
                <OutstandingBar></OutstandingBar>
                <OutstandingOverdue></OutstandingOverdue>
            </div>
    );
}
export default OutstandingContenedor;
import React from "react";
import OutStandingBarStyle from './OutstandingBar.module.scss';
function OutstandingBar() {
    return (
            <div className={OutStandingBarStyle.ooutstandingcontainerbar}>
                <div className={OutStandingBarStyle.outbarracontainer}>
                    <div className={OutStandingBarStyle.outbarranegra}></div>
                    <div className={OutStandingBarStyle.outbarragris}></div>
                </div>

                <h5>$21.3k</h5>
            </div>
    );
}
export default OutstandingBar;
import React from "react";
import UploadRecentlyStyle from "./UploadRecently.module.scss"

function UploadRecently(){
    return(
        <div className={UploadRecentlyStyle.orecenlyinvoice}>
          <div className={UploadRecentlyStyle.ouploadbox}>
            <p>L</p>
            <p>Upload invoice</p>
          </div>
        </div>
    );
}

export default UploadRecently;
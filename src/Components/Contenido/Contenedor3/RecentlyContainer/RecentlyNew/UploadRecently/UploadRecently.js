import React from "react";
import UploadRecentlyStyle from "./UploadRecently.module.scss"
import LogoUpload from "../../../../../../Svgs/cloud.svg"

function UploadRecently(){
    return(
        <div className={UploadRecentlyStyle.orecenlyinvoice}>
          <div className={UploadRecentlyStyle.ouploadbox}>
            <img src={LogoUpload} className={UploadRecentlyStyle.ologo}></img>
            <p>Upload invoice</p>
          </div>
        </div>
    );
}

export default UploadRecently;
import React from "react";
import SettingsStyles from "./Settings.module.scss"

function Settings({svg,svg2}) {
    return (
    <div className={SettingsStyles.operfilsettingscontainer}>
        <img className={SettingsStyles.ologo} src={svg}></img>
        <p>Settings</p>
        <img className={SettingsStyles.ologo2} src={svg2}></img>
    </div>
    );
  }
  
  export default Settings;
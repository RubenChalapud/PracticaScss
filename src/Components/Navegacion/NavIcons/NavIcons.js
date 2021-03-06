import React from "react";
import NavBotonStyle from './NavIcons.module.scss';
function NavIcons() {
    return (
        <svg width="60" height="20" className={NavBotonStyle.onavicons}>
            <circle cx="5" cy="10" r="3" fill="#FFDD64" />
            <circle cx="25" cy="10" r="3" fill="#D1FFD5" />
            <circle cx="45" cy="10" r="3" fill="#FFFFFF" />
        </svg>
    );
  }
  
  export default NavIcons;
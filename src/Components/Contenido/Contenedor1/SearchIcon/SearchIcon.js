import React from "react";
import SearchIconStyle from './SearchIcon.module.scss';
import Icon from "../../../../Svgs/search.svg"; 

function SearchIcon() {
    return (
        <div className={SearchIconStyle.ocontainersearchicon}>
            <img src={Icon} className={SearchIconStyle.osearchicon}></img>
        </div>
    );
}
export default SearchIcon;
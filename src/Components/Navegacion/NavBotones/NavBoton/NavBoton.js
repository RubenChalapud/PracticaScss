import React from "react";
import NavBotonStyle from './NavBoton.module.scss';

function NavBoton({text}) {
    return (
    <button className={NavBotonStyle.NavBotonStyle}>{text}</button>       
    );
  }
  
  export default NavBoton;
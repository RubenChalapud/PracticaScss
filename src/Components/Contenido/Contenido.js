import React from "react";
import Contenedor1 from "./Contenedor1/Contenedor1";
import Contenedor2 from "./Contenedor2/Contenedor2";
import "./Contenidos.css"
import imgGrafica from "./grafica.png"
import imgWork from "./work.JPG"
//el path nuevo M 4 598 L 58 572 L 86 599 L 137 575 L 153 599 L 201 571 L 239 599 L 251 565 L 323 593 L 396 565 
//L 404 599 L 455 571 L 500 599 L 525 568 L 579 599 L 601 568 L 667 598 
//Old Path M 100 300 A 0 50 0 1 1 250 250 L 308 297 L 396 264 L 429 297 L 495 264 L 550 297 L 572 264 L 660 286

function Contenidos() {
    return (
      <div className="o-contenidos">
        <Contenedor1></Contenedor1>
        <Contenedor2 imgGrafica={imgGrafica}></Contenedor2>

        <div className="o-container-third">
          <div className="o-container-recenly">
            <div className="o-container-recenly-title">
              <h1>Invoices</h1>
              <p>recently created</p>
              <div className="o-recently-logos">
                <p>L</p>
                <p>L</p>
              </div>
            </div>
            <div className="o-container-new-recenly">
              <div className="o-recenly-invoice">
                <div className="o-upload-box">
                  <p>L</p>
                  <p>Upload invoice</p>
                </div>
              </div>
              <div className="o-recenly-invoice">
                <div className="o-container-numbers">
                  <div className="o-linea"></div>
                  <div className="o-numbers-invoice">
                    <p>#00106</p>
                    <p>Mindtickle</p>
                    <p>2 Sep, 2020</p>
                  </div>
                </div>
                <div className="o-separador">
                </div>
                <div className="o-total-invoice">
                  <p>Viewed</p>
                  <p>$3,500</p>
                </div>
              </div>
              <div className="o-recenly-invoice">
              <div className="o-container-numbers">
                  <div className="o-linea"></div>
                  <div className="o-numbers-invoice">
                    <p>#00105</p>
                    <p>Cleancloud</p>
                    <p>1 Sep, 2020</p>
                  </div>
                </div>
                <div className="o-separador">
                </div>
                <div className="o-total-invoice">
                  <p>Sent</p>
                  <p>$2,000</p>
                </div>
              </div>
            </div>
          </div>
          <img src={imgWork} className="o-img-work" alt="Imagen de Work"></img>
        </div>
        
      </div>
    );
  }
  
  export default Contenidos;
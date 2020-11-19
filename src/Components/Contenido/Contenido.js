import React from "react";
import "./Contenidos.css"
import imgGrafica from "./grafica.png"
import imgWork from "./work.JPG"

function Contenidos() {
    return (
      <div className="o-contenidos">

        <div className="o-container-first">
          <div className="o-container-invoices-title">
            <h4 className="o-title-invoices">Invoices</h4>
            <div className="o-container-invoices">
              <div className="o-invoice">
                <h5>$12.095</h5>
                <p>Overdue</p>
              </div>
              <div className="o-invoice">
                <h5>$33.363</h5>
                <p>Total outstanding</p>
              </div>
              <div className="o-invoice">
                <h5>$4.500</h5>
                <p>In draft</p>
              </div>
            </div>
          </div>
          <div className="o-container-outstanding-title">
            <h4 className="o-title-outstanding">Outstanding revenue</h4>
            <div className="o-outstanding-container-bar">
              <button></button>
              <h5>$21.3k</h5>
            </div>
            <p>$12.095 overdue</p>
          </div>
          <div className="o-container-search-icon">
            <p>L</p>
          </div>
        </div>
        
        <div className="o-container-second">
          <div className="o-container-profits">
            <div className="o-container-title-profits">
              <h1>Total profit</h1>
              <p>September 2020</p>
              <p>L</p>
            </div>
            <img src={imgGrafica} className="o-img-grafica" alt="Imagen de grafica"></img>
          </div>
          <div className="o-container-expenses">
            <div className="o-container-title-expenses">
              <h1>Expenses</h1>
              <p>L</p>
            </div>
            <div className="o-container-cards-expenses">
              <div className="o-card-expenses">
                <div>
                  <h5>$20.oo</h5>
                  <p>l</p>
                </div>
                <p>23 Sep, 2020</p>
                <p>L</p>
                <h3>Software</h3>
              </div>
              <div className="o-card-expenses">
                <div>
                  <h5>$30.oo</h5>
                  <p>l</p>
                </div>
                <p>26 Sep, 2020</p>
                <p>L</p>
                <h3>Management</h3>
                <svg viewBox="0 0 1440 320"><path fill="black" fillOpacity= "1" d="M 100 300 A 0 50 0 1 1 250 250 L 308 297 L 396 264 L 429 297 L 495 264 L 550 297 L 572 264 L 660 286">
                </path>
                </svg>
              </div>
              <div className="o-card-expenses">
                <div>
                  <h5>$60.oo</h5>
                  <p>l</p>
                </div>
                <p>22 Sep, 2020</p>
                <p>L</p>
                <h3>Support</h3>
              </div>
            </div>

          </div>
        </div>

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
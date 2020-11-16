import React from "react";
import "./Contenidos.css"

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
        
        
      </div>
    );
  }
  
  export default Contenidos;
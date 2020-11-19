import React from "react";
import ExpensesCards from "./ExpensesCards/ExpensesCards";
import ExpensesTitle from "./ExpensesTitle/ExpensesTitle";

function ExpensesContainer(){
    return(
        <div className="o-container-expenses">
            <ExpensesTitle></ExpensesTitle>
            <ExpensesCards></ExpensesCards>       
        </div>
    );
}

export default ExpensesContainer;
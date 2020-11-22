import React from "react";
import ExpensesCards from "./ExpensesCards/ExpensesCards";
import ExpensesTitle from "./ExpensesTitle/ExpensesTitle";
import ExpensesContainerStyle from './ExpensesContainer.module.scss';

function ExpensesContainer(){
    return(
        <div className={ExpensesContainerStyle.ocontainerexpenses}>
            <ExpensesTitle></ExpensesTitle>
            <ExpensesCards></ExpensesCards>       
        </div>
    );
}

export default ExpensesContainer;
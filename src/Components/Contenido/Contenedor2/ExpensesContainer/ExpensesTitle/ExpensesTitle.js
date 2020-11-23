import React from "react";
import ExpensesTitleStyle from './ExpensesTitle.module.scss';
import Arrow from "../../../../../Svgs/arrow.svg";

function ExpensesTitle() {
    return(
        <div className={ExpensesTitleStyle.ocontainertitleexpenses}>
              <h1 className={ExpensesTitleStyle.otitleexpenses}>Expenses</h1>
              <img src={Arrow} className={ExpensesTitleStyle.ologo}></img>
        </div>
    );
}

export default ExpensesTitle;
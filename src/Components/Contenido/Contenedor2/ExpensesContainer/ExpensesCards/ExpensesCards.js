import React from "react";
import Card from "./Card/Card";
import ExpensesCardStyles from './ExpensesCard.module.scss';

function ExpensesCards(){
    return(
        <div className={ExpensesCardStyles.ocontainercardsexpenses}>
            <Card monto={"$20.oo"} fecha={"23 Sep, 2020"} logo={"L"} titulo={"Software"}></Card>
            <Card monto={"$30.oo"} fecha={"26 Sep, 2020"} logo={"L"} titulo={"Management"}></Card>
            <Card monto={"$60.oo"} fecha={"22 Sep, 2020"} logo={"L"} titulo={"Support"}></Card>
        </div>
    );
}

export default ExpensesCards;
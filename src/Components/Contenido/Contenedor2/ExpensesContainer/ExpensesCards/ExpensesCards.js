import React from "react";
import Card from "./Card/Card";
import ExpensesCardStyles from './ExpensesCard.module.scss';
import Apple from "../../../../../Svgs/apple.svg";
import atlassian from "../../../../../Svgs/atlassian.svg";
import client from "../../../../../Svgs/more.svg" 

function ExpensesCards(){
    return(
        <div className={ExpensesCardStyles.ocontainercardsexpenses}>
            <Card monto={"$20.oo"} fecha={"23 Sep, 2020"} logo={atlassian} titulo={"Software"}></Card>
            <Card monto={"$30.oo"} fecha={"26 Sep, 2020"} logo={client} titulo={"Management"}></Card>
            <Card monto={"$60.oo"} fecha={"22 Sep, 2020"} logo={Apple} titulo={"Support"}></Card>
        </div>
    );
}

export default ExpensesCards;
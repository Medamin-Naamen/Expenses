import "./ExpensesList.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-List__fallback"> Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-List">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

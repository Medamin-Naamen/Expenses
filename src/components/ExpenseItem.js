import "./ExpenseItem.css";
import "./ExpenseDate.css";
import Card from "./Card";
import "./Card.css";
import Expensedate from "./ExpenseDate";
import React from "react";

const ExpenseItem = (props) => {
  /*const [title, setTitle] = useState(props.title);

  const click = () => {
    setTitle("Updated!");
    console.log(title);
  };*/

  return (
    <li>
      <Card className="expense-item">
        <Expensedate date={props.date} />
        <div className="expense-item_description">
          <h2>{props.title}</h2>
          <div className="expense-item_price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

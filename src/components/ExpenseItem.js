import "./ExpenseItem.css";

function ExpenseItem(props) {
  //   const date = new Date(2022, 11, 1).toLocaleDateString();
  //   const title = "Car Insurance";
  //   const amount = 295;

  return (
    <div className="expense-item">
      <div>{props.date.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

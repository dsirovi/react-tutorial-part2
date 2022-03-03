import React, {useState} from "react";

import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);

  }

  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesList items={filteredYear}/>
      </Card>
    </div>
  );
}

export default Expenses;
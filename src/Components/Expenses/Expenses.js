import React, { useState } from 'react';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  

  console.log('selectedYear', filteredYear)
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filterExpenses}/>
        <ExpensesList  items={filterExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
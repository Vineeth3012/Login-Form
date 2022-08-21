import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);

    console.log('new expenses', expenseData)
  };

  const startExpenses = () => {
    setAddExpenses(true)
  }


  const stopExpenses = () => {
    setAddExpenses(false)
  }


  const [addExpenses, setAddExpenses] = useState(false)

  return (
    <div className='new-expense'>

      {!addExpenses && (<button onClick={startExpenses}>Add Expense</button>)}
      {addExpenses && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopExpenses} />)}
    </div>
  );
};

export default NewExpense;
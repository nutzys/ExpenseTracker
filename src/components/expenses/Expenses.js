import React, { useContext } from 'react'
import Expense from './Expense'
import expenseContext from '../store/expenseContext'

const Expenses = () => {

  const ctx = useContext(expenseContext);
  return (
    <div>
      <h1>Expenses</h1>
      {ctx.expenses.map(item => (<Expense key={item.id} id={item.id} name={item.name} price={item.price}/>))}
    </div>
  )
}

export default Expenses

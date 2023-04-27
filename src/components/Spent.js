import React, { useContext } from 'react'
import expenseContext from './store/expenseContext'

const Spent = () => {
  const ctx = useContext(expenseContext);
  return (
    <div className='spent'>
      <p style={{ color: '#c92a2a' }}>Spent: ${ctx.spent}</p>
    </div>
  )
}

export default Spent

import React, { useContext } from 'react'
import expenseContext from './store/expenseContext'

const Remaining = () => {
  const ctx = useContext(expenseContext);
  return (
    <div className='remaining'>
      <p>Remaining: ${ctx.remaining}</p>
    </div>
  )
}

export default Remaining

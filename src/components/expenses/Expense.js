import React, { useContext } from 'react'
import { RxCross1 } from 'react-icons/rx';
import expenseContext from '../store/expenseContext';
const Expense = ({name, price, id}) => {

  const ctx = useContext(expenseContext);

  return (
    <div className='expense'>
      <div>
        <span>{name}</span>
      </div>
      <div className='actions'> 
        <span className='expense-price'>${price}</span>
        <button className='delete-button' onClick={() => ctx.destroy(id)}><RxCross1 className='cross'/></button>
      </div>
    </div>
  )
}

export default Expense

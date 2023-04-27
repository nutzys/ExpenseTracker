import React, { useContext, useState } from 'react'
import expenseContext from '../store/expenseContext'

const AddExpense = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(false);

  const ctx = useContext(expenseContext);

  const onSave = (e) => {
    e.preventDefault();
    const pattern = /[a-zA-Z]/;
    const test = pattern.test(price);
    
    if(test){
      setError(prevState => !prevState);
    }else{
      setError(false);
      ctx.countRemaining(price);
      ctx.countSpent(price);
      ctx.addExpense(name, price);
    }
    setName('');
    setPrice('');
  }

  return (
    <div className='add-expense-container'>
      <h1>Add Expense</h1>
      <form className='expense-form' onSubmit={onSave}>
        <div className='expense-forms'>
          <div className='add-expense'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' className='new-expense-input' onChange={e => setName(e.target.value)} value={name}/>
          </div>
          <div className='add-expense'>
            <label htmlFor='price'>Price</label>
            <input type='text' name='price' className='new-expense-input' onChange={e => setPrice(e.target.value)} value={price}/>
            {error && (<span style={{ color: '#c92a2a' }}>Enter a valid price!</span>)}
          </div>
        </div>
        <div className='save-button'>
          <button>Save</button>
        </div>
      </form>
    </div>
  )
}

export default AddExpense

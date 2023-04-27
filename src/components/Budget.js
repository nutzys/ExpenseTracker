import React, { useContext, useState } from 'react'
import expenseContext from './store/expenseContext';

const Budget = () => {
  const ctx = useContext(expenseContext);
  const [edit, setEdit] = useState(false);
  const [budget, setBudget] = useState('');


  const toggleState = () => {
    setEdit(prevState => !prevState);
  }

  const saveBudget = (e) => {
    e.preventDefault();
    ctx.editBudget(budget);
    setEdit(false);
  }

  return (
    <div className='budget'>
      {!edit && <p style={{ color: '#40c057' }}>Budget: ${ctx.budget}</p>}
      {edit && (
      <div>
        <form onSubmit={saveBudget}>
          <input type='text' onChange={e => setBudget(e.target.value)} placeholder='Type in an amount...'/>
          <button>Save</button>
        </form>
      </div>)}
      <div className='button-div'>
        {!edit && <button onClick={toggleState}>Edit</button>}
      </div>
    </div>
  )
}

export default Budget

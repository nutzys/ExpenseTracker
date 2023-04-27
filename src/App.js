import './App.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spent from './components/Spent';
import Expenses from './components/expenses/Expenses';
import AddExpense from './components/newexpenses/AddExpense';
import { ExpenseProvider } from './components/store/expenseContext';


function App() {
  return (
    <div className="App">
      <h1>My Budget Planner</h1>
      <ExpenseProvider>
        <div className='budget-container'>
          <Budget/>
          <Remaining/>
          <Spent/>
        </div>
        <div className="expenses">
          <Expenses/>
        </div>
        <div className="new-expense">
          <AddExpense/>
        </div>
      </ExpenseProvider>
    </div>
  );
}

export default App;

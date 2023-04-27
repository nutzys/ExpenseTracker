import { createContext, useEffect, useState } from "react";

const expenseContext = createContext();
let id = 0;

export function ExpenseProvider({children}){
    const [expenses, setExpenses] = useState([]);
    const [spent, setSpent] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const [budget, setBudget] = useState(0);
    const [id, setId] = useState(0);


    const addExpense = (name, price) => {
        setId(prevState => prevState + 1);
        setExpenses(prevState => [...prevState, {id: id, name, price}]);
    }

    const countRemaining = (price) => {
        setRemaining(prevState => prevState - parseInt(price));
    }

    const countSpent = (price) => {
        setSpent(prevState => prevState + parseInt(price));
    }

    const editBudget = (amount) => {
        setBudget(amount);
        setRemaining(amount);
    }

    const destroy = (id) => {
        const item = expenses.filter(item => item.id == id);
        const price = item.map(expense => expense.price);
        setSpent(prevState => prevState - parseInt(price));
        setRemaining(prevState => prevState + parseInt(price));
        setExpenses(expenses.filter(item => item.id !== id));
    }

    return (
        <expenseContext.Provider value={{ expenses, destroy, addExpense , countSpent, spent, remaining, budget, countRemaining, editBudget}}>
            {children}
        </expenseContext.Provider>
    )
}

export default expenseContext;
import { useEffect, useState } from "react"
import ExpensesForm from "./components/form"
import ExpensesList from "./components/list"

const STORAGE_KEY = 'my-expenses'

const App = () => {
    const [expenses, setExpenses] = useState([])

    useEffect(() => { 
        const tempList = localStorage.getItem(STORAGE_KEY)
        
        if (tempList != null) {
            setExpenses(JSON.parse(tempList))
        }
    }, [])

    const updateList = (expense) => {
        const newExpenses = [...expenses, expense]

        setExpenses(newExpenses)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newExpenses))
    }

    return (
        <>
            <h1>My Expenses</h1>

            <ExpensesForm onSave={updateList}/>
            <br /><br />
            <ExpensesList expenses={expenses}/>

        </>
    )
}

export default App;
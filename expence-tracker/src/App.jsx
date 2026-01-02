import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

function createId() {
  if(typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID(); // 8-4-4-4-16
  }

  return `${Date.now()}-${Math.random().toString(16).slice()}`
}

function App() {

  const [expenses, setExpenses] = useState([
    {id: createId(), title:"Food", amount: 120, category:"food"},
    {id: createId(), title:"Jacket", amount: 30, category:"shoping"}
  ])

  function handleAddExpense(data){
    const newExpence = {id:createId(), ...data}
    setExpenses((prev)=> [newExpence, ...prev])
  }

  return (
    <div className="page">
      <header className="header">
        <h1 className="title">Expence Tracker</h1>
      </header>

    <Card title={"Add Expenses"}>
      <ExpenseForm onAddExpense={handleAddExpense}></ExpenseForm>
    </Card>

     <Card title={"Expenses"}>
       <ExpenseList expenses={expenses}></ExpenseList>
     </Card>
    </div>
  )
}

export default App

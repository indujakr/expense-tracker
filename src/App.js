import './App.css';
import Expense from './components/ExpenseList/Expense';
import ExpenseEntry from './components/ExpenseForm/ExpenseEntry';
import Header from './components/Header';
import React,{useState} from 'react';

function App() {

  const data = [
    {
      id:1,
      date: new Date(2019,2,7),
      title:'New Fridge',
      cost:30000
    },
    {
      id:2,
      date: new Date(2020,5,2),
      title:'Ac Repair',
      cost:4500
    },
    {
      id:3,
      date: new Date(2021,7,6),
      title:'New Laptop',
      cost:50000
    },
  ];

  const [expenseList,setExpenseList] = useState(data)

  //function to update expenseList for every new expense
  const updateExpenseList = (expense)=>{
    expense={id:expenseList.length,...expense}
    setExpenseList((prevState)=>[...prevState,expense])
  }

  return (
    <div className="App">
     <Header/>
     <ExpenseEntry updateExpenseList={updateExpenseList}/>
     <Expense expenseList={expenseList}/>
    </div>
  );
}

export default App;

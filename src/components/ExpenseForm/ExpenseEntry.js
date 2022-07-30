import React,{useState} from "react";
import './ExpenseEntry.css';

const ExpenseEntry = (props) =>{
    const [title,setTitle] = useState("");
    const [cost,setCost] = useState("");
    const [date,setDate] = useState("");

    //function to add new expense to expensedata
    const expenseEntry =(e) =>{
        e.preventDefault();
        const newExpense = {date,title,cost};
        props.updateExpenseList(newExpense);
        clearForm();
    }

    //function to clear form contents
    const clearForm = () =>{
        setDate("");
        setTitle("");
        setCost("");
    }

    return(
        <form className="form" onSubmit={expenseEntry} onReset={clearForm}>

            <label>Expense For</label>
            <input type="text" value={title} onChange={e=>setTitle(e.target.value)} required/>

            <label>Amount</label>
            <input type="number" value={cost} onChange={e=>setCost(e.target.value)} required/>

            <label>Spent Date</label>
            <input type="date" min="2019-01-01" max="2021-12-31" value={date} onChange={e=>setDate(e.target.value)} required/>

            <div>
                <button type="reset">Clear</button>
                <button>Submit</button>
            </div>
        </form>
    );
}

export default ExpenseEntry;
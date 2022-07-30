import React, { useState,useEffect} from "react";
import './Expense.css';
import ExpenseDate from './ExpenseDate';
import Filter from './Filter';

const Expense = ({expenseList}) =>{
    const [showData,setShowData] = useState(expenseList);
    const [chartData,setChartData] = useState([]);
    const [cssSelect,setCssSelected] = useState("");

    //useeffect for reloading screen based on changes in expenseList
    useEffect(() => {
        setShowData(expenseList);
        setCssSelected("true");
    }, [expenseList]);

    //function to get filtered data based on year for chart
    const filteredData = (year) =>{
        const filteredValue = (year === "all") ? expenseList : expenseList.filter(data => (new Date(data.date).getFullYear()).toString() === year);
        (year !== "all") ? setCssSelected("false") : setCssSelected("true");
        setShowData(filteredValue);
        showChartData(filteredValue);
    }

    //function to display chart
    const showChartData = (val) =>{
        const newVal = [0,0,0,0,0,0,0,0,0,0,0,0];
        val.forEach(data => {
            const percentage = (data.cost/50000)*100;
            newVal[new Date(data.date).getMonth()] += (percentage >= 100) ? 100 : percentage;           
        });
        setChartData(newVal);
    }

    return(
        <div className="expense_list">
            <Filter filteredData={filteredData} chartData={chartData} cssSelect={cssSelect}/>{
            showData.map((data)=>{
                return <div className="card">
                    <div className="expense_date expense_item"><ExpenseDate date={data.date}/></div>
                    <div className="expense_title expense_item">{data.title}</div>
                    <div className="expense_amount expense_item">{data.cost}</div>
                </div>
            })
        }</div>
    );
}

export default Expense;
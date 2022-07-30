import React from "react";

const ExpenseDate = ({date}) =>{

    const year = new Date(date).getFullYear();
    const month = new Date(date).toLocaleString("en-US",{month : "short"})
    const day = new Date(date).toLocaleString("en-US",{day: "2-digit"})

    return(
        <div>
            <div>{year}</div>
            <div>{month}</div>
            <div>{day}</div>
        </div>
    );

}

export default ExpenseDate;
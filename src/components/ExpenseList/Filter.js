import React from "react";
import './Filter.css';

const Filter = ({filteredData,chartData,cssSelect})=>{

    const monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

    //function to get seleccted year and display chart
    const selectedYear = (e) =>{
        const year = e.target.value;
        filteredData(year);
    }

    return(
        <div className="container">
            <div className="filter_div">
                <div className="header">Filter</div>
                <select className="select" onChange={selectedYear}>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="all" selected={cssSelect=== 'true' ? 'selected' : ''}>all</option>
                </select>
            </div>
            <div className="chart" style={{display:(cssSelect=== 'true') ? 'none' : ''}}>
                {
                    chartData.map((val)=>{
                        return <div className="loadbar">
                            <strong className="bar" style={{height:`${val}%`}}/>
                        </div>
                    })
                }
            <div className="month_name_div">
                {
                    monthName.map((val)=>{
                        return <div className="month_name">{val}</div>
                    })
                }
            </div>
        </div>
    </div>
    );
}

export default Filter;
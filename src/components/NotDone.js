import React from "react";
import {connect} from 'react-redux';


const NonCompleted = ({hoursWorked}) => {


    return (
        <div className='employees'>
            <h1>{hoursWorked.map((hours, index) => {
                return(
                <div key={index} className='non-completed'>
                    <h1>{hours[0].hoursWorked}</h1>
                    <h1>{hours[0].month} - {hours[0].day} - {hours[0].year}</h1>
                </div>
                )
            })}</h1>
        </div>
    )
}


function mapStateToProps(state) {
    console.log(state.user.hours)
    const hoursWorked = state.user.hours;
    
    return {hoursWorked};
}
export default connect(mapStateToProps)(NonCompleted);
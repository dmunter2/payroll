import React from "react";
import {connect} from 'react-redux';


const NonCompleted = ({hoursWorked}) => {


    return (
        <div className='employees'>
            <h1>{hoursWorked.map((hours, index) => {
                return(
                <div key={index}>{hours}</div>
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
import React from "react";
import { connect } from "react-redux";


const Hours = ({employees}) => {

    return (
        <div className='employees'>
            <h1>Hours</h1>
            {employees.map((name, key) => {
                return(
                <div key={key}>{name.name}</div>
                )
            })}
        </div>
    )
}

function mapStateToProps(state) {
    console.log(state.user.employees)
    const employees = state.user.employees
    return{employees}
}

export default connect(mapStateToProps)(Hours);

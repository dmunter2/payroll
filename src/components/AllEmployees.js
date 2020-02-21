import React from 'react';
import {connect} from 'react-redux';
import {addemployee} from '../redux/actions'


const AllEmployees = ({employees}) => {
    return(
        <div>
            <h1>E</h1>
        </div>
    )
}



function mapStateToProps(state){
    const employees = state.employees
    return employees;
}

export default connect(mapStateToProps)(AllEmployees)


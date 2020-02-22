import React from 'react';
import {connect} from 'react-redux';
import {addemployee} from '../redux/actions'


const AllEmployees = ({employees}) => {
    console.log(employees)
    return(
        <div>
            <h1>Ewerwer</h1>
        </div>
    )
}


const mapStateToProps = state => {
    console.log(state)
    return {employees: state.employees}
}

export default connect(mapStateToProps)(AllEmployees);




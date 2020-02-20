import React from 'react';
import {connect} from 'react-redux';


const Payroll = ({users}) => {
    return(

        <div>

    <h1>{users}</h1>


        </div>
    )
}


function mapStateToProps(state) {
    console.log(state.users)
    const users = state.users.content
    return users;
}



export default connect(mapStateToProps)(Payroll);
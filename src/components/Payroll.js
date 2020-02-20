import React from 'react';
import {connect} from 'react-redux';


const Payroll = ({users}) => {
    return(

        <div>

           <h1>
               {users && users.length
               ? users.map((user, key) => {
               return (<div key={key}>{user.content}</div>)
               })
               : "nothing here"}
           </h1>


        </div>
    )}


function mapStateToProps(state) {
    console.log(state.users)
    const users = state.users
    return users;
}



export default connect(mapStateToProps)(Payroll);
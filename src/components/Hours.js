import React from "react";
import { connect } from "react-redux";
import {addhours} from '../redux/actions'

class Hours extends React.Component{

    state = {
        hoursWorked: ''
    }


    changeHandler = e => {
        this.setState({hoursWorked: e.target.value})
    }

    clickHandler = e => {
        this.props.addhours(this.state.hoursWorked)
    }

    render(){



    return (
        <div className='employees'>
            <h1>Hours Worked</h1>
            {this.props.employees.map((name, key) => {
                return(
                <div key={key}>
                    <h1>
                        {name.name} {name.title}  {name.wage}
                    </h1>
                    <input
                    placeholder='text'
                    name='hoursWorked'
                    onChange={this.changeHandler}
                    
                    /> 
                    <button onClick={this.clickHandler}>Add Hours</button>  
                    
                </div>
                )
            })}
        </div>
         )
    }

}

function mapStateToProps(state) {
    const employees = state.user.employees
    return{employees}
}

export default connect(mapStateToProps, {addhours})(Hours);

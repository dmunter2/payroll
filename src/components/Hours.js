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
        console.log(addhours(this.props.employees[0].wage))
        addhours(this.props.employees[0].wage)
        this.setState({ hoursWorked: '' })

    }

    render(){



    return (
        <div className='employees'>
            <h1>Hours</h1>
            {this.props.employees.map((name, key) => {
                return(
                <div key={key}>
                    <h1>
                        {name.name} {name.title}  {name.wage}
                    </h1>
                    <input
                    placeholder='text'
                    name='hoursWorked'
                    value={this.state.hoursWorked}
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
    console.log(state.user.employees)
    const employees = state.user.employees
    return{employees}
}

export default connect(mapStateToProps)(Hours);

import React from "react";
import { connect } from "react-redux";
import {addhours} from '../redux/actions'




class Hours extends React.Component{


    state = {
        hoursWorked: '',
        month: '',
        day: '',
        year: ''
    }


    changeHandler = e => {
        this.setState({hoursWorked: e.target.value})
    }


    changeMonth = e => {
        this.setState({month: e.target.value})
    }

    changeDay = e => {
        this.setState({day: e.target.value})
    }


    changeYear = e => {
        this.setState({ year: e.target.value })
    }


    render(){



    return (
        <div className='employees'>
            <h1>Hours Worked</h1>
            {this.props.employees.map((name, key) => {
                return(
                <div key={key}>
                    <div>


                        <input 
                        placeholder='month'
                        name='month'
                        onChange={this.changeMonth}
                        />


                        <input
                            placeholder='day'
                            name='day'
                            onChange={this.changeDay}
                        />


                        <input
                            placeholder='year'
                            name='year'
                            onChange={this.changeYear}
                        />





                    </div>
                    <h1>
                        {name.name} {name.title}  {name.wage}
                    </h1>
                    <input
                    placeholder='text'
                    name='hoursWorked'
                    onChange={this.changeHandler}
                    
                    /> 
                    <button onClick={() => {console.log(this.props.addhours(this.state))}}>Add Hours</button>  
                    
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

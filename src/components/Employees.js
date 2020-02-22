import React, {useState, useReducer} from "react";
import {addemployee} from '../redux/actions'
import { connect } from "react-redux";
import EmployeeCard from './EmployeeCard'

class Employees extends React.Component{


    state = {
        input: 'no-show',
        event: 'no-show',
        name: '',
        title: '',
        wage: '',
        employee: ''
    }


        changeHandler = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
     
    }


    clickHandler = () => this.setState({input: 'show-input', event: 'no-show'});

    submitEmployee = () => {
        // console.log(this.props.addemployee(this.state.name))
        this.props.addemployee(this.state)
        // this.setState({input: 'no-show', event: 'no-show'})
        // this.setState({name: '', title: '', wage: ''})  
        
        // setTimeout(() => {
        //     this.setState({
        //         event: 'show',
        //         input: 'no-show'
        //     })
        // }, 400)

    };


    render(){
        console.log(this.state.name)

    return (
        <div className='employees'>
            <div className='event-header'>
                <h1 className={this.state.event}>Employee Added</h1>
            </div>



            <button onClick={this.clickHandler}>Add Employee</button>
            <section className={this.state.input}>
                <input 

                placeholder='name'
                onChange={this.changeHandler}
                name='name'
                    value={this.state.name}
                />

                <input

                    placeholder='title'
                    onChange={this.changeHandler}
                    name='title'
                    value={this.state.title}
                />

                <input

                    placeholder='wage'
                    onChange={this.changeHandler}
                    name='wage'
                    value={this.state.wage}
                />

                <button onClick={this.submitEmployee}>Submit</button>
               

            </section>
            {this.props.employees.map((name, key) => {
                return (
                    <div key={key}>

                    <EmployeeCard name={name.name} title={name.title} wage={name.wage} />
                    </div>
                )
            })}


        </div>
    )
    }
}



const mapStateToProps = state => {
   return {employees: state.user.employees};
}

export default connect(mapStateToProps, {addemployee})(Employees)







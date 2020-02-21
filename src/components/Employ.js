import React, {useState} from "react";
import AllEmployees from './AllEmployees';
import {addemployee} from '../redux/actions'
import { connect } from "react-redux";



const Employ = (employees) => {

    console.log(employees)

    const [display, setDisplay] = useState({
        input: 'no-show',
        event: 'no-show'
    })

    const [employee, setEmployee] = useState({
        name: '',
        title: '',
        wage: ''
    })


    const changeHandler = e => {
        e.preventDefault();
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        })
     
    }


    const clickHandler = () => setDisplay({input: 'show-input', event: 'no-show'});

    const submitEmployee = () => {
        addemployee(employee)
        setDisplay({input: 'no-show', event: 'no-show'})
        setEmployee({name: '', title: '', wage: ''})  
        
        setTimeout(() => {
            setDisplay({
                event: 'show',
                input: 'no-show'
            })
        }, 400)

    };



    return (
        <div className='employees'>
            <div className='event-header'>
                <h1 className={display.event}>Employee Added</h1>
            </div>



            <button onClick={clickHandler}>Add Employee</button>
            <holder className={display.input}>
                <input 

                placeholder='name'
                onChange={changeHandler}
                name='name'
                value={employee.name}
                />

                <input

                    placeholder='title'
                    onChange={changeHandler}
                    name='title'
                    value={employee.title}
                />

                <input

                    placeholder='wage'
                    onChange={changeHandler}
                    name='wage'
                    value={employee.wage}
                />

                <button onClick={submitEmployee}>Submit</button>

            </holder>
        </div>
    )
}

function mapStateToProps(state) {
    const employees = state.employees
    return employees;
}
export default connect(mapStateToProps)(Employ);
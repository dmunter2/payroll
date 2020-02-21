import React, {useState} from "react";




const Employees = () => {


    const [display, setDisplay] = useState({
        input: 'no-show',
        event: 'no-show'
    })

    const [employee, setEmployee] = useState({
        name: ''
    })


    const changeHandler = e => {
        e.preventDefault();
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        })
     
        console.log(employee.name)
    }


    const clickHandler = () => setDisplay({input: 'show-input', event: 'no-show'});

    const submitEmployee = () => {
        setDisplay({input: 'no-show', event: 'no-show'})
        setEmployee({name: ''})  
        
        setTimeout(() => {
            setDisplay({
                event: 'show'
            })
        }, 2000);
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

                <button onClick={submitEmployee}>Submit</button>

            </holder>
        </div>
    )
}

export default Employees;
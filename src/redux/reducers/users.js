import {ADD_EMPLOYEE, ADD_HOURS} from '../actions';

const initialData = {
    otherproperties: '',
    employees: [

    ],
    hours: []
}


const user = (state = initialData, action) => {
    switch(action.type) {
        case ADD_EMPLOYEE:
            const newEmployee = action.payload
            return{
                ...state,
                employees: [...state.employees, newEmployee]
            }
        case ADD_HOURS:
            const newHours = action.payload
            return {
                ...state,
                hours: [...state.hours, newHours]
            }
        default: 
            return state;
    }
}


export default user;








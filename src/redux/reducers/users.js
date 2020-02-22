import {ADD_EMPLOYEE} from '../actions';

const initialData = {
    otherproperties: '',
    employees: [

    ]
}


const user = (state = initialData, action) => {
    switch(action.type) {
        case ADD_EMPLOYEE:
            const newEmployee = action.payload
            return{
                ...state,
                employees: [...state.employees, newEmployee]
            }
        default: 
            return state;
    }
}


export default user;








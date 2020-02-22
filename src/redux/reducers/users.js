import {ADD_EMPLOYEE} from '../actionTypes';

const initialData = {
    otherproperties: '',
    employees: [

    ]
}


export default function (state = initialData, action) {
    switch(action.type) {
        case ADD_EMPLOYEE:
            return{
                ...state,
                employees: [
                    ...state.employees,
                    {
                        content: action.payload
                    }
                ]
            }
        default: 
            return state;
    }
}







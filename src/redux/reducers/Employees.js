import {ADD_EMPLOYEE} from '../actionTypes';

const initialData = {
    otherproperties: '',
    employees: [

    ]
};


export default function(state = initialData, action){
    switch(action.type) {
        case ADD_EMPLOYEE:
            return(
                console.log('hello')
            ) 
        default: 
            return state;
    }
}



// {
//     const { content } = action.payload;
//     return {
//         ...state,
//         employees: [
//             ...state.employees,
//             {
//                 content: content
//             }
//         ]
//     }
// }
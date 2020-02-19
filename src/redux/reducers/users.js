import {ADD_USER} from '../actionTypes';

const initialData = {
    users: [],
    byIds: {}
};


export default function(state = initialData, action){
    switch(action.type) {
        case ADD_USER: {
            const {id, content} = action.payload;
            return {
                ...state,
                users: [...state.users, id]
            }
        }
        default: 
            return state;
    }
}
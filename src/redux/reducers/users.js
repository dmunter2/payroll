import {ADD_USER} from '../actionTypes';

const initialData = {
    otherproperties: '',
    users: [

    ]
};


export default function(state = initialData, action){
    switch(action.type) {
        case ADD_USER: {
            const {content} = action.payload;
            return {
                ...state,
                users: [
                    ...state.users,
                    {
                        content: content
                    }
                ]
            }
        }
        default: 
            return state;
    }
}


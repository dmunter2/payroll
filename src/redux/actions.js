import { ADD_USER } from './actionTypes';

export const adduser = content => ({
    type: ADD_USER,
    payload: {
        content
    }
})
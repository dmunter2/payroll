import { ADD_EMPLOYEE } from './actionTypes';

export const addemployee = content => (
    {
    type: ADD_EMPLOYEE,
    payload: {
        content
    }
})
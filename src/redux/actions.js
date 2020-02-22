export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const ADD_HOURS = 'ADD_HOURS'

export const addemployee = content => ({
    type: ADD_EMPLOYEE,
    payload: content
})

export const addhours = content => ({
    type: ADD_HOURS,
    payload: content
})





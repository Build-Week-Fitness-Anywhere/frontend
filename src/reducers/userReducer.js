import { USER_SET } from '../actions/userActions'

const initialState = {
    name: "",
    role: ""
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case (USER_SET):
            return ({...action.payload})
        default:
            return state;
    }
}

export {
    userReducer
}
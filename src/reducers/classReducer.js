import { CLASS_SET } from '../actions/classActions'

const initialState = [];

function classReducer(state = initialState, action) {
    switch(action.type) {
        case (CLASS_SET):
            return ([...action.payload]) 
        default:
            return state;
    }
}

export {
    classReducer
}

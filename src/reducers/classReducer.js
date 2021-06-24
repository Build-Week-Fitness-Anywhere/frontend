import { CLASS_ADD, CLASS_SET, SET_CURRENT_CLASS } from '../actions/classActions'

const initialState = {
    currentClass: null,
    classList: []
};

function classReducer(state = initialState, action) {
    switch(action.type) {
        case (CLASS_ADD):
            return ({
                ...state,
                classList: [
                ...state.classList,
                action.payload
            ]})
        case (CLASS_SET):
            return ({ 
                ...state,
                classList: [...action.payload]
            })
        case (SET_CURRENT_CLASS):
            return ({
                ...state,
                currentClass: action.payload
            }) 
        default:
            return state;
    }
}

export {
    classReducer
}

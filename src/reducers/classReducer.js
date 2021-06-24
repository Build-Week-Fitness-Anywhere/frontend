import { CLASS_ADD, CLASS_SET, SET_CURRENT_CLASS } from '../actions/classActions'

const initialState = [];

function classReducer(state = initialState, action) {
    switch(action.type) {
        case (CLASS_ADD):
            return ([
                ...state,
                action.payload
            ])
        case (CLASS_SET):
            return ([...action.payload])
        case (SET_CURRENT_CLASS):
            return ([
                action.payload,
                ...state
            ]) 
        default:
            return state;
    }
}

export {
    classReducer
}

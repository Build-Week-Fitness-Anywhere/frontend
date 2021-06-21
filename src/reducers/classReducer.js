import {} from '../actions/classActions'

const initialState = {
    classID: 0,
    name: "",
    date: "",
    time: "",
    duration: 0,
    instructor: "",
    type: "",
    intensity: "",
    location: ""
}

function classReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}

export {
    classReducer
}

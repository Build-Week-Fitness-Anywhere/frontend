import { combineReducers } from 'redux';
import { classReducer } from './classReducer'
import { userReducer } from './userReducer'

const primeReducer = combineReducers({
    class: classReducer,
    user: userReducer
});

export {
    primeReducer
}
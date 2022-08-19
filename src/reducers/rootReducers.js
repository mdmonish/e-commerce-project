import {combineReducers} from 'redux';
import {productReducer,usersReducer} from './reducer';

const rootReducers = combineReducers({
    prod: productReducer,
    user: usersReducer
})

export default rootReducers;
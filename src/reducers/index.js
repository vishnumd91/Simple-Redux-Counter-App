import { combineReducers } from 'redux';
import incrementReducer from './incrementreducer';

const rootReducer = combineReducers({
    incrementCount: incrementReducer,
})
    
export default rootReducer;

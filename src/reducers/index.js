import { combineReducers } from 'redux';
import decrementReducer from './decrementReducer';
import incrementReducer from './incrementreducer';

const rootReducer = combineReducers({
    incrementCount: incrementReducer,
    decrementCount: decrementReducer,
})
    
export default rootReducer;

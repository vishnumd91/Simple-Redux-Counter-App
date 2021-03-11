import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../actions';
import './Counter.css';

function Counter() {

    const counter = useSelector(state => state.incrementCount)

    const dispatch = useDispatch();

    const addCount = () => {
        dispatch(action.incrementAction());
    }

    const reduceCount = () => {
        dispatch(action.decrementAction());
    }


    return (
        <div className='container'>
            <h1 >Counter App</h1>
            <button 
            className='button'
            onClick = {addCount}
            >
                +
            </button>
            <button 
            className='button'
            onClick = {reduceCount}
             >
                 -
             </button>

             <span className='spanContainer'><h3>Count ={'>'} {counter}</h3></span>
        </div>
    )
}

export default Counter

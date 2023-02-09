import React, {useReducer, useState} from "react";

const initialState = {
    firstVal: 0,
    secondVal: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return{...state, firstVal: state.firstVal + 1};
        case 'decrement':
            return{...state, firstVal: state.firstVal - 1};
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

export const CounterTwo = () =>{
    const [count, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <div>
                <h1>{count.firstVal}</h1>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'increment'})}>Inc</button>
                <button onClick={() => dispatch({type: 'decrement'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>
        </div>
    )
}
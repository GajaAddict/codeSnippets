//-------------------------------------------------------------------------------------
//useReducer
//useReducer Hook is similar to the useState Hook but it lets you move the state update logic from event handlers into a single function outside of your component
//allows for custom state logic

//useReducer(<reducer>, <initialState>)

import { useReducer } from 'react';

function reducer(state, action) {
    if (action.type === 'incremented_age') {
        return {
            age: state.age + 1
        };
    }
    throw Error('Unknown action.');
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, { age: 42 });

    return (
        <>
            <button onClick={() => {
                dispatch({ type: 'incremented_age' })
            }}>
                Increment age
            </button>
            <p>Hello! You are {state.age}.</p>
        </>
    );
}

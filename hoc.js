//-------------------------------------------------------------------------------------
//Higher Order Component(HOC)
//https://www.youtube.com/watch?v=CD7rN9hoo34
//watch for name attr sent to higherOrderComponent using {...props}

import React from 'react'
const higherOrderComponent = (OriginalComponent) => {
    const NewComponent = (props) => {

        const [count, setCount] = useState(0);

        incrementCount = () => {
            setCount(count => count + 1)
        }
        return (
            <div>
                <OriginalComponent increment={incrementCount}  {...props} />
            </div>
        )
    }
    return NewComponent
}
export default higherOrderComponent



//component using HOC
import React from "react";
import higherOrderComponent from "../HOC/higherOrderComponent";

const ClickCounter = (props) => {
    return (
        <div>
            <button onClick={props.increment}>{props.name}</button>
        </div>
    );
}

export default higherOrderComponent(ClickCounter);


//
const App = (props) => {
    return (
        <ClickCounter name='click Counter'></ClickCounter>
    );
}
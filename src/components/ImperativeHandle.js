import React, { useRef } from 'react';
import Button from './Button';

//useful for a reusable component that needs to be invoked from the outside 
//this is about calling a state from the outside, or a higher level
//we can do this by making the component were targeting a reference (button)
export const ImperativeHandle = () => {
    const btnRef = useRef(null);
    return (
        <div>ImperativeHandle
            <button onClick={() => { btnRef.current.alterToggle() }}>Button from parent</button>
            <Button ref={btnRef}></Button>
        </div>
    )
}

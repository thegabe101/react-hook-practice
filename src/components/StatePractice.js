import React from 'react'

//React does not need to manually grab HTML elements to change in the webpage; unlike vanilla.
//React uses a system for the state of the application, all at once. 
//A good example is incrementation using a button. 

//this is what WONT work 
export const StatePractice = () => {
    let counter = 0;
    function incrementValue() {
        counter = counter + 1;
    }
    return (

        <div>{counter}<button onClick={incrementValue}>Increment</button></div>
    )
}

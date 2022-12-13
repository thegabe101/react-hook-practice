import React, { useState } from 'react';



//React does not need to manually grab HTML elements to change in the webpage; unlike vanilla.
//React uses a system for the state of the application, all at once. 
//A good example is incrementation using a button. 

//this is what WONT work 
//the issue is in this example, we're not telling react to rerender the page and show the new values. 
//usestate sets the initial value.
//you cant simply reassign a state. you need to mutate it
export const StatePractice = () => {


    //the actual counter variable is working the same way as before; whenever we change the state/value, every single element that uses that state is re rendered. 
    const [counter, setCounter] = useState(99);

    //we replace the counter variable with a const for the state of the counter
    //let counter = 0;


    // function incrementValue() {
    //     counter = counter + 1;
    // }

    const incrementValue = () => {
        setCounter(counter + 1);
    }

    return (

        <div>{counter}<button onClick={incrementValue}>Increment</button></div>
    )
}

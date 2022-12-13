// import React, { useState } from "react";

// //the useReducer hook is so that you don't need to keep track of a bunch of states at once. 

// export   const Reducer = () => {
//     const [count, setCount] = useState(0);
//     const [showText, setShowText] = useState(true);

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => {
//                 setCount(count + 1);
//                 setShowText(!showText);
//             }}>Click here</button>
//             {showText && <a>This is a text</a>}
//         </div>
//     )
// }


import React, { useReducer } from "react";

//the useReducer hook is so that you don't need to keep track of a bunch of states at once. 

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }
        case "toggleShowText":
            return { count: state.count, showText: !state.showText }
        default:
            return state
    }
};

export const Reducer = () => {
    //one variable (an object) will now hold all of our states here
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({ type: "INCREMENT" })
                dispatch({ type: "toggleShowText" });
            }}>Click here</button>
            {state.showText && <a>This is a text</a>}
        </div>
    )
}
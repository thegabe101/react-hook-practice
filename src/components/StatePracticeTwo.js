import React, { useState } from "react";

export const StatePracticeTwo = () => {
    const [inputValue, setInputValue] = useState("All In");

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue)
    }

    return (
        <div>
            <input placeholder="Type here" onChange={onChange} />
            {inputValue}
        </div>
    )
};



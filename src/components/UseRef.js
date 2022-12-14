import React, { useRef } from 'react'

//easiest way to access and manipulate dom elements

export const UseRef = () => {

    const inputRef = useRef(null);

    const onClick = () => {
        console.log(inputRef.current.value);
        inputRef.current.focus();
        inputRef.current.value = "";
    }

    //input ref is referencing specific dom element, so need to pass in the dom element
    return (
        <div>
            <h1>Gabe</h1>
            <input type="text" placeholder="ex..." ref={inputRef} />
            <button onClick={onClick}>Change name</button>
        </div>
    )
}

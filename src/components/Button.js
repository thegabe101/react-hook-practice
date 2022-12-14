import React, { forwardRef, useImperativeHandle, useState } from 'react';

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        //functions that we may want to create or access from our parent component
        alterToggle() {
            setToggle(!toggle);
        },
    }));

    return (
        <>
            <button onClick={() => {
                setToggle(!toggle);
            }}>Child button
            </button>
            {toggle && <span>Toggle</span>}
        </>
    );
});

export default Button;
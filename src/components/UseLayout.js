import React, { useLayoutEffect, useEffect, useRef } from 'react';

//notice that uselayouteffect is BEFORE
//it is not because of waterfall

//when you call useeffect, it will do everything it can to show to user
//useeffect is called after everything is printed to user- uselayouteffect is BEFORE 


//notice that check is console logged before hello, which is altered after useeffect takes place and changes the value 
export const UseLayout = () => {
    const divRef = useRef(null);

    useLayoutEffect(() => {
        console.log("UseLayoutEffect");
        console.log(divRef.current.value);
    }, []);

    useEffect(() => {
        console.log("UseEffect")
        divRef.current.value = "HELLO";
    }, []);


    return (
        <div>
            <input ref={divRef} value="CHECK" style={{ width: 400, height: 100 }}></input>
        </div>
    )
}

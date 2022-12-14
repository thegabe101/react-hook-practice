import React, { useEffect, useState } from 'react';
import axios from 'axios';

//can specifiy what we want to detect when the page renders- immediately WHEN THE PAGE RENDERS
//will be called every time a state is changed whcih you need to be careful of

export const EffectPractice = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    //whatever is put in this function is what we will be called when the page renders
    // a good way of handling api calls immediately upon refreshing the page 
    useEffect(() => {
        console.log("Hello world")
        axios.get("http://jsonplaceholder.typicode.com/comments").then((response) => {
            console.log(response.data);
            setData(response.data[0].email);
            console.log("API WAS CALLED")
        });
        //final array is what states you want to check for when changing value of states 
        //empty array, meaning data should not trigger a useeffect call simply because it was changed. 
    }, [count])

    return (
        <div>EffectPractice {data}</div>
    )
}

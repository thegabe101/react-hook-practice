import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function MemoPractice() {
    const [data, setData] = useState('null');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments').then((response) => {
            setData(response.data);
        })
    }, []);

    const findLongestName = (comments) => {
        if (!comments) return null;

        let longestName = '';
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        return longestName;
    }

    return (
        <div className='App'>
            <div> {findLongestName(data)}
            </div>
        </div>
    )
}
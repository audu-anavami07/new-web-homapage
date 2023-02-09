import React, { useState,useEffect } from "react";

const CounterThree = () =>{
    const [count,setCount] = useState(0);
    const Timer = () => {
        setCount(count + 1);
    };


    useEffect(()=>{
        const interval = setInterval(Timer,1000);
        return () => {
            clearInterval(interval);
        }
    },[count]);

    return(
        <div>
            <h1>counter - {count}</h1>
        </div>
    )
}



export default CounterThree;

import React, {useState, useEffect} from "react";

const CounterThree = () =>{
    const[count, setCount] = useState(0);

    const timer = () =>{
        setCount(count + 1);
    }

    useEffect(() =>{
        const interval = setInterval(timer, 1000);

        return () =>{
            clearInterval(interval);
        }
    }, [count])

    return(
        <div>
            <h1>Counter - {count}</h1>
        </div>
    );
}

export default CounterThree;
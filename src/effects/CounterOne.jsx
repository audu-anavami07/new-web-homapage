import React, {useState, useEffect} from "react";

const CounterOne = () =>{
    const[count, setCount] = useState(0);

    useEffect(() =>{
        document.title = `You clicked ${count} times`
    })

    const handleIncrement = () =>{
        setCount(count + 1);
    };

    return(
        <div>
            <button onClick={handleIncrement}>Clicked {count} times</button>
        </div>
    );
}

export default CounterOne;
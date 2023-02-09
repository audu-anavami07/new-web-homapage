import React, {useState, useEffect} from "react";

const CounterTwo = () =>{
    const[count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() =>{
        console.log(`Updating the document title...`);
        document.title = `You clicked ${count} times`;
    }, [count]);

    const handleIncrement = () =>{
        setCount(count + 1);
    };

    return(
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleIncrement}>Clicked {count} times</button>
        </div>
    );
}

export default CounterTwo;